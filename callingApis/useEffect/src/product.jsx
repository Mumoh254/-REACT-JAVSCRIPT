
import React, { useEffect } from "react";


function Product(){

    useEffect( function(){

        console.log("product  was   mounted ")

    })

    return(
        <div  className="product">

      <h1>  Samsung</h1>
      <h2> Price: 30000</h2>

        </div>
    )
}

export  default   Product