
import React, { useState } from "react";


function Form ()
{  //event  by  default availabe wen  u  calll a  function by  event

    let [name , setName]  =  useState("");
    let [email , setEmail]  =  useState("");

    function  handleName (event)
    
    {
      setName(event.target.value)
      console.log(name)
    }

    function handleEmail(event)
    {
      setEmail(event.target.value)
    }

    return(

        <div className="form">
            <input type="text" onChange={handleName} placeholder="Enter Name "  value={name}  required/>
            <input type="email" onChange={handleEmail} placeholder="Enter email " required />
            <h1>{name}</h1>
            <h1>{email}</h1>
            <button  onClick={()=>{
                return  console.log("form  submitted  sucessfully")
            }}>  Submit  Form </button>

        </div>
    )
}
export default Form ;