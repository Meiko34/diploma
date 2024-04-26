import React, { useState, useEffect } from "react";

function Contact() {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/contacts");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
        setContacts(Array.isArray(data) ? data : [data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="container">
        <h1>Контакты и адреса</h1>
        <h3>Офис в Сыктывкаре</h3>
        <div>Телефон: {contacts[0]?.telephone}</div>
        <div>Email: {contacts[0]?.email}</div>
        <div>Адрес: {contacts[0]?.address}</div>
        <div>Режим работы: {contacts[0]?.operating_mode}</div>
        <div>Вопросы по заказам: {contacts[0]?.questions_about_orders}</div>
        <div>Юридический адрес: {contacts[0]?.legal_name}</div>
      </div>
    </main>
  );
}

export default Contact;
