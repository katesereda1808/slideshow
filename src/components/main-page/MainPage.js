import React,{useEffect, useState, useRef, forwardRef} from "react";
import Slide1 from "../slide1/Slide1";
import Slide2 from "../slide2/Slide2";
import Slide3 from "../slide3/Slide3";
import HomeBtn from "../HomeBtn";
import logo from "../images/logo.png";
import "./MainPage.css";

function MainPage(){

    const [goback, setGoBack] = useState(false);
    const goHome=()=>{
        setGoBack(true);
        ref.current.scrollTo({
                top:0,
                left:0,
                behavior: "smooth"
            })
    }
    const goNext=()=>{
        ref.current.scrollTo({
            left:1024,
            behavior: "smooth"
        })
    }
    const ref = React.createRef();
    return(
        <div>
            <div ref={ref} className="mainPage">
                <div className="section"><Slide1 gonext={goNext}/></div>
                <div className="section"><Slide2/></div>
                <div className="section"><Slide3/></div>
            </div>
            <HomeBtn  gohome={goHome}/>
            <img className="logo" src={logo}/>
        </div>
    )
}
export default MainPage;