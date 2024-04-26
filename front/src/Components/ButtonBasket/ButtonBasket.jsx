import Button from "react-bootstrap/Button";
import "./ButtonBasket.css";
import { CiShoppingCart } from "react-icons/ci";

export default function ButtonBasket() {
  return (
    <div className="bask">
      <Button className="basketButton">
        <div>
          <CiShoppingCart className="basket" color=" #f5f5f5" />
        </div>
      </Button>
    </div>
  );
}
