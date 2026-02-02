import {useLocation, useNavigate} from "react-router-dom";

interface PostContentContainerProps {
    text: any;
    media_path?: string;
}

export function PostContentContainer({text, media_path} : PostContentContainerProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClickPost = () => {
        navigate("/post_media_info", {
            state: { photoSrc: "../public/Mars.png", background: location}
        });
    };

    return (
        <div className="post_content_container" onClick={handleClickPost}>
            <p className="post_text">{text}</p>
            {media_path && (
                <img className="post_media" src={media_path} alt="Post content" />
            )}
        </div>
    )
}