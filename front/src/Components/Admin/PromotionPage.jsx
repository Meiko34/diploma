import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const PromotionPage = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/promotions");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setPromotions(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeletePromotion = async (promotionId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/promotions/${promotionId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete promotion");
      }
      // Обновляем список акций после удаления
      setPromotions(
        promotions.filter((promotion) => promotion.id !== promotionId)
      );
    } catch (error) {
      console.error("Error deleting promotion:", error);
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
            Список товаров
          </div>
          <Link to="/admin/promotionLayout">
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
              <th>Дата записи</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((promotion) => (
              <tr key={promotion.id}>
                <td>{promotion.id}</td>
                <td>{promotion.name}</td>
                <td>{promotion.description}</td>
                <td>{promotion.short_description}</td>

                <td>{promotion.created_at}</td>
                <td>
                  <button onClick={() => handleDeletePromotion(promotion.id)}>
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

export default PromotionPage;
