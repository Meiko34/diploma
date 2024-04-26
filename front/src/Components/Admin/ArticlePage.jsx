import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/articles");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setArticles(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteArticle = async (articleId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/articles/${articleId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete article");
      }
      // Обновляем список акций после удаления
      setArticles(articles.filter((article) => article.id !== articleId));
    } catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (
    <div className="container-fluid px-4">
      <div className="card mb-4">
        <div
          className="card-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <i className="fas fa-table me-1"></i>
            Статьи
          </div>
          <Link to="/admin/articleLayout">
            <button>+</button>
          </Link>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th>Описание</th>
              <th>Краткое описание</th>
              <th>IMG</th>

              <th>Дата записи</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.name}</td>
                <td>{article.description}</td>
                <td>{article.short_description}</td>
                <td>{article.img}</td>

                <td>{article.created_at}</td>
                <td>
                  <button onClick={() => handleDeleteArticle(article.id)}>
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ArticlePage;
