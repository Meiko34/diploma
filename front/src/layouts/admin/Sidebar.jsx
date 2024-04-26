import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <Link className="nav-link" to="/admin">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Главная
          </Link>
          <Link className="nav-link" to="/admin/userLayout">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Учётные записи пользователей
          </Link>
          <Link className="nav-link" to="/admin/productLayout">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Список товаров
          </Link>
          <Link className="nav-link" to="/admin/promotionList">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Скидки и акции
          </Link>
          <Link className="nav-link" to="/admin/articleList">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Статьи
          </Link>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Вошёл как:</div>
        Админ
      </div>
    </nav>
  );
};
export default Sidebar;
