// import "./ButtonCard.css";
// import Button from "react-bootstrap/Button";

// export default function ButtonCart({ onClick, children }) {
//   return (
//     <Button className="but" onClick={onClick}>
//       {children}
//     </Button>
//   );
// }

import React from "react";
import Button from "react-bootstrap/Button";
import "./ButtonCard.css";

const ButtonCart = ({ onClick, children }) => {
  const handleClick = () => {
    // Добавляем логику для обработки нажатия на кнопку добавления в корзину
    // Например, можно вызвать функцию onClick, которая добавит товар в корзину
    // onClick();
  };

  return (
    <Button className="but" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ButtonCart;
