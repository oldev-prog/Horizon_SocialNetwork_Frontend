import React, { useState, useRef, useEffect } from 'react';

export function AutoResizingInput() {
    const [text, setText] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    }, [text]);

    return (
        <textarea
            ref={textAreaRef}
            className="input_comment_field"
            value={text}
            onChange={handleChange}
            placeholder="Add your comment..."
            rows={1}
        />
    );
}