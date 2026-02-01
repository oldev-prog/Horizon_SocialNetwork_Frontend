import { useNavigate } from "react-router-dom";

export function LoginLink() {
    const navigate = useNavigate();
    const handleLink = () => {
        navigate('/login');
    }

    return (
        <a className="login_link" onClick={handleLink}>Already
            have an account?</a>
    )
}