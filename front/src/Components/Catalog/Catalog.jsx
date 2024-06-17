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
    <main>
      <div className="container">
        <div className="btn">
          <Filter />
        </div>
        <div className="title-item">Каталог</div>

        <div className="catalogProduct d-flex flex-wrap justify-content-between">
          <Item addToCart={addToCart} />
        </div>
      </div>
    </main>
  );
};

export default Catalog;
