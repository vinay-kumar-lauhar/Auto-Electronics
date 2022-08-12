import React from "react"; 




function Product(){
return( 
<>
<h1 className="text-center"><b>Product</b></h1>
 <div className="container row" style={{margin:"0px 20px 0px"}}>
<div className="col-md-3">
<div className="bg-warning">
<img src="/images/instrument.jpg" style={{width:"100%"}} alt=""/> 
<p className="container text-center"><b> Multimeter</b></p>
A multimeter is a measuring instrument that can measure multiple electrical properties. A typical multimeter can measure voltage, resistance, and current, in which case it is also known as a volt-ohm-milliammeter (VOM), as the unit is equipped with voltmeter, ammeter, and ohmmeter functionality. Some feature the measurement of additional properties such as temperature and capacitance.
</div>
</div>
<div className="col-md-3">
<div className="bg-primary">
<img src="/images/trainer.jpg" style={{height:"50%",width:"100%"}} alt=""/> 
<p className="container text-center"><b> Trainer Board </b></p>
Digital Electronic Trainer Kit, that we offer, is among our most widely demanded Teaching Equipment. Precision engineered with the latest technology, Digital Electronic Trainer Kit provided by us is well-known for giving high performance. Students can easily understand the concept with this Digital Electronic Trainer Kit.

</div>
</div>  
<div className="col-md-3">
<div className="bg-warning">
<img src="/images/cro.jpg" style={{height:"50%",width:"100%"}} alt=""/> 
<p className="container text-center"><b> CRO</b></p>
The cathode ray oscilloscope is an electronic test instrument, it is used to obtain waveforms when the different input signals are given. In the early days, it is called as an Oscillograph. The oscilloscope observes the changes in the electrical signals over time, thus the voltage and time describe a shape and it is continuously graphed beside a scale. By seeing the waveform, we can analyze some properties like amplitude, frequency, rise time, distortion, time interval, and etc.
</div>
</div>  
<div className="col-md-3">
<div className="bg-primary">

<img src="/images/function.jpg" style={{height:"50%",width:"100%"}} alt=""/> 
<p className="container text-center"><b>Function Generator</b></p>
A function generator is usually a piece of electronic test equipment or software used to generate different types of electrical waveforms over a wide range of frequencies. Some of the most common waveforms produced by the function generator are the sine wave, square wave, triangular wave and sawtooth shapes. 


</div>
</div>    
</div>
<br/>  
</>
);
};
export default Product;