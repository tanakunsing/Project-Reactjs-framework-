import Stytled from './Layout.module.css';
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header({ header }) {
  const [getHeader, setLogin] = useState();
  useEffect(() => {
    setLogin(header);
  }, [])
  return (
    <>
      {
        getHeader != "บริการของเรา" && getHeader != "MainProduct"
        &&

        <div className={Stytled.bg_hg}>
          <div className={Stytled.ck7jps}>
              <input class="form-control mr-sm-2" style={{ borderRadius: '0' }} type="search" placeholder="กำลังค้นหาอะไรอยู่?" aria-label="Search" />
          </div>
        </div>
      }
      {
        getHeader == "บริการของเรา" &&
        <div className={Stytled.bg_hg1k}>
          <div className={Stytled.in_bg_hg1k}>
            {/***  แถบนำทาง */}
            <nav className={Stytled.poess}>
              <form class={`form-inline ${Stytled.formsk}`}>
                <input class="form-control mr-sm-2" style={{ borderRadius: '0' }} type="search" placeholder="ค้นหา" aria-label="Search" />
                <button type="button" class={`btn btn-outline-secondary ${Stytled.btnsk}`}>ค้นหา</button>

              </form>{/*  
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse pull-right fs-5" id="navbarNavAltMarkup" style={{ fontFamily: 'Kanit, sans-serif' }}>
                  <div class="navbar-nav ">
                    <Link to="/StartRegister" class="nav-item nav-link active text-light">สมัครงานกับเรา</Link>
                    <Link to="/" class="nav-item nav-link text-light" >บริการของเรา</Link>
                    <Link to="/Status_check" class="nav-item nav-link text-light" >ตรวจสอบสถานะ</Link>
                  </div>
                </div>
                */}
              <div className={Stytled.btnRes}>
                <button type="button" class="btn btn-outline-secondary">ทุกจังหวัด</button>
                <button type="button" class="btn btn-outline-secondary ms-2">ทุกเขต</button>
              </div>
            </nav>
          </div>

        </div>
      }
      {
        getHeader == "MainProduct" &&
        <div className={Stytled.bg_hg1k}>
          <div className='container shadow' style={{ display: 'flex', justifyContent: 'center' }}>
            {/***  แถบนำทาง */}
          </div>
        </div>
      }
    </>
  )

}
export default Header;