import React, { useState } from "react";
import "./Authorization.css";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const Authorization = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Пожалуйста, введите адрес электронной почты и пароль.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Unauthorized");
      }

      const data = await response.json();
      console.log(data);

      if (email === "admin@example.com" && password === "Admin1/") {
        window.location.href = "/admin"; // Перенаправление на страницу админки при успешной аутентификации админа
      } else {
        setError("Неверные учетные данные. Пожалуйста, попробуйте еще раз.");
      }
    } catch (error) {
      console.error(error);
      setError("Неверные учетные данные. Пожалуйста, попробуйте еще раз.");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="registration">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h3>Авторизация</h3>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите Email"
      />
      <div className="password-input">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
        />
        <span onClick={handleTogglePasswordVisibility}>
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>
      <div>
        <button type="button" className="but" onClick={handleLogin}>
          Войти
        </button>
        <Link to="/entrance" className="hyg">
          Регистрация
        </Link>
      </div>
    </form>
  );
};

export default Authorization;
