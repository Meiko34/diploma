import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

// import AnimalDetails from "./AnimalDetails";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())

      .then((data) => setData(data))

      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      

      {Array.isArray(data) &&
        data.map((item) => (
          <Card key={item.id} style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={item.image} /> */}

            <Card.Body>
              <Card.Title>Чай {item.name}</Card.Title>

              <Card.Text>Цена {item.price}</Card.Text>

              {/* <Card.Text>Возраст: {item.age}</Card.Text> */}

              <Link to={`/animal/${item.id}`}>
                <Button variant="primary">В корзину</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}

      {/* <Routes>
          <Route path="/animal/:id" element={<AnimalDetails />} />

          <Route path="/animal/:id">  <AnimalDetails data={data} /> </Route>

          <Route path="/animal/:id" render={(props) => <AnimalDetails {...props} data={data} />} />
        </Routes> */}
    </div>
  );
};

export default App;
