import {CommentContainer} from "../../../PostElements /PostPage/CommentContainer.tsx";
import {AutoResizingInput} from "../../../PostElements /PostPage/AutoResizingInput.tsx";


export function MediaPostContentInfo() {

    return (
        <div className="media_content_info">
            <div className="author_container post comment media">
                <img className="author_avatar" src='/myphoto.jpg'/>
                <p className="author_name">Oleg Zolotarev</p>
                <p className="publication_time">Today</p>
            </div>

            <div className="comments_container">
                < CommentContainer name="Oleg Zolotarev" text="Amazing place!" avatar_img="/myphoto.jpg"/>
                < CommentContainer name="Elon Musk" text="So beautefull" avatar_img="/elon_musk.jpg"/>
                < CommentContainer name="Guy from Mars" text="I wanna go there" avatar_img="/alien.png"/>
            </div>
            <div className="input_comment_container">
                <img className="add_object" src="/icons/icon_attach.png"/>
                <AutoResizingInput />
                <img className="post_reply" src="/icons/icon_send.png"/>
            </div>
        </div>
    )
}