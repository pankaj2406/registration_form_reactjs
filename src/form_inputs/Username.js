import React from "react";
import  {useState}  from "react";

function Username(){
    const [inputs, setInputs] =useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    return(
        <>
    
      <label>Enter your User Name:</label><br></br>
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
     
      </>
    );
}
export default Username;