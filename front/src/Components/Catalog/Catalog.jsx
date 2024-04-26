import React, { useState, useCallback } from "react";
import Item from "../Item/Item";
import "./Catalog.css";
import Filter from "../Filter/Filter";
import Basket from "../Basket/Basket";

const Catalog = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="container">
      <div className="btn">
        <Filter />
      </div>
      <div className="title-item">Каталог</div>

      <div className="catalogProduct">
        <Item addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Catalog;
