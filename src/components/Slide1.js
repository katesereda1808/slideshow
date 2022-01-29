import React from "react";
import "./Slide1.css";
import pink from "./images/pink_sperm_1.png";
import blue1 from "./images/layer-7.png";
import blue2 from "./images/layer-5.png";
import blue2blurred from "./images/layer-4-copy-2.png";
import pink2 from "./images/pink_sperm.png";
import blue3 from "./images/layer-8.png";
import blue4 from "./images/bakti_1.png";
import blue5 from "./images/layer-4.png";
import blue5blurred from "./images/layer-4-blurred.png";


function Slide1(){
    return(
        <div className="slide">
            <img className="blue1" src={blue1}/>
            <img id="blue2blurred" src={blue2blurred}/> 
            <div className="text">
                <p>ПРИВЕТ,</p>
                <p className="big_text">ЭТО <span className="bold">НЕ</span><br></br>
                КОММЕРЧЕСКОЕ<br></br>
                ЗАДАНИЕ</p>
            </div>
            <img className="pink" src={pink}/>
            <img id="pink2" src={pink2}/>
            <img id="blue2" src={blue2}/>
            <img id="blue3" src={blue3}/>
            <img id="blue4" src={blue4}/>
            <img id="blue5" src={blue5}/>
            <img id="blue5blurred" src={blue5blurred}/>
        </div>
    )
}
export default Slide1;