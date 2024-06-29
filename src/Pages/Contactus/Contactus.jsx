import React,{useState} from 'react'


 function Contactus() {
    
    
    const fromSubmitHandler = (e) =>{
      e.preventDefault();
      const fd = new FormData(e.target);
      const data = Object.fromEntries(fd.entries());
      console.log(data)
    }
  return (
    <div>
       <h1>Contact us form</h1>
       <form onSubmit={fromSubmitHandler}>
        <div>
        <label htmlFor='firstName'>First name</label>
        <input 
        type='text' 
        id="firstName" 
        name="firstName" 
       />
        </div>
        <div>
        <label htmlFor='lastName'>Last name</label>
        <input 
        type='text' 
        id="lastName" 
        name="lastName" 
        />
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input 
        type='text' 
        id="email" 
        name="email" 
        />
        </div>
        <div>
        <label htmlFor='contactno'>Contact no</label>
        <input 
        type='text' 
        id="contactno" 
        name="contactno" 
        />
        </div>
        <div>
        <input type='submit' value="Submit"/>
        </div>
       </form>
    </div>
  )
}

export default Contactus