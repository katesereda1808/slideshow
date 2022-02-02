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
import close from "./images3/btn_close.png";
import back from "./images3/btn_previous3.png";
import pink_circle from "./images3/circle_pink3.png";
import hollow_circle from "./images3/circle_hollow3.png";
import next3 from "./images3/btn_next3.png";
import icon from "../images/icon.png";
import logo from "../images/logo.png";

function Slide3(){
    const [pressed, setPressed] = useState(false);
    const [nextPressed, setNextPressed] = useState(false);
    function goHome3(){
        document.querySelector('.mainPage').scrollLeft -= 2048;
    }
    function handleClick(){
        setPressed(true);
    }
    function handleClose(){
        setPressed(false);
    }
    function nextPage(){
        setNextPressed(true);
    }
    function previousPage(){
        setNextPressed(false)
    }
    return(
        <div className="slide3">
            <img onClick={goHome3} id="icon" src={icon}/>
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
            <div className="text_container__slide3">
                <img onClick={handleClose} id="slide3__close" src={close}/>
                <div className="text_container__header__slide3">
                    <p>ПРЕИМУЩЕСТВА</p>

                        { !nextPressed &&
                        <div className="page">
                        <div className="content">

                            <p className="paragraph">
                            <span className="nums">01</span><br/>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit</p>

                            <p className="paragraph">
                            <span className="nums">01</span><br/>
                            Faucibus pulvinar elementum integer enim</p>

                            <p className="paragraph">
                            <span className="nums">01</span><br/>
                            Faucibus pulvinar elementum integer enim</p>

                        </div>
                        <img className="pink_circle_1page" src={pink_circle}/>
                        <img className="hollow_circle_1page" src={hollow_circle}/>
                        </div>
                        }
                        {  nextPressed &&
                        <div className="page">
                        <div className="content">

                            <p className="paragraph">
                            <span className="nums">04</span><br/>
                            Mi bibendum neque egestas congue quisque 
                            egestas diam</p>

                            <p className="paragraph">
                            <span className="nums">05</span><br/>
                            Venenatis lectus magna fringilla urna</p>

                            <p className="paragraph">
                            <span className="nums">06</span><br/>
                            Venenatis lectus magna fringilla urna</p>

                        </div>
                        <img className="pink_circle_2page" src={pink_circle}/>
                        <img className="hollow_circle_2page" src={hollow_circle}/>
                        </div>
                        }



                    <img onClick={previousPage} className="back3" src={back}/>
                    
                    <img onClick={nextPage} className="next3" src={next3}/>
                </div>
            </div>
            }
            <img id="blue_bubble1__slide3" src={blue_bubble}/>
            <img id="blue_bubble3__slide3" src={blue_bubble}/>
            <img id="bright_pink_bubble__slide3" src={bright_pink_bubble}/>
            <img id="blue_bubble4__slide3" src={blue_bubble}/>
            <img id="pink_bubble1__slide3" src={pink_bubble2}/>
            <img id="bottle__slide3" src={bottle}/>
            <img id="blue_bubble2__slide3" src={blue_bubble}/>
            <img id="pink_bubble2__slide3" src={pink_bubble}/>
            <img id="blue_bubble5__slide3" src={blue_bubble}/>
            <div id="header2__slide3">
                    BREND<span id="bold__slide3">XY</span>
            </div>
            <img id="logo" src={logo}/>
        </div>
    )
}

export default Slide3;