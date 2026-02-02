import {useState} from "react";


export function CommentContainer({text, name, avatar_img}: {text?: string, name: string, avatar_img?: string}) {
    const [isLiked, setIsLicked] = useState(false);

    const [likesCounter, setLikesCounter] = useState(0);

    const handleLikeClick = () => {
        setIsLicked(prev => {
            const next = !prev;

            setLikesCounter(count =>
                next ? count + 1 : count - 1
            );

            return next;
        });
    };


    return (
        <div className="comment_container">
        <img className="author_avatar_comment" src={avatar_img}/>
        <div className="info_and_buttons">
        <div className="name_text">
        <p className="author_name_comment">{name}</p>
    <p className="comment_text">{text}</p>
    <p className="publication_time comment">5 min</p>
</div>
    <div className="comment_buttons">
        <div className="like_container">
            <button
                className={`post_button like comment ${isLiked ? 'active' : ''}`}
                onClick={handleLikeClick}
            >
                <svg
                    viewBox="0 0 26 26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="like_icon comment"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                </svg>
            </button>
            {likesCounter > 0 && (
                <span className={`likes_counter comment ${
                    likesCounter === 0 ? 'hidden' : ''
                }`}
                >
                              {likesCounter}
                            </span>
            )}
        </div>
        <button className="comment_button reply">Reply</button>
    </div>
</div>
</div>
    )
}