import Layout from "./Layout";
import React from 'react';
import { useEffect, useState } from 'react';
import ProductShowdata from "./ProductShowdata";
import MainProduct from "./MainProduct";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from 'react-bootstrap';
import Stytled from './Layout.module.css';
import Nav_Sm from "../components/Nav_Sm";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from "styled-components";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import ApiConection from "./ApiConection";
import Css from './Layoutst.module.css'
import Carousel from 'react-bootstrap/Carousel';
function Product() {

  const [onshow, setinshow] = React.useState(true)
  const [loading, setloading] = useState(true);
  const [countyIn, setcounty] = useState([]);
  const [selectCountys, setselectCounty] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (event, nums) => {
    setselectCounty(nums)
    console.log(selectCountys);
  }

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const fetchdatadropdown = async (event) => {
    const api = new ApiConection();
    const response = await api.getData('api/Values');
    setcounty(response)
    console.log(countyIn);

  }
  useEffect(() => {
    fetchdatadropdown();
  }, [])
  return (
    <>
      <Layout header={'บริการของเรา'} >
        {/*หน้าจอหลัก */}

        <main className={Css.Product}>
          {/* filter */}
          <section className={Stytled.filter}>
            <div className={Stytled.aside_s}>
              <div className={Stytled.filter_dropdown}>
                <Dropdown className="w-100">
                  <Dropdown.Toggle id="dropdown-basic" className={Css.filter_box}>
                    ฟิลเตอร์
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {
                      countyIn.map((ins, index) => (
                        <div key={index}>
                          <Dropdown.Item onClick={event => handleClick(event, ins)}>{ins}</Dropdown.Item>
                        </div>
                      ))
                    }
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className={Stytled.filter_check}>        
              <div className={Stytled.in_filter_check}>
                  <div class="form-check form-switch">
                   {/* <label class="form-check-label" for="flexSwitchCheckDefault">ผู้เชี่ยวชาญ</label> */}
                   <span class={`badge bg-warning ${Stytled.desgin_bage_one}`}>ผู้เชี่ยวชาญ</span>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>
                </div>
                <div className={Stytled.in_filter_check}>
                  <div class='form-check form-switch'>
                    
                    {/* <label class="form-check-label" for="flexSwitchCheckDefault">ชำระทันที</label> */}
                    <span class={`badge bg-primary ${Stytled.desgin_bage_two}`}>ชำระทันที</span>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="product_loop">
            <div className={Stytled.actric_s}>
              {/* displays */}
              {
                loading === false &&
                <Spinner animation="border" variant="primary" size="sm" />
              }
              {
                loading === true &&

                <div className={Stytled.key23}>

                  <ProductShowdata selectCounty={selectCountys} />
                </div>
              }
              {/* Page navigation */}
              <div className={`col mt-2 d-flex ${Stytled.footerse}`}>
                <nav aria-label="Page navigation example">
                  <ul class="pagination ">
                    <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="#">หน้าถัดไป</a></li>
                  </ul>
                </nav>
              </div>

            </div>
          </section>
        </main>


      </Layout>
    </>
  )

}
export default Product;