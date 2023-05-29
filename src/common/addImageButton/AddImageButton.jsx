import React from "react";

export const AddImageButton = ({id, buttonName, handleChange, value, width, height}) => {
    return (
        <div className={`relative ${width} ${height}`}>
            <label
                className={`block ${width} ${height} bg-regal-button-bg w-[100%] h-[100%]
                    border border-solid rounded-[5px]
                    cursor-pointer
                    text-[10px] leading-[29px] text-white px-[4px]
                    text-center
                    font-roboto font-bold caret-transparent`}
                htmlFor={id}
            >
                {buttonName}
            </label>
            <input
                type="file"
                name={id}
                id={id}
                className='invisible caret-transparent'
                accept=".jpg, .jpeg, .png"
            />
        </div>
    );
};