import { Button } from "react-bootstrap";
import ProductShowdata from "./ProductShowdata";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Stytled from './Layout.module.css';
import Testimage from "../components/Testimage";
import Formsale from "./Formsale";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Nav_Sm from "../components/Nav_Sm";
import ApiConection from "./ApiConection";
import React from "react";
import Menu from "./Menu";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Swal from 'sweetalert2'
import Showimage from "./Showimage";
import DatePicker from "react-datepicker";
function MainProduct({ name_1, value_1, }) {
  const [product2, setproduct2] = React.useState([]);
  const [onshows, setinshow_product] = React.useState(false)
  const [main_id, setmain_id] = React.useState('');
  const [namecompany, setnamecompany] = React.useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [getCompany, setNameCompany] = useState();
  const [getprice, setprice] = useState([]);

  const api = new ApiConection();
  const getPricefordisplay= async(id)=>{
    let company = id;
    const response = await api.getproduct('api/ValuesTwoController1');
    console.log(response);

    for(let i =0;i<response.length;i++)
    {
      if(response[i].min_name == company)
      {
        
      }
    }
   
  }

  useEffect(() => {
    let main_id = JSON.parse(window.sessionStorage.getItem('main_id'));
    let NameCompany = JSON.parse(window.sessionStorage.getItem('NameCompany'));
    setmain_id(main_id);
    setnamecompany(NameCompany);
    const fetchProductdata = async (event) => {
      const response = await api.getproduct('api/Products');

      if (response == "") {
        setinshow_product(false)
      }
      setinshow_product(true)
      response.map((obj) => {
        if (main_id == obj.main_id) {
          product2.push({
            id: obj.main_id,
            main_id: obj.main_id,
            Product_id: obj.product_id,
            productName: obj.productName,
            price: obj.price,
            product_description: obj.product_description
          })
        }
      })
    }
    fetchProductdata();

    setalldatas(main_id);
    setNameCompany(NameCompany);
    getPricefordisplay(getCompany);

  }, [])

  const testdata = [
    { name: 1, po: 'ล้างแอร์ติดผนัง', po1: 'ล้างแอร์ติดล้างแอร์ติดผนัง', p1: 500, p2: 900, p2: 1500 },
    { name: 2, po: 'ล้างแอร์ติดผนัง', po1: 'ล้างแอร์ติดล้างแอร์ตั้งพื้น', p1: 1500, p2: 900, p2: 1500 },
    { name: 2, po: 'ล้างแอร์ติดผนัง', po1: 'ล้างแอร์ติดล้างแอร์ตั้งพื้น', p1: 1500, p2: 900, p2: 1500 },
  ]

  const [keytest, setkey] = useState();
  const [alldatas, setalldatas] = useState([]);
  const [test, settest] = useState(testdata);

  const getdatamost = (dd, vv) => {
    let pp = "f";
    if (dd == vv) {
      pp = "oo";
    }
    return pp
  }

  const navigation = useNavigate();
  const handleClick1 = (event) => {
    navigation(`/Profile`);
  }



  const handleClick2 = (event) => {
    event.preventDefault();
    window.sessionStorage.setItem("Pass_product", JSON.stringify(main_id));
    window.sessionStorage.setItem("NameCompany", JSON.stringify(namecompany));
    Swal.fire({
      title: "ต้องการซื้อบริการนี้?",
      text: "คุณต้องการซื้อบริการนี้ใช้ไหม!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ใช้ ฉันต้องการ!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "ยืนยัน!",
          text: "ขอบคุณที่ได้บริการ",
          icon: "success"
        });
        navigation(`/Formsale`);
      }
    });


  }
  function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button size="lg" className={Stytled.sz_12} onClick={handleShow}  >
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <div className="row">
            <div className="col">
              <Offcanvas.Header className="justify-content-center" closeButton>
                <Offcanvas.Title >สั่งซื้อสินค้า</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <div className="d-flex justify-content-center">
                  <Button size="lg" className={Stytled.sz_12}><i class="bi bi-arrow-up-right-square "></i> ล้างแอร์ธรรมดา</Button>{' '}
                  <Button size="lg" className={Stytled.sz_12}><i class="bi bi-arrow-up-right-square "></i> ล้างแอร์ธรรมดา</Button>{' '}
                  <Button size="lg" className={Stytled.sz_12}><i class="bi bi-arrow-up-right-square "></i> ล้างแอร์ธรรมดา</Button>{' '}
                  <Button size="lg" className={Stytled.sz_12}><i class="bi bi-arrow-up-right-square "></i> ล้างแอร์ธรรมดา</Button>{' '}
                </div>
              </Offcanvas.Body>
            </div>
          </div>
        </Offcanvas>
      </>
    );
  }



  return (
    <>
      <Layout header={'MainProduct'}>      
            <div className={`container ${Stytled.mianorder}`}>
               {/** displays_image **************/}
              <aside className={Stytled.copsh}>
                <Showimage />
              </aside>
           {/** displays_details **************/}
              <article className={Stytled.cops2}>
                <div className="">
                  <span style={{ fontSize: "20px" }}><strong>{getCompany}</strong></span>
                </div>
                {/** ราคา*/}
                <div className="mt-3">
                  <h2><span className="fw-bold" style={{ fontSize: "28px" }}>฿  500</span></h2>
                </div>

           
                {/** ปุ่ม */}
                <div className="d-flex">
                  {/* <Button size="lg" href="/Formsale" className={Stytled.sz_12} >สั่งซื้อบริการ</Button>{' '} */}
                  <div className="mt-3 mb-5 w-100">
                    <Button variant="outline-primary" className={Stytled.sz_12} onClick={handleClick2}>สั่งซื้อบริการ</Button>{' '}
                    <OffCanvasExample placement={'bottom'} name={'ติดต่อร้านค้า'} />
                  </div>
                </div>
                {/** รายละเอียด part1 */}
                <div className="">
                  <p><span className="fw-bold " style={{ fontFamily: 'Kanit, sans-serif' }}>คุณสมบัติเด่น</span></p>
                  <div className="d-flex">
                    <div className="w-50">
                      <p><span className="">การให้คะแนน</span></p>
                      <div className={`p-2 ${Stytled.bdr_no}`}>
                        <span class="fa fa-star checked" style={{ color: 'orange' }}></span>
                        <span class="fa fa-star" style={{ color: 'orange' }}></span>
                        <span class="fa fa-star" style={{ color: 'orange' }}></span>
                        <span class="fa fa-star" style={{ color: 'orange' }}></span>
                        <span class="fa fa-star" style={{ color: 'orange' }}></span>
                      </div>
                    </div>
                    <div className="w-50">
                      <p><span className="">เขตพื้นที่</span></p>
                      <div className={Stytled.bdr_no}>
                        <p><span>บางเขน</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                {/** รายละเอียด part2*/}
                <div className="d-flex mt-3">
                  <div className="w-50 p-1">
                    <p><span className="fw-bold" style={{ fontFamily: 'Kanit, sans-serif' }}>รายละเอียดสินค้า</span></p>
                    <p><span>ไม่มีคำอธิบาย</span></p>
                  </div>
                </div>
                {/** ผู้ให้บนิการ */}
                <div className="mt-5 mb-5 ">
                  <p><span className="fw-bold " style={{ fontFamily: 'Kanit, sans-serif' }}>ผู้ให้บริการ</span></p>
                  <div style={{ maxWidth: '100%', backgroundColor: 'rgb(241, 243, 246)' }}>
                    <div class="row g-0 p-2">
                      <div class="col">
                        <img width={120} style={{ borderRadius: '50%' }} src={require("../images/r1.jpg")} alt="..." />
                      </div>
                      <div class="col p-2">
                        <div>
                          <h5><span>{getCompany}</span></h5>
                          
                        </div>
                      </div>
                      <div class="col p-2">
                        <div class="d-flex">
                          <Button href="/Profile" variant="outline-dark" ><i class="bi bi-arrow-up-right-square "></i>โทร</Button>{' '}
                          <Button href="/Profile" variant="outline-primary" ><i class="bi bi-arrow-up-right-square "></i>ติดต่อร้านค้า</Button>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>          
            </div>
            
      </Layout >


    </>
  )
}
export default MainProduct;