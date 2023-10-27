import React from "react";
import  {useState}  from "react";


function Password(){
    const [inputs, setInputs] =useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      return(
       <>
        <label>Enter your User Password:</label><br></br>
        <input 
        type="password" 
        name="password" 
        value={inputs.password || ""} 
        onChange={handleChange}
      />
</>
      );
    }
    export default Password;