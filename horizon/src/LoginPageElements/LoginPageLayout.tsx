import { SignButton } from "./components /SignButton.tsx";
import { ContinueWithButton } from "./components /ContinueWithButton.tsx";
import { SignupLink } from "./components /SignupLink.tsx";
import "./components /styles/LoginPageLayout.css"
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "./Alert.tsx";

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

        try {
            const response = await fetch('http://127.0.0.1:8000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    email: formData.email.trim().toLowerCase(),
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/')
            } else {
                const errorMessage = Array.isArray(data.detail)
                    ? data.detail[0].msg
                    : (data.details || data.detail || "Signup failed");
                setError(errorMessage);
            }
        } catch (err) {
            setError("Connection error");
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