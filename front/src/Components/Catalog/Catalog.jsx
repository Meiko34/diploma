// import Item from "../Item/Item";
// import "./Catalog.css";
// import Filter from "../Filter/Filter";
// // import Test from "../Test";

// export default function Catalog() {
//   return (
//     <div className="container">
//       <div className="btn">
//         <Filter />
//       </div>
//       <div className="title-item">Каталог</div>

//       <div className="catalogProduct">
//         <Item />
//         {/* <Test /> */}
//       </div>
//     </div>
//   );
// }
import React, { useState, useCallback } from "react";
import Item from "../Item/Item";
import "./Catalog.css";
import Filter from "../Filter/Filter";
import Basket from "../Basket/Basket";

const Catalog = () => {
  const [cart, setCart] = useState([]);

  // const addToCart = (item) => {
  //   if (item) {
  //     const updatedCart = [...cart, item];
  //     console.log(updatedCart);
  //     setCart(updatedCart);
  //   } else {
  //     console.error("Не удалось добавить товар в корзину: отсутствует item.");
  //   }
  // };

  const addToCart = (item) => {
    // setCart([...cart, item]);
    setCart((prevCart) => [...prevCart, item]);
    // console.log(item);
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
      {/* <Basket cart={cart} /> */}
    </div>
  );
};

export default Catalog;
