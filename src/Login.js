import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    password: ''
  });
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('values'));
    if (items) {
     setValues(items);
    }
  }, []);
  


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/login', values)
      .then(res => {
        if (res.status === 203) {
          alert("your login is succesfully")
          navigate('/List')
          localStorage.setItem('values', JSON.stringify(values));
        } else {
          alert("Something went wrong. Please try again");
        }
      })
      .then(res => {
        console.log(res)
      })
  };
  return (
    <>
      <h1 style={{ color: "#ff0066", textAlign: "center" }}>Login</h1>
      <form onSubmit={handleSubmit} >
        <label>Enter your User Name:</label><br></br>
        <input type="text" name="username" onChange={(event) => setValues(values => ({ ...values, username: event.target.value }))} /><br></br><br></br>
        <label>Enter your Password:</label><br></br>
        <input type="password" name="password" onChange={(event) => setValues(values => ({ ...values, password: event.target.value }))} /><br></br><br></br>
        <button type="submit">Submit</button><br></br><br></br>
        <button type="button">
          <a href="/Myform" >Registeration</a>
        </button>
      </form>
    </>
  );

}
export default Login;