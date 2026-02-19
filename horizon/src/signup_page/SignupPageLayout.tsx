import { SignUpButton } from "./components /SignUpButton.tsx";
import { ContinueWithButton } from "../LoginPageElements/components /ContinueWithButton.tsx";
import { DateOfBirth } from "./components /BirthDate.tsx";
import { GenderChoosing } from "./components /Gender.tsx";
import { LoginLink } from "./components /LoginLink.tsx";
import { Alert } from "../LoginPageElements/Alert.tsx";
import './SignupPageLayout.css'
import { useState } from "react";
import { useEffect } from "react";
import api from "../api.tsx";

export default function SignupPageLayout() {

    const [error, setError] = useState<string | null>(null);
    const [timer, setTimer] = useState(0);
    const [canResend, setCanResend] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        let interval: number;
        if (timer > 0) {
            interval = window.setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_@$!%*?&])[A-Za-z\d_@$!%*?&]{8,}$/;

        if (!passwordRegex.test(formData.password)) {
            setError("Password is too weak. Use 8+ characters, including uppercase, numbers, and symbols.");
            return;
        }

        try {
            await api.post('/auth/signup', formData);

            setError("Check your email to pass verification.");
            setCanResend(true);
            setTimer(60);

        } catch (err: any) {
            const errorData = err.response?.data;

            const errorMessage = Array.isArray(errorData?.detail)
                ? errorData.detail[0].msg
                : (errorData?.details || errorData?.detail || "Signup failed");

            setError(errorMessage);

            if (!err.response) {
                setError("Connection error. Is the server running?");
            }
        }
    };

    const handleResendEmail = async () => {
        if (timer > 0) return;

        try {
            const response = await fetch('http://127.0.0.1:8000/auth/resend-verification', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email })
            });

            if (response.ok) {
                setTimer(60);
                setError("Verification email resent!");
            }
        } catch (err) {
            setError("Failed to resend email.");
        }
    };

    return (
        <div className="page_background login">
            <div className="signup_container">
                <form onSubmit={handleSubmit}>
                    <h1 className="signup_h1">
                        Create a new account
                    </h1>
                    <h2 className="signup_h2">
                        Connect with beams of attention across the universe
                    </h2>
                    <div className="name_for_signup">
                        <input type="text" className="input_field first_name" placeholder="First name" required/>
                        <input type="text" className="input_field" placeholder="Last name" required/>
                    </div>
                    <DateOfBirth />
                    <GenderChoosing />
                    <div className="email_pas_container">
                        <input
                            name="email"
                            className="login_pas"
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            required/>
                        <input
                            name="password"
                            className="login_pas pas"
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required/>
                    </div>
                    <SignUpButton />

                    {canResend && (
                        <div className="resend_container">
                            {timer > 0 ? (
                                <p className="resend_text">Send email again in <b>{timer}s</b></p>
                            ) : (
                                <button
                                    type="button"
                                    className="resend_button"
                                    onClick={handleResendEmail}
                                >
                                    Send email again
                                </button>
                            )}
                        </div>
                    )}

                    <ContinueWithButton label="Google" img_path="../../public/login_elements/google.png"/>
                        <ContinueWithButton label="Apple" img_path="../../public/login_elements/apple.png"/>

                    <LoginLink />

                    <Alert message={error} onClose={() => setError(null)} />

                </form>
            </div>
        </div>
)
}