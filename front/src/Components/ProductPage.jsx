import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Цена: {product.price}</p>
      {/* Добавьте другие детали товара по вашему усмотрению */}
    </div>
  );
};

export default ProductPage;
