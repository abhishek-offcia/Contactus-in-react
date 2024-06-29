import React,{useState} from 'react'


 function Contactus() {
    const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        contactno:''
    })
    const [formErrorStatus, setFormErrorStatus] = useState({
      firstName:'true',
      lastName:'true',
      email:'true',
      contactno:'true'
  })
    const handleinput = (handle, e) =>{
     //console.log(e.target.value)
    // console.log(handle)
     setFormData((prevVal)=>({
        ...prevVal,
        [handle] : e.target.value})
    )
    }
    const fromSubmitHandler = (e) =>{
      var numberRegex = /^\d+$/;
      e.preventDefault();
      // console.log(formData.firstName)
      // console.log(formData.lastName)
      // console.log(formData.email)
      // console.log(formData.contactno)
      if(formData.firstName === ''){
        console.log(formData.firstName)
        console.log(formErrorStatus)
        setFormErrorStatus((prevVal)=>({...prevVal,['firstName']:'false'}))
        
      }else{
        console.log(formData.firstName)
        console.log(formErrorStatus)
        setFormErrorStatus((prevVal)=>({...prevVal,['firstName']:'true'}))
      }
      if(formData.lastName === ''){
        setFormErrorStatus((prevVal)=>({...prevVal,['lastName']:'false'}))
      }else{
        setFormErrorStatus((prevVal)=>({...prevVal,['lastName']:'true'}))
      }
      if(formData.email === ''){
        setFormErrorStatus((prevVal)=>({...prevVal,['email']:'false'}))
      }else{
        setFormErrorStatus((prevVal)=>({...prevVal,['email']:'true'}))
      }
      if(formData.contactno === ''){
        setFormErrorStatus((prevVal)=>({...prevVal,['contactno']:'false'}))
        document.getElementById('contactnoErrormsg').innerHTML ='Contact no field is blank';
      }
      else{
        setFormErrorStatus((prevVal)=>({...prevVal,['contactno']:'false'}))
          document.getElementById('contactnoErrormsg').innerHTML ='Contact no should be number only';
        if(numberRegex.test(formData.contactno)){
          setFormErrorStatus((prevVal)=>({...prevVal,['contactno']:'true'}))
          if(formData.contactno.length < 8){
            setFormErrorStatus((prevVal)=>({...prevVal,['contactno']:'false'}))
            document.getElementById('contactnoErrormsg').innerHTML ='Contact no should be more then 8';
          }else{
            setFormErrorStatus((prevVal)=>({...prevVal,['contactno']:'true'}))
            document.getElementById('contactnoErrormsg').innerHTML ='';
          }
        }
      }
    //   setFormData({
    //     firstName:'',
    //     lastName:'',
    //     email:'',
    //     contactno:''
    // })
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
        onChange={(e)=> handleinput('firstName', e)} 
        value={formData.firstName}/>
        {formErrorStatus.firstName === 'true' ? '' : <p>First Name field is blank</p>}
        </div>
        <div>
        <label htmlFor='lastName'>Last name</label>
        <input 
        type='text' 
        id="lastName" 
        name="lastName" 
        onChange={(e)=> handleinput('lastName', e)} 
        value={formData.lastName}/>
        {formErrorStatus.lastName === 'true' ? '' : <p>Last Name field is blank</p>}
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input 
        type='text' 
        id="email" 
        name="email" 
        onChange={(e)=> handleinput('email', e)}
        value={formData.email}/>
        {formErrorStatus.email === 'true' ? '' : <p>Email field is blank</p>}
        </div>
        <div>
        <label htmlFor='contactno'>Contact no</label>
        <input 
        type='text' 
        id="contactno" 
        name="contactno" 
        onChange={(e)=> handleinput('contactno', e)}
        value={formData.contactno}/>
       <p id="contactnoErrormsg"></p>
        </div>
        <div>
        <input type='submit' value="Submit"/>
        </div>
       </form>
    </div>
  )
}

export default Contactus