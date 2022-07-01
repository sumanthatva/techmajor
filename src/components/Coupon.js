import { useParams } from "react-router-dom";

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
  return(
    <div className="container">
    {isValidCoupon(id) && 
      <h4> Coupon applied! 20% off </h4>
    }
    </div>
  );
}