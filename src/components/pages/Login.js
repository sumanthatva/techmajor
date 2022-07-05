import { useState } from 'react';
import './Login.css';

export default function Login() {

  /** 
   * State to maintain email and password inputs
  */
  const [loginInfo, setLoginInfo] = useState({email: "", password: ""});

  /**
   * State to enable login button
   */
  const [isEnableLogin, setIsEnableLogin] = useState(false);

  /**
   * function to check if the entered email is a valid email.
   * this function compares the email with a regex.
   */
  const isEmailValid = (email) => {
    const validEmailRegex = /^[a-zA-Z]+[\w\d]*([\.-]?[\w\d])*@[a-zA-Z]+[a-zA-Z0-9]*\.([a-zA-Z0-9]+\.)*[a-zA-Z]{2,5}$/;
    const isValid = validEmailRegex.test(email);
    console.log("isEmailValid::isValid: " + isValid);
    // Enable/disable login button accordingly.
    setIsEnableLogin(isValid);
  }

  /** 
   * email change handler 
   * */
  const emailChangeHandler = (event) => {
    setLoginInfo((prevState) => {
      return {
        ...prevState,
        email: event.target.value
      }
    });
    // Check if email is valid.
    // Is this the right place to make this call?? IF so, what should be the param ?
    isEmailValid(event.target.value);
  }

  /**
   * password change handler
   */
  const passwordChangeHandler = (event) => {
    setLoginInfo((prevState) => {
      return {
        ...prevState,
        password: event.target.value
      }
    })
  }

  return(
    <div className="container">
      <div className="login-container">
        <div className="card">
          <div className="card-header">
            Login
          </div>
          <div className='card-body'>
            Enter a valid email id and a password
          </div>
          <div className='row input-div'>
            <label className='col-4'>Email</label>
            <input className='col-6' type="text"
                    value = {loginInfo.email}
                    onChange={emailChangeHandler}></input>
          </div>
          <div className='row input-div'>
            <label className='col-4'>Password</label>
            <input className='col-6' type="text"
                    value = {loginInfo.password}
                    onChange={passwordChangeHandler}></input>
          </div>
          <div className='input-div text-center'>
          <button type="button" class="btn btn-dark" disabled={!isEnableLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}