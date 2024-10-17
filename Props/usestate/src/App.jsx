import { useState } from 'react'
import './App.css'
import product from './product'
import User from './user'
import State   from "./State"
import state from '../state'



function App() {
  
  return (
    <>
          <State   name:"peter" />   
       <Product name:"peter"  age:"22" specs={{ram:"3gb" , description:"this  is  one  of the best  selling disk  that  we  have "}}/>
  

    </>
  )
}

export default App
