import { useState } from "react";


export function MediaPageInteractions() {
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

    const [isAdded, setIsAdded] = useState(false);

    const handleAddClick = () => {
        setIsAdded(prev => !prev);
    }

    return (
        <div className="media_page_interactions">
            <div className="like_container">
                <button
                    className={`post_button like ${isLiked ? 'active' : ''}`}
                    onClick={handleLikeClick}
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="like_icon"
                    >

                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                    </svg>
                </button>
                {likesCounter > 0 && (
                    <span className={`likes_counter post_page media ${
                        likesCounter === 0 ? 'hidden' : ''
                    }`}
                    >
                              {likesCounter}
                            </span>
                )}
            </div>
            <button className="post_button share">
                <img className="icon_post_button" src="/icons/icon_share.png"/>
            </button>
            <button className="post_button bookmark" onClick={handleAddClick}>
                <img className="icon_post_button" src={
                    isAdded ?
                        "/icons/icon_bookmark1.png":
                        "/icons/icon_bookmark.png"
                }/>
            </button>
        </div>
    )
}