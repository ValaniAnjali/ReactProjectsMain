import { useState } from "react";

// vlidation using onBlur and state change for making sure user is not editing and field lost focus
export default function Login() {
    // const[enteredEmail,setEnteredEmail]=useState('');
    // const[enteredPassword,setEnteredPassword]=useState('');
    const [enteredValues,setEnteredValues]=useState({
        email:'',
        password:''
    });

    const [didEdit,setDidEdit]=useState({
      email:false,
      password:false
    })

    // const isEmailValid=enteredValues.email!=='' && !enteredValues.email.includes('@');
    const isEmailValid=didEdit.email && !enteredValues.email.includes('@');


    function handleInputChange(identifier,value){
        setEnteredValues(
            prevValues=>({
                ...prevValues,
                [identifier]:value
            })
        )
        setDidEdit(prevEdit=>({
          ...prevEdit,
          [identifier]:false,
        }));
        
    }


    function handlesubmission(event){
        event.preventDefault();
        console.log("Submission");
        // console.log(enteredEmail+" "+enteredPassword);
        console.log(enteredValues);
        setEnteredValues({
          email:'',
          password:''
        });

    }

    function handleInputBlur(identifier){
      setDidEdit(prevedit=>({
        ...prevedit,
        [identifier]:true
      }))

    }
    // function handleEmailChange(event){
    //     setEnteredEmail(event.target.value);
    // }
    // function handlePasswordChange(event){
    //     setEnteredPassword(event.target.value);

    // }
    //with onsubmit in form to preventDefault behaviour
    //Managing and Getting user input via state & Generic Handlers
  return (
    <form onSubmit={handlesubmission}>
      <h2>Login</h2>

      <div className="control-row">
        
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event)=>{handleInputChange('email',event.target.value)}} value={enteredValues.email} onBlur={()=>handleInputBlur('email')}/>
          <div className="control-error">{isEmailValid && <p>Please enters a valid email</p>}</div>
        </div>


        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event)=>{handleInputChange('password',event.target.value)}} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
