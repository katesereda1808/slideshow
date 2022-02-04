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
import faded3 from "./images3/fadedbg3.png";

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
        setNextPressed(false);
    }
    return(
        <div className="slide3">
            <div className="slide3__header1">
                    КЛЮЧЕВОЕ СООБЩЕНИЕ
                </div>
            <div id="slide3__text1">
                    Ehicula ipsum a arcu 
                    cursus vitae. Eu non 
                    diam phasellus 
                    vestibulum lorem sed 
                    risus ultricies
            </div>
            <div id="slide3__text2">
                    A arcu<br/>
                    cursus vitae
            </div>
            <img id="slide3__calendar" src={calendar}/>
            <img id="slide3__plate" src={plate}/>
            <img onClick={handleClick} id="slide3__btn" src={btn}/>
            {pressed&&
                <div className="newpage">
                <img src={faded3}/>
                    <div className="slide3__text_container">
                
                    <img onClick={handleClose} id="slide3__close" src={close}/>
                    <div className="slide3__text_container__header">
                    <p>ПРЕИМУЩЕСТВА</p>

                    { !nextPressed &&
                        
                    <div className="page">
                           
                        <div className="content">

                            <p className="paragraph">
                            <span className="nums">01</span><br/>
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit</p>

                            <p className="paragraph">
                            <span className="nums">02</span><br/>
                            Faucibus pulvinar elementum integer enim</p>

                            <p className="paragraph">
                            <span className="nums">03</span><br/>
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
                        <img onClick={previousPage} className="slide3__back3" src={back}/>
                    
                        <img onClick={nextPage} className="slide3__next3" src={next3}/>
                    </div>
                </div>
            </div>
            }
            <img id="slide3__blue_bubble1" src={blue_bubble}/>
            <img id="slide3__blue_bubble3" src={blue_bubble}/>
            <img id="slide3__bright_pink_bubble" src={bright_pink_bubble}/>
            <img id="slide3__blue_bubble4" src={blue_bubble}/>
            <img id="slide3__pink_bubble1" src={pink_bubble2}/>
            <img id="slide3__bottle" src={bottle}/>
            <img id="slide3__blue_bubble2" src={blue_bubble}/>
            <img id="slide3__pink_bubble2" src={pink_bubble}/>
            <img id="slide3__blue_bubble5" src={blue_bubble}/>
            <div id="slide3__header2">
                    BREND<span id="slide3__bold">XY</span>
            </div>
        </div>
    )
}

export default Slide3;