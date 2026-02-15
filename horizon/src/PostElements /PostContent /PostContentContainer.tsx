import { useLocation, useNavigate } from "react-router-dom";

interface PostContentContainerProps {
    text: string|any;
    media_path?: string;
}

export function PostContentContainer({ text, media_path }: PostContentContainerProps) {
    const TEXT_LIMIT = 650

    const navigate = useNavigate();
    const location = useLocation();

    const isLongText = text.length > TEXT_LIMIT;

    const handleClickPost = () => {
        navigate("/post_media_info", {
            state: { photoSrc: media_path || "../public/Mars.png", background: location }
        });
    };

    const renderText = () => {
        if (!isLongText) return text;

        return (
            <>
                {text.slice(0, TEXT_LIMIT)}...
                <span className="read_more_link">Show more</span>
            </>
        );
    };

    return (
        <div className="post_content_container" onClick={handleClickPost}>
            <div className="post_text">
                {renderText()}
            </div>
            {media_path && (
                <img className="post_media" src={media_path} alt="Post content" />
            )}
        </div>
    );
}