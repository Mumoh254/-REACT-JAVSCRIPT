

import React from "react";
import { useState } from "react";


function Rev  (){


    let countries  = [

        {name:"kenya" , populatio:"29983848"},
        {name:"kenya" , populatio:"29983848"}
    ]

    let [country  useCountry]  = useState(countries )

    return(

       

        
        
            country.map((country)=>{
                return (
                    <div>    

                    <h1> {country[0].name}</h1>
                    <h1> {country[0].population}</h1>
                 
                 </div>

                )
            })
        }

    )
}

expoprt default = Rev