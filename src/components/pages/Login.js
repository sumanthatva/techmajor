import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
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

  /** State to keep track of login success status */
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const [isShowErrorMsg, setIsShowErrorMsg] = useState(false);

  // <Summary/>
  // https://reactjs.org/docs/hooks-effect.html
  // useEffect hook - called after render is executed (after DOM updates).
  // The latest state will be available to useEffect.
  useEffect(() => {
    const isValidEmail = isEmailValid(loginInfo.email);
    const isValidPassword = isPasswordValid(loginInfo.password);
    // Enable/disable login button accordingly.
    setIsEnableLogin(isValidEmail & isValidPassword);
  }, [loginInfo.email, loginInfo.password]);

  /**
   * function to check if the entered email is a valid email.
   * this function compares the email with a regex.
   * returns true if the email is valid.
   */
  const isEmailValid = (email) => {
    const validEmailRegex = /^[a-zA-Z]+[\w\d]*([\.-]?[\w\d])*@[a-zA-Z]+[a-zA-Z0-9]*\.([a-zA-Z0-9]+\.)*[a-zA-Z]{2,5}$/;
    const isValid = validEmailRegex.test(email);
    console.log("isEmailValid::isValid: " + isValid);
    return isValid;
  }

  /**
   * Function to check if the entered password is valid
   * returns true if the password is valid.
   */
  const isPasswordValid = (password) => {
    return (password == null || password.length < 8)? false: true;
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

  /**
   * Function to handle login request.
   * 1. fetch with method set to POST
   * 2. body contains email and password (in json string format)
   * 3. set content-type to 'application/json'
   * 4. if response is ok, email, name and token is read from the response json.
   */
  function loginHandler() {
    if(isShowErrorMsg) {
      setIsShowErrorMsg(false);
    }
    fetch('http://localhost:3001/login', {
      method: "POST",
      body: JSON.stringify({"email": loginInfo.email, "password": loginInfo.password}),
      headers: {"Content-type": "application/json"}
    })
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw new Error("Wrong username or password");
    }).then(data => {
      console.log("Successful login");
      console.log("email: " + data.email);
      console.log("name: " + data.name);
      console.log("token: " + data.token);
      setIsLoginSuccess(true);
      return;
    }).catch(error => {
      setIsShowErrorMsg(true);
      console.log("Login failure: " + error);
    })
  }

  return(
    (isLoginSuccess)? <Navigate to="/" /> :
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
          <button type="button" class="btn btn-dark" 
                  disabled={!isEnableLogin}
                  onClick={loginHandler}>
            Login
          </button>
          </div>
        </div>
        {isShowErrorMsg?
        (
        <div className='container'>
          <p> Wrong username or password </p>
        </div>
        ): null
        }
      </div>
    </div>
  )
}