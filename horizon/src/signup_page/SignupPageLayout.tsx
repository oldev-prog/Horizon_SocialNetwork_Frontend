import { SignButton } from "../LoginPageElements/components /SignButton.tsx";
import { ContinueWithButton } from "../LoginPageElements/components /ContinueWithButton.tsx";
import { DateOfBirth } from "./components /BirthDate.tsx";
import { GenderChoosing } from "./components /Gender.tsx";
import { LoginLink } from "./components /LoginLink.tsx";
import './SignupPageLayout.css'

export default function SignupPageLayout() {
    return (
        <div className="page_background login">
            <div className="signup_container">
                <form action="" method="post">
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
                        <input className="login_pas" type="email" placeholder="Email or Phone number" required/>
                        <input className="login_pas pas" type="password" placeholder="Password" required/>
                    </div>
                    <SignButton label="Sign up"/>
                    <ContinueWithButton label="Google" img_path="../../public/login_elements/google.png"/>
                        <ContinueWithButton label="Apple" img_path="../../public/login_elements/apple.png"/>

                    <LoginLink />
                </form>
            </div>
        </div>
)
}