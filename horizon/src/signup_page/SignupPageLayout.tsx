import { SignUpButton } from "./components /SignUpButton.tsx";
import { ContinueWithButton } from "../LoginPageElements/components /ContinueWithButton.tsx";
import { DateOfBirth } from "./components /BirthDate.tsx";
import { GenderChoosing } from "./components /Gender.tsx";
import { LoginLink } from "./components /LoginLink.tsx";
import './SignupPageLayout.css'
import { useState } from "react";

export default function SignupPageLayout() {

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
            const response = await fetch('http://127.0.0.1:8000/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                alert("Check your email for verification!");
            } else {
                alert(`Error: ${data.details || 'Signup failed'}`);
            }
        } catch (error) {
            console.error("Connection error:", error);
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
                    <ContinueWithButton label="Google" img_path="../../public/login_elements/google.png"/>
                        <ContinueWithButton label="Apple" img_path="../../public/login_elements/apple.png"/>

                    <LoginLink />
                </form>
            </div>
        </div>
)
}