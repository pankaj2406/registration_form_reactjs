import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8000/List/${id}`)
      .then(res => res.json())
      .then(data => {
        setValues((values => ({
          ...values, username: data[0].username,
          fathername: data[0].fathername,
          mothername: data[0].mothername,
          email: data[0].email,
          password: data[0].password,
          age: data[0].age,
          gender: data[0].gender
        })))
      }
      )
  }, [])

  const [values, setValues] = useState({
    username: '',
    fathername: '',
    mothername: '',
    email: '',
    password: '',
    age: '',
    gender: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put('http://localhost:8000/updateuser/'+ id, values)
      .then(res => {
        if (res.status === 205) {
          alert("your update is succesfully")
          navigate('/List');
        } else {
          alert("Something went wrong. Please try again");
        }
      })
      .then(res => {
        console.log(res)
      })
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Update</h1>

      <form onSubmit={handleSubmit} >
        <label>Enter your User Name:</label><br></br>
        <input type="text" name="username" value={values.username || ""} onChange={(event) => setValues(values => ({ ...values, username: event.target.value }))} /><br></br><br></br>
        <label>Enter your Father Name:</label><br></br>
        <input type="text" name="fathername" value={values.fathername || ""} onChange={(event) => setValues(values => ({ ...values, fathername: event.target.value }))} /><br></br><br></br>
        <label>Enter your Mother Name:</label><br></br>
        <input type="text" name="mothername" value={values.mothername || ""} onChange={(event) => setValues(values => ({ ...values, mothername: event.target.value }))} /><br></br><br></br>
        <label>Enter your Email</label><br></br>
        <input type="text" name="email" value={values.email || ""} onChange={(event) => setValues(values => ({ ...values, email: event.target.value }))} /><br></br><br></br>
        <label>Enter your Password:</label><br></br>
        <input type="password" name="password" value={values.password || ""} onChange={(event) => setValues(values => ({ ...values, password: event.target.value }))} /><br></br><br></br>
        <label>Enter your age:</label><br></br>
        <input type="number" name="age" value={values.age || ""} onChange={(event) => setValues(values => ({ ...values, age: event.target.value }))} /><br></br><br></br>
        <label>Enter your Gender:</label><br></br>
        <input type="radio" name="gender" value={values.gender || ""} onChange={(event) => setValues(values => ({ ...values, gender: event.target.value }))} checked={values.gender === 'male'} /><label>Male</label><br></br><br></br>
        <input type="radio" name="gender" value={values.gender || ""} onChange={(event) => setValues(values => ({ ...values, gender: event.target.value }))} checked={values.gender === 'female'} /><label>Female</label><br></br><br></br>
        <input type="radio" name="gender" value={values.gender || ""} onChange={(event) => setValues(values => ({ ...values, gender: event.target.value }))} checked={values.gender === 'other'} /><label>Other</label><br></br><br></br>
        <button type="submit" >update</button>
      </form>
    </div>
  )
}
export default EditUser