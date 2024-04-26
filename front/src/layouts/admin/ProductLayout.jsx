import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";
import Table from "react-bootstrap/Table";
import ProductForm from "../../Components/Admin/ProductForm.jsx";

import React, { useState, useEffect } from "react";

const ProductLayout = () => {
  const [products, setProducts] = useState([]);
  // const [editingProduct, setEditingProduct] = useState(null);
  const navigate = useNavigate();

  const handleEditProduct = (productId) => {
    navigate(`/admin/edit/${productId}`, {
      state: { product: products.find((product) => product.id === productId) },
    });
  };
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      // Обновляем список продуктов после удаления
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
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
                  <Link to="/admin/add">
                    <button>+</button>
                  </Link>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Название</th>
                      <th>Цена</th>
                      <th>Описание</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>

                        <td>{product.name}</td>

                        <td>{product.price}</td>
                        <td>{product.description}</td>

                        {/* <td>{user.created_at}</td> */}
                        <td>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            Удалить
                          </button>
                        </td>
                        <td>
                          <button onClick={() => handleEditProduct(product.id)}>
                            Редактировать
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default ProductLayout;
