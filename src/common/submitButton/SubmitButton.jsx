import React from "react";

export const SubmitButton = ({buttonName, onClick, width, height}) => {

    return (
        <div className={`${width} ${height}`}>
            <button
                type="submit"
                className='bg-regal-button-bg w-[100%] h-[100%]
                border border-solid rounded-[5px]
                text-[10px] leading-[12px] text-white px-[4px]
                font-roboto font-bold'
                onClick={onClick}
            >
                {buttonName}
            </button>
        </div>
    )
}