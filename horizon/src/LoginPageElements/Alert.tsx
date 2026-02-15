
interface AlertProps {
    message: string | null;
    onClose: () => void;
}

export function Alert({ message, onClose }: AlertProps) {
    if (!message) return null;

    return (
        <div
            className="alert_overlay"
            onClick={onClose} // клик по overlay закрывает
        >
            <div
                className="alert_box"
                onClick={(e) => e.stopPropagation()} // клик внутри коробки не закрывает
            >
                <p>{message}</p>
            </div>
        </div>
    );
}
