
import './App.css'
import Routing from './routing'
import About from './components/about'
import Services from './components/services'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'
import Footer from './components/footer'
import Contacts from './components/contact'
import Login from './components/login'
import Map from './components/map'
import Image from './components/images'



function App() {
  return (
    <>
    <BrowserRouter>

    <Header/>
   
    <Routes>
    <Route  path='/'  element={ <Home/>}/>
      <Route  path='/routing'  element={ <Routing/>}/>
      <Route  path='/services'  element={  <Services/>}/>
      <Route  path='/about'  element={ <About/>}>

       <Route  path='/about/images'  element={ <Image/>}/>
       <Route  path='/about/location'  element={ <Map/>}/>
    


      </Route>

      <Route  path='/contacts'  element={ <Contacts/>}/>
      <Route  path='/login'  element={ <Login/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>

    </>
  )
}
export default App
