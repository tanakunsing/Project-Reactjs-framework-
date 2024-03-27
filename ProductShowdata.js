import Stytled from './Layout.module.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import MainProduct from './MainProduct';
import { useNavigate } from "react-router-dom";
import ApiConection from "./ApiConection";
import React from 'react';

function ProductShowdata({ selectCounty, pageck }) {
    const [testty, setTest2] = React.useState([])
    const [getprice, setTest2s] = React.useState([])
    const [onshow, setinshow] = React.useState(true)
    const [chkconfig, setchkconfig] = React.useState(false)
    const [countyIns2, setcountys2] = useState();
    const [countyIns3, setcountys3] = useState();
    const [pg_get, pg_set] = useState();
    const [imageSizeW, setimageSizewW] = useState('260px');
    const api = new ApiConection();

    const getpricefirst =async (event)=>{
      const response = await api.getData('api/ValuesTwoController1');
      setTest2s(response);
    }
    useEffect(() => {
        const api = new ApiConection();
        console.log(selectCounty);
        console.log(pageck);
        let xp = selectCounty;
        let ppx = pageck;
        pg_set(ppx);
        setcountys2(xp);
        const fetchdata = async (event) => {
            const response = await api.getproduct('api/Member_API');
            setTest2(response);
            console.log(testty);
        }
        fetchdata();
        getpricefirst();
   
    }, [selectCounty, pageck])
    
    const handleClick = (event, param, main_id) => {
        window.sessionStorage.setItem("NameCompany", JSON.stringify(param));
        window.sessionStorage.setItem("main_id", JSON.stringify(main_id));
    };
    const image_test_custommer = [
       
        { id: 2, imageUrl: require("../images/r5.jpg") },
        { id: 3, imageUrl: require("../images/r6.jpg") },
        { id: 4, imageUrl: require("../images/r8.jpg") },
        { id: 5, imageUrl: require("../images/r2.jpg") },
        { id: 6, imageUrl: require("../images/a1.jpg") },
        { id: 7, imageUrl: require("../images/a2.jpg") },
        { id: 8, imageUrl: require("../images/a3.jpg") },
        { id: 9, imageUrl: require("../images/a4.jpg") },
        { id: 1, imageUrl: require("../images/r1.jpg") },
        { id: 2, imageUrl: require("../images/r5.jpg") },
        { id: 1, imageUrl: require("../images/r1.jpg") },
        { id: 2, imageUrl: require("../images/r5.jpg") },
        { id: 1, imageUrl: require("../images/r1.jpg") },
      
    ]
    return (
        <>
                {
                    testty.map((ins3, index) => (                       
                        ins3.status_text == "ยืนยัน" && countyIns2 == undefined && pg_get == undefined &&
                        <div key={index} className={`${Stytled.keysos}`}>
                           <div className={Stytled.key23}>
                                <a className="card shadow-sm" style={{ textDecoration: 'none' }} href='/MainProduct' onClick={event => handleClick(event, ins3.min_name, ins3.main_id)}>
                                    <img src={image_test_custommer[index].imageUrl} className={`card-img-top ${Stytled.imagsa}`} alt="..."></img>
                                    <div className='card-body'>
                                        <p className=""><b>{ins3.min_name}</b>{ }</p>
                                        <p>{ins3.min_Description}</p>
                                        <p className='fs-5 ' style={{ textAlign: 'right', marginBottom: '-6px' }}>
                                            {getprice.map((ins, indexs) => (
                                                 ins.min_name == ins3.min_name && 
                                                 <div key={index}>
                                                        {ins.price}
                                                    </div>
                                            ))}
                                        </p>
                                    </div>                                 
                                </a>
                            </div>
                        </div>                  
                    ))
                }
                {/*  {
                testty.map((insurance, index) => (
                    insurance.status_text == "ยืนยัน" && countyIns2 == insurance.min_Address && pg_get == undefined &&
                    <div key={index} >
                        <div className='col' style={{ marginRight: '31px', marginTop: '31px' }}>
                            <div style={{ border: '1px solid #b9b9b9', padding: '15px' }}>
                                <a style={{ width: "18rem", height: '350px', textDecoration: 'none' }} href='/MainProduct' onClick={event => handleClick(event, insurance.min_name, insurance.main_id)}>
                                    <img src={image_test_custommer[index].imageUrl} class="" alt="..." height={250} width={260}></img>
                                    <div className='text-dark mt-3'>
                                        <p className='fs-4'><b>{insurance.min_name}</b>{ }</p>
                                        <p style={{ marginTop: '-15px' }}>--</p>
                                        <hr />
                                        <p className='text-muted'>{insurance.min_Description}</p>
                                        <p className='text-muted fs-5 ' style={{ textAlign: 'right', marginBottom: '-6px' }}>1,9000 ฿</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            }
        */}
                {
                    testty.map((ins2, index) => (
                        ins2.status_text == "ยืนยัน" && countyIns2 == ins2.min_Address && pg_get == undefined &&
                        <div key={index} >
                            <div className={Stytled.key23}>
                                <a className="card shadow-sm" style={{ textDecoration: 'none' }} href='/MainProduct' onClick={event => handleClick(event, ins2.min_name, ins2.main_id)}>
                                    <img src={image_test_custommer[index].imageUrl} className={`card-img-top ${Stytled.imagsa}`} alt="..."></img>
                                    <div className='card-body'>
                                        <p className=""><b>{ins2.min_name}</b>{ }</p>
                                        <p>{ins2.min_Description}</p>
                                        <p className='fs-5 ' style={{ textAlign: 'right', marginBottom: '-6px' }}>
                                            {getprice.map((ins, indexs) => (
                                                 ins.min_name == ins2.min_name && 
                                                 <div key={index}>
                                                        {ins.price}
                                                    </div>
                                            ))}
                                        </p>
                                    </div>                            
                                </a>
                            </div>
                        </div>
                    ))
                }
                {
                    testty.map((ins1, index) => (
                        ins1.status_text == "ยืนยัน"
                        && countyIns2 == ins1.min_Address
                        && pg_get == "HOME" &&
                        <div key={index} >  
                             <div className={Stytled.key23}>
                                <a className="card shadow-sm" style={{ textDecoration: 'none' }} href='/MainProduct' onClick={event => handleClick(event, ins1.min_name, ins1.main_id)}>
                                    <img src={image_test_custommer[index].imageUrl} className={`card-img-top ${Stytled.imagsa}`} alt="..."></img>
                                    <div className='card-body'>
                                        <p className=""><b>{ins1.min_name}</b>{ }</p>
                                        <p>{ins1.min_Description}</p>
                                        <p className='fs-5 ' style={{ textAlign: 'right', marginBottom: '-6px' }}>
                                            {getprice.map((ins, indexs) => (
                                                 ins.min_name == ins1.min_name && 
                                                 <div key={index}>
                                                        {ins.price}
                                                    </div>
                                            ))}
                                        </p>
                                    </div>                            
                                </a>
                            </div>
                        </div>
                    ))
                }

     
        </>
    )
}
export default ProductShowdata;