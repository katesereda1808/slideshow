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

function Slide1(props){
    return(
        <div className="slide1">
            <img className="slide1__blue1" src={blue1}/>
            <img id="slide1__blue2blurred" src={blue2blurred}/>
            <img id="slide1__pink2" src={pink2}/>
            <img id="slide1__blue4" src={blue4}/>
            <div className="slide1__text">
                <p>ПРИВЕТ,</p>
                <p className="slide1__big_text">ЭТО <span className="slide1__bold">НЕ</span><br></br>
                КОММЕРЧЕСКОЕ<br></br>
                ЗАДАНИЕ</p>
            </div>
            <img className="slide1__pink" src={pink}/>
            <img id="slide1__blue2" src={blue2}/>
            <img id="slide1__blue3" src={blue3}/>
            <img id="slide1__blue5" src={blue5}/>
            <img id="slide1__blue5blurred" src={blue5blurred}/>
            <img onClick={props.gonext} id="slide1__btn" src={btn}/>
            
        </div>
    )
}

export default Slide1;