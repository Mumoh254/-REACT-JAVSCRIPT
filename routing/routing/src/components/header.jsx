
import React from "react";
import {Link} from 'react-router-dom'

function  Header()
{
    return(
        <nav  className='nav'>
        <ol>
        <li>  <Link  to="/"  className="nav-link" > Home</Link> </li>
          <li>   <Link  to="/about"  className="nav-link" > About </Link> </li>
          <li>  <Link  to="/Services"  className="nav-link" >Services</Link> </li>
          <li>  <Link  to="/routing"  className="nav-link" > Routing </Link> </li>
        </ol>
       </nav>
    
    )
}

export  default    Header;