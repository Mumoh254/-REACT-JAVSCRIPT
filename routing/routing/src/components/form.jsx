import React, { useState } from  'react'

function Form ()

{
	let [details ,  setDetails ]   = useState([])

	function  handleSubmission()
	{
		console.log({
			message:  "Your   data   has  been  submitted   sucessfully"
		})
	}

	function   handleInput  (event)
	{
       
	   setDetails((prevObj)=>{
		return {...prevObj,[event.target.name]:event.target.value}
	   })
	  console.log(details)
	}

	return(
		<form  className='form'>

			<h1>  Register  here </h1>

			<label htmlFor="name"></label>
			<br />
			<input type="text" name='name' placeholder='Enter name' onChange={ handleInput}  />
			<br />

			<label htmlFor="email"></label>
			<br />
			<input type="email" name='email' placeholder='Enter email'  onChange={ handleInput}  />
			<br />
			<label htmlFor="password"></label>
			<br />
			<input type="password" name='password' placeholder='Enter password'  onChange={ handleInput}  />
			<br />
			<button   onClick={ handleSubmission}> Submit </button>


		</form>
		
	)
}

export default Form
