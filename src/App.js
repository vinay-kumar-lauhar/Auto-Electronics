import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Menu from "./Menu";
import Testimonial from "./Testimonial";
import Career from "./Career";

function App()
{
   return( 
    <>
    <Menu/>
     <Routes>
      <Route  path="/"element={<Home/>}/>
      <Route  path="About"element={<About/>}/>
      <Route  path="Contact"element={<Contact/>}/> 
      <Route path="Product"element={<Product/>}/>
      <Route path="Testimonial" element ={<Testimonial/>}/>
       <Route path="Career"element={<Career/>}/> 

     </Routes>

  </>);
};
export default App;
