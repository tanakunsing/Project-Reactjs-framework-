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
function FinallyPage() {
    const [onshows, setinshow_product] = React.useState(false)
    const [name, setName] = useState("");


    const fileSelectedHandler = (event) => {
        console.log(event)
    }
    useEffect(() => {
        fileSelectedHandler();
        console.log("sss");
    })
    return (
        <>
            <Layout header={'FormUploadimage'}>
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
                                        <ProcessBar now={'100'} />
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className="col-8">
                                <div className="border shadow-sm p-3 mb-2 bg-body rounded">
                                    <h2 className="ms-2">ยินดีด้วย!!</h2>
                                    <div className="w-100 ms-2">
                                        <p>คุณได้สมัครเรียบร้อยแล้ว กรุณารอการตอบกลับไปยังอีเมลของท่าน ทางเรากำลังดำเนินการตรวจสอบข้อมูล... </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">

                            </div>
                            <div className="col-8">
                                <button type="submit" class="btn btn-primary">หน้าแรก</button>
                            </div>


                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )

}
export default FinallyPage;