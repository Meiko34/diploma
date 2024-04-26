import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const ProductEdit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  // const { initialProduct } = useLocation().state;
  const location = useLocation();
  const initialProduct = location.state && location.state.initialProduct;

  useEffect(
    () => {
      if (initialProduct) {
        setProduct(initialProduct);
      }

      const fetchProduct = async () => {
        // setProduct(initialProduct);
        try {
          const response = await fetch(
            `http://localhost:8000/api/products/${productId}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch product");
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    },
    [initialProduct],
    [productId]
  );

  const handleUpdateProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/products/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update product");
      }
      // Обновление продукта в списке
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div style={{ display: "block", width: 700, padding: 30 }}>
              <h1>Редактировать продукт</h1>

              <Form>
                <Form.Group>
                  <Form.Label>Введите название товара:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={product.name}
                    placeholder="Название товара"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Введите цену:</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    onChange={handleChange}
                    value={product.price}
                    placeholder="Цена"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Введите ID вида:</Form.Label>
                  <Form.Control
                    type="text"
                    name="varietyId"
                    onChange={handleChange}
                    value={product.varietyId}
                    placeholder="Название ID вида"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Введите страну производителя:</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    onChange={handleChange}
                    value={product.country}
                    placeholder="Страна производителя"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Введите описание товара:</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={product.description}
                    placeholder="Описание товара"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Введите способ приготовления:</Form.Label>
                  <Form.Control
                    type="text"
                    name="cookingMethod"
                    onChange={handleChange}
                    value={product.cookingMethod}
                    placeholder="Способ приготовления"
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Введите ссылку на изображение:</Form.Label>
                  <Form.Control
                    type="text"
                    name="img"
                    onChange={handleChange}
                    value={product.img}
                    placeholder="Cсылка
            на
            изображение"
                  />
                </Form.Group>

                <button onClick={handleUpdateProduct}>
                  Сохранить изменения
                </button>
              </Form>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
