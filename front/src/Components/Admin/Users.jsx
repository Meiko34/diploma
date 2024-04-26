// App.js
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/clients")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Список клиентов:</h1>
      <table>
        <tr>
          <td>Номер</td>
          <td>Email</td>
          <td>Пароль</td>
        </tr>
        {users.map((user) => (
          <tr>
            <td key={user.id}>{user.id}</td>
            <td key={user.id}>{user.email}</td>
            <td key={user.id}>{user.password}</td>
          </tr>
        ))}
      </table>

      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Users;
