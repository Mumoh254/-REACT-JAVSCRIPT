
import React from "react";
import { useState } from "react";

function Render(){

    let [isLoggedIn  , setIsLoggedIn]  =  useState(true)
    // tenery  oparators condition ?outcome : outcome  2


    return(
        {
            isLoggedIn==true?( <h1> Welcome usesr {+userName} </h1>):(<h1> You  are  not   logged  in</h1>)
        }

    )
}

