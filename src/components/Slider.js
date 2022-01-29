import React from "react";
import "./Slider.css";
import pink from "./images/pink_sperm_1.png";
// import pink from "./images/pinkSperm.svg";
function Slider(){
    let sliderArr = [1,2,3,4,5]
    return(
        
        <div className="slider">
             <img className="img" src={pink}/>
            {sliderArr.map((item, index)=>{
              return(
                <div key={index} className="slide">
                    {item}
                   
                </div>
              )
            })}
            <button id="goLeft">left</button>
            <button id="goRight">right</button>
        </div>
    )
}
export default Slider;