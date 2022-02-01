import React from "react";

import Slide1 from "../slide1/Slide1";
import Slide2 from "../slide2/Slide2";
import Slide3 from "../slide3/Slide3";
import "./MainPage.css";


      

function MainPage(){
    return(
        <div className="mainPage">
    <div><Slide1/></div>
    <div><Slide2/></div>
    <div><Slide3/></div>
          
                
            
        </div>
    )
}
export default MainPage;