import Stytled from './Layout.module.css';
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const indicators = (index) => (<div className={Stytled.indicator}>{index + 1}</div>);
function Showimage() {

    return (
        <>
            <div className={Stytled.shwGk5}>
                <Zoom indicators={indicators} scale={1.4}>
                    <div className="each-slide-effect">
                        <div style={{height:'200px'}}>
                            <img src={require("../images/BKB1.jpg")} className={Stytled.szimg} alt="..." ></img>
                      
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{}}>
                            <img src={require("../images/M1.png")} className={Stytled.szimg}  alt="..." ></img>
                       
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{}}>
                            <img src={require("../images/M2.png")} className={Stytled.szimg}  alt="..."></img>
                     
                        </div>
                    </div>
                </Zoom>
            </div>
        </>
    )
}
export default Showimage;