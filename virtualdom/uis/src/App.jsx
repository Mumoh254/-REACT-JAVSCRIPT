import { useState } from 'react'
import './App.css'
import Countries from './countries'
import Product from './products'

function App() {
 
  return (
    <>
      <div>

       <Countries/>
       <Product name = "iphone  16"  price  = "400,000,000.90" rating = "5.94"/>
      
      </div>
    
    </>
  )
}

export default App
