import { SignButton } from "./components /SignButton.tsx";
import { ContinueWithButton } from "./components /ContinueWithButton.tsx";
import { SignupLink } from "./components /SignupLink.tsx";
import "./components /styles/LoginPageLayout.css"

export default function LoginPageLayout() {
    return (
        <div className="page_background login">
            <div className="login_container">
                <form action="" method="post">
                    <h1 className="h_name">
                        HORIZON
                    </h1>
                    <p className="p_phrase">
                        Connect with beams of attention across the universe
                    </p>
                    <input type="email" placeholder="Email or Phone number" required/>
                    <input type="password" placeholder="Password" required/>
                    <SignButton label="Sign in"/>
                    <a className="login_link" href="">Forgot your password?</a>
                    <ContinueWithButton label='Google' img_path="../../public/login_elements/google.png"/>
                    <ContinueWithButton label='Apple' img_path="../../public/login_elements/apple.png"/>
                    <SignupLink />
                </form>
            </div>
        </div>
    )
}