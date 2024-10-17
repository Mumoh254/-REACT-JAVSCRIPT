import React from "react";

//using  state   variable     import  state   from   react  a   state   functionality  
import { useState } from "react";

// state    is  data  of  a  component  and   when    the data  changes    the  ui   changess  and  the   component  rerenders 
function  State  (props){

    //creating  a  state   variable  
    let  [ name  , useName]   =  useState("")
    let  [ name  , useName]   =  useState("")

    ///object  destructuring 
    let  { name }  =  props 
// component  is  a   function  returning   an  html 

function   changeName( ){
    useState("Peter")
    console.log(name)
}

function   changePlanet( planet){
   
    console.log(planet)
}

return(
    <div>
         <p>  (name} </p>
         <button  onClick={ changeName}> Click  to   chnge   state  </button>
         <button  onClick={ changeplanet()=>{
            Planet("mars")
         }}> Click  to   chnge   state  </button>
    </div>
)
}

export default  =   State