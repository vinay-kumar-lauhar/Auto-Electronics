import React from "react"; 





function Contact(){

 

return(
      <>
       <h1 className="text-center"><b>Contact Us</b></h1>
       <div className="row container">
       <div  className="col-sm-5 bg-light" style={{margin:"30px 40px"}}>
       <p style={{margin:"20px 20px 0px"}} ><b> AUTO ELECTRONICS PVT.LTD</b> </p>
       <hr/>
       <p style={{margin:"10px 20px 0px"}} >Contact Person </p>
       <p style={{margin:"10px 20px 0px",color:"brown"}} ><i>Mr. Vinay Kumar Lauhar </i></p>
       <hr/>
       <p style={{margin:"10px 20px 0px"}} >Address</p>
       <p style={{margin:"10px 20px 0px",color:"brown"}} ><i>444,Loharo Ka bas vpo.Sindru Teh- Sumerpur Dist-Pali(Raj.)-306708 </i></p>
       <hr/>
       <p style={{margin:"10px 20px 0px"}} >Call Us</p>
       <p style={{margin:"10px 20px 0px",color:"brown"}} ><i> +91-9694783689 </i></p>
        <hr/>
         <p style={{margin:"10px 20px 0px"}} >Email</p>
          <p style={{margin:"10px 20px 0px",color:"brown"}} ><i>vinaylauhar121@gmail.com </i></p>
         
</div>
       <div className="col-sm-6 bg-primary" style={{margin:"30px 0px 0px"}}>
       <form action="https://formspree.io/f/xyyvyedn" method="POST">
  <div className="form-group">
    <label for="text">Name:</label>
    <input type="text" class="form-control" name="Name" placeholder="Enter your Name" id="text" required/>
  </div>
  <div className="form-group">
    <label for="email">Email:</label>
    <input type="email" name="Email" class="form-control" placeholder="Enter email" id="email" required/>
  </div>
 <div className="form-group">
    <label for="number">Phone Number:</label>
    <br/>
    <input type="number"  name="Phone Numnber"lass="form-control" placeholder="Enter phone number" id="number" required/>
</div>
 <div className="form-group">
  <label for="message">Message:</label>
  <textarea  name="Message" className="form-control" rows="5" id="message"></textarea>
</div>
<br/>
  <button type="submit" className="btn btn-dark text-white" >Send Message</button>
<br/>
</form>

      </div>
</div>
<br/>
    </>
);

};
export default Contact;