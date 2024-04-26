import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Admin/ProductForm.css";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    // varietyId: "",
    country: "",
    description: "",
    cooking_method: "",

    collections: "",
    variety: "",
    img: "",
  });

  const addProduct = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/clear_products",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProduct();
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <Form onSubmit={handleSubmit}>
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

        {/* <Form.Group>
          <Form.Label>Введите ID вида:</Form.Label>
          <Form.Control
            type="text"
            name="varietyId"
            onChange={handleChange}
            value={product.varietyId}
            placeholder="Название ID вида"
          />
        </Form.Group> */}

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
            name="cooking_method"
            onChange={handleChange}
            value={product.cooking_method}
            placeholder="Способ приготовления"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Введите сорт чая:</Form.Label>
          <Form.Control
            type="text"
            name="variety"
            onChange={handleChange}
            value={product.variety}
            placeholder="Сорт чая"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Введите коллекцию:</Form.Label>
          <Form.Control
            type="text"
            name="collections"
            onChange={handleChange}
            value={product.collections}
            placeholder="Коллекция"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Введите ссылку на изображение:</Form.Label>
          <Form.Control
            type="text"
            name="img"
            onChange={handleChange}
            value={product.img}
            placeholder="Ссылка на изображение"
          />
        </Form.Group>
        <Button className="butt" type="submit">
          Добавить товар
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
