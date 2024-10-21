import React, { useState } from  'react'


function Login ()

{
    let [logDetails ,  setLogDetails ]   =   useState([])

    function  handleInput (event)
    {
        console.log(event.target.value)
        setLogDetails((prevLog)=>{
            return {...prevLog,[event.target.name]:event.target.value}
        })
    }

    function handleSubmit ()
    {
        console.log(logDetails)
    }

	return(
		<form  className='form'>

			<h1> Login here </h1>


			<label htmlFor="email"></label>
			<br />
			<input type="email" name='email' placeholder='Enter email' onChange={ handleInput }/>

			<label htmlFor="password"></label>
			<br />
			<input type="password" name='password' placeholder='Enter password' onChange={ handleInput }/>

			<button onClick={ handleSubmit} > Submit </button>


		</form>
		
	)
}

export default Login
