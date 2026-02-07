
import { useState, useRef } from "react";

export function ProfileBio() {
    const [hovered, setHovered] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setHovered(false);
        }, 100);
    };

    return (
        <div className="profile_bio">
            <img
                className="icon_info"
                src="../../public/icons/icon_info.png"
            />
            <a
                className="bio"
                href="#"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                About me
            </a>

            <div
                className={`bio_tooltip ${hovered ? "visible" : "hidden"}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <p><strong>Gender:</strong> <span>Male</span></p>
                <p><strong>Birthdate:</strong> 25 Aug 2003</p>
                <p><strong>Profession:</strong> Web Developer</p>
                <p><strong>Interests:</strong> Anime, Music, Travel</p>
            </div>
        </div>
    );
}

