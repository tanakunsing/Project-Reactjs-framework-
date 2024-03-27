import Menu from './Menu';
import Stytled from './Layout.module.css';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ApiConection from "./ApiConection";
import React from "react";
import { useNavigate } from "react-router-dom";
function Purchase() {
  const api = new ApiConection();
  const [onshows, setinshow_product1] = React.useState(false)
  const [getid_product, setid_product] = useState(0);
  const [getcompanyname, setcompanyname] = useState("");
  const [getCustomer_name, setCustomer_name] = useState("");
  const [getHouse_number, setHouse_number] = useState("");
  const [getPrice, setPrice] = useState(0);
  const [gettype, settype] = useState();
  const [getCounty, setCounty] = useState("");
  const [getSubdisticrt, setSubdistrict] = useState("");
  const [getProvince, setProvince] = useState("");
  const [getPostal_code, setPostal_code] = useState(0);
  const [getAddress_details, setAddress_details] = useState("");
  const [getStatus_text, setStatus_text] = useState("รอยืนยัน");
  const [getIs_active, setIs_active] = useState(false);
  const [getcheck_email, setcheckemail] = useState("");
  const [getemail, setemail] = useState("");
  const [getem, setem] = useState("");
  const [getphone, setphone] = useState(0);
  const [gettest, settest] = useState(0);
  const navigation = useNavigate();


  useEffect(() => {
    let id_product = JSON.parse(window.sessionStorage.getItem('id_product'));
    console.log(id_product);

    const fetchProductdata3 = async (event) => {
      const response = await api.getproduct('api/Purchases');
      console.log(response);
      if (response == "") {
        setinshow_product1(false)
      }
      setinshow_product1(true)
      response.map((obj) => {
        if (id_product == obj.id_product) {
          setcompanyname(obj.company_name);
          setid_product(obj.id_product);
          setPrice(obj.price);
          settype(obj.productName);
          settype(obj.typeService);
          setCustomer_name(obj.customer_name);
          setCounty(obj.county);
          setHouse_number(obj.House_number)
          setProvince(obj.province);
          setSubdistrict(obj.subdistrict)
          setPostal_code(obj.postal_code)
          setem(obj.date);
        }
      }
      )

    }
    fetchProductdata3();
  })

  const handleClick1 = (event) => {
    navigation(`/Home`);
  }

  return (
    <>
      <Menu />
      {
        onshows == true &&
        <div className={Stytled.Product_1}>
        <div className="container mt-5">
          <div className='row justify-content-center' >
            <div className='w-75 shadow p-3 mb-5 bg-body rounded'>
              <div className='col'>
                <h1 className='text-primary'>Purchase order</h1>

              </div>
              <form onSubmit={handleClick1} >
                <table>
                  <thead>
                    <tr>
                      <th scope="col " >Company name </th>
                      <th scope="col">{getcompanyname}</th>
                      <th scope="col">getem</th>
                      <th scope="col" className='border border-dark'>{getem}</th>
                    </tr>
                  </thead>
                  <thead>
                    <tr>
                      <th scope="col" >Name </th>
                      <th scope="col" >{getCustomer_name}</th>
                      <th scope="col">Purchase order:</th>
                      <th scope="col" className='border border-dark' >{getid_product}</th>
                    </tr>
                  </thead>

                  <thead>
                    <tr>
                      <th scope="col">Address </th>
                      <td scope="col" className='w-25 pt-3'><p>{getHouse_number} แขวง {getSubdisticrt}
                        เขต {getCounty} จังหวัด {getProvince}
                        {getPostal_code}</p></td>

                    </tr>
                  </thead>
                </table>
                <table class="table border border-dark" style={{ height: '300px' }}>
                  <thead class="table-primary">
                    <tr>
                      <th scope="col">รหัสบริการ</th>
                      <th scope="col">รายการ</th>
                      <th scope="col">จำนวน</th>
                      <th scope="col">ราคาค่าบริการ</th>
                      <th scope="col">จำนวนเงิน</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{getid_product}</th>
                      <td >ล้างแอร์ติดผนัง</td>
                      <td>1</td>
                      <td>{getPrice}</td>
                      <td>{getPrice}</td>
                    </tr>

                  </tbody>
                </table>
                <div className='col '>
                  <div className='d-flex justify-content-center'>
                    <button type="submit" class="btn btn-primary">หน้าแรก</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      }
      



    </>
  )
}
export default Purchase;