
import React, { useState } from "react";


function Product (){
   

    let Products = [

        {
            name: "Wireless Headphones",
            price: 99.99,
            category: "Electronics",
            inStock: true,
            description: "High-quality wireless headphones with noise cancellation and long battery life."
        },
        {
            name: "Smartwatch",
            price: 199.99,
            category: "Wearables",
            inStock: true,
            description: "Feature-rich smartwatch with fitness tracking and customizable watch faces."
        },
        {
            name: "Portable Charger",
            price: 29.99,
            category: "Accessories",
            inStock: false,
            description: "Compact and powerful portable charger to keep your devices powered on the go."
        },
        {
            name: "Bluetooth Speaker",
            price: 79.99,
            category: "Electronics",
            inStock: true,
            description: "Durable Bluetooth speaker with impressive sound quality and waterproof design."
        },
        {
            name: "Yoga Mat",
            price: 24.99,
            category: "Fitness",
            inStock: true,
            description: "Non-slip yoga mat for all types of workouts, extra cushioning for comfort."
        }
    ];

    let [products , setProducts ]  = useState(Products )
    
    products.map((product)=>{
        return(
            < Product name={product.name}  price={product.price}
             category={product.category}  inStock={product.inStock}  
             description={product.description}/>
        )

    })
    
    return(
        <div>
          
        </div>
    )
}

export   default   Product;