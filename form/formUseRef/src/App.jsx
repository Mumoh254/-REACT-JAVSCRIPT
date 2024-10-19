import { useState } from 'react'
import './App.css'

function App() {
  let [name ,setName ]  = useState("Peter Mumo")

  let  [animals  ,  setAnimals]   =  useState([
    "lion" , "Cheetah" , "Hyena"
  ])

  return (
    <>
    <h1>  Heloow   Welcome </h1>
    <h2> {name}</h2>
    <button onClick={()=>{
      setName("Elon Musk")
    }}>
      Change   Name 
    </button>
      {
        animals.map((animal  ,  index)=>{
          return(
           <h1  key={index}>{animal}</h1>
          )
        })
      }

      <button  onClick={()=>{
        
      }}>  add   new  animal </button>
    </>
  )
}

export default App
