import React,{useEffect} from "react";
import Slide1 from "../slide1/Slide1";
import Slide2 from "../slide2/Slide2";
import Slide3 from "../slide3/Slide3";
import "./MainPage.css";

function MainPage(){
    useEffect(()=>{
        window.addEventListener('wheel', (e)=>{
          document.querySelector('.mainPage').scrollLeft += e.deltaX;
        })
        return()=>{
            window.removeEventListener('wheel', (e)=>{
                document.querySelector('.mainPage').scrollLeft += e.deltaX;
              })
        }
      })
    return(
        <div>
            <div className="mainPage">
                <Slide1/>
                <Slide2/>
                <Slide3/>
            </div>
        </div>
    )
}

export default MainPage;