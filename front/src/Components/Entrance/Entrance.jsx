import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "./Entrance.css";
// import Button from "react-bootstrap/Button";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token); // Сохранение токена в localStorage
        console.log(data.message); // Сообщение об успешной регистрации
      } else {
        setError(data.message); // Обработка ошибки регистрации
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again.");
    }
  };

  const PasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Добро пожаловать в наш интернет-магазин «Чайный сад»!
          </h1>
          <p className="col-lg-10 fs-4">
            Здесь каждая чашка напитка становится уникальным путешествием в мир
            ароматов и вкусов.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <Form onSubmit={handleSubmit} className="registration">
            <h3>Регистрация</h3>
            <Form.Control
              className=""
              type="text"
              name="name"
              placeholder="Введите имя"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              autoComplete="name"
            />
            <Form.Control
              type="email"
              name="email"
              placeholder="Введите email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              autoComplete="email"
            />
            <div className="password-input w-100">
              <Form.Control
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Придумайте пароль"
              />
              <span onClick={PasswordVisibility}>
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <div>
              <button type="submit" className="but">
                Сохранить
              </button>
              <Link to="/authorization" className="hyg">
                Авторизация
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
