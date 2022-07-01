import { Route, Routes, useLocation } from "react-router-dom";
import Coupon from "../Coupon";

export default function Checkout(props) {
  const location = useLocation();

  let productId = "";
  // <Summary/>
  // routes-pass-data-in-navigate documentation
  // Location object will have the state passed by navigate.
  // Fetch product Id from that state.
  if(location.state && location.state.productId) {
    productId = location.state.productId;
  }
  console.log(productId);

  return (
    <div className="container">
      <h3> Checkout </h3>
      {productId !== "" &&
        <div>
          Checking out product with id: {productId}
        </div>
      }
      <Routes>
        <Route path="/:id" element={<Coupon/>} />
      </Routes>
    </div>
  )
}