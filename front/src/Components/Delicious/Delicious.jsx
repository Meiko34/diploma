import CardListItem from "../CardLisrItem/CardListItem";

import { product } from "../products";
import "./Delicious.css";

export default function Hot() {
  return (
    <>
      <div>
        <div className="banner">
          <div className=" title container">
            "Когда захотелось что-то вкусненькое"
          </div>
        </div>

        <div className="hotProduct">
          <CardListItem {...product[0]} />
          <CardListItem {...product[1]} />
          <CardListItem {...product[2]} />
        </div>
      </div>
    </>
  );
}
