// import { useNavigate } from 'react-router-dom';
// import {useState} from "react";

interface SignButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function SignUpButton({ onClick }: SignButtonProps) {
    return (
        <button
            type="submit"
            className="normal_login_button sign_in"
            onClick={onClick}
        >
            Sign Up
        </button>
    );
}