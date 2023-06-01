import React from "react";

export const Card = ({logo, label, description, width, height, type}) => {
    const getBorderStyle = () => {
        switch (type) {
            case 'middle': {
                return 'rounded-middle'
            }
            case 'left': {
                return 'rounded-left border-r-0'
            }
            case 'right': {
                return 'rounded-right border-l-0'
            }

            default: {
                return 'rounded-[10px]'
            }
        }
    };

    return (
        <div className={`${width} ${height} border ${getBorderStyle()} border-regal-green border-solid shadow-card 
        px-[10px] py-[14px]`}>
            <div className="w-max mx-auto mb-[12px]">
                {logo}
            </div>

            <div
                className="text-center text-regal-input-text leading-[21px] font-roboto font-bold sm:text-[14px] md:text-[18px] mb-[8px]">
                <h2>{label}</h2>
            </div>

            <div className="text-center text-regal-input-text leading-[14px] font-arimo font-normal sm:text-[8px] md:text-[12px]">
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}