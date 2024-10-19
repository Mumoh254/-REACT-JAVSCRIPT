
import React, { useEffect, useState } from "react";


function Product(){

   let[product , setProduct]  =  useState("iphone  14  pro")

    useEffect( function(){

        console.log("product  was   mounted ")

    },[product])

    
    return(
        <div  className="product">

      <h1>  {product}</h1>
      <h2> Price: 30000</h2>
      <button  onClick={()=>{
        setProduct("iphone  16  pro  max ")
      }}>click </button>

        </div>
    )
}

export  default   Product