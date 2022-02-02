import React from "react";
import "./Slide1.css";
import pink from "./images1/pink_sperm_1.png";
import blue1 from "./images1/layer-7.png";
import blue2 from "./images1/layer-5.png";
import blue2blurred from "./images1/layer-4-copy-2.png";
import pink2 from "./images1/pink_sperm.png";
import blue3 from "./images1/layer-8.png";
import blue4 from "./images1/bakti_1.png";
import blue5 from "./images1/layer-4.png";
import blue5blurred from "./images1/layer-4-blurred.png";
import btn from "./images1/btn1.png";
import icon from "../images/icon.png";
import logo from "../images/logo.png";

function Slide1(){
    function goNext(){
        document.querySelector('.mainPage').scrollLeft += 1024;
    }
    return(
        <div className="slide1">
            <img id="icon" src={icon}/>
            <img className="blue1__slide1" src={blue1}/>
            <img id="blue2blurred__slide1" src={blue2blurred}/>
            <img id="pink2__slide1" src={pink2}/>
            <img id="blue4__slide1" src={blue4}/>
            <div className="text__slide1">
                <p>ПРИВЕТ,</p>
                <p className="big_text__slide1">ЭТО <span className="bold__slide1">НЕ</span><br></br>
                КОММЕРЧЕСКОЕ<br></br>
                ЗАДАНИЕ</p>
            </div>
            <img className="pink__slide1" src={pink}/>
            <img id="blue2__slide1" src={blue2}/>
            <img id="blue3__slide1" src={blue3}/>
            <img id="blue5__slide1" src={blue5}/>
            <img id="blue5blurred__slide1" src={blue5blurred}/>
            <img onClick={goNext} id="btn__slide1" src={btn}/>
            <img id="logo" src={logo}/>
        </div>
    )
}

export default Slide1;