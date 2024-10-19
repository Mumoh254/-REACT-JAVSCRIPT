import React from "react"

function  Product(props){
    //destructuring
    let { name  ,  age  , country}  =  props;

    return(
        <div>    Tesla   Model1
            
            
        <p>{name}</p>
        <p>{ age}</p>

        </div>
    )
}

export  default  = Product;