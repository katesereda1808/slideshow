import React from "react";
import "./Slide2.css";
import pink1 from "./images2/pink-1.png";
import pink2 from "./images2/pink-2.png";
import pink3 from "./images2/pink-3.png";
import pink4 from "./images2/pink-4.png";
import pink5 from "./images2/pink-5.png";
import icon from "../images/icon.png";
import logo from "../images/logo.png";

function Slide2(){
    function goHome2(){
        document.querySelector('.mainPage').scrollLeft -= 1024;
    }
    return(
        <div className="slide2">
            <img id="pink1__slide2" src={pink1}/>
            <img id="pink2__slide2" src={pink2}/>
            <img id="pink3__slide2" src={pink3}/>
            <img id="pink4__slide2" src={pink4}/>
            <img id="pink5__slide2" src={pink5}/>
            <img onClick={goHome2} id="icon" src={icon}/>
            <div className="text__slide2">
                <p>ТЕКСТ<br/>
                    СООБЩЕНИЯ</p>
            </div>
            <div className="text__container__slide2">
                <p>
                    Lorem ipsum sapien&nbsp;&mdash; sagittis mattis tellus pharetra vivamus, gravida sit lectus porta vulputate cursus sodales congue nam urna odio in et, malesuada, sed auctor. Eu, arcu nam lorem&nbsp;&mdash; tempus malesuada pellentesque urna ipsum malesuada porta eu congue quisque elementum magna odio eget at arcu, tellus. Sagittis porttitor tempus odio gravida ligula: in cursus non vitae justo. Cursus gravida ornare donec leo tempus at non vulputate eget amet morbi porta malesuada magna ut tempus at commodo. Proin in: morbi mattis pellentesque adipiscing et amet fusce amet, curabitur&nbsp;&mdash; bibendum eros et malesuada vivamus eget, nibh ornare. Mauris ut, massa pellentesque, arcu massa, sit ligula diam fusce enim.</p><p>Nec porttitor: quisque morbi fusce ultricies urna magna adipiscing quisque. In donec adipiscing porttitor eros amet metus morbi donec ultricies, vivamus integer metus lectus. Vitae, ligula enim sit amet, molestie sit eu mattis amet maecenas metus porta: mauris nam.</p><p>Curabitur nec adipiscing amet mauris ipsum, tempus lorem proin, leo vitae in, nam: arcu ultricies, nibh fusce donec. Auctor lectus urna, curabitur et nam, arcu adipiscing nec: diam sapien sit, nam molestie, ipsum adipiscing maecenas vitae nam. Curabitur nulla porttitor arcu massa ultricies molestie diam nibh, fusce vitae tempus bibendum gravida elementum vulputate lectus rutrum bibendum. At nulla commodo morbi gravida tempus at, ut eu, orci. Porta sem proin molestie ut gravida in, nulla vitae auctor ultricies metus. Nulla, pellentesque ultricies sed: curabitur massa nam bibendum, sem amet&nbsp;&mdash; vivamus justo amet pellentesque rutrum, pellentesque.</p><p>Enim eros magna nulla at urna proin ipsum nibh eu enim proin. In sit leo sagittis sed sem sed vitae non eu nulla donec sit, ipsum ornare, lorem odio leo vitae tellus proin a odio. Eu donec tempus porta proin commodo: urna lorem eget at tellus. Diam eget adipiscing gravida mauris risus nibh magna porta porttitor, sodales tellus adipiscing vitae adipiscing non curabitur duis. Tempus massa curabitur donec metus bibendum, mattis vivamus mattis lorem auctor amet fusce commodo metus diam justo in&nbsp;&mdash; urna, sagittis cursus commodo curabitur vitae.</p><p>Et lectus, enim nulla enim amet diam gravida et sit elementum magna gravida vulputate. Amet rutrum justo malesuada sapien morbi ligula justo urna vitae in ultricies morbi ut orci proin sed porttitor bibendum mauris. Eu fusce magna sagittis eu cursus ipsum sodales porttitor commodo auctor nulla rutrum sit proin sed enim urna eget pharetra metus auctor eu. Sem magna leo a urna orci ultricies massa morbi justo pharetra sagittis quam ultricies at orci morbi.
                </p>
            </div>
                <img id="logo" src={logo}/>
        </div>
    )
}

export default Slide2;