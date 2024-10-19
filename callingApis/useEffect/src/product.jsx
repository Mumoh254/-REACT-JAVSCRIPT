
import React, { useEffect, useState } from "react";


function Product(){

   let[product , setProduct]  =  useState("iphone  14  pro")

    // useEffect( function(){

    //   return ()=>{
    //    console.log(
    //     {
    //       message:  "Component  is   now  removed   from   my  lyf  cycle "
    //     }
    //    )
    //   }
    
    //     console.log("product  was   mounted ")

    // },[product])
    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then((response) => response.json()) // Fixed typo: 'resposne' to 'response' and added parentheses to 'response.json'
        .then((data) => {
          console.log(
          data
          );
        })
        .catch((error) => { // Fixed typo: 'catach' to 'catch'
          console.log(error);
        });
    }, []);
    

    
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