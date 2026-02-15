// import { useNavigate } from 'react-router-dom';

interface SignButtonProps {
    label: string;
}

export function SignButton({ label }: SignButtonProps) {

    return (
        <button type="submit" className="normal_login_button sign_in">
            {label}
        </button>
    )
}