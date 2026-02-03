import { CommentContainer } from "./CommentContainer.tsx";
import { AutoResizingInput } from "./AutoResizingInput.tsx";


export function PostMediaContentInfo() {

    return (
        <div className="media_content_info">
            <div className="author_container post comment">
                <img className="author_avatar" src='../public/myphoto.jpg'/>
                <p className="author_name">Oleg Zolotarev</p>
                <p className="publication_time">Today</p>
            </div>
            <div className="comments_container">
                < CommentContainer name="Elon Musk" text="Thats right!" avatar_img="../public/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
                < CommentContainer name="NASA" text="Cool" avatar_img="../public/nasa.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
                < CommentContainer name="Elon Musk" text="Thats right!" avatar_img="../public/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
                < CommentContainer name="Elon Musk" text="Thats right!" avatar_img="../public/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
                < CommentContainer name="Elon Musk" text="Thats right!" avatar_img="../public/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
                < CommentContainer name="Elon Musk" text="Thats right!" avatar_img="../public/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
                < CommentContainer name="Elon Musk" text="Thats right!" avatar_img="../public/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
                < CommentContainer name="Elon Musk" text="Thats right!" avatar_img="../public/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
                < CommentContainer name="Elon Musk" text="Thats right!" avatar_img="../public/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="Fuck you" avatar_img="../public/alien.png"/>
            </div>
            <div className="input_comment_container">
                <img className="add_object" src="../public/icons/icon_attach.png"/>
                <AutoResizingInput />
                <img className="post_reply" src="../public/icons/icon_send.png"/>
            </div>
        </div>
    )
}