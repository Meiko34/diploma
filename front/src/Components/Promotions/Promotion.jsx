import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./Promotion.css";

export default function Stock() {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/promotions");
        if (!response.ok) {
          throw new Error("Failed to fetch promotions");
        }
        const data = await response.json();
        setPromotions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPromotions();
  }, []);

  return (
    <div className="catalogProduct container">
      {promotions.map((promo) => (
        <Card key={promo.id} className="col-lg-3 col-sm-6 item-promos">
          <Card.Body className="prom-content">
            <Card.Title className="title-prom">{promo.name}</Card.Title>
            <Card.Text className="desc-prom">
              {promo.short_description}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
