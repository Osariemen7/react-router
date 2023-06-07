import React from "react";
import {Link, Outlet} from "react-router-dom";



function About(){
  return(
    <div>
      <nav>
        <Link to ="/" className="nav">Home</Link>
        <Link to ="/About" className="nav">About</Link>
        <Link to ="/user" className="nav">Users</Link>
      </nav> 
      <h1>About</h1>
      <p>This is the About Page</p>
      <p>Get to know more about our products and services</p>
      <div>
      <Link to ="./Aboutproduct" className="prod">Product</Link>
      <Link to ="./Aboutservice" className="prod">Service</Link>
      </div>
       <Outlet />
    </div>
  )
}
export default About;