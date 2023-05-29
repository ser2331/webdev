import React from "react";

export const Footer = () => {
    return (
        <footer>
            <div className="flex w-[100%] items-start justify-between bg-regal-blue text-white p-[34px]">
                <div className="self-center text-center leading-[48px] font-arimo font-normal text-[55px]">
                    <a href={"#AddCarSection"}>LOGO</a>
                </div>

                <div className="footer-text">
                    <span className="font-bold leading-[30px]">Company name</span>  <br/>
                    <span>Reg. nr: 437568</span>  <br/>
                    <span>Peterburi tee 710 <br/> Tallinn Harjumaa 34235</span>
                </div>

                <div className="footer-text">
                    <span className="font-bold leading-[30px]">Свяжись с нами</span><br/>
                    <div className="flex gap-[10px]">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.02358 5.58185C4.34823 6.94091 6.10131 8.62355 7.39988 8.94714C7.98424 9.07657 8.63353 8.75299 8.82832 8.17053C9.08803 7.32921 10.1918 7.07034 10.8411 7.71751L12.6591 9.52959C13.1136 9.98261 13.1136 10.7592 12.6591 11.277L11.4255 12.5066C10.1269 13.8009 6.68567 12.3771 3.63401 9.33544C0.582352 6.29374 -0.781155 2.86373 0.452494 1.56939L1.68614 0.339765C2.14065 -0.113255 2.91979 -0.113255 3.43922 0.339765L5.25723 2.15184C5.90652 2.79901 5.6468 3.8992 4.80273 4.15807C4.21837 4.35222 3.8288 4.9994 4.02358 5.58185Z" fill="#9CC634"/>
                        </svg>

                        +372 475685
                    </div>
                    <div className="flex gap-[10px]">
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <rect width="14.8855" height="12.9008" fill="white"/>
                                <path d="M14.7544 0.921631L10.2399 6.45032L14.7544 11.979C14.8361 11.7687 14.8855 11.5365 14.8855 11.2881V1.61254C14.8855 1.3642 14.8361 1.13198 14.7544 0.921631Z" fill="#9CC634"/>
                                <path d="M8.3679 7.23768L14.1378 0.161618C13.9671 0.0609202 13.7787 0 13.5772 0H1.30833C1.10686 0 0.918463 0.0609202 0.747803 0.161618L6.51768 7.23768C7.02791 7.86659 7.85766 7.86659 8.3679 7.23768Z" fill="#9CC634"/>
                                <path d="M0.13112 0.921631C0.0494245 1.13198 0 1.3642 0 1.61254V11.2881C0 11.5365 0.0494245 11.7687 0.13112 11.979L4.64561 6.45032L0.13112 0.921631Z" fill="#9CC634"/>
                                <path d="M8.98454 7.99775C8.13444 9.04558 6.75113 9.04558 5.90132 7.99775L5.26229 7.21045L0.747803 12.7391C0.918463 12.8398 1.10686 12.9008 1.30833 12.9008H13.5772C13.7787 12.9008 13.9671 12.8398 14.1378 12.7391L9.62328 7.21045L8.98454 7.99775Z" fill="#9CC634"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_551">
                                    <rect width="14.8855" height="12.9008" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>

                        info@example.ee
                    </div>
                </div>

                <div className="footer-text">
                    <span className="font-bold leading-[30px]">Полезные ссылки</span><br/>
                    <span>О нас</span><br/>
                    <span>Часто задаваемые вопросы</span><br/>
                    <span>Контакты</span>
                </div>
            </div>

            <div className="bg-regal-footer-bg h-[56px] w-[100%]"></div>
        </footer>
    )
}