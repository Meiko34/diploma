import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ArticleForm = () => {
  const [article, setArticle] = useState({
    name: "",
    description: "",
    short_description: "",
    img: "",
  });

  const addArticle = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(article),
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/article_add",
        requestOptions
      );
      if (response.ok) {
        alert("Article added successfully!");
        setArticle({
          name: "",
          description: "",
          short_description: "",
        });
      } else {
        alert("Failed to add article");
      }
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addArticle();
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Введите название статьи:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleChange}
            value={article.name}
            placeholder="Название статьи"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Введите описание стаьи:</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={handleChange}
            value={article.description}
            placeholder="Описание статьи"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Введите краткое описание статьи:</Form.Label>
          <Form.Control
            type="text"
            name="short_description"
            onChange={handleChange}
            value={article.short_description}
            placeholder="Краткое описание стаьи"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Вставьте img:</Form.Label>
          <Form.Control
            type="text"
            name="img"
            onChange={handleChange}
            value={article.img}
            placeholder="IMG"
          />
        </Form.Group>

        <Button type="submit">Добавить акцию</Button>
      </Form>
    </div>
  );
};

export default ArticleForm;
