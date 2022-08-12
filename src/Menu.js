import React from "react";
import {Link} from "react-router-dom"

function Menu(){
return( 
<>
 <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <img src="images/auto.jpg" alt="" style={{width:"70px",height:"70px"}}/><br/>
    
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link className="nav-link  text-white"to="/"> Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="About">Aboutus</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="Product">Product</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link text-white" to="Career">Career</Link>
        </li>
        

         <li className="nav-item">
          <Link className="nav-link text-white" to="Contact">Contactus</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</>
);
};
export default Menu;