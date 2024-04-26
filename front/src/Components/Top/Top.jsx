import { product } from "../products";
import CardListItem from "../CardLisrItem/CardListItem";
import "./Top.css";

export default function Top() {
  return (
    <>
      <div>
        <div className="banner-top">
          <div className=" title container">"Top-10"</div>
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
