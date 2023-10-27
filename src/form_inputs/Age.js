import React from "react";
import  {useState}  from "react";


function Age(){
    const [inputs, setInputs] =useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
      return(
        <>
            <label>Enter your age:</label><br></br>
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </>
      );
}
export default Age;