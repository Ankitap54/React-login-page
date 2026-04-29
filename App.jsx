import React, { useState } from 'react'


const App = () => {
const [name,setName]=useState();
const [email,setEmail]=useState();
const [password,setPassword]=useState();



 const submitHandle=(event)=>{
  event.preventDefault();

  if(name && email && password){
    alert("login succesfully")
  }
else{
  alert("fill all the requirement")
}


const formData={

  name:name,
  email:email,
  password:password,
}
console.log('form sumbited',formData);

setName('');
setEmail('');
setPassword('');
}

 return (
    <div className='box'>
      <h1>LOGIN FORM</h1>

      <div className='innerbox'>

        <form onSubmit={submitHandle}>

        <div>
            <p className='feildName'>NAME:</p>
            <input type='text' onChange={(event)=>setName(event.target.value)}></input>
            <p>{name ? " " : "name is required"}</p>
          </div>

         <div >
            <p className='email'>EMAIL:</p>
            <input type='email' onChange={(event)=>setEmail(event.target.value)}></input>
            <p>{name ? " " : "email is required"}</p>
          </div>


          <div >
            <p className='feildName'>PASSWORD:</p>
            <input type='text' onChange={(event)=>setPassword(event.target.value)}></input>
            <p>{name ? " ": "password is required"}</p>
          </div>

          <button type='submit'>SUBMIT</button>


     </form>

      </div>
    </div>
  )
}

export default App
