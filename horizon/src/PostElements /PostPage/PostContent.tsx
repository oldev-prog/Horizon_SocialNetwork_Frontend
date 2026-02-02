import { PostPageInteractions } from "./PostPageInteractions.tsx";

export function PostContent({text, media_path} : {text: string; media_path?: string}) {
    return (
        <div className="post_content">
            <p className="post_text">{text}</p>
            {media_path && (
                <img className="post_media post_page" src={media_path} alt="Post content" />
            )}
            <PostPageInteractions />
        </div>
    )
}