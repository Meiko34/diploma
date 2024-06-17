import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";
import Button from "react-bootstrap/esm/Button";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProduct(); // Вызываем fetchProduct сразу после монтирования компонента
  }, [id]); // Обновляем данные при изменении параметра id

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className="container">
      <div className="product-item">
        <div className="box">
          <img className="product-img" src={product.img}></img>
        </div>
        <div className="box">
          <div className="product-desc">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Цена: {product.price}</p>
            <div>
              <Button className="but">В корзину</Button>
              <Button className="but">В избранное</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
