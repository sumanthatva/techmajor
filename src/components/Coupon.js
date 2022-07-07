import { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../context/auth-context";

export default function Coupon() {
  const params = useParams();
  const id = params.id;
  console.log("id: " + id);
  const isValidCoupon = (id) => {
    if(id.length === 5) {
      return true
    }
    return false;
  }
  // <Summary/>
  // Context API and useContext
  // authContext reads values from the AuthContext.Provider and makes it available to this component.
  const authContext = useContext(AuthContext);
  console.log("isLoggedIn: " + authContext.isLoggedIn);
  console.log("email: " + authContext.email);

  return(
    <div className="container">
    <h4>Coupon</h4>
    { 
      <div>
        <p>{authContext.isLoggedIn? "Logged In": "Not logged in"}</p>
        <p>Email: {authContext.email}</p>
        <p>Name: {authContext.name}</p>
        <p>Token: {authContext.token}</p>
      </div>
    }
    {authContext.isLoggedIn && isValidCoupon(id) && 
      <h4> Coupon applied! 20% off </h4>
    }
    </div>
  );
}