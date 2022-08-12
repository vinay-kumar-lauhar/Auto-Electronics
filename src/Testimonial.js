import React from "react";


function Testimonial(){
return(
<>
 <h1 className="text-center">TESTIMONIALS</h1>
<div className="bg-light container ">
<form action="https://formspree.io/f/meqdqgng" method="POST">
<table style={{border:"solid",width:"100%"}}>
<tr style={{border:"solid"}} >
 <td style={{border:"solid"}} className="text-center">Your Name:</td>
<td style={{border:"solid"}}>
 <input type="text" name="Name" required/>
</td>
</tr>
<tr style={{border:"solid"}}>

 <td style={{border:"solid"}} className="text-center">Company Name:</td>

 <td style={{border:"solid"}}><input type="text" name="Company Name" required /></td>
</tr>
<tr style={{border:"solid"}}>

 <td  style={{border:"solid"}} className="text-center">Designation:</td>

 <td style={{border:"solid"}}><input type="text" name="Designation" required/></td>
</tr>
<tr style={{border:"solid"}}>

 <td style={{border:"solid"}} className="text-center" >Email:</td>

 <td style={{border:"solid"}}><input type="email" name="Email" required/></td>
</tr>
<tr style={{border:"solid"}} >

 <td style={{border:"solid"}} className="text-center" >Location:</td>

 <td style={{border:"solid"}}><input type="text" name="Location" required/></td>
</tr>
<tr style={{border:"solid"}} >

 <td style={{border:"solid"}}className="text-center" >Phone:</td>

 <td style={{border:"solid"}}><label for="number">Phone Number</label><br/>
<input type="number" name="Phone Number" required/>
</td>
</tr>
<tr style={{border:"solid"}} >

 <td  style={{border:"solid"}} className="text-center" >Write Your Review:</td>

 <td><textarea name="Review" style={{border:"solid"}}  className="form-control" rows="5" id="message"></textarea>
</td>
</tr>
<tr style={{border:"solid"}} >

 <td style={{border:"solid"}}>
</td>
<td style={{border:"solid"}}>
<button type="submit" className="btn btn-primary" >Submit</button>
<span>     <button type="reset" className="btn btn-danger" >Cancel</button></span>
</td> 
</tr>
</table>
</form>
</div>
</>
);
}
export default Testimonial;