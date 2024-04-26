import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "98%",
        }}
      >
        <Link className="navbar-brand ps-3" to="/admin">
          Админ-панель
        </Link>
        <Link to="/">
          <Button variant="outline-light">Выйти</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
