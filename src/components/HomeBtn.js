import React from "react";
import "./HomeBtn.css";
import icon from "./images/icon.png";

function HomeBtn(props){
    return(
            <img onClick={props.gohome} className="homebtn" src={icon}/>
    )
}

export default HomeBtn;