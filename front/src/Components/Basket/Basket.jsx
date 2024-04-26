// Basket.jsx
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Basket.css";


const Basket = ({ cart }) => {
  return (
    <div className="cart-container">
      <h1>Ваша корзина</h1>
      <ul>
        {cart.map((item) => (
          <li key={item?.id}>
            {item && item.name && item.price && (
              <>
                <span>
                  Чай {item.name} - {item.price}/гр
                </span>
              </>
            )}
          </li>
        ))}
      </ul>

      <Button className="but">
        <Link to="/checkout">Оформить заказ</Link>
      </Button>
    </div>
  );
};

export default Basket;
