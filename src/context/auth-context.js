import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: '',
  name: '',
  token: '',
  onLogin: (email, name, token) => {},
  onLogout: () => {}
});

export default AuthContext;

export const AuthContextProvider = (props) => {

  /** 
   * This function sets the authInfo values (AuthContext) 
   * It also sets the isLoggedIn prop to true
  */
   const loginHandler = (email, name, token) => {
    console.log("APP::loginHandler called");
    setAuthInfo((prevState) => {
      return {
        ...prevState,
        isLoggedIn: true,
        email: email,
        name: name,
        token: token,
      }
    })
    localStorage.setItem("isLoggedIn", "TRUE");
    localStorage.setItem("email", email);
    localStorage.setItem("name", name);
    localStorage.setItem("token", token);
  }

  /**
   * This function resets all values of authInfo
   * It also sets the isLoggedIn prop to false
   */
  const logoutHandler = () => {
    console.log("APP::logoutHandler called");
    setAuthInfo((prevState) => {
      return {
        ...prevState,
        email: '',
        name: '',
        token: '',
        isLoggedIn: false
      }
    })
    localStorage.setItem("isLoggedIn", "FALSE");
    localStorage.removeItem("email")
    localStorage.removeItem("name");
    localStorage.removeItem("token");
  }
  /**
   * The authInfo state is used to store the AuthContext values.
   * The onLogin and onLogout function refs are bound to functions in this component that manipulate the authInfo values.
   */
  const [authInfo, setAuthInfo] = useState({
    isLoggedIn: false,
    email: '',
    name: '',
    token: '',
    onLogin: loginHandler,
    onLogout: logoutHandler
  })
  return <AuthContext.Provider value={authInfo}>{props.children}</AuthContext.Provider>;
}

/**
 * <Summary/>
 * Context API and useContext
 * 1. Create Context object - Initialize values. Note that this initial object is NOT used anywhere. Its just a template.
 * 2. The context object can also contain functions. Note that the function is just declared here and the definition can be elsewhere.
 * 3. The AuthContext will be available to all components rendered inside the <AuthContext.Provider> </AuthContext.Provider> tags.
 * 4. The value (or the object) that this Provider provides to its child components will be defined using the 'value' property of the Provider.
 */