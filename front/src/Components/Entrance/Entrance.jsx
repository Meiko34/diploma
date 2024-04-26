import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Entrance.css";
import Button from "react-bootstrap/Button";

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

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="registration">
      <h3>Регистрация</h3>
      <input
        className=""
        type="text"
        name="name"
        placeholder="Введите имя"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        autoComplete="name"
      />
      <input
        type="email"
        name="email"
        placeholder="Введите email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        autoComplete="email"
      />
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Придумайте пароль"
        />
        <span onClick={handleTogglePasswordVisibility}>
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>
      <div>
        <Button type="submit" className="but">
          Сохранить
        </Button>
        <Link to="/authorization" className="hyg">
          Авторизация
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
