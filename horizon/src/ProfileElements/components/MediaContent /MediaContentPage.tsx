import { useNavigate } from 'react-router-dom';
import '../styles/MediaContent.css';
import { MediaPostContentInfo } from "./MediaPostContentInfo.tsx";
import { MediaPostContent } from "./MediaPostContent.tsx";

export function MediaContentPage() {
    const navigate = useNavigate();

    const handleClose=() => {
        navigate(-1)
    }

    return (
        <div className="media_page media" onClick={handleClose}>
            <div className="media_container_media" onClick={(e) => e.stopPropagation()}>
                <MediaPostContent media_paths={["/media/img3.jpeg",
                    "/media/img4.jpeg",
                    "/media/img2.jpeg",
                    "/media/tokyo_tower.jpeg"]} />
                <MediaPostContentInfo />
            </div>
            <img className="post_media_cross" src="/icons/icon_cross.png"/>
            <img className="post_media_cross left" src="/icons/icon_arrow_left.png"/>
            <img className="post_media_cross right" src="/icons/icon_arrow_right.png"/>
        </div>
    );
}
