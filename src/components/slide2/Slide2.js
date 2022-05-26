import React from "react";
import "./Slide2.css";
import pink1 from "./images2/pink-1.png";
import pink2 from "./images2/pink-2.png";
import pink3 from "./images2/pink-3.png";
import pink4 from "./images2/pink-4.png";
import pink5 from "./images2/pink-5.png";
import txt_bg from "./images2/txt_bg2.png"

function Slide2(){
    return(
        <div className="section">
            <div className="slide2">
                <div className="slide2__pink">
                    <img id="slide2__pink1" src={pink1}/>
                    <img id="slide2__pink2" src={pink2}/>
                    <img id="slide2__pink3" src={pink3}/>
                    <img id="slide2__pink4" src={pink4}/>
                    <img id="slide2__pink5" src={pink5}/>
                </div>
                <div className="slide2__header">
                    <p>ТЕКСТ<br/>
                    СООБЩЕНИЯ</p>
                </div>
                <img className="slide2__txt_bg" src={txt_bg}/>
                <div className="slide2__scrollingarea">
                <div className="slide2__text__container">
                    <p className="slide2__text">
                    Lorem ipsum sapien&nbsp;&mdash; sagittis mattis tellus pharetra vivamus, gravida sit lectus porta vulputate cursus sodales congue nam urna odio in et, malesuada, sed auctor. Eu, arcu nam lorem&nbsp;&mdash; tempus malesuada pellentesque urna ipsum malesuada porta eu congue quisque elementum magna odio eget at arcu, tellus. Sagittis porttitor tempus odio gravida ligula: in cursus non vitae justo. Cursus gravida ornare donec leo tempus at non vulputate eget amet morbi porta malesuada magna ut tempus at commodo. Proin in: morbi mattis pellentesque adipiscing et amet fusce amet, curabitur&nbsp;&mdash; bibendum eros et malesuada vivamus eget, nibh ornare. Mauris ut, massa pellentesque, arcu massa, sit ligula diam fusce enim. Nec porttitor: quisque morbi fusce ultricies urna magna adipiscing quisque. In donec adipiscing porttitor eros amet metus morbi donec ultricies, vivamus integer metus lectus. Vitae, ligula enim sit amet, molestie sit eu mattis amet maecenas metus porta: mauris nam. Curabitur nec adipiscing amet mauris ipsum, tempus lorem proin, leo vitae in, nam: arcu ultricies, nibh fusce donec. Auctor lectus urna, curabitur et nam, arcu adipiscing nec: diam sapien sit, nam molestie, ipsum adipiscing maecenas vitae nam. Curabitur nulla porttitor arcu massa ultricies molestie diam nibh, fusce vitae tempus bibendum gravida elementum vulputate lectus rutrum bibendum. At nulla commodo morbi gravida tempus at, ut eu, orci. Porta sem proin molestie ut gravida in, nulla vitae auctor ultricies metus. Nulla, pellentesque ultricies sed: curabitur massa nam bibendum, sem amet&nbsp;&mdash; vivamus justo amet pellentesque rutrum, pellentesque. Enim eros magna nulla at urna proin ipsum nibh eu enim proin. In sit leo sagittis sed sem sed vitae non eu nulla donec sit, ipsum ornare, lorem odio leo vitae tellus proin a odio. Eu donec tempus porta proin commodo: urna lorem eget at tellus. Diam eget adipiscing gravida mauris risus nibh magna porta porttitor, sodales tellus adipiscing vitae adipiscing non curabitur duis. Tempus massa curabitur donec metus bibendum, mattis vivamus mattis lorem auctor amet fusce commodo metus diam justo in&nbsp;&mdash; urna, sagittis cursus commodo curabitur vitae. Et lectus, enim nulla enim amet diam gravida et sit elementum magna gravida vulputate. Amet rutrum justo malesuada sapien morbi ligula justo urna vitae in ultricies morbi ut orci proin sed porttitor bibendum mauris. Eu fusce magna sagittis eu cursus ipsum sodales porttitor commodo auctor nulla rutrum sit proin sed enim urna eget pharetra metus auctor eu. Sem magna leo a urna orci ultricies massa morbi justo pharetra sagittis quam ultricies at orci morbi.
                    </p>
                </div>
            
                </div>
                <div className="slide2__hideoverflow">
                    <div className="slide2__block1">
                    </div>
                    <div className="slide2__block2">
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Slide2;