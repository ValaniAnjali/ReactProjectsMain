import { useRef, useState } from "react";

//use noValidate attribute for disaling auto validation of email input type
export default function Login() {
  const[emailIsInvalid,setEmailIsInvalid]=useState(false);

    const email=useRef();
    const pass=useRef();
  


    function handlesubmission(event){
        event.preventDefault();
        console.log("Submission");
        const enteredEmail=email.current.value;
        const enteredPassword=pass.current.value;
        const emailIsValid=enteredEmail.includes('@');

        if(!emailIsValid){
          setEmailIsInvalid(true);
          return;
        }
        setEmailIsInvalid(false);

        console.log("Sending Http request..")
        // console.log(enteredEmail," ",enteredPassword);
    }
   
    
  return (
    <form onSubmit={handlesubmission} noValidate>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email" >Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">{emailIsInvalid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password" >Password</label>
          <input id="password" type="password" name="password" ref={pass} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
