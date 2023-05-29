import React from "react";

export const Textarea = ({id, label, handleChange, value, width, height}) => {

    return (
        <div className={`relative ${width} ${height}`}>
            <label
                className="absolute bg-white left-[4px] top-[-4px] px-[4px]
                text-regal-input-text leading-[12px] font-roboto font-bold text-[10px]"
                htmlFor={id}
            >
                {label}
            </label>
            <textarea
                id={id}
                className="w-[100%] h-[100%]
                border border-solid rounded-[5px] border-regal-border
                text-[10px] px-[4px] resize-none"
                onChange={handleChange}
                value={value}
            />
        </div>
    );
};