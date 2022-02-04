import React,{useEffect} from "react";
import Slide1 from "../slide1/Slide1";
import Slide2 from "../slide2/Slide2";
import Slide3 from "../slide3/Slide3";
import HomeBtn from "../HomeBtn";
import logo from "../images/logo.png";
import "./MainPage.css";

function MainPage(){
    function goHome(){
        document.querySelector('.mainPage').scrollTo({
                top:0,
                left:0,
                behavior: "smooth"
            })
        
    }
    function goNext(){
        document.querySelector('.mainPage').scrollLeft += 1024;
    }
    return(
        <div>
            <div className="mainPage">
                <div className="section"><Slide1 gonext={goNext}/></div>
                <div className="section"><Slide2/></div>
                <div className="section"><Slide3/></div>
            </div>
            <HomeBtn gohome={goHome}/>
            <img className="logo" src={logo}/>
        </div>
    )
}

export default MainPage;