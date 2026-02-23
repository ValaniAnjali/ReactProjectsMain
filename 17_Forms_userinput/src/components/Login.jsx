//getting values via FormData & Native Browser's API

import { useRef } from "react";

export default function Login() {

    const email=useRef();
    const pass=useRef();
  


    function handlesubmission(event){
        event.preventDefault();
        console.log("Submission");
        const enteredEmail=email.current.value;
        const enteredPassword=pass.current.value;
        
        console.log(enteredEmail," ",enteredPassword);
    }
   
    
  return (
    <form onSubmit={handlesubmission}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email" >Email</label>
          <input id="email" type="email" name="email" ref={email} />
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
