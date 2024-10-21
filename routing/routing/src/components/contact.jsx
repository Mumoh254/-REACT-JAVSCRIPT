import React from 'react'; // Corrected typo
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Added Link to imports
import Login from './login';
import Form from './form';

function Contacts() {
    return (
      
         
          
               
                    
                   
                        <div className="Contacts">
                               <Form />

                            <h1>Contact Components</h1>
                            <p>
                                <Link to="/login">Log in here</Link> 
                            </p>
                          
                        </div>
              
             
    );
}

export default Contacts;
