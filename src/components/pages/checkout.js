import { Route, Routes } from "react-router-dom";
import Coupon from "../Coupon";

export default function Checkout() {
  return (
    <div className="container">
      <h3> Checkout </h3>
      <Routes>
        <Route path="/:id" element={<Coupon/>} />
      </Routes>
    </div>
  )
}