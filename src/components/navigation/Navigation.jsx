import React, {useState} from "react";
import FFF from "../../accets/images/FFF.png";
import VK from "../../accets/images/VK.png";
import mail from "../../accets/images/mail.svg";
import phone from "../../accets/images/phone.svg";
import {Logo} from "../../common/logo/logo";
import {icons} from "../../accets/images/icons";

const navigationLinks = [
    {id: 1, name: 'ГЛАВНАЯ', href: '#', current: true, icon: icons.home},
    {id: 2, name: 'О НАС', href: '#AboutUs', current: false, icon: icons.people},
    {id: 3, name: 'ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ ', href: '#AddCarSection', current: false, icon: icons.mailing},
    {id: 4, name: 'ЧЗВ', href: '#ServiceDescription', current: false, icon: icons.chzv},
    {id: 5, name: 'БЛОГ', href: '#AboutProfit', current: false, icon: icons.blog},
    {id: 6, name: 'КОНТАКТЫ', href: '#Footer', current: false, icon: icons.location},
]

export const Navigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleChangeMenu = () => {
        const body = document.querySelector('body');
        const menu = document.querySelector('#mobileMenu')
        if (showMobileMenu) {
            body.style.overflow = "auto";
            menu.style.overflow = "auto";
        } else {
            body.style.overflow = "hidden";
            menu.style.overflow = "auto";
        }
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className="fixed top-0 z-10 w-[100%] h-[90px]">
            <div className="relative">

                <div className="w-[100%] absolute bg-regal-green rounded-bl-[10px] h-[70px]">
                    <div
                        className="relative h-[100%] flex justify-center flex-col text-white font-roboto font-bold text-[14px] leading-[16px] gap-[10px] sm:pl-[17px] md:pl-[64px] lg:pl-[84px]">
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

                <div
                    className="relative bg-regal-blue rounded-bl-[270px] float-right sm:h-[70px] md:h-[94px] sm:w-[38%] md:w-[74%] sm:pl-[16px] md:p-0">
                    <div className="float-right h-[100%] sm:flex md:hidden items-center pr-[16px] cursor-pointer">
                        <label className="btn-menu" htmlFor="hmt">
                            <span className="first"></span>
                            <span className="second"></span>
                            <span className="third"></span>
                        </label>
                    </div>

                    <div className="relative justify-center py-[12px] sm:hidden md:flex">
                        <Logo width={"w-[43px]"} height={"h-[43px]"}/>

                        <div className="absolute right-[24px] top-[50%] flex">
                            <div className="w-[17px] h-[17px]">
                                <img src={FFF} alt="F"/>
                            </div>

                            <div className="w-[17px] h-[17px]">
                                <img src={VK} alt="VK"/>
                            </div>
                        </div>
                    </div>

                    <div
                        className="relative bottom-[-8px] float-right pr-[23px] items-center text-white
                        font-roboto font-bold md:text-[8px] lg:text-[12px] sm:hidden md:flex
                         md:leading-[10px] lg:leading-[14px]">
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

                        <svg className="" width="18" height="13" viewBox="0 0 18 13" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 0.441833H0V4.49075H18V0.441833Z" fill="white"/>
                            <path d="M18 8.51031H0V12.4418H18V8.51031Z" fill="#D52B1E"/>
                            <path d="M18 4.49072H0V8.51026H18V4.49072Z" fill="#0039A6"/>
                        </svg>
                    </div>
                </div>
            </div>

            <input onChange={handleChangeMenu} checked={showMobileMenu} type="checkbox" id="hmt"
                   className="hidden-menu-ticker"/>
            <ul id="mobileMenu" className="hidden-menu pl-[34px] pt-[28px] pb-[90px] text-white sm:block md:hidden">
                <li className="uppercase order-none self-center text-start leading-[55px] font-arimo font-normal text-[48px] mb-[95px]">
                    <a href={"#AddCarSection"}>LOGO</a>
                </li>

                {
                    navigationLinks.map(({name, href, id, icon}) => {
                        return (
                            <li key={id} className="mb-[55px]">
                                <a onClick={handleChangeMenu} href={href} className="flex gap-[20px] uppercase">
                                    {icon}
                                    {name}
                                </a>
                            </li>
                        )
                    })
                }

                <li className="mb-[55px]">
                    <a href={'#'} className="flex gap-[20px] uppercase">
                        {icons.lang}
                        Русский
                    </a>
                </li>

                <li className="flex">
                    <a className="w-[24px] h-[24px]">
                        <img src={FFF} alt="F"/>
                    </a>

                    <a className="w-[24px] h-[24px]">
                        <img src={VK} alt="VK"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
