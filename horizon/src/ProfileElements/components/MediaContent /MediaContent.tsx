import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/MediaContent.css';
import '../styles/PostsContent.css'
import { LikeIcon } from "../LikeIcon.tsx";
import {MultiPhotoIndicator} from "./MultiPhotoIndicator.tsx";

export function MediaContent() {
    const location = useLocation();

    const mediaItems = [
        { id: 1, url: '/media/img3.jpeg', likes: 120, comments: 15 },
        { id: 2, url: '/media/img4.jpeg', likes: 85, comments: 4 },
        { id: 3, url: '/media/tokyo_tower.jpeg', likes: 230, comments: 42 },
        { id: 4, url: '/media/img4.jpeg', likes: 11, comments: 1 },
        { id: 5, url: '/media/img4.jpeg', likes: 95, comments: 10 },
        { id: 6, url: '/media/img4.jpeg', likes: 300, comments: 88 },
        { id: 1, url: '/media/img4.jpeg', likes: 120, comments: 15 },
        { id: 2, url: '/media/img4.jpeg', likes: 85, comments: 4 },
        { id: 3, url: '/media/img4.jpeg', likes: 230, comments: 42 },
        { id: 4, url: '/media/img4.jpeg', likes: 11, comments: 1 },
        { id: 5, url: '/media/img4.jpeg', likes: 95, comments: 10 },
        { id: 6, url: '/media/img4.jpeg', likes: 300, comments: 88 },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const buttons = ["/icons/icon_all.png", "/icons/icon_photo.png", "/icons/icon_video.png"];

    return (
        <div className="media_container_grid">
            <div className="media_layout_wrapper">

                <div className="media_main_content">
                    <div className="highlights_container">
                        <div className="highlights_items">
                            <div className="highlights_icon_wrapper new">
                                <img className="highlights_icon" src="../public/myphoto.jpg" alt="New" />
                            </div>
                            <p className="highlights_name">New</p>
                        </div>
                        {/*<div className="highlights_items">*/}
                        {/*    <div className="highlights_icon_wrapper ">*/}
                        {/*        <img className="highlights_icon" src="../public/media/img2.jpeg" alt="New Highlight" />*/}
                        {/*    </div>*/}
                        {/*    <p className="highlights_name">Japan</p>*/}
                        {/*</div>*/}
                    </div>

                    <div className="media_grid">
                        {mediaItems.map((item) => (
                                            <Link
                                                key={item.id}
                                                to={`/p/${item.id}`}
                                                state={{ background: location }}
                                                className="media_item"
                                            >
                                                <img src={item.url} alt={`Post ${item.id}`} className="media_img" />

                                                <MultiPhotoIndicator  />

                                                <div className="media_item_overlay">
                                                    <div className="stat_item">
                                                        <LikeIcon />
                                                        <span className="stat_value">{item.likes}</span>
                                                    </div>
                                                    <div className="stat_item">
                                                        <img className="icon_post_button" src="/icons/icon_comment.png"/>
                                                        <span className="stat_value">{item.comments}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                    </div>
                </div>

                <div className="media_sticky_sidebar">
                    <div className="sticky_button_group">
                        <div
                            className="active_indicator"
                            style={{ transform: `translateY(${activeIndex * (45 + 30)}px)` }}
                        />

                        {buttons.map((path, index) => (
                            <button
                                key={path}
                                className={`collage_button ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img className="collage_icon" src={path}/>
                            </button>
                        ))}

                    </div>
                    </div>
                </div>

            </div>

    );
}