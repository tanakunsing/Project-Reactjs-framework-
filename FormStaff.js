import Layout from "./Layout";
import Stytled from './Layout.module.css';
import { useEffect } from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Nav } from "react-bootstrap";
import ProcessBar from "../components/ProcessBar";
import ApiConection from "./ApiConection";
import Swal from 'sweetalert2'
import axios from "axios"
var randomstring = require("randomstring");
const defaultImageSrc = '/img/upload.png';
const intialFieldValues = {
    id: 0,
    employeeName: '',
    occupation: '',
    imageName: '',
    originalimageName:'',
    imageSrc: defaultImageSrc,
    imageFile: null,
}
const intialFieldValues2 = {
    id: 0,
    employeeName: '',
    occupation: '',
    imageName: '',
}
function FormStaff() {
    const defaultImageSrc = '/img/upload.png';
    const api = new ApiConection();
    const [position, setpt] = useState("");
    const [getmain_id, setmain_id] = useState("");
    const [getname, setname] = useState("");
    const [image, setimage] = useState(defaultImageSrc);
    const [phone, setphone] = useState();
    const [getmin_name, setmin_name] = useState("");
    const navigation = useNavigate();
    const [values, setvalues] = useState(intialFieldValues);
    const [values2, setvalues2] = useState(intialFieldValues2);

    const [employeeName2, setemployeeName] = useState("");
    const [occupation2, setoccupation] = useState("");
    const [imageName2, setimageName] = useState("");
    const [OriginalimageName2, setOriginalimageName] = useState("");

    const [errors, setErrors] = useState({});
    const employeeAPI = (url = 'http://localhost:5099/api/Employ') => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }



    const addOrEdit = (formData, onSuccess) => {
        employeeAPI().create(formData)
            .then(res => {
                onSuccess();
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setvalues({
            ...values,
            [name]: value
        })
    }

    const nexts = (evevt) => {
        navigation(`/FormUploadimage`);
    }


    const handleSave3 = (e) => {
        e.preventDefault();


        let data = {
            id: 0,
            main_id: getmain_id,
            pass_id: randomstring.generate(7),
            name_staff: getname,
            min_name: getmin_name,
            description: position,
            phone: phone


        }
        api.postData(`api/Staffdatabases`, data)
            .then(response => {
                console.log(response);
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
                setpt("")
                setname("");
                setimage(defaultImageSrc)
                setphone("");
            })

    }


    const showpreview = e => {
        if (e.target.files && e.target.files[0]) {

            let imageFile = e.target.files[0]
            const reader = new FileReader();
            reader.onload = x => {
                setvalues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                });
            }
            reader.readAsDataURL(imageFile)
        } else {
            setvalues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            });
        }
    }
    const validate = () => {
        let temp = {}
        temp.employeeName = values.employeeName == "" ? false : true;
        temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
        setErrors(temp);
        return Object.values(temp).every(x => x == true);
    }
    const resetForm = () => {
        setvalues(intialFieldValues)
        setErrors({});
    }


    const handleFormSubmit = async e => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData()
            formData.append('id', values.id)
            formData.append('employeeName', values.employeeName)
            formData.append('occupation', values.occupation)
            formData.append('imageName', values.imageName)
            formData.append('imageFile', values.imageFile)
            //addOrEdit(formData, resetForm)
         
       
         
            const res = await api.postimage(`api/Employ`,formData)
            .then(res => {
                console.log(res);
            })
        }

    
    }

    const applyErrorClass = filed => ((filed in errors && errors[filed] == false) ? ' invalid-field' : '')

    useEffect(() => {
        let getmain_ids = JSON.parse(window.sessionStorage.getItem('getmain_id'));
        let min_namese = JSON.parse(window.sessionStorage.getItem('min_names'));
        setmain_id(getmain_ids);
        setmin_name(min_namese);

    })
    return (
        <>
            <Layout header={'FormStaff'}>

                <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>
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
                                            <ProcessBar now={'65'} />
                                        </Card.Body>
                                    </Card>

                                </div>

                                <div className="col-8">

                                    <div className='card p-2'>
                                        <label for="exampleFormControlTextarea1" class="form-label">อัพโหลดรูปภาพพนักงาน</label>
                                        <img src={values.imageSrc} width={150} lassName='card-img-top' />

                                        <div className='card-body'>
                                            <div className='form-group'>
                                                <input type="file"
                                                    accept='image/*'
                                                    className={"form-control-file" + applyErrorClass('imageSrc')}
                                                    onChange={showpreview}
                                                    id="image-uploader"
                                                />
                                            </div>
                                            <div className='form-group mt-3'>
                                                <input className={"form-control" + applyErrorClass('employeeName')}
                                                    placeholder='Employee Name'
                                                    name="employeeName"
                                                    value={values.employeeName}
                                                    onChange={handleInputChange}

                                                />
                                            </div>
                                            
                                            <div className='form-group mt-3'>
                                                <input className='form-control'

                                                    placeholder='Occupation Name'
                                                    name="occupation"
                                                    value={values.occupation}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className='form-group mt-3'>
                                                <input className='form-control'

                                                    placeholder='image Name'
                                                    name="imageName"
                                                    value={values.imageName}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                     
                                        </div>

                                    </div>
                                    <div className='form-group mt-3'>
                                        <button

                                            type='submit'
                                            class="btn btn-primary">
                                            ยืนยัน
                                        </button>

                                        <button

                                            onClick={nexts}
                                            class="btn btn-primary ms-3">
                                            ข้าม
                                        </button>
                                    </div>


                                </div>
                                <div className="col-4">

                                </div>

                            </div>
                        </div>
                    </div>
                </form>

            </Layout>

        </>
    )
}
export default FormStaff;