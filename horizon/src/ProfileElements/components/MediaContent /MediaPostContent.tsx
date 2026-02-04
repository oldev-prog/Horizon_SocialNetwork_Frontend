import { useRef, useState } from "react";
import { MediaPageInteractions } from "./MediaPageInteractions";
import "../styles/MediaContent.css";

type Props = {
    media_paths: string[];
};

export function MediaPostContent({ media_paths }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    const scrollStep = 0.65;

    const scrollToIndex = (i: number) => {
        const el = containerRef.current;
        if (!el) return;

        const slideWidth = el.clientWidth;
        const target = i * slideWidth;

        el.scrollTo({
            left: el.scrollLeft + (target - el.scrollLeft) * scrollStep,
            behavior: "smooth",
        });
    };


    const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;

        const slideWidth = el.clientWidth;
        const newIndex = Math.round(el.scrollLeft / slideWidth);
        setIndex(newIndex);
    };

    return (
        <div className="media_content_">
            <div className="media_media_area">
                <div className="media_carousel_wrapper">
                    {index > 0 && (
                        <button
                            className="carousel_arrow left"
                            onClick={() => scrollToIndex(index - 1)}
                            aria-label="Previous image"
                        >
                            ‹
                        </button>
                    )}

                    <div
                        className="media_carousel"
                        ref={containerRef}
                        onScroll={handleScroll}
                    >
                        {media_paths.map((src, i) => (
                            <div className="media_slide" key={i}>
                                <img src={src} draggable={false} />
                            </div>
                        ))}
                    </div>

                    {index < media_paths.length - 1 && (
                        <button
                            className="carousel_arrow right"
                            onClick={() => scrollToIndex(index + 1)}
                            aria-label="Next image"
                        >
                            ›
                        </button>
                    )}
                    
                </div>
            </div>

            {media_paths.length > 1 && (
                <div className="media_indicator">
                    {media_paths.map((_, i) => (
                        <span
                            key={i}
                            className={`media_dot ${i === index ? "active" : ""}`}
                        />
                    ))}
                </div>
            )}

            <MediaPageInteractions />
        </div>
    );
}
