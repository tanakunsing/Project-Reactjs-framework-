import Layout from "./Layout"
import Stytled from './Layout.module.css';
import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ApiConection from "./ApiConection";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2'
import StartRegister from "../components/StartRegister";


function Formregister() {
    const defaultImageSrc = '/img/upload.png';
    const api = new ApiConection();
    const [onshows, setinshow_product] = React.useState(false)
    const [name, setName] = useState("");
    const [w, setsw] = useState("");
    const [getname, setname] = useState("");
    const [getmain_id, setmain_id] = useState("");
    const [getcompany, setcompany] = useState("");
    const [getcompanyname, setcompanyname] = useState("");
    const [getHouse_number, setHouse_number] = useState("");
    const [getCounty, setCounty] = useState("");
    const [getSubdisticrt, setSubdistrict] = useState("");
    const [getProvince, setProvince] = useState("");
    const [getPostal_code, setPostal_code] = useState(0);
    const [getAddress_details, setAddress_details] = useState("");
    const [getStatus_text, setStatus_text] = useState("รอยืนยัน");
    const [getcheck_email, setcheckemail] = useState("");
    const [getemail, setemail] = useState("");
    const [getphone, setphone] = useState(0);
    const [getemailscheck, setemailcheck] = useState();
    const [getPasswordconfig, setPasswordconfig] = useState();
    const [getPasswordconfig2, setPasswordconfig2] = useState();
    const [getimage, setimages] = useState(defaultImageSrc);
    var randomstring = require("randomstring");
    const navigation = useNavigate();
   

    useEffect(() => {
        let getemails = JSON.parse(window.sessionStorage.getItem('getemail'));
        let Passwordconfig = JSON.parse(window.sessionStorage.getItem('Passwordconfig'));
        setemailcheck(getemails);
        console.log(Passwordconfig)
        setPasswordconfig2(Passwordconfig);
    })
    const handleSave = async (event) => {
        event.preventDefault();
    
        if(getPasswordconfig == getPasswordconfig2){   
        window.sessionStorage.setItem("min_names", JSON.stringify(getcompany));
                let datas = {
                id:0,
                main_id: randomstring.generate(7),
                min_name: getcompany,
                max_name: getcompanyname,
                house_number: getHouse_number,
                phonenumber: getphone,
                email: getemailscheck,
                check_Email:getPasswordconfig,
                min_Address: getCounty,
                subdistrict: getSubdisticrt,
                province: getProvince,
                postal_code: getPostal_code,
                min_Description: getAddress_details,
                status_text: getStatus_text,
                is_active: true,

            }
            api.postData(`api/Member_API`, datas)
                .then(response => {
                    console.log(response);
                    window.sessionStorage.setItem("getmain_id", JSON.stringify(datas.main_id));
                    Swal.fire(
                        'สำเร็จ!',
                        'ขั้นตอนต่อ กรอกข้อมูลบริการของทางร้านและรอยืนยัน',
                        'success'
                    )
                    navigation(`/FormProduct`);
                })
            }else{
                console.log("404 ERROR");
            }
    }
    const showpreview = e =>{
            if(e.target.files && e.target.files[0]){
              
                let imageFile = e.target.files[0]
                const reader = new FileReader();
                reader.onload = x=>{
                    setimages(x.target.result);
                }
                reader.readAsDataURL(imageFile)
            }else{
                setimages(defaultImageSrc); 
            }
           
    }
    return (
        <>
            <Layout header={'Formregister'}>
            <form onSubmit={handleSave} class="was-validated">
              
                    <div className={Stytled.Product_1}>
                        <div className="container w-100">
                           
                            <div className="row">
                                <div className="col">
                                    <Card>
                                        <Card.Header>
                                            <Nav variant="tabs" defaultActiveKey="#first">
                                                <Nav.Item>
                                                    <Nav.Link href="#first">Active</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </Card.Header>
                                        <Card.Body>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-label="Example with label" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </div>
                                <div class="col-8">
                                    <div className="p-1 p-1 p-1 p-1 border shadow-sm p-3 mb-5 bg-body rounded ">
                                        <p className="ms-2">ข้อมูลส่วนตัว</p>
                                        <div className="w-75 ms-5">
                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label" >ชื่อร้าน</label>
                                                <div class="col-sm-9">   
                                                    <input type="text" onChange={(e) => setcompany(e.target.value)} class="form-control" id="inputEmail3" placeholder="นามบริษัทที่จดทะเบียนการค้า" required></input>
                                                </div>
                                            </div>
                                       
                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label" >ชื่อ</label>
                                                <div class="col-sm-9">
                                                    <input type="text" onChange={(e) => setcompanyname(e.target.value)} class="form-control" id="inputEmail3" placeholder="ชื่อ-นามสกุล" required></input>
                                                </div>
                                            </div>
                                         
                                            <div class="form-group row mb-3">
                                                <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label">รูปภาพหน้าร้าน</label>
                                                <div class="col-sm-9">
                                                    <img src={getimage} className="mb-3" width={300} height={300}/>
                                                    <input type="file" class="form-control " onChange={showpreview} rows="3" required></input>
                                                </div>
                                            </div>

                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label" value={EventTarget}>เบอรโทร์</label>
                                                <div class="col-sm-9">
                                                <input type="number" onChange={(e) => setphone(e.target.value)} class="form-control" id="inputPassword3" placeholder="เบอร์โทร" required></input>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">อีเมล</label>
                                                <div class="col-sm-9">
                                                    <input type="email" value={getemailscheck}class="form-control" id="inputEmail3" placeholder="email" required></input>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label">รหัสยืนยัน</label>
                                                <div class="col-sm-9">
                                                    <input type="text"onChange={(e) =>  setPasswordconfig(e.target.value)} class="form-control" id="inputEmail3" placeholder="" required></input>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="border mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                                        <p className="ms-2">กรอกข้อมูลร้านค้า</p>
                                        <div className="w-75 ms-5">

                                            <div class="form-group row mb-3">
                                                <label for="inputEmail3" class="col-sm-3 col-form-label" >เลขที่</label>
                                                <div class="col-sm-9">
                                                    <input type="text" onChange={(e) => setHouse_number(e.target.value)} class="form-control"required ></input>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label for="inputPassword3" class="col-sm-3 col-form-label">แขวง</label>
                                                <div class="col-sm-9">
                                                    <input type="text" class="form-control" onChange={(e) => setSubdistrict(e.target.value)} placeholder="แขวง"required></input>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label for="" class="col-sm-3 col-form-label">เขต</label>
                                                <div class="col-sm-9">
                                                    <input type="text" onChange={(e) => setCounty(e.target.value)} class="form-control" id="inputPassword3" placeholder="เขต" required></input>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label for="" class="col-sm-3 col-form-label">จังหวัด</label>
                                                <div class="col-sm-9">
                                                    <input type="text" onChange={(e) => setProvince(e.target.value)} class="form-control" id="inputPassword3" placeholder="จังหวัด" required></input>
                                                </div>
                                            </div>
                                            <div class="form-group row mb-3">
                                                <label for="" class="col-sm-3 col-form-label">รหัสไปรษณ๊ย์</label>
                                                <div class="col-sm-9">
                                                    <input type="number" onChange={(e) => setPostal_code(e.target.value)} class="form-control" id="inputPassword3" placeholder="รหัสไปรษณ๊ย์" required></input>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlTextarea1" class="col-sm-3 col-form-label">รายละเอียดเพิ่มเติม</label>
                                                <textarea class="col-sm-9 form-control" onChange={(e) => setAddress_details(e.target.value)} id="exampleFormControlTextarea1" rows="3" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">ยืนยัน</button>
                                    <div class="form-group row mt-3">
                                        <div class="col-sm-10">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </Layout >
        </>
    )
}
export default Formregister;
