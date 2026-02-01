import { useNavigate } from "react-router-dom";

export function SignupLink() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup');
    }
    return <a className="login_link" onClick={handleSignup}>Sign
        up</a>
}