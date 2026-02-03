
import { useEffect } from "react";

export function CommentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

    useEffect(() => {
        if (!isOpen) return;

        const handleScroll = () => onClose();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <>
            <div className="modal_backdrop_invisible" onClick={onClose} />

            <div className="modal_overlay">
                <div className="modal_content">
                    <textarea
                        className="modal_comment_input"
                        placeholder="Your comment to @user..."
                        autoFocus
                    />
                    <div className="send_button_wrapper" onClick={onClose}>
                        <img
                            className="post_reply second"
                            src="/icons/icon_send.png"
                            alt="send"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}