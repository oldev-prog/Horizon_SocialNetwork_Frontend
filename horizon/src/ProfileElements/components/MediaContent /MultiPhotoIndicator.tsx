// type Props = {
//     total: number;
//     currentIndex: number;
// };

export function MultiPhotoIndicator() {
    // if (total <= 1) return null;
    //
    // if (currentIndex !== 0) return null;

    return (
        <div className="media_multi_indicator">
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="7"
                    y="7"
                    width="13"
                    height="13"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                />
                <rect
                    x="3"
                    y="3"
                    width="13"
                    height="13"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.6"
                />
            </svg>
        </div>
    );
}
