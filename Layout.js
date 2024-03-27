import Header from './Header';
import Menu from './Menu';
import Stytled from './Layout.module.css';
import Breadcrumb from './BreadcrumbLabel';
import Css from './Layoutst.module.css'
import { useEffect } from 'react';
import Testimage from "../components/Testimage";

function Layout({ header, children }) {


    return (
        <>
            <div className={`container ${Css.headerlayout}`}>
                <nav className={Stytled.nav_Layout}>
                    <div>
                        <Menu />
                    </div>
                </nav>
                {/* header */}
                <header>
                    <div className={Css.in_header}>
                        {
                            header == 'HOME' &&
                            <Testimage />
                        }
                    </div>
                </header>
            </div>
            <div className='long_header'>
                {
                    header == 'บริการของเรา' &&
                    <Header header={header} />
                }
                {/* <Header header={header} />  */}
            </div>
            <div className={Css.Breadcrumb_header}>
                <Breadcrumb header={header} />
            </div>
            <div className={`container ${Css.sizeScr}`}>

                {/* context */}
                <main>
                    {children}
                </main>
            </div>
            {
                header == 'HOME' &&
                <section className={Stytled.details}>
                    <div className={`container ${Stytled.out_sometings}`}>
                        <div className={Stytled.mtst}>
                            <h1 className={Stytled.tusgke}><span className={Stytled.ghjjd}>ตอบโจทย์ทุกการซื้อ - ขาย</span></h1>
                        </div>
                        <div className={Stytled.details_in}>

                            <img src={require('../images/detail_image3.png')} className={Css.image_for_details} ></img>

                            <div className={Stytled.sometings2}>
                                <div className={Stytled.tell_dis}>
                                    <h1>ผู้ขาย</h1>
                                    <p>ไม่มีขั้นตอนยุ่งยากในการลงขาย<br />
                                        เลือกโซนในการลงประกาศเพื่อเพิ่มโอกาสปิดการขายได้ไวยิ่งขึ้น<br />
                                        มีทีมงานคอยตอบคำถามหากคุณต้องการข้อมูลในการช่วยเพิ่มยอดขาย<br />
                                        มีระบบหลังบ้าน ที่ทำให้คุณจัดการรายการประกาศได้สะดวก</p>
                                    <div className={Css.datsdw_butto}><a href='/StartRegister' >ลงขาย</a></div>
                                </div>
                            </div>
                            <div className={Stytled.sometings2_p}>
                                <div className={Stytled.tell_dis}>
                                    <h1>ผู้ใช้บริการ</h1>
                                    <p>ไม่มีขั้นตอนยุ่งยากในการลงขาย<br />
                                        เลือกโซนในการลงประกาศเพื่อเพิ่มโอกาสปิดการขายได้ไวยิ่งขึ้น<br />
                                        มีทีมงานคอยตอบคำถามหากคุณต้องการข้อมูลในการช่วยเพิ่มยอดขาย<br />
                                        มีระบบหลังบ้าน ที่ทำให้คุณจัดการรายการประกาศได้สะดวก</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            }

            <section className='content2'>
                <div className={`container ${Css.content_hw}`}>
                    <div className={Css.in_content_hw}>
                        <div className={Css.layout_content}>
                            <div className={Css.text_box_content2}>
                                <h1>ช่วยประหยัดไฟ</h1>
                                <p>การล้างแอร์บ้าน ช่วยลดการทำงานของตัวคอมเพรสเซอร์ ทำให้ลดค่าไฟ และประหยัดค่าใช้จ่ายลดลงได้อีกด้วย</p>
                            </div>
                            <div className={Css.text_box_content2}>
                                <h1>ช่วยประหยัดไฟ</h1>
                                <p>การล้างแอร์บ้าน ช่วยลดการทำงานของตัวคอมเพรสเซอร์ ทำให้ลดค่าไฟ และประหยัดค่าใช้จ่ายลดลงได้อีกด้วย</p>
                            </div>
                            <div className={Css.text_box_content2}>
                                <h1>ช่วยประหยัดไฟ</h1>
                                <p>การล้างแอร์บ้าน ช่วยลดการทำงานของตัวคอมเพรสเซอร์ ทำให้ลดค่าไฟ และประหยัดค่าใช้จ่ายลดลงได้อีกด้วย</p>
                            </div>
                        </div>
                        <div className={Css.layout_content}>
                            <div className={Css.text_box_content2}>
                                <h1>ช่วยประหยัดไฟ</h1>
                                <p>การล้างแอร์บ้าน ช่วยลดการทำงานของตัวคอมเพรสเซอร์ ทำให้ลดค่าไฟ และประหยัดค่าใช้จ่ายลดลงได้อีกด้วย</p>
                            </div>
                            <div className={Css.text_box_content2}>
                                <h1>ช่วยประหยัดไฟ</h1>
                                <p>การล้างแอร์บ้าน ช่วยลดการทำงานของตัวคอมเพรสเซอร์ ทำให้ลดค่าไฟ และประหยัดค่าใช้จ่ายลดลงได้อีกด้วย</p>
                            </div>
                            <div className={Css.text_box_content2}>
                                <h1>ช่วยประหยัดไฟ</h1>
                                <p>การล้างแอร์บ้าน ช่วยลดการทำงานของตัวคอมเพรสเซอร์ ทำให้ลดค่าไฟ และประหยัดค่าใช้จ่ายลดลงได้อีกด้วย</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className={Stytled.hhps}>
                <div className={`container ${Stytled.footcon}`}>
                    <div className={Stytled.footmnuyi}>
                        <div className={`fw-bold ${Stytled.mhds}`}>เกี่ยวกับ kaidee</div>
                        <div className={Stytled.mhds}>เกี่ยวกับเรา</div>
                        <div className={Stytled.mhds}>ติดต่อเรา</div>
                    </div>
                    <div className={Stytled.footmnuyi}>
                        <div className={`fw-bold ${Stytled.mhds}`}>ศูนย์ช่วยเหลือ</div>
                        <div className={Stytled.mhds}>ข้อกำหนดและเงื่อนไขการใช้งาน</div>
                        <div className={Stytled.mhds}>นโยบายความเป็นส่วนตัว</div>
                    </div>
                    <div cclassName={Stytled.footmnuyi}>
                        <div className={`fw-bold ${Stytled.mhds}`}>ติดต่อเรา</div>
                        <div className={Stytled.mhds}>บริษัท คลูคลีน จำกัด
                            กรุงเทพมหานคร 10110</div>
                        <div className={Stytled.mhds}>By Tanakunsingkhen</div>
                    </div>
                    <div className={Stytled.footmnuyi}>
                        <div className={`fw-bold ${Stytled.mhds}`}>เพื่อประสบการณ์ที่ดีขึ้น</div>
                    </div>
                </div>
            </footer>
        </>
    );

}
export default Layout;