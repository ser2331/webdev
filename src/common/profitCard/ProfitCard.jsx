import React from 'react';

export const ProfitCard = ({label, icon}) => {
    return (
        <div className="sm:w-[100px] xs:w-[118px] h-[118px] shadow-profit-card flex flex-col items-center justify-center rounded-[10px]">
            <div className="mb-[20px]">
                {icon}
            </div>

            <div>
                <h3 className="font-arimo font-bold text-[16px] leading-[18px] text-regal-input-text"
                >{label}</h3>
            </div>
        </div>
    )
}