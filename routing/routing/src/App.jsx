import { useState } from 'react'
import './App.css'
import Routing from './routing'
import About from './components/about'
import Services from './components/services'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'


function App() {
  return (
    <>
    <BrowserRouter>

    <Header/>
   
    <Routes>
    <Route  path='/'  element={ <Home/>}/>
      <Route  path='/routing'  element={ <Routing/>}/>
      <Route  path='/services'  element={  <Services/>}/>
      <Route  path='/about'  element={ <About/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App
