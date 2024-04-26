import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ButtonCart from "../Button/ButtonCard";

const Item = ({ addToCart, cart, item }) => {
  const [data, setData] = useState([]);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log(cart);
  };

  console.log(addToCart); // Проверка получения функции addToCart
  return (
    <main>
      {Array.isArray(data) &&
        data.map((item) => (
          <Card
            style={{ width: "18rem" }}
            className="cardProduct"
            key={item.id}
            item={item}
            cart={cart}
          >
            <Card.Body>
              <Link className="hyg" to={`/products/${item.id}`}>
                <Card.Img variant="top" src={item.img} />
                <Card.Title>Чай {item.name}</Card.Title>
                <Card.Text className="desc" style={{ textAlign: "center" }}>
                  {item.variety}
                </Card.Text>
                <Card.Text className="desc" style={{ textAlign: "center" }}>
                  {item.description}
                </Card.Text>
              </Link>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <ButtonCart
           
                  onClick={() => handleAddToCart(item)}
                >
                  {item.price}/гр
                </ButtonCart>
              </div>
            </Card.Body>
          </Card>
        ))}
    </main>
  );
};

export default Item;
