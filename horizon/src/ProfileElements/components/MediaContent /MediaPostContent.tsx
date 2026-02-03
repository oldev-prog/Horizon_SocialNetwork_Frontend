import {PostPageInteractions} from "../../../PostElements /PostPage/PostPageInteractions.tsx";


export function MediaPostContent({media_path} : {media_path?: string}) {
    return (
        <div className="post_content">
            <img className="post_media post_page" src={media_path} alt="Post content" />
            <PostPageInteractions />
        </div>
    )
}