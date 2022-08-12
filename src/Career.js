import React from "react";



function Career(){
return(
<>
<h1 className="text-center"><b>Career</b></h1>
<h3   style={{margin:"20px",color:"darkblue"}}>Join us, be a part of our growth journey and create your own success story.</h3> 
<form className="bg-light" enctype="multipart/form-data" action="" method="POST">
<div className="container row">
<div className="col-sm-4">
<label for="name">Your Name (required)</label>
<br/>
<input type="text" name="Name" style={{border:"solid"}} required/>
</div>
<div className="col-sm-4">
<label for="name">Your Email (required)</label>
<br/>
<input type="email"  name="Email" style={{border:"solid"}} required/>
</div>
</div>
<br/>
<div className="container row">
<div className="col-sm-4">
<label for="name">Your Mobile</label>
<br/>
<input type="number" name="Mobile Number" style={{border:"solid"}} required/>
</div>
<div className="col-sm-4">
<label for="name">Upload Your Resume</label>
<br/>
<input type="file" id="myfile" name="Resume" style={{border:"solid",width:"60%"}} required/>
</div>
<div className="container row ">
<div className="col-sm-6">
<br/>
<label for="name">Your Message </label>
<br/>
<textarea name="Message" style={{ border:"solid",width:"100%"}} className=" form-control" rows="5" id="message"></textarea>
<br/>
<button className="btn btn-dark" type="submit">Send</button>
<br/><br/>
</div>
<br/><br/>
<div className="col-sm-6">
<br/><br/><br/>
<div className=" bg-warning" style={{width:"30%"}}><h1>WE'RE HIRING</h1></div>
</div>

</div>

</div>

</form>
</>
);
}
export default Career;