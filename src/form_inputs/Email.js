import React from "react";
import  {useState}  from "react";


function Email(){
    const [inputs, setInputs] =useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      return(
        <><label>Enter your Email:</label><br></br>
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        /></>
      );
}
export default Email;