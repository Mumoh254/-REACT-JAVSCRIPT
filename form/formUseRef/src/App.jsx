import { useState } from 'react'
import './App.css'

function App() {
  let [name ,setName ]  = useState("Peter Mumo")

  let  [animals  ,  setAnimals]   =  useState([
    "lion" , "Cheetah" , "Hyena"
  ])

  function  add()
  {

    setAnimals((previousValue)=>{
    return [...previousValue , "zebra" ]   
  })
 
   
  }


  function   changeName()  {
         setName((prev)=>{
          return  prev + "Elon Musk "
         })
  }

  return (
    <>
    <h1>  Heloow   Welcome </h1>
    <h2> {name}</h2>
    <button onClick={changeName}>
      Change   Name 
    </button>
      {
        animals.map((animal  ,  index)=>{
          return(
           <h1  key={index}>{animal}</h1>
          )
        })
      }

      <button  onClick={add}>  add   new  animal </button>
    </>
  )
}

export default App
