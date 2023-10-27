import React from "react";
import  {useState}  from "react";


function Fathername(){
    const [inputs, setInputs] =useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      return(
        <>
      <label>Enter your Fathername:</label><br></br>
      <input 
        type="text" 
        name="fathername" 
        value={inputs.fathername || ""} 
        onChange={handleChange}
      />
      </>
      );
}
export default Fathername;