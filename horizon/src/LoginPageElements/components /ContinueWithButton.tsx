import { useNavigate } from 'react-router-dom';

interface SignInButtonProps {
    label: string;
    img_path: string;
}

export function ContinueWithButton({ label, img_path}: SignInButtonProps) {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/');
    }

    return (
        <button type="submit" className="normal_login_button sign_with" onClick={handleSignIn}>
            <span>Continue with {label}</span>
            <img className={label.toLowerCase()} src={img_path}/>
        </button>
    )
}