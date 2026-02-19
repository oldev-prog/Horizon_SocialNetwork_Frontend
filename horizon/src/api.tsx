import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    withCredentials: true,
});

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('accessToken');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response, // Если 200-299, просто пропускаем
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && !originalRequest._retry) {

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return api(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            return new Promise((resolve, reject) => {

                api.post('/auth/update_token')
                    .then(({ data }) => {
                        const newToken = data.access_token;
                        localStorage.setItem('accessToken', newToken);

                        api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;

                        processQueue(null, newToken);

                        resolve(api(originalRequest));
                    })
                    .catch((err) => {
                        processQueue(err, null);

                        localStorage.removeItem('accessToken');
                        window.location.href = '/login';
                        reject(err);
                    })
                    .finally(() => {
                        isRefreshing = false;
                    });
            });
        }

        return Promise.reject(error);
    }
);

export default api;

