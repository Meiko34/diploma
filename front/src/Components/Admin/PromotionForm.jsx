import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const PromotionForm = () => {
  const [promotion, setPromotion] = useState({
    name: "",
    description: "",
    short_description: "",
  });

  const addPromotion = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(promotion),
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/promotion_add",
        requestOptions
      );
      if (response.ok) {
        alert("Promotion added successfully!");
        setPromotion({
          name: "",
          description: "",
          short_description: "",
        });
      } else {
        alert("Failed to add promotion");
      }
    } catch (error) {
      console.error("Error adding promotion:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPromotion({ ...promotion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addPromotion();
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Введите название акции:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleChange}
            value={promotion.name}
            placeholder="Название акции"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Введите описание акции:</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={handleChange}
            value={promotion.description}
            placeholder="Описание акции"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Введите краткое описание акции:</Form.Label>
          <Form.Control
            type="text"
            name="short_description"
            onChange={handleChange}
            value={promotion.short_description}
            placeholder="Краткое описание акции"
          />
        </Form.Group>

        <Button type="submit">Добавить акцию</Button>
      </Form>
    </div>
  );
};

export default PromotionForm;
