import Navbar from "./Navbar";

import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts.js";
import Table from "react-bootstrap/Table";

import React, { useState, useEffect } from "react";

const UserLayout = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/users");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/users/${userId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

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
              {/* <UserList /> */}

              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1"></i>
                  Учётные записи пользователей
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Имя</th>
                      <th>Email</th>
                      <th>Дата регистрации</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.created_at}</td>
                        <td>
                          <button onClick={() => handleDeleteUser(user.id)}>
                            Удалить
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

export default UserLayout;
