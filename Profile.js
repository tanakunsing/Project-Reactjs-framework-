import Layout from "./Layout";
import Stytled from './Layout.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ApiConection from "./ApiConection";
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Tests from "./Tests";

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  }
function Profile() {
    const [NameCompanys, setCompanys] = React.useState();
    const [fullname, setname] = React.useState("");
    const [emails, setemails] = React.useState("");
    const [phone, setphone] = React.useState(0);
    const [county, setcounty] = React.useState("");
    const [alldata, setalldata] = React.useState([]);
    const [alldata2, setalldata2] = React.useState([]);
    const [alldata3, setalldata3] = React.useState([]);
    const [onshow, setinshow] = React.useState(true)
    const [id, setid] = React.useState();
    const [pass_id, setpass_id] = React.useState();
    const [description, setdescription] = React.useState();
    const [name_staff, setname_staff] = React.useState();
    const [phones, setphones] = React.useState();

    const [main_id, setmain_id] = React.useState();
    const api = new ApiConection();
    useEffect(() => {
        let NameCompany = JSON.parse(window.sessionStorage.getItem('NameCompany'));
        let main_id = JSON.parse(window.sessionStorage.getItem('main_id'));
        setCompanys(NameCompany);
        setmain_id(main_id);
        console.log(main_id);
        const show_datas = async (event) => {

            const response = await api.getproduct('api/Member_API');
            console.log(response);
            setalldata2(response);
        }
        const show_datas2 = async (event) => {

            const response = await api.getproduct('api/Staffdatabases');
            console.log(response);
            setalldata(response);
        }
        const show_datas3 = async (event) => {

            const response = await api.getproduct('api/Products');
            console.log(response);
            setalldata3(response);
        }


        show_datas();
        show_datas2();
        show_datas3();

    }, [])



    return (
        <>
            <Layout header={'Profile'}>
                <div className={Stytled.Product_1}>
                    <div className="container w-100">
                        <div className="row">
                            <section className="bg-light shadow-sm p-3 mb-5">

                                <div className="col">


                                    <div class="row">
                                        <div class="col">
                                            <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                                                <ol class="breadcrumb mb-0">
                                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                                    <li class="breadcrumb-item"><a href="#">User</a></li>
                                                    <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>

                                    <div class="row">
                                   
                                        <div class="col-lg-4">
                                        <h4>โปรไฟล์</h4>
                                            <div class="card mb-4">
                                                <div class="card-body text-center">
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                        class="rounded-circle img-fluid" style={{ width: '150px' }} />
                                                    <h5 class="my-3">{NameCompanys}</h5>
                                                    <p class="text-muted mb-1">Full Stack Developer</p>

                                                </div>
                                            </div>
                                            <h4>บริการ</h4>
                                            <div class="card mb-4 mb-lg-0">
                                                
                                                <table class="table">

                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">รหัสบริการ</th>
                                                            <th scope="col">ชื่อบริการ</th>
                                                            <th scope="col">ราคา</th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        onshow == true &&

                                                        alldata3.map((ins, index) => (
                                                            ins.main_id == main_id &&

                                                            <tbody>
                                                                <tr data-index={index}>
                                                                    <th scope="row">1</th>
                                                                    <td>{ins.product_id}</td>
                                                                    <td>{ins.productName}</td>
                                                                    <td>{ins.price}</td>
                                                                </tr>

                                                            </tbody>

                                                        )
                                                        )
                                                    }
                                                </table>
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-8">
                                        <h4>ประวัติส่วนตัว</h4>
                                            <div class="card mb-4">
                                                <div class="card-body">
                                                    {

                                                        onshow == true &&
                                                        alldata2.map((insr, index) => (
                                                            insr.min_name == NameCompanys &&

                                                            <div key={index} >

                                                                <div class="row">
                                                                    <div class="col-sm-3">
                                                                        <p class="mb-0">ชื่อ</p>
                                                                    </div>
                                                                    <div class="col-sm-9">
                                                                        <p class="text-muted mb-0">{insr.max_name}</p>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div class="row">
                                                                    <div class="col-sm-3">
                                                                        <p class="mb-0">อีเมล</p>
                                                                    </div>
                                                                    <div class="col-sm-9">
                                                                        <p class="text-muted mb-0">{insr.email}</p>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div class="row">
                                                                    <div class="col-sm-3">
                                                                        <p class="mb-0">เบอร์โทร</p>
                                                                    </div>
                                                                    <div class="col-sm-9">
                                                                        <p class="text-muted mb-0">{insr.phonenumber}</p>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div class="row">
                                                                    <div class="col-sm-3">
                                                                        <p class="mb-0">เขตพื้นที่รับผิดชอบ</p>
                                                                    </div>
                                                                    <div class="col-sm-9">
                                                                        <p class="text-muted mb-0">{insr.min_Address}</p>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div class="row">
                                                                    <div class="col-sm-3">
                                                                        <p class="mb-0">ที่อยู่</p>
                                                                    </div>
                                                                    <div class="col-sm-9">
                                                                        <p class="text-muted mb-0">"ยินดีให้บริการครับ ท่านลูกค้าๆ</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        ))


                                                    }

                                                </div>
                                            </div>
                                            <h4>รายการพนักงานล้างแอร์</h4>
                                            <div className="d-flex">
                                              
                                                {
                                                    onshow == true &&

                                                    alldata.map((ins, index) => (
                                                        ins.main_id == main_id &&
                                                        <div key={index} >

                                                            <div class="card ms-2">
                                                                <div class="card-body text-center">
                                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                                        class="rounded-circle img-fluid" style={{ width: '150px' }} />
                                                                    <h5 class="my-3">{ins.name_staff}</h5>
                                                                    <p class="text-muted mb-1">{ins.description}</p>

                                                                </div>
                                                            </div>


                                                        </div>
                                                    ))

                                                }
                                            </div>
                                        
                                            <div className="mt-5">
                                            <h4>แผนที่พื้นที่รับผิดชอบ</h4>
                                           <Tests />
                                            </div>


                                        </div>
                                    </div>


                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}
export default Profile;