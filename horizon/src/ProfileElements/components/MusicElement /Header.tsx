// import { useState, useRef, useEffect } from "react";
//
// export function Header() {
//     const [open, setOpen] = useState(false);
//     const inputRef = useRef<HTMLInputElement | null>(null);
//
//
//     useEffect(() => {
//         if (open) {
//             inputRef.current?.focus();
//         }
//     }, [open]);
//
//     return (
//         <div className="h2_search">
//             <h2 className="music_header">Liked Songs</h2>
//
//             <button
//                 className="search_button"
//                 onClick={() => setOpen(prev => !prev)}
//             >
//                 <img
//                     className="search_icon"
//                     src="/icons/icon_search.svg"
//                     alt="Search"
//                 />
//             </button>
//
//             <input
//                 ref={inputRef}
//                 className={`search_input ${open ? "open" : ""}`}
//                 type="text"
//                 placeholder="Search..."
//             />
//         </div>
//     );
// }


import { useState, useRef, useEffect } from "react";

export function Header() {
    const [open, setOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (open) inputRef.current?.focus();
    }, [open]);

    return (
        <div className="h2_search">
            <h2 className="music_header">Liked Songs</h2>

            <div className="search_wrapper">
                {!open && (
                    <button
                        className="search_button"
                        onClick={() => setOpen(true)}
                    >
                        <img
                            className="search_icon"
                            src="/icons/icon_search.svg"
                            alt="Search"
                        />
                    </button>
                )}

                <input
                    ref={inputRef}
                    className={`search_input ${open ? "open" : ""}`}
                    type="text"
                    placeholder="Search..."
                    onBlur={() => setOpen(false)}
                />
            </div>
        </div>
    );
}

