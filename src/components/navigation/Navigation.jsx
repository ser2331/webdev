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
    {id: 5, name: 'БЛОГ', href: '#AboutProfit', current: false},
    {id: 6, name: 'КОНТАКТЫ', href: '#Footer', current: false},
]

export const Navigation = () => {
    return (
        <div className="fixed top-0 z-10 w-[100%] h-[90px]">
            <div className="relative">

                <div className="w-[100%] absolute bg-regal-green rounded-bl-[10px] h-[70px]">
                    <div className="relative h-[100%] flex justify-center flex-col text-white font-roboto font-bold text-[14px] leading-[16px] gap-[10px] sm:pl-[17px] md:pl-[64px] lg:pl-[84px]">
                        <div className="sm:block md:hidden flex gap-[16px] items-center">
                            <span>Покупка авто по одному звонку!</span>
                        </div>
                        <div className="sm:hidden md:flex gap-[16px] items-center">
                            <img className="w-[14px] h-[14px]" src={phone} alt={"phone"}/>
                            <span>+372 43675 476</span>
                        </div>
                        <div className="flex gap-[16px] items-center">
                            <img className="w-[14px] h-[14px]" src={mail} alt={"mail"}/>
                            <span>info@example.ee</span>
                        </div>
                    </div>
                </div>

                <div className="relative bg-regal-blue rounded-bl-[270px] float-right sm:h-[70px] md:h-[94px] sm:w-[38%] md:w-[74%] sm:pl-[16px] md:p-0">
                    <div className="float-right h-[100%] sm:flex md:hidden items-center pr-[16px] cursor-pointer">
                        <svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.39062 1H29.6094M1.39062 9.73438H29.6094M1.39062 18.4688C12.4107 18.4688 18.5893 18.4688 29.6094 18.4688" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                        </svg>
                    </div>

                    <div className="relative justify-center py-[12px] sm:hidden md:flex">
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

                    <div className="relative bottom-[-8px] float-right pr-[23px] items-center text-white font-roboto font-bold md:text-[8px] lg:text-[12px] sm:hidden md:flex md:leading-[10px] lg:leading-[14px]">
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

                        <svg className="" width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
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
