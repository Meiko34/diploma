<<<<<<< HEAD
=======

>>>>>>> e104022a0dcb88514efc83aa957e38f40c1a414f
import "./Banner.css";

export default function Banner() {
  return (
    <div className=" container ban" style={{ display: "flex" }}>
      <div className="banner-img">
        <img alt="" src="./img/banner.jpg" style={{ flex: " 1" }}></img>
      </div>
      <div className="banner-desc" style={{ flex: " 1" }}>
        <b className="text-center">
          Открой для себя волшебный мир ароматов и вкусов в интернет-магазине
          'Чайный сад'!
        </b>
        <p className="text-center">
          Погрузись в уютную атмосферу чаепития и выбери свой идеальный чай с
          нами. Качество, разнообразие и радость каждого глотка ждут тебя здесь.
          Дари себе моменты умиротворения с 'Чайным садом'! 🍵✨
        </p>
        <button className="but">Перейти в каталог</button>
      </div>
    </div>
  );
}
