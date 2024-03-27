import React from 'react';
import axios, { post } from 'axios';
import { useState, useEffect } from 'react'
import ApiConection from "./ApiConection";
let urls = `api/Employ`;
const textt = process.env.REACT_APP_API_URL;
let fullurl = textt + urls;


 const defaultImageSrc = '/img/upload.png';
const intialFieldValues = {
        id: 0,
        employeeName: '',
        occupation: '',
        imageName: '',
        imageSrc: defaultImageSrc,
        imageFile: null,
}
function Employee(props) {
    const {addOrEdit} = props
    const api = new ApiConection();
        const [values, setvalues] = useState(intialFieldValues);
        const [errors, setErrors] = useState({});
        const [imageshow, setimageshow] = useState([]);
        const handleInputChange = e => {
                const { name, value } = e.target;
                setvalues({
                        ...values,
                        [name]: value
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
        const validate =()=>{
                let temp ={}
                temp.employeeName =values.employeeName==""?false:true;
                temp.imageSrc = values.imageSrc==defaultImageSrc?false:true;
                setErrors(temp);
                return Object.values(temp).every(x => x==true);
        }
        const resetForm=()=>{
            setvalues(intialFieldValues)
            setErrors({});
        }
        const handleFormSubmit = async e => {
                e.preventDefault();
                if(validate()){
                        const formData = new FormData()
                        formData.append('id',values.id)
                        formData.append('employeeName',values.employeeName)
                        formData.append('occupation',values.occupation)
                        formData.append('imageName',values.imageName)
                        formData.append('imageFile',values.imageFile)
                        addOrEdit(formData,resetForm)
                     }
           
                     showimagees();
        }
        const showimagees =async(e)=>{
                const res = await api.getData(`api/Employ`)
                console.log(res);
                setimageshow(res)
        }
        const applyErrorClass = filed => ((filed in errors && errors[filed]==false)?' invalid-field':'')
        return (
                <>
                        <div className='container mt-5'>
                                <form autoComplete='off' noValidate onSubmit={handleFormSubmit}>

                                        <div className='card'>
                                                <img src={values.imageSrc} width={150} lassName='card-img-top' />
                                                <div className='card-body'>
                                                        <div className='form-group'>
                                                                <input type="file"
                                                                        accept='image/*'
                                                                        className={"form-control-file"+applyErrorClass('imageSrc')} 
                                                                        onChange={showpreview}
                                                                        id="image-uploader"
                                                                />
                                                        </div>
                                                        <div className='form-group'>
                                                                <input className={"form-control-file"+applyErrorClass('employeeName')}          
                                                                        placeholder='Employee Name'
                                                                        name="employeeName"
                                                                        value={values.employeeName}
                                                                        onChange={handleInputChange}

                                                                />
                                                        </div>
                                                        <div className='form-group'>
                                                                <input className='form-control'
                                                               
                                                                        placeholder='Occupation Name'
                                                                        name="occupation"
                                                                        value={values.occupation}
                                                                        onChange={handleInputChange}
                                                                />
                                                        </div>
                                                        <div className='form-group'>
                                                                <input className='form-control'
                                                               
                                                                        placeholder='image Name'
                                                                        name="imageName"
                                                                        value={values.imageName}
                                                                        onChange={handleInputChange}
                                                                />
                                                        </div>

                                                        <div className='form-group text-center'>
                                                                <button
                                                                        type='submit'
                                                                        className='btn btn-light'>
                                                                        Submit
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>
                                </form>
                        </div>
                </>
        )
}

export default Employee  