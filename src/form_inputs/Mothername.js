import React from "react";
import  {useState}  from "react";


function Mothername(){
    const [inputs, setInputs] =useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      return(
        <>
        <label>Enter your Mothername:</label><br></br>
        <input 
          type="text" 
          name="mothername" 
        /></>
      );
}


export default Mothername;