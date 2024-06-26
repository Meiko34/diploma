import Banner from "../Banner/Banner";
import Delicious from "../Delicious/Delicious";

import Top from "../Top/Top";

import "./Home.css";

import Promotion from "../Promotions/Promotion";
import Kinds from "../Kinds/Kinds";

export default function Home() {
  return (
    <>
      <Banner />

      <Kinds />
      <div className="selection container ">
        <div className="title-item">Коллекции</div>
        <Delicious />
        <Top />
      </div>

      <div className="container">
        <div className="title-item">Скидки и акции</div>

        <Promotion />
      </div>
    </>
  );
}
