import Layout from "./Layout";
import Stytled from './Layout.module.css';
import Product from "./Product";
import { useNavigate, Link } from "react-router-dom";
import { Button, Spinner } from 'react-bootstrap';
import Welcomdata from "./Welcomdata";
import React, { useState, useEffect } from 'react';
import ApiConection from "./ApiConection";
import Stack from '@mui/material/Stack';
import Buttons from '@mui/material/Button';
import Css from './Layoutst.module.css'
import ProductShowdata from "./ProductShowdata";

function Home() {
  const api = new ApiConection();
  const [count, setCount] = useState();

  const handleLogin = async (event) => {
    const response = await api.getData('api/Member_API/10');
    console.log(response);

  }

  useEffect(() => {
    handleLogin();
    //ดึงข้อมูลมาแสดงโชว์

  }, []);



  return (
    <>

      <Layout header={'HOME'}>
        <aside >
          {/* displays*/}
        </aside>
        <article>
          <div className={Stytled.mtst}>
            <h1 className={Stytled.tusgke}><span className={Stytled.ghjjd}>สินค้าและบริการล้างแอร์ ที่สุดของประเทศ</span></h1>
          </div>
          <div className={Css.displalys_shw}>
            <div className={Css.in_displalys}>
              <div className={Css.ins_displalys}>
                <img src={require("../images/sse5.png")} ></img>
                <div className={Css.context_ins}>
                  <h4>ทำงานทันที</h4>
                  <p>สามารถเริ่มงานได้ทันทีสะดวกรวดเร็ว</p>
                </div>
              </div>
              <div className={Css.ins_displalys}>
                <img src={require("../images/sse5.png")} ></img>
                <div className={Css.context_ins}>
                  <h4>สะดวกรวดเร็ว</h4>
                  <p>สามารถเริ่มงานได้ทันทีสะดวกรวดเร็ว</p>
                </div>
              </div>
              <div className={Css.ins_displalys}>
                <img src={require("../images/sse5.png")} ></img>
                <div className={Css.context_ins}>
                  <h4>ผ่านมาตรฐาน</h4>
                  <p>สามารถเริ่มงานได้ทันทีสะดวกรวดเร็ว</p>
                </div>
              </div>
              <div className={Css.ins_displalys}>
                <img src={require("../images/sse5.png")} ></img>
                <div className={Css.context_ins}>
                  <h4>ปลอดภัย 100%</h4>
                  <p>สามารถเริ่มงานได้ทันทีสะดวกรวดเร็ว</p>
                </div>
              </div>
              <div className={Css.ins_displalys}>
                <img src={require("../images/sse5.png")} ></img>
                <div className={Css.context_ins}>
                  <h4>ประหยัดคุ้มค่า</h4>
                  <p>สามารถเริ่มงานได้ทันทีสะดวกรวดเร็ว</p>
                </div>
              </div>
              
            </div>
          </div>
          <section className='saleService'>
            <div className={Css.homeslae}>

              <div className={Css.homeslae_in}>
                <div className={Css.text_box}>
                  <span className={Stytled.ghjjd}>ประกาศล่าสุด ในหมวดหมู่มือถือ ล้างแอร์</span>
                </div>
                <div className={Css.text_box}>
                <div className={Css.detail_next}>
                <h1><a href="Product" className="font_design">ดูทั้งหมด..</a></h1>
              </div>
                </div>
              </div>
              <div className={`${Stytled.key23}`}>
                <ProductShowdata selectCounty={"บางเขน"} pageck={"HOME"} />
              </div>

            
            </div>
          </section>


          {/*}   <section className="content">
            <div className={Css.disbottom}>
            <div class={`card ${Css.card_so}`} style={{width: '18rem'}}>
                <img src={require("../images/sse5.png")} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
              <div class={`card ${Css.card_so}`} style={{width: '18rem'}}>
                <img src={require("../images/sse5.png")} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>
              <div class={`card ${Css.card_so}`} style={{width: '18rem'}}>
                <img src={require("../images/sse5.png")} class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
              </div>

            </div>
          </section>
             <div className="mt-2 mb- bg-white p-3 ">
                <p className="fw-bold">บริการของเรา</p>
                <div className={`${Stytled.key23}`}>
                <ProductShowdata selectCounty={"บางเขน"} pageck={"HOME"}/>
                </div>
              </div>
               */}

          {/*details
          <section className="details">
          <div className={`border border-1 mt-2 mb-2 ${Stytled.out_sometings}`}>
            <div className={Stytled.sometings2}>
              <div className={Stytled.tell_dis}>
                <p>ผู้ใช้บริการ</p>
                <p>ไม่มีขั้นตอนยุ่งยากในการลงขาย<br />
                  เลือกโซนในการลงประกาศเพื่อเพิ่มโอกาสปิดการขายได้ไวยิ่งขึ้น<br />
                  มีทีมงานคอยตอบคำถามหากคุณต้องการข้อมูลในการช่วยเพิ่มยอดขาย<br />
                  มีระบบหลังบ้าน ที่ทำให้คุณจัดการรายการประกาศได้สะดวก</p>
              </div>

            </div>
            <div className={Stytled.sometings2}>
              <div className={Stytled.tell_dis}>
                <p>ผู้ใช้บริการ</p>
                <p>ไม่มีขั้นตอนยุ่งยากในการลงขาย<br />
                  เลือกโซนในการลงประกาศเพื่อเพิ่มโอกาสปิดการขายได้ไวยิ่งขึ้น<br />
                  มีทีมงานคอยตอบคำถามหากคุณต้องการข้อมูลในการช่วยเพิ่มยอดขาย<br />
                  มีระบบหลังบ้าน ที่ทำให้คุณจัดการรายการประกาศได้สะดวก</p>
              </div>
            </div>
          </div>
          </section>
          
          {/*ทำไมต้องเลือกซื้อบริการกับเรา*/}

        </article>



      </Layout >

    </>
  )
}
export default Home;