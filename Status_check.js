import Layout from "./Layout";
import Stytled from './Layout.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";
import { useState } from 'react';
import ApiConection from "./ApiConection";
import Swal from 'sweetalert2';
import Col from 'react-bootstrap/Col';
import DataTable from "./DataTable";
function Status_check() {
    const [onshows, setinshow_product] = useState(false)
    const [name, setName] = useState("");
    const [datasall, setdatas] = useState([]);
    const api = new ApiConection();

    const handlesave3 = async (event) => {
        if (name == "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
        const response = await api.getproduct('api/Purchases');
        console.log(response);
        setinshow_product(true)
        setdatas(response)
    }
    return (
        <>
            <Layout header={'ตรวจสอบสถานะ'}>
                <div className="container">
                    <main>
                        <aside style={{width:'100%'}}>
                            <div className="container mb-3">
                                    <div class="form-group row mb-3">
                                        <label for="inputEmail3" class="col-sm-1 col-form-label" >รหัสสินค้า</label>
                                        <div class="w-50">
                                            <input type="text" onChange={(e) => setName(e.target.value)} class="form-control" ></input>
                                        </div>
                                    </div>
                                    <button onClick={handlesave3} class="btn btn-primary ">ยืนยัน</button>
                            </div>
                        </aside>
                        <article style={{width:'100%'}}>
                        <hr />
                        <p><span>รายการค้นหา</span></p>
                            {
                                onshows == true &&
                                datasall.map
                                    ((ins, index) => (
                                        ins.id_product == name &&
                                        <div className="container">
                                            <div class="container" style={{paddingLeft:'0',paddingRight:'0'}}>                                         
                                                <h4>รายละเอียด</h4>
                                                <p>Create a stacked progress bar by placing multiple bars into the same div with class .progress:</p>
                                                <div class="progress">
                                                    <div class="progress-bar progress-bar-success" role="progressbar" style={{ width: '10%' }}>
                                                        Free Space
                                                    </div>
                                                    <div class="progress-bar progress-bar-warning" role="progressbar" style={{ width: '10%' }}>
                                                        Warning
                                                    </div>
                                                    <div class="progress-bar progress-bar-danger" role="progressbar" style={{ width: '20%' }}>
                                                        Danger
                                                    </div>
                                                </div>
                                            </div>
                                            <Table>
                                                <tr>
                                                </tr>

                                                <div key={index}>
                                                    <tr data-index={index}>
                                                        <td>{ins.date}</td>
                                                        <td>{ins.id_product}</td>
                                                        <td>{ins.typeService}</td>
                                                        <td>{ins.customer_name}</td>
                                                        <td>{ins.status_text}</td>
                                                    </tr>
                                                </div>
                                            </Table>
                                        </div>
                                    ))
                            }
                        </article>

                    </main>
                </div>
            </Layout>

        </>
    )
}
export default Status_check;

