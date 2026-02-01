import { useLocation, useNavigate } from "react-router-dom";
import {useState} from "react";

export function PostPage() {
    const location = useLocation();
    const photoSrc = location.state?.photoSrc || ""
    const navigate = useNavigate();

    const handleClose=() => {
        navigate(-1)
    }

    // const [isLiked, setIsLiked] = useState(false);
    //
    // const handleLikeClick = () => {
    //     setIsLiked(prev => !prev);
    // }

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
        <div className="media_page" onClick={handleClose}>
            <div className="media_container" onClick={(e) => e.stopPropagation()}>
                <div className="post_content">
                    <p className="post_text">
                        Occupy Mars!
                        Terraforming Mars is one of the most ambitious "what-if" scenarios in human history. It’s essentially the ultimate DIY project: turning a frozen, radioactive desert into a lush, Earth-like world.

                        Here are some of the most fascinating facts about the process:

                        1. The "Great Warming" via Greenhouse Gases
                        To make Mars habitable, we first need to thicken its atmosphere. While we talk about reducing greenhouse gases on Earth, we would actually want to flood Mars with them.

                        The Strategy: Some scientists suggest building "super-greenhouse gas factories" on the surface to pump out CFCs (chlorofluorocarbons).

                        The Goal: Raise the temperature enough to melt the polar ice caps, releasing stored CO
                        2
                        ​
                        , which creates a self-sustaining warming loop.

                        2. Melting the Caps with Giant Mirrors
                        Since Mars is much further from the Sun than Earth, it doesn't get enough natural heat. One proposed solution is to place massive orbital mirrors (thousands of kilometers wide) in space.

                        These mirrors would reflect sunlight directly onto the Martian south pole.

                        The concentrated heat would vaporize the dry ice (frozen carbon dioxide), kickstarting the atmospheric thickening process.

                        3. The "Blue Mars" Phase
                        Before Mars becomes green, it will likely be blue. As the planet warms, the vast amounts of water ice locked in the soil (permafrost) and the poles will melt.

                        Mars has enough water ice to cover the entire planet in an ocean roughly 35 meters deep.

                        Because of Martian topography, this would create a massive northern ocean and a series of smaller lakes and seas in the southern craters.

                        4. The "Oxygen Problem" Takes Centuries
                        While warming the planet might take 100 years, making the air breathable is a much longer game.

                        Even with a thick CO
                        2
                        ​
                        atmosphere, humans would still need oxygen masks.

                        To create a breathable O
                        2
                        ​
                        level, we would need to introduce cyanobacteria and lichens—hardy organisms that "eat" radiation and CO
                        2
                        ​
                        to produce oxygen.

                        The Reality Check: Without advanced bio-engineering, this natural photosynthesis process could take up to 100,000 years.

                        5. The Need for an Artificial Magnetic Shield
                        Mars lost its original atmosphere because it lacks a global magnetic field; the solar wind literally "strips" the air away.

                        To prevent a terraformed atmosphere from leaking into space, we might need to place a magnetic dipole shield at the L1 Lagrange point (between Mars and the Sun).

                        This would act as a "deflector shield," allowing the planet to regain its atmospheric pressure naturally over time.
                    </p>
                    <img className="media_container_img" src={photoSrc} alt="Media" />
                </div>
                <div className="media_content_info">
                    <div className="author_container post">
                        <img className="author_avatar" src='../public/myphoto.jpg'/>
                        <p className="author_name">Oleg Zolotarev</p>
                        <p className="publication_time">Today</p>
                    </div>
                    <div className="comments_container">
                        <div className="author_container_comment">
                            <div className="comment_container">
                                <img className="author_avatar_comment" src='../public/myphoto.jpg'/>
                                <div className="info_and_buttons">
                                    <div className="name_text">
                                        <p className="author_name_comment">Elon Musk</p>
                                        <p className="comment_text">Thats right!</p>
                                        <p className="publication_time comment">5 min</p>
                                    </div>
                                    <div className="comment_buttons">
                                        <div className="like_container">
                                            <button
                                                className={`post_button like comment ${isLiked ? 'active' : ''}`}
                                                onClick={handleLikeClick}
                                            >
                                                <svg
                                                    viewBox="0 0 24 24"
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
                        </div>

                    </div>
                </div>
            </div>
            <img className="post_media_cross" src="../../../../public/icons/icon_cross.png"/>
        </div>
    );
}
