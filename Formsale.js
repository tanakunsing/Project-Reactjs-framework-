import { useEffect } from "react";
import { useState } from 'react';
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import ApiConection from "./ApiConection";
import api from "./ApiConection";
import ReactDOM from 'react-dom/client';
import moment from 'moment/moment';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import * as React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import DatePicker from "react-datepicker";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "react-datepicker/dist/react-datepicker.css";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'


function Formsale() {

  const api = new ApiConection();
  const [startDate, setStartDate] = useState(new Date());
  var randomstring = require("randomstring");
  const [product3, setproduct3] = useState({});
  const [product4, setproduct4] = React.useState('');
  const [onshows, setinshow_product] = React.useState(false)
  const [onshows2, setinshow_product2] = React.useState(true)
  const [name, setName] = useState("");
  const [ex, setex] = useState("");
  const [getid_product, setid_product] = useState(0);
  const [getcompanyname, setcompanyname] = useState("");
  const [getCustomer_name, setCustomer_name] = useState("");
  const [getHouse_number, setHouse_number] = useState("");
  const [getPrice, setPrice] = useState(0);
  const [gettype, settype] = useState("");
  const [getCounty, setCounty] = useState("");
  const [getSubdisticrt, setSubdistrict] = useState("");
  const [getProvince, setProvince] = useState("");
  const [getPostal_code, setPostal_code] = useState(0);
  const [getAddress_details, setAddress_details] = useState("");
  const [getStatus_text, setStatus_text] = useState("รอยืนยัน");
  const [getIs_active, setIs_active] = useState(false);
  const [getcheck_email, setcheckemail] = useState("");
  const [getemail, setemail] = useState("");
  const [getphone, setphone] = useState(0);
  const [validated, setValidated] = useState(false);
  const [getem, setem] = useState("");
  const [Passwordconfig, setPasswordconfig] = useState(randomstring.generate(7));
  const [getconfig, setconfig] = useState();
  const form = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect(() => {
    console.log(startDate);
    let Pass_product = JSON.parse(window.sessionStorage.getItem('Pass_product'));
    let NameCompany = JSON.parse(window.sessionStorage.getItem('NameCompany'));
    setcompanyname(NameCompany);
    const fetchProductdata2 = async (event) => {
      const response = await api.getproduct('api/Products');
     
      if (response == "") {
        setinshow_product(false)
      }
      setinshow_product(true)
      console.log(response)
      response.map((obj) => {
        if (Pass_product == obj.product_id) {
          setPrice(obj.price);
          settype(obj.productName);
          setid_product(Math.floor(Math.random() * 1000000));


        }
      }
      )
    }

    fetchProductdata2();
  }, [])



  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e59le4n', 'template_ui6uhnt', form.current, 'YFSw4sVmXRpb89gqN')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    setinshow_product2(true)
    setShow(true)
  }


  const handleSubmit = (event) => {
    event.preventDefault();
   
        console.log(Passwordconfig)
        console.log(getconfig)
        if (Passwordconfig == getconfig) {
          let data = {
            id: 0,
            date: startDate,
            company_name: getcompanyname,
            customer_name: getCustomer_name,
            typeService: gettype,
            house_number: getHouse_number,
            price: getPrice,
            phone: getphone,
            email: getemail,
            check_Email: getconfig,
            county: getCounty,
            subdistrict: getSubdisticrt,
            province: getProvince,
            postal_code: getPostal_code,
            address_details: getAddress_details,
            status_text: getStatus_text,
            is_active: true,
            id_product: getid_product
          }
          api.postData(`api/Purchases`, data)
            .then(response => { console.log(response); })

            handleClose();
          Swal.fire(
            'Thank you!',
            'ขอบคุณลูกค้าที่เลือกใช้บริการกับทางเรา!',
            'success'
          )
          navigation(`/Purchase`);
        } else {
          alert('Password config in Email!')
        }
        window.sessionStorage.setItem("id_product", JSON.stringify(getid_product));
    }
  const navigation = useNavigate();
  const handleClick1 = (event) => {
    navigation(`/Purchase`);
  }

  return (
    <>
      <Layout header={'Formsale'}>
        {
          onshows == false &&
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>

        }



        <div style={{ marginBottom: '100px' }}>

          <div className="container">
            <div className="row">
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    {/****** แถบนำทางทแบข้าง*/}
                    <Nav variant="pills" className="flex-column fw-bold" style={{ marginTop: '20px' }}>
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ borderRadius: '0', }}>กรอกข้อมูลซื้อขายบริการ</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" style={{ borderRadius: '0' }}>ซื้อบริการแบบหน้าร้าน</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9} className="border border-1 mt-3">
                    {/******     แบบฟอร์มสั่งซื้อ    */}
                    <Tab.Content style={{ height: "auto" }}>
                      <Tab.Pane eventKey="first" style={{ marginTop: '20px' }}>
                  
                        <form ref={form} onSubmit={sendEmail} class="was-validated">
                          <div className="p-1 p-1 p-1 p-1 p-3 mb-5 bg-body rounded ">

                            <p className="ms-2">ที่อยู่</p>
                            <div className="w-75 ms-5">

                              <div class="form-group row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label" >บ้านเลขที่</label>
                                <div class="col-sm-10">
                                  <input type="text" onChange={(e) => setHouse_number(e.target.value)} class="form-control" required></input>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">แขวง</label>
                                <div class="col-sm-10">
                                  <input type="text" class="form-control" onChange={(e) => setSubdistrict(e.target.value)} placeholder="แขวง" required></input>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                                <label for="" class="col-sm-2 col-form-label">เขต</label>
                                <div class="col-sm-10">
                                  <input type="text" onChange={(e) => setCounty(e.target.value)} class="form-control" id="inputPassword3" placeholder="เขต" required></input>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                                <label for="" class="col-sm-2 col-form-label">จังหวัด</label>
                                <div class="col-sm-10">
                                  <input type="text" onChange={(e) => setProvince(e.target.value)} class="form-control" id="inputPassword3" placeholder="จังหวัด" required></input>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                                <label for="" class="col-sm-2 col-form-label">รหัสไปรษณ๊ย์</label>
                                <div class="col-sm-10">
                                  <input type="text" onChange={(e) => setPostal_code(e.target.value)} class="form-control" id="inputPassword3" placeholder="รหัสไปรษณ๊ย์" required></input>
                                </div>
                              </div>
                              <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">รายละเอียดเพิ่มเติม</label>
                                <textarea class="form-control" onChange={(e) => setAddress_details(e.target.value)} id="exampleFormControlTextarea1" rows="3" required></textarea>
                              </div>
                            </div>
                          </div>

                          <div className="border mt-5 p-3 mb-5 bg-body rounded">
                            <p className="ms-2">นัดหมาย</p>
                            <div className="w-75 ms-5">


                              <div class="form-group row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label" value={EventTarget}>วันที่</label>
                                <div class="col-sm-10">
                                  <DatePicker
                                    class="form-control"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    isClearable
                                    placeholderText="I have been cleared!"
                                    required
                                  />
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                              </div>
                            </div>
                          </div>
                          <div className="border mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                            <p className="ms-2">ข้อมูลส่วนตัว</p>
                            <div className="w-75 ms-5">
                              <div class="form-group row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label" value={EventTarget}>ชื่อติดต่อ</label>
                                <div class="col-sm-10">
                                  <input type="text" onChange={(e) => setCustomer_name(e.target.value)} class="form-control" id="inputEmail3" placeholder="ชื่อ-นามสกุล" required></input>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label" value={EventTarget}>เบอรโทร์</label>
                                <div class="col-sm-10">
                                  <input type="text" onChange={(e) => setphone(e.target.value)} class="form-control" id="inputEmail3" placeholder="เบอร์โทรศัพท์" required></input>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">อีเมล</label>
                                <div class="col-sm-10">
                                  <input name="user_email" type="email" onChange={(e) => setemail(e.target.value)} class="form-control" id="inputEmail3" placeholder="email" required></input>
                                  <input className='' type="hidden" name="message" onChange={(e) => setPasswordconfig(e.target.value)} value={Passwordconfig} ></input>
                                  <button class="btn btn-primary mt-4" type="submit">ส่งรหัสยืนยันตัวตน</button>


                                  <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                      <Modal.Title>ยืนยันตัวตน</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                          <Form.Label>โปรดใส่รหัสผ่าน</Form.Label>
                                          <Form.Control
                                            type="text"
                                            placeholder=""
                                            autoFocus
                                            onChange={(e) => setconfig(e.target.value)}
                                          />
                                        </Form.Group>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="exampleForm.ControlTextarea1"
                                        >
                                          
                                        </Form.Group>
                                      </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button variant="secondary" onClick={handleClose}>
                                        ส่งอีกครั้ง
                                      </Button>
                                      <Button variant="primary" onClick={handleSubmit} >
                                        ยืนยัน
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </div>
                              </div>
                              <div class="form-group row mb-3">
                              </div>
                            </div>
                          </div>
                        </form>
                        {
                          onshows2 == false &&
                          <>
                            <div className="border mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                              <p className="ms-2">ยืนยันตัวตน</p>
                              <div className="w-75 ms-5">

                                <div class="form-group row mb-3">
                                  <label for="inputEmail3" class="col-sm-2 col-form-label">รหัสยืนยัน</label>
                                  <div class="col-sm-10">
                                    <input type="text" onChange={(e) => setconfig(e.target.value)} class="form-control" id="inputEmail3" placeholder="Password" required></input>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>กดส่งคำสั่งซื้อ</button>
                            <div class="form-group row mt-3">

                              <div class="col-sm-10">

                              </div>
                            </div>
                          </>
                        }

                      </Tab.Pane>
                      {/**  แถบที่ 2 *********/}
                      <Tab.Pane eventKey="second" style={{ marginTop: '20px', height: '300px' }}>
                        <div className="" >
                          <span className="fs-5 p-5">ขออภัยหน้านี้ยังไม่พร้อมใช้บริการ</span>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>

              {/*
                <div class="col-4" style={{ marginTop: '20px' }}>
                <Card className="card shadow p-3 mb-5 bg-body rounde fixed ">
                  <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                      <Nav.Item >
                        <Nav.Link href="#first">฿500</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="text-primary"><strong>แพ็กเกจ :<i class="bi bi-check-lg fs-4"></i>ล้างแอร์ทั่วไป</strong></Card.Text>
                    <Card.Text className="h5">
                      ล้างแอร์ปกติ ขนาดไม่เกิน 40,000 BTU 
                    </Card.Text>
                    <Card.Text>
                    รวดเร็ว ปลอดภัย มั่นใจ 
                    </Card.Text>
                    <Card.Text className="text-primary"><strong>ข้อมูลเพิ่มเติม</strong></Card.Text>
                    <hr />
                    <Button variant="primary w-100">ยกเลิก</Button>
                  </Card.Body>
                </Card>          
               </div>
              <div class="col-8">
                <div style={{ marginTop: '20px' }}>
                  <form ref={form} onSubmit={sendEmail} class="was-validated">
                    <div className="p-1 p-1 p-1 p-1 border shadow-sm p-3 mb-5 bg-body rounded ">

                      <p className="ms-2">ที่อยู่</p>
                      <div className="w-75 ms-5">

                        <div class="form-group row mb-3">
                          <label for="inputEmail3" class="col-sm-2 col-form-label" >บ้านเลขที่</label>
                          <div class="col-sm-10">
                            <input type="text" onChange={(e) => setHouse_number(e.target.value)} class="form-control" required></input>
                          </div>
                        </div>
                        <div class="form-group row mb-3">
                          <label for="inputPassword3" class="col-sm-2 col-form-label">แขวง</label>
                          <div class="col-sm-10">
                            <input type="text" class="form-control" onChange={(e) => setSubdistrict(e.target.value)} placeholder="แขวง" required></input>
                          </div>
                        </div>
                        <div class="form-group row mb-3">
                          <label for="" class="col-sm-2 col-form-label">เขต</label>
                          <div class="col-sm-10">
                            <input type="text" onChange={(e) => setCounty(e.target.value)} class="form-control" id="inputPassword3" placeholder="เขต" required></input>
                          </div>
                        </div>
                        <div class="form-group row mb-3">
                          <label for="" class="col-sm-2 col-form-label">จังหวัด</label>
                          <div class="col-sm-10">
                            <input type="text" onChange={(e) => setProvince(e.target.value)} class="form-control" id="inputPassword3" placeholder="จังหวัด" required></input>
                          </div>
                        </div>
                        <div class="form-group row mb-3">
                          <label for="" class="col-sm-2 col-form-label">รหัสไปรษณ๊ย์</label>
                          <div class="col-sm-10">
                            <input type="text" onChange={(e) => setPostal_code(e.target.value)} class="form-control" id="inputPassword3" placeholder="รหัสไปรษณ๊ย์" required></input>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">รายละเอียดเพิ่มเติม</label>
                          <textarea class="form-control" onChange={(e) => setAddress_details(e.target.value)} id="exampleFormControlTextarea1" rows="3" required></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="border mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                      <p className="ms-2">นัดหมาย</p>
                      <div className="w-75 ms-5">


                        <div class="form-group row mb-3">
                          <label for="inputEmail3" class="col-sm-2 col-form-label" value={EventTarget}>วันที่</label>
                          <div class="col-sm-10">
                            <DatePicker
                              class="form-control"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              isClearable
                              placeholderText="I have been cleared!"
                              required
                            />

                          </div>

                        </div>


                        <div class="form-group row mb-3">

                        </div>
                      </div>
                    </div>




                    <div className="border mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                      <p className="ms-2">ข้อมูลส่วนตัว</p>
                      <div className="w-75 ms-5">


                        <div class="form-group row mb-3">
                          <label for="inputEmail3" class="col-sm-2 col-form-label" value={EventTarget}>ชื่อติดต่อ</label>
                          <div class="col-sm-10">
                            <input type="text" onChange={(e) => setCustomer_name(e.target.value)} class="form-control" id="inputEmail3" placeholder="ชื่อ-นามสกุล" required></input>
                          </div>
                        </div>
                        <div class="form-group row mb-3">
                          <label for="inputEmail3" class="col-sm-2 col-form-label" value={EventTarget}>เบอรโทร์</label>
                          <div class="col-sm-10">
                            <input type="text" onChange={(e) => setphone(e.target.value)} class="form-control" id="inputEmail3" placeholder="เบอร์โทรศัพท์" required></input>
                          </div>
                        </div>
                        <div class="form-group row mb-3">
                          <label for="inputEmail3" class="col-sm-2 col-form-label">อีเมล</label>
                          <div class="col-sm-10">
                            <input name="user_email" type="email" onChange={(e) => setemail(e.target.value)} class="form-control" id="inputEmail3" placeholder="email" required></input>
                            <input className='' type="hidden" name="message" onChange={(e) => setPasswordconfig(e.target.value)} value={Passwordconfig} ></input>
                            <button class="btn btn-primary mt-4" type="submit">ส่งรหัสยืนยันตัวตน</button>

                          </div>
                        </div>
                        <div class="form-group row mb-3">

                        </div>
                      </div>
                    </div>
                  </form>


                  {
                    onshows2 == false &&
                    <>
                      <div className="border mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                        <p className="ms-2">ยืนยันตัวตน</p>
                        <div className="w-75 ms-5">

                          <div class="form-group row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">รหัสยืนยัน</label>
                            <div class="col-sm-10">
                              <input type="text" onChange={(e) => setconfig(e.target.value)} class="form-control" id="inputEmail3" placeholder="Password" required></input>
                            </div>

                          </div>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>กดส่งคำสั่งซื้อ</button>
                      <div class="form-group row mt-3">

                        <div class="col-sm-10">

                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
               */}
            </div>

          </div>

        </div>

      </Layout >

    </>
  )
}
export default Formsale;

