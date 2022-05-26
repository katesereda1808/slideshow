import React from "react";
import Slide1 from "../slide1/Slide1";
import Slide2 from "../slide2/Slide2";
import Slide3 from "../slide3/Slide3";
import HomeBtn from "../home-btn/HomeBtn";
import "./MainPage.css";

function MainPage(){
    const goHome=()=>{
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
        });
    }
    const ref = React.createRef();

    return(
        <>
            <div ref={ref} className="mainPage">
                <Slide1 gonext={goNext}/>
                <Slide2/>
                <Slide3/>
            </div>
            <HomeBtn gohome={goHome}/>
        </>
    )
}
export default MainPage;