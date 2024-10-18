
import React from "react";

function Product (props){
    let {price , name , rating } =  props
    return(
        <div>
            <h2>{name} </h2>
            <h3>{price} </h3>
            <h4>{rating} </h4>
        </div>
    )
}

export   default   Product;