
import React, { useState } from "react";


function HandleForm () {

    let [details  , setDetails]  =  useState({})

    const handleInput = (event) => {
        setDetails((prevObj)=>{
         return {...prevObj,[event.target.name]:event.target.value}
        })
        console.log(details)
      };


      function  handleSubmission()
      {
         console.log(details)
      }

    return(
          <div  className="handleForm">
               <label htmlFor=""> Name </label>
               <br />
             <input type="text" name="name" placeholder="Enter  Name"  onChange={handleInput}/>
             <br />
             <label htmlFor="">Email</label>
             <br />
             <input type="email" name="email" placeholder="Enter  Email" onChange={handleInput} required/>
             <br />
             <label htmlFor=""> Password</label>
             <br />
             <input type="password"  name="password" placeholder="Enter Password" onChange={handleInput} />
                <br />
             <button   onClick={handleSubmission}>  Submit  Form</button>
          </div>
    )
    
}

export default HandleForm;