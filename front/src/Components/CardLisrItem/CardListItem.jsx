import Card from "react-bootstrap/Card";
import "./CardListItem.css";
import ButtonBasket from "../ButtonBasket/ButtonBasket";

export default function CardListItem(props) {
  return (
    <>
      <Card className="item">
        <div className="cardContent">
          <div className="imgCard">
            <Card.Img variant="top" src={"./img/" + props.img} />
          </div>
          <div className="item-content">
            <Card.Title className="titleCard">{props.title}</Card.Title>
            <Card.Text className="category">{props.category}</Card.Text>
            <Card.Text className="price">{props.price}/100 Гр.</Card.Text>
            <ButtonBasket />
          </div>
        </div>
      </Card>
    </>
  );
}

// import React, { useEffect, useState } from "react";

// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/products")
//       .then((response) => response.json())

//       .then((data) => setData(data))

//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div>
//       {Array.isArray(data) &&
//         data.map((item) => (
//           <Card className="item">
//             <div className="cardContent">
//               {/* <div className="imgCard">
//                  <Card.Img variant="top" src={"./img/" + props.img} />

//               </div> */}
//               <div className="item-content">
//                 <Card.Title className="titleCard">Чай {item.name}</Card.Title>
//                 {/* //             <Card.Text className="category">{props.category}</Card.Text> */}
//                 <Card.Text className="price">{item.price}/100 Гр.</Card.Text>
//                 <ButtonBasket />
//               </div>
//             </div>
//           </Card>
//         ))}
//     </div>
//   );
// };

// export default App;
