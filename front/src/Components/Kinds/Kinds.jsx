import { Card } from "react-bootstrap";
import "./Kinds.css";
import { Link } from "react-router-dom";

export default function Kinds() {
  return (
    <div className="map-kinds container">
      <div className="title-item">Виды чая</div>

      <div className="card-container">
        <Card className="card-kinds" style={{ width: "300px" }}>
          <Link className="hyg" to="/delicious">
            <Card.Img className="kinds-img" src="./img/w-t.jpg"></Card.Img>
            <Card.Title className="title-kinds">Белый чай</Card.Title>
          </Link>
        </Card>
        <Card className="card-kinds" style={{ width: "300px" }}>
          <Link className="hyg" to="/soothing">
            <Card.Img className="kinds-img" src="./img/b-t.jpg"></Card.Img>
            <Card.Title className="title-kinds">Чёрный чай</Card.Title>
          </Link>
        </Card>
        <Card className="card-kinds" style={{ width: "300px" }}>
          <Link className="hyg" to="/fruit">
            <Card.Img className="kinds-img" src="./img/g-t.jpg"></Card.Img>
            <Card.Title className="title-kinds">Зелёный чай</Card.Title>
          </Link>
        </Card>
        <Card className="card-kinds" style={{ width: "300px" }}>
          <Card.Img className="kinds-img" src="./img/s-t.jpg"></Card.Img>
          <Card.Title className="title-kinds">Фруктовый чай</Card.Title>
        </Card>
      </div>
      <div className="card-container">
        <Card className="card-kinds" style={{ width: "300px" }}>
          <Link className="hyg" to="/fruit">
            <Card.Img className="kinds-img" src="./img/m-t.jpg"></Card.Img>
            <Card.Title className="title-kinds">Матча</Card.Title>
          </Link>
        </Card>
        <Card className="card-kinds" style={{ width: "300px" }}>
          <Link className="hyg" to="/fruit">
            <Card.Img className="kinds-img" src="./img/y-t.jpg"></Card.Img>
            <Card.Title className="title-kinds">Улун</Card.Title>
          </Link>
        </Card>
        <Card className="card-kinds" style={{ width: "300px" }}>
          <Link className="hyg" to="/fruit">
            <Card.Img className="kinds-img" src="./img/p-t.jpg"></Card.Img>
            <Card.Title className="title-kinds">Пуэр</Card.Title>
          </Link>
        </Card>
        <Card className="card-kinds" style={{ width: "300px" }}>
          <Link className="hyg" to="/fruit">
            <Card.Img className="kinds-img" src="./img/g-t.jpg"></Card.Img>
            <Card.Title className="title-kinds">Жёлтый чай</Card.Title>
          </Link>
        </Card>
      </div>
    </div>
  );
}
