import { useState } from 'react';
import { styled } from 'styled-components'
import Button from './Button';
import Input from './Input';

// Tagged templates
const ControlContainer=styled.div`
    display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

`




export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    return (
        <ControlContainer id="auth-inputs">
            <ControlContainer>
                {/* <p> */}
                    {/* <label className={`label ${emailNotValid ? 'invalid' : ''}`}>Email</label>  * conditional styling using css */}
                    {/* <Label invalid={emailNotValid}>Email</Label> */}
                    <Input
                    label={"Email"}
                    invalid={emailNotValid}
                        type="email"
                        // style={{
                        //     backgroundColor: emailNotValid ? '#fed2d2' : '#d1d5db'
                        // }}
                        // className={emailNotValid ? 'invalid' : undefined}
                        onChange={(event) => handleInputChange('email', event.target.value)}
                    />
                {/* </p>
                <p> */}
                    {/* <Label className={`label ${emailNotValid ? 'invalid' : ''}`}>Password</Label> */}

                    {/* <label invalid={passwordNotValid}>Password</label> */}
                    <Input
                         label={"Password"}
                        // style={{
                        //     backgroundColor: passwordNotValid ? '#fed2d2' : '#d1d5db'
                        // }}
                        invalid={passwordNotValid}
                        
                        type="password"
                        // className={passwordNotValid ? 'invalid' : undefined}
                        onChange={(event) =>
                            handleInputChange('password', event.target.value)
                        }
                    />
                {/* </p> */}
            </ControlContainer>
            <div className="actions">
                <button type="button" className="text-button">
                    Create a new account
                </button>
                <Button onClick={handleLogin}>Sign In</Button>
            </div>
        </ControlContainer>
    );
}
//Dynamic & Conditional styling with css files and css classes
// Scopping css rules with css modules
// css modules: vanila css with file-specific scoping
// introducing styled components, third party package