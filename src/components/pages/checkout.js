import { Link, Route, Routes, useLocation } from "react-router-dom";
import Coupon from "../Coupon";

export default function Checkout(props) {
  const location = useLocation();

  let productId = "";
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
      <Link to="/checkout/get20">Get 20% off!! </Link>
      <div className="row">
        <div className="col-sm-8">

        </div>
        <div className="col-sm-4">
          <Routes>
            <Route path="/:id" element={<Coupon/>} />
          </Routes>
        </div>

      </div>
    </div>
  )
}