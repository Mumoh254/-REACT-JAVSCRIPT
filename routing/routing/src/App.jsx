import { useState } from 'react'
import './App.css'
import Routing from './routing'
import About from './components/about'
import Services from './components/services'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'



function App() {

  return (
    <>

    <BrowserRouter>

    <Routes>
      <Route  path='/'  element={ <Routing/>}/>
      <Route  path='/services'  element={  <Services/>}/>
      <Route  path='/about'  element={ <About/>}/>
    </Routes>
    
    </BrowserRouter>
   
   
   
     
    </>
  )
}

export default App
