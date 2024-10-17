import   react  from  'react'
import { useState } from 'react'


function Countries (){

    let [ countries  , setCountris]  =  useState([
        {name:"india" , capital:"New delhi"},
        {country:"kenya"  , capital:"Nairobi"},
        {france:"Paris" , capital:"Paris"}
    ])

    {
        countries.map((country)=>{

            return (
                <Country name={country.name} capital={country.capital} pop={country.pop}/>
            )

        })
    }
    // same   as 
    // let countries  =  [
    //     {name:"india" , capital:"New delhi"},
    //     {country:"kenya"  , capital:"Nairobi"},
    //     {france:"Paris" , capital:"Paris"}
    // ]
    return(

        <div>

            <h1> Kenya </h1>
            <h2>  population: 50m </h2>
            <h3>  size  42,000Sqfeet </h3>
        </div>

    )
}

export  default Countries