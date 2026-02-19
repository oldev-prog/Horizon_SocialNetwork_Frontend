import { SignButton } from "./components /SignButton.tsx";
import { ContinueWithButton } from "./components /ContinueWithButton.tsx";
import { SignupLink } from "./components /SignupLink.tsx";
import "./components /styles/LoginPageLayout.css"
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert.tsx";
import api from "../api.tsx";

export default function LoginPageLayout() {

    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await api.post('/auth/login', {
                email: formData.email.trim().toLowerCase(),
                password: formData.password
            });

            const data = response.data;

            if (data.access_token) {
                localStorage.setItem('accessToken', data.access_token);

                api.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;

                navigate('/');
            } else {
                setError("Token not received from server");
            }

        } catch (err: any) {
            const errorMessage = err.response?.data?.detail
                ? (Array.isArray(err.response.data.detail) ? err.response.data.detail[0].msg : err.response.data.detail)
                : "Login failed";
            setError(errorMessage);
        }
    };

    return (
        <div className="page_background login">
            <div className="login_container">
                <form onSubmit={handleSubmit}>
                    <h1 className="h_name">
                        HORIZON
                    </h1>
                    <p className="p_phrase">
                        Connect with beams of attention across the universe
                    </p>
                    <input name="email" type="email" placeholder="Email or Phone number" onChange={handleChange} required/>
                    <input name="password" type="password" placeholder="Password" onChange={handleChange} required/>
                    <SignButton label="Sign in"/>
                    <a className="login_link" href="">Forgot your password?</a>
                    <ContinueWithButton label='Google' img_path="../../public/login_elements/google.png"/>
                    <ContinueWithButton label='Apple' img_path="../../public/login_elements/apple.png"/>
                    <SignupLink />

                    <Alert message={error} onClose={() => setError(null)} />

                </form>
            </div>
        </div>
    )
}