import React from "react";
import {Navigation} from "../components/navigation/Navigation";
import {AddCarSection} from "../components/addCarSection/AddCarSection";
import {ServiceDescription} from "../components/serviceDescription/ServiceDescription";
import {Footer} from "../components/footer/Footer";
import {AboutUs} from "../components/aboutUs/AboutUs";
import {AboutProfit} from "../components/aboutProfit/AboutProfit";

export const App = () => {
    return (
        <div className="select-none">
            <Navigation />

            <AddCarSection/>

            <ServiceDescription/>

            <AboutUs />

            <AboutProfit/>

            <Footer/>
        </div>
    )
}