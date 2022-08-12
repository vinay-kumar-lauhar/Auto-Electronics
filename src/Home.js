import React from "react";
import{Link} from "react-router-dom"



 




function Home(){
return(
<>
<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/electronics1.jpg" style={{height:"400px"}} class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/electronics2.jpg"style={{height:"400px"}}  class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/electronics3.jpg"style={{height:"400px"}} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<br/>
<div className="container row">
<div className="col-sm-6">
<img src="images/home.jpg" alt=""/>
</div>
<div className="col-sm-6 container ">
<h1  style={{color:"brown"}}><b>Welcome to Our Website</b></h1>
<p>Auto Electronics Pvt. Ltd is a renowned Manufacturer, Exporter, and Supplier of Printed circuit board, Educational trainer board,Audio amplifier ,Electronics Instrument.</p>
<br/>

<div className="row container ">
<div className="col-sm-6 container bg-primary ">
 <p><b>Market Covered </b> 
 <p>World Wide</p></p>
</div>
<div className="col-sm-6 container bg-warning">
 <p><b>Nature of Business</b>
 <p>Manufacturer,Exporter,Supplier & Service Provider</p></p>
</div>

</div>
<br/>
<div className="row container ">
<div className="col-sm-6  container bg-primary">
 <p><b>Year of Establishment</b>
 <p>2022 </p></p>
</div>
<div className="col-sm-6 container  bg-warning">
 <p><b>Name Of Owner</b>
 <p>Mr. Vinay Kumar Lauhar</p> </p>
</div>

</div>
 
  <br/>
<div className="container"style={{border:"2px solid red"}}>
In promotion and advertising, a testimonial consists of a person's experience in a written statement extolling the integrity of a product or services.
<br/><br/>
<button className=" btn btn-dark " style={{color:"white"}}><Link  className="navlink active text-decoration-none"to="Testimonial"style={{color:"white"}} >POST YOUR TESTIMONIAL</Link></button>
<br/>
<br/>
</div>
<br/>


</div>
</div>
</>
);




};
export default Home;