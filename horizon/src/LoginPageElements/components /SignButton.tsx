import { useNavigate } from 'react-router-dom';

interface SignButtonProps {
    label: string;
}

export function SignButton({ label }: SignButtonProps) {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/');
    }

    return (
        <button type="submit" className="normal_login_button sign_in" onClick={handleSignIn}>
            {label}
        </button>
    )
}