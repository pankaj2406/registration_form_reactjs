import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const handleDelete = (id) => {
    axios.delete('http://localhost:8000/delete/' + id)
      .then(res => {
        if (res.status === 200) {
          alert("your delete is succesfully")
          navigate('/home');
        } else  {
          alert("Something went wrong. Please try again");
        }
      }
      )
  };

  const myStyle = {
    padding: "10px",
    border: "1px solid black",
  };

  const style = {
    margine: "10px",
    padding: "10px"
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }} >List</h1>
      <div>
        <table style={myStyle}>
          <thead>
            <tr >
              <th>Id</th>
              <th>Username</th>
              <th>Fathername</th>
              <th>Mothername</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Update/Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.fathername}</td>
                <td>{item.mothername}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td><Link to={`/update/${item.id}`} style={style} >Update</Link>
                  <button type='button' onClick={() => handleDelete(item.id)}  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default List;