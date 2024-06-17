import Card from "react-bootstrap/Card";
import "./CardListItem.css";
import ButtonBasket from "../ButtonBasket/ButtonBasket";

export default function CardListItem(props) {
  return (
    <>
      <Card className="col-lg-4 col-sm-4 item">
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
