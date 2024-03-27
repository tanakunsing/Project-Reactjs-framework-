import Layout from "./Layout"
import Stytled from './Layout.module.css';
import React from "react";
import { useEffect } from "react";
import { useState } from 'react';
import api from "./ApiConection";
import ApiConection from "./ApiConection";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ProcessBar from "../components/ProcessBar";
import Swal from 'sweetalert2';
import axios, { post } from 'axios';
const defaultImageSrc = '/img/logo192.png';
const intialFieldValues = {
    id: 0,
    employeeName: '',
    occupation: '',
    imageName: '',
    imageSrc: defaultImageSrc,
    imageFile: null,
}

function FormUploadimage() {

    const defaultImageSrc = '/img/upload.png';
    const [values, setvalues] = useState(intialFieldValues);
    const [errors, setErrors] = useState({});
    const [getimage, setimages] = useState(defaultImageSrc);
    const [getimage1, setimages1] = useState(defaultImageSrc);
    const [getimage2, setimages2] = useState(defaultImageSrc);
    const [onshows, setinshow_product] = React.useState(false)
    const [name, setName] = useState("");
    const [getmain_id, setmain_id] = useState("");
    const [getid_product, setid_product] = useState(0);
    const [gettype, settype] = useState("");
    const [getPrice, setPrice] = useState(0);
    const [details, setAddress_details] = useState("");

    const navigation = useNavigate();

    const nexts = (evevt) => {
        navigation(`/FormUploadimage`);
    }

    const showpreview = e => {
        if (e.target.files && e.target.files[0]) {

            let imageFile = e.target.files[0]
            const reader = new FileReader();
            reader.onload = x => {
                setimages(x.target.result);
            }
            reader.readAsDataURL(imageFile)
        } else {
            setimages(defaultImageSrc);
        }

    }
    const showpreview1 = e => {
        if (e.target.files && e.target.files[0]) {

            let imageFile = e.target.files[0]
            const reader = new FileReader();
            reader.onload = x => {
                setimages1(x.target.result);
            }
            reader.readAsDataURL(imageFile)
        } else {
            setimages1(defaultImageSrc);
        }

    }
    const showpreview2 = e => {
        if (e.target.files && e.target.files[0]) {

            let imageFile = e.target.files[0]
            const reader = new FileReader();
            reader.onload = x => {
                setimages2(x.target.result);
            }
            reader.readAsDataURL(imageFile)
        } else {
            setimages2(defaultImageSrc);
        }

    }


    const nexts12 = (evevt) => {
        navigation(`/FinallyPage`);
    }
    
    
    useEffect(() => {
        let getmain_ids = JSON.parse(window.sessionStorage.getItem('getmain_id'));
        console.log(getmain_ids);
    })
    return (
        <>
            <Layout header={'FormUploadimage'}>
                <form onSubmit={nexts12}>
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
                                            <ProcessBar now={'80'} />
                                        </Card.Body>
                                    </Card>

                                </div>

                                <div className="col-8">

                                    <div className="border shadow-sm p-3 mb-5 bg-body rounded">
                                        <p className="ms-2">การให้บริการ</p>
                                        <div className="w-75 ms-5">
                                            <img src={getimage} className="mb-3" width={150} height={150} />
                                            <div class="form-group row mb-3">

                                                <label for="exampleFormControlTextarea1" class="form-label">อัพโหลดรูปภาพผู้จดทะเบียนพาณิชย์</label>
                                                <div class="mb-3">
                                                    <input type="file" class="form-control" onChange={showpreview} rows="3"></input>
                                                </div>
                                            </div>
                                            <img src={getimage1} className="mb-3" width={150} height={150} />
                                            <div class="form-group row mb-3">

                                                <label for="exampleFormControlTextarea1" class="form-label">อัพโหลดรูปภาพหน้าร้านหรือหน้าบริษัท</label>
                                                <div class="mb-3">
                                                    <input type="file" class="form-control" onChange={showpreview1} id="exampleFormControlTextarea1" rows="3"></input>
                                                </div>
                                            </div>
                                            <img src={getimage2} className="mb-3" width={150} height={150} />
                                            <div class="form-group row mb-3 w-100">

                                                <label for="exampleFormControlTextarea1" class="form-label">อัพโหลดรบัตรประชาชน</label>
                                                <div class="mb-3">
                                                    <input type="file" class="form-control" onChange={showpreview2} id="exampleFormControlTextarea1" rows="3"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-4">

                                </div>
                                <div className="col-8">
                                    <button type="submit" class="btn btn-primary">ยืนยัน</button>
                                    <button type="submit" class="btn btn-primary ms-3">ข้าม</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </Layout>
        </>
    )

}
export default FormUploadimage;