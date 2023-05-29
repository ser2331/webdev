import React from "react";
import FFF from "../../accets/images/FFF.png";
import VK from "../../accets/images/VK.png";
import mail from "../../accets/images/mail.svg";
import phone from "../../accets/images/phone.svg";
import {Logo} from "../../common/logo/logo";

const navigationLinks = [
    {id: 1, name: 'ГЛАВНАЯ', href: '#', current: true},
    {id: 2, name: 'О НАС', href: '#AboutUs', current: false},
    {id: 3, name: 'ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ ', href: '#AddCarSection', current: false},
    {id: 4, name: 'ЧЗВ', href: '#ServiceDescription', current: false},
    {id: 5, name: 'БЛОГ', href: '#', current: false},
    {id: 6, name: 'КОНТАКТЫ', href: '#', current: false},
]

export const Navigation = () => {
    return (
        <div className="fixed top-0 z-10 w-[100%] h-[90px]">
            <div className="relative">

                <div className="w-[100%] h-[70px] absolute bg-regal-green rounded-bl-[10px]">
                    <div className="relative h-[100%] flex justify-center flex-col pl-[84px] text-white leading-[16px] font-roboto font-bold text-[14px] gap-[10px]">
                        <div className="flex gap-[16px] items-center">
                            <img className="w-[14px] h-[14px]" src={phone} alt={"phone"}/>
                            <span>+372 43675 476</span>
                        </div>
                        <div className="flex gap-[16px] items-center">
                            <img className="w-[14px] h-[14px]" src={mail} alt={"mail"}/>
                            <span>info@example.ee</span>
                        </div>
                    </div>
                </div>

                <div className="relative w-[74%] h-[94px] bg-regal-blue rounded-bl-[270px] float-right">
                    <div className="relative flex justify-center py-[12px]">
                        <Logo width={"w-[43px]"} height={"h-[43px]"} />

                        <div className="absolute right-[24px] top-[50%] flex">
                            <div className="w-[17px] h-[17px]">
                                <img src={FFF} alt="F"/>
                            </div>

                            <div className="w-[17px] h-[17px]">
                                <img src={VK} alt="VK"/>
                            </div>
                        </div>
                    </div>

                    <div className="relative bottom-[-8px] float-right pr-[23px] flex items-center text-white leading-[14px] font-roboto font-bold text-[12px] ">
                        <nav className="float-right">
                            {navigationLinks.map((link) => {
                                return <a
                                    key={link.id}
                                    href={link.href}
                                    className="mr-[23px]  hover:underline underline-offset-[11px] decoration-regal-green decoration-4"
                                >
                                    {link.name}
                                </a>
                            })}
                        </nav>

                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0.441833H0V4.49075H18V0.441833Z" fill="white"/>
                            <path d="M18 8.51031H0V12.4418H18V8.51031Z" fill="#D52B1E"/>
                            <path d="M18 4.49072H0V8.51026H18V4.49072Z" fill="#0039A6"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
