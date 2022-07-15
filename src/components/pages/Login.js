import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
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

  /** useContext to get access to AuthContext */
  /** <Summary/>
   * Context API and useContext
   * authContext reads values from the AuthContext.Provider and makes it available to this component.
   * This component uses the onLogin function in the context to set the user info (authInfo)
   */
   const authContext = useContext(AuthContext);
   

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
      /**
       * On successful login, set the email, name and token in AuthContext.
       * These values can be consumed by other components of the app using the AuthContext.Provider
       */
      authContext.onLogin(data.email, data.name, data.token);
      return;
    }).catch(error => {
      setIsShowErrorMsg(true);
      authContext.onLogout();
      console.log("Login failure: " + error);
    })
  }

  function dummyLogin() {
    if(isShowErrorMsg) {
      setIsShowErrorMsg(false);
    }
    if(isEmailValid(loginInfo.email) && isPasswordValid(loginInfo.password) 
        && loginInfo.password.indexOf("pass") !== -1 ) {
      const name = loginInfo.email.substring(0, loginInfo.email.indexOf('@'));
      const token = Math.random().toString(36).substring(2);
      console.log("Successful login");
      console.log("email: " + loginInfo.email);
      console.log("name: " + name);
      console.log("token: " + token);

      /**
       * On successful login, set the email, name and token in AuthContext.
       * These values can be consumed by other components of the app using the AuthContext.Provider
       */
       authContext.onLogin(loginInfo.email, name, token);

      setIsLoginSuccess(true);
    } else {
      setIsShowErrorMsg(true);
      authContext.onLogout();
      console.log("Login failure");
    }
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
                  // onClick={loginHandler}>
                  onClick={dummyLogin}>
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