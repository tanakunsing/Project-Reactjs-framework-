import React from 'react';
import Employee from './Employee';
import axios from "axios"
import { useEffect } from "react";
import { useState } from 'react';
function EmployeeList() {


        const employeeAPI = (url = 'http://localhost:5099/api/Employ') =>{
                return {
                fetchAll: ()=> axios.get(url),
                create: newRecord => axios.post(url, newRecord),
                update: (id, updatedRecord)=> axios.put(url +id, updatedRecord),
                delete: id=> axios.delete(url + id)
        }
}
       const addOrEdit = (formData, onSuccess)=>{
        employeeAPI().create(formData)
        .then(res =>{
                onSuccess();
        })
        .catch(err => console.log(err))
       }
   
  
 
        return (
                <>
                        <Employee addOrEdit={addOrEdit}/>
                </>
        )
}

export default EmployeeList  