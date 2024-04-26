import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer-content">
        <div>
          <h3>Чай</h3>
          <div>
            <ul>
              <li>
                <Link className="hyg" to="/catalog">
                  Посмотреть все
                </Link>
              </li>
              <li>Зелёный чай</li>
              <li>Чёрный чай</li>
              <li>Травяной чай</li>
              <li>Белый чай</li>
            </ul>
          </div>
        </div>

        <div>
          <h3>О компании</h3>
          <ul>
            <li>
              <Link className="hyg" to="/aboutUs">
                О нас
              </Link>
            </li>
            {/* <li>Контакты</li> */}
            <Link className="hyg" to="/contact">
              Контакты
            </Link>
          </ul>
        </div>

        <div>
          <h3>Клиентам</h3>
          <ul>
            <li>
              <Link className="hyg" to="/delivery">
                Доставка и оплата
              </Link>
            </li>
            <li>
              <Link className="hyg" to="/stock">
                Акции и скидки
              </Link>
            </li>
            <li>
              <Link className="hyg" to="/entrance">
                Вход
              </Link>
            </li>
          </ul>
        </div>

        {/* <ul>
          <li>
            <Link className="hyg" to="/">
              Главная
            </Link>
          </li>

          <li>
            <Link className="hyg" to="/catalog">
              Каталог
            </Link>
          </li>
          <li>
            <Link className="hyg" to="/aboutUs">
              О нас
            </Link>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
