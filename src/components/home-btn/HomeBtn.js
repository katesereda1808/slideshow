import React from "react";
import "./HomeBtn.css";
import icon from "../images/icon.png";
import logo from "../images/logo.png";

function HomeBtn(props){
    return(
            <>
            <img onClick={props.gohome} className="homebtn" src={icon}/>
            <img className="logo" src={logo}/>
            </>
    )
}

export default HomeBtn;