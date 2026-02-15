
import { Link } from "react-router-dom";

export function EmailVerificationPage() {
    return (
        <div className="page_background login">
        <div className="signup_container verification_box">
        <h1 className="signup_h1">Success!</h1>
            <h2 className="signup_h2">
        Your email has been verified. Now you can connect with beams of attention.
    </h2>

    <div className="success_icon">
        {/*<img src="/public/login_elements/check.png" alt="Success" width="80" />*/}
        </div>

        <Link to="/login" className="login_link_button">
        Go to Login
    </Link>
    </div>
    </div>
);
}