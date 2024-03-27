import Stytled from './Layout.module.css';
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const indicators = (index) => (<div className={Stytled.indicator}>{index + 1}</div>);
function Testfile() {

    return (
        <>
            <div className={`container ${Stytled.product_list}`}>
                <div className={Stytled.div1}>
                    <div className={Stytled.ppso1}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <div className={Stytled.div2}>
                    <div class="container">
                        <div class="row">
                            <div class="col" style={{ padding: '0' }}>
                                <div className={Stytled.cb_s5}>
                                    <img src={require("../images/BKB1.jpg")} class="" alt="..." height={180} width={205}></img>
                                    <h5>Card title</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div class="col" style={{ padding: '0' }}>
                                <div className={Stytled.cb_s5}>
                                    <img src={require("../images/BKB1.jpg")} class="" alt="..." height={180} width={205}></img>
                                    <h5>Card title</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div class="col" style={{ padding: '0' }}>
                                <div className={Stytled.cb_s5}>
                                    <img src={require("../images/BKB1.jpg")} class="" alt="..." height={180} width={205}></img>
                                    <h5>Card title</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div class="col" style={{ padding: '0' }}>
                                <div className={Stytled.cb_s5}>
                                    <img src={require("../images/BKB1.jpg")} class="" alt="..." height={180} width={205}></img>
                                    <h5>Card title</h5>
                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>


                        </div>



                        <div className='w-50'>
                            <Zoom indicators={indicators} scale={1.4}>
                                <div className="each-slide-effect">
                                    <div style={{
                                        backgroundImage: 'url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'
                                    }}>
                                        <img src={require("../images/BKB1.jpg")} class="" alt="..." height={180} width={205}></img>
                                        <span>
                                            Slide 1
                                        </span>
                                    </div>
                                </div>
                                <div className="each-slide-effect">
                                    <div style={{
                                        backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)'
                                    }}>
                                        <img src={require("../images/BKB1.jpg")} class="" alt="..." height={180} width={205}></img>
                                        <span>
                                            Slide 2
                                        </span>
                                    </div>
                                </div>
                                <div className="each-slide-effect">
                                    <div style={{
                                        backgroundImage: 'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'
                                    }}>
                                        <img src={require("../images/BKB1.jpg")} class="" alt="..." height={180} width={205}></img>
                                        <span>
                                            Slide 3
                                        </span>
                                    </div>
                                </div>
                            </Zoom>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Testfile;

