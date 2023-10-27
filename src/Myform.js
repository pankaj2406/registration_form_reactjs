import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Myform() {
const navigate= useNavigate();
    const [values, setValues] = useState({
        username: '',
        fathername: '',
        mothername: '',
        email: '',
        password: '',
        age: '',
        gender: ''
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/myform', values)
            .then(res => {
                if(res.status === 200) {
                  alert("your registeration is succesfully Compeleted!")
                  navigate('/Login')
                } else  {
                  alert("Something went wrong. Please try again");
                }
              })     
    };
    return (
        <>
            <h1 style={{ textAlign: "center", color: "#ff0066" }}> Form</h1>
            <form onSubmit={handleSubmit} >
                <label>Enter your User Name:</label><br></br>
                <input type="text" name="username" onChange={(event) => setValues(values => ({ ...values, username: event.target.value }))} /><br></br><br></br>
                <label>Enter your Father Name:</label><br></br>
                <input type="text" name="fathername" onChange={(event) => setValues(values => ({ ...values, fathername: event.target.value }))} /><br></br><br></br>
                <label>Enter your Mother Name:</label><br></br>
                <input type="text" name="mothername" onChange={(event) => setValues(values => ({ ...values, mothername: event.target.value }))} /><br></br><br></br>
                <label>Enter your Email</label><br></br>
                <input type="text" name="email" onChange={(event) => setValues(values => ({ ...values, email: event.target.value }))} /><br></br><br></br>
                <label>Enter your Password:</label><br></br>
                <input type="password" name="password" onChange={(event) => setValues(values => ({ ...values, password: event.target.value }))} /><br></br><br></br>
                <label>Enter your age:</label><br></br>
                <input type="number" name="age" onChange={(event) => setValues(values => ({ ...values, age: event.target.value }))} /><br></br><br></br>
                <label>Enter your Gender:</label><br></br>
                <input type="radio" name="gender" value={values.gender || "male"} onChange={(event) => setValues(values => ({ ...values, gender: event.target.value }))} /><label>Male</label><br></br><br></br>
                <input type="radio" name="gender" value={values.gender || "female"} onChange={(event) => setValues(values => ({ ...values, gender: event.target.value }))} /><label>Female</label><br></br><br></br>
                <input type="radio" name="gender" value={values.gender || "other"} onChange={(event) => setValues(values => ({ ...values, gender: event.target.value }))} /><label>Other</label><br></br><br></br>
                <button type="submit" >Submit</button>
            </form>
        </>
    );
}
export default Myform;