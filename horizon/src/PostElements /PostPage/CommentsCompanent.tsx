import { CommentContainer } from "./CommentContainer.tsx";
import { AutoResizingInput } from "./AutoResizingInput.tsx";


export function CommentsComponent() {
    return (
        <div className="comments_component">
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
                <AutoResizingInput/>
                <img className="post_reply" src="../public/icons/icon_send.png"/>
            </div>
        </div>
    )
}