import React from "react";

export const Checkbox = ({label, checked, handleCheck, width, height}) => {
    return (
        <div className={`${height} w-[100%] flex items-flex-start gap-[8px]`}>
            <div
                onClick={() => handleCheck(!checked)}
                className={`${width} ${height} ${checked ? 'bg-regal-button-bg' : ''} border-regal-border 
                w-[100%] h-[100%] border border-solid rounded-[5px]
                flex justify-center items-center cursor-pointer`
                }
            >
                {
                    checked ? (
                        <svg width="8" height="8" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.24838 24.5804L0.483398 15.5096C-0.161133 14.8425 -0.161133 13.7613 0.483398 13.095C1.12793 12.4286 2.17271 12.4279 2.8166 13.095L10.415 20.9585L30.1834 0.500266C30.8279 -0.166755 31.8727 -0.166755 32.5166 0.500266C33.1611 1.16729 33.1611 2.24853 32.5166 2.91488L11.5822 24.5804C10.9383 25.2467 9.89291 25.2474 9.24838 24.5804Z"
                                fill="#FFFFFF"/>
                        </svg>
                    ) : ""
                }
            </div>
            <div className="w-[100%]">{label}</div>
        </div>
    );
};