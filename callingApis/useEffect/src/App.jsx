

import { useState } from 'react'
import './App.css'
import Product from './product'


function App() {
  
  let [showProduct , setShowProduct]  =  useState(false)

  return (
    <>
     <h1>useEffect  demo </h1>
     <button  onClick={()=>{
      setShowProduct(true)
     }}> show </button>

     <br />
     <button  onClick={()=>{
      setShowProduct(false)
     }}> hide </button>


     {
      showProduct === true? (  <Product/>):(<h1>
        component  is   still  mounted 
      </h1>)
     }
   
    </>
  )
}

export default App
