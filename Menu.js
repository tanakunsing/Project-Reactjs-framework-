import { useEffect, useState } from 'react';

import Contact from './Contact';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Styled from './Layout.module.css';
import Css from './Layoutst.module.css'
function Menu() {


    return (
        <>

            <div className={Css.navberphk}>

                <div className={Css.logoimage}>
                    <a href='/Home' className={Css.logodisplay}>
                        <img src={require('../images/logo-cc.png')} width={200} height={40}></img>
                    </a>
                </div>
                <div className={Css.datsdw}>
                    <a href='/Product'>บริการของเรา</a>
                    <a href='/Status_check'>ติดต่อเรา</a>
                    <div className={Css.datsdw_butto}><a href='/StartRegister' >ลงขาย</a></div>
                </div>

            </div>
            {/*<nav class='navbar navbar-expand-lg navbar-light' style={{ fontFamily: 'Kanit, sans-serif' }}>
                <div className='border border-1 p-3'>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/Home"><img src={require('../images/logo-cc.png')} width={250} height={50}></img></Link>
                    <div class="collapse navbar-collapse pull-right fs-5" id="navbarNavAltMarkup" style={{ fontFamily: 'Kanit, sans-serif', justifyContent: 'end' }}>
                        <div class="navbar-nav ">
                            <Link to="/StartRegister" class="nav-item nav-link active text-dark">สมัครงานกับเรา</Link>
                            <Link to="/Product" class="nav-item nav-link text-dark" >บริการของเรา</Link>
                            <Link to="/Status_check" class="nav-item nav-link text-dark" >ตรวจสอบสถานะ</Link>
                        </div>
                    </div>
                </div>
            </nav>
            */}
        </>
    )

}
export default Menu;