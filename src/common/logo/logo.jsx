import React from "react";
import logo from "../../accets/images/logo.png";

export const Logo = ({width, height}) => {
    return (
        <div className={`${width} ${height}`}>
            <img src={logo} alt="logo"/>
        </div>
    );
};