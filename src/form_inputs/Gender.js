import React from "react";
import  {useState}  from "react";


function Gender(){
    const [inputs, setInputs] =useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      return(
        <>
            <label>choose your gender</label><br></br>
      <input 
        type="radio" 
        name="gender" 
        value={inputs.gender || "male"} 
        onChange={handleChange}
      ></input><label>Male</label><br></br>
      <br></br> <input 
        type="radio" 
        name="gender" 
        value={inputs.gender || "female"} 
        onChange={handleChange}
      /><label>Female</label><br></br>
      <br></br> <input 
        type="radio" 
        name="gender" 
        value={inputs.gender || "other"} 
        onChange={handleChange}
      /><label>Other</label>
        </>
      );
}
export default Gender;