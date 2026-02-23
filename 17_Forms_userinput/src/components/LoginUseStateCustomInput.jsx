import { useInput } from "../hooks/useInput";
import Input from "./Input";
import { isEmail,isNotEmpty,hasMinLength } from '../util/validation'

// vlidation using onBlur and state change for making sure user is not editing and field lost focus
export default function Login() {
    // const[enteredEmail,setEnteredEmail]=useState('');
    // const[enteredPassword,setEnteredPassword]=useState('')
    // const isEmailValid=enteredValues.email!=='' && !enteredValues.email.includes('@');
    const{value:emailValue, handleInputChange:handleEmailChange, handleInputBlur:handleEmailBlur,hasError:emailHasError}=useInput('',(value)=>isEmail(value)&&isNotEmpty(value),);
    const{value:passwordvalue, handleInputChange:handlePasswordChange, handleInputBlur:handlePasswordBlur,hasError:passwordHasError}=useInput('',(value)=>hasMinLength(value)&&isNotEmpty(value) );


 

    function handlesubmission(event){
        event.preventDefault();
        if(emailHasError||passwordHasError){
          return;
        }

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
        
        
        <Input label="email" id="email" type="email" name="email" value={emailValue} onChange={handleEmailChange} onBlur={handleEmailBlur} error={emailHasError && 'Please Enter a Valid Email Address'}/>

        <Input label="password" id="password" type="password" name="password" value={passwordvalue} onChange={handlePasswordChange} onBlur={handlePasswordBlur} error={passwordHasError && 'Please Enter a valid Password with Min. length = 6'}/>
        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
