import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: '',
  name: '',
  token: '',
  onLogin: (email, name, token) => {},
  onLogout: () => {}
});

export default AuthContext;

/**
 * <Summary/>
 * Context API and useContext
 * 1. Create Context object - Initialize values. Note that this initial object is NOT used anywhere. Its just a template.
 * 2. The context object can also contain functions. Note that the function is just declared here and the definition can be elsewhere.
 * 3. The AuthContext will be available to all components rendered inside the <AuthContext.Provider> </AuthContext.Provider> tags.
 * 4. The value (or the object) that this Provider provides to its child components will be defined using the 'value' property of the Provider.
 */