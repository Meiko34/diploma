import React from "react";
import Button from "react-bootstrap/Button";
import "./ButtonCard.css";

const ButtonCart = ({ onClick, children }) => {
  const handleClick = () => {};

  return (
    <Button className="but" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ButtonCart;
