import React from "react"

function  User(){
    let  name  =  "peter"
    function changeName () {
        name  =  "mumo"
        console.log( name )
    }

    return (
        <div>
          <button  onClick={ChangeName}>  Change   Name </button>
        </div>
    )

}
   


export   default  User