import React from "react";
import { Outlet , Link } from 'react-router-dom';

function About() {
    return (
        <div className="about">
            <h1>About Component</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem accusamus nemo, 
                dignissimos nisi reprehenderit alias quasi fuga tempora provident accusantium a esse 
                officia nulla ipsum culpa ullam animi. Tempora?
            </p>

            <ul>
                <li> <Link  to="/about/images">Images</Link> </li>
                <li>Gallery</li>
                <li>  <Link to='/about/location'>Location</Link> </li>
            </ul>

            {/* Outlet should be self-closing */}
            <Outlet />
        </div>
    );
}

export default About;
