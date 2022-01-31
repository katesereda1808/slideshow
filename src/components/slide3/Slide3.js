import React,{useEffect, useState} from "react";
import "./Slide3.css";
import blue_bubble from "./images3/blue-bubble.png";
import pink_bubble from "./images3/pink-bubble.png";
import pink_bubble2 from "./images3/pink-bubble2.png";
import bright_pink_bubble from "./images3/bright-pink-bubble.png";
import btn from "./images3/btn.png";
import calendar from "./images3/calendar.png";
import plate from "./images3/plate.png";
import bottle from "./images3/bottle.png";
import icon from "../images/icon.png";
import logo from "../images/logo.png";

function Slide3(){
    const [pressed, setPressed] = useState(false);

    function handleClick(){
        console.log("кликнуто");
        setPressed(true);
    }
    console.log(pressed)
    return(
        <div className="slide3">

            <img id="icon" src={icon}/>
            <div className="header1__slide3">
                    КЛЮЧЕВОЕ СООБЩЕНИЕ
                </div>
            
            <div id="text1__slide3">
                    Ehicula ipsum a arcu 
                    cursus vitae. Eu non 
                    diam phasellus 
                    vestibulum lorem sed 
                    risus ultricies
            </div>
            <div id="text2__slide3">
                    A arcu<br/>
                    cursus vitae
            </div>
            <img id="calendar__slide3" src={calendar}/>
            <img id="plate__slide3" src={plate}/>
            <img onClick={handleClick} id="btn__slide3" src={btn}/>








            {pressed&&
           

            <div className="text__container__slide3">
                <div className="text__container__header__slide3">
                    <p>ПРЕИМУЩЕСТВА</p>
                </div>
                {/* {
                    еще 1 условный рендеринг, надата 1 или 2 страница

                } */}
                
            </div>
            

            

            }


            <div id="bottle_and_bubbles__slide3">

            <img id="blue_bubble1__slide3" src={blue_bubble}/>
            <img id="blue_bubble3__slide3" src={blue_bubble}/>
            <img id="bright_pink_bubble__slide3" src={bright_pink_bubble}/>
            <img id="blue_bubble4__slide3" src={blue_bubble}/>
            <img id="pink_bubble1__slide3" src={pink_bubble2}/>
            <img id="bottle__slide3" src={bottle}/>
            <img id="blue_bubble2__slide3" src={blue_bubble}/>
            <img id="pink_bubble2__slide3" src={pink_bubble}/>
            <img id="blue_bubble5__slide3" src={blue_bubble}/>

            </div>

            <div id="header2__slide3">
                    BREND<span id="bold__slide3">XY</span>
            </div>


            {/* <div className="text__container">
                <div className="text__container__header1">
                    <p>ПРЕИМУЩЕСТВА</p>
                </div>
                <div className="text__container__header2">
                    <p>BRENDXY</p>
                </div>
            
                    <p className="text__container__text">
                    Ehicula ipsum a arcu 
                    cursus vitae. Eu non 
                    diam phasellus 
                    vestibulum lorem sed 
                    risus ultricies
                    </p>

                    <p className="text__container__text">
                    A arcu 
                    cursus vitae
                    </p>
            </div> */}



            
            <img id="logo" src={logo}/>
           

           
            
        </div>
    )
}
export default Slide3;