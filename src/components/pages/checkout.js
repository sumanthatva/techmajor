import { Outlet, Route, Routes } from "react-router-dom";

export default function Checkout() {
  return (
    <div>
      <h3> Checkout </h3>
      <Routes>
        <Route exact path="/20" element={<p> Coupon applied -- 20%! </p>} />
        <Route exact path="/30" element={<p> Coupon applied -- 30%! </p>} />
      </Routes>
    </div>
  )
}