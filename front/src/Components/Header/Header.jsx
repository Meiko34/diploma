import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar className="naav" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <Link className="hyg" to="/">
              Чайный сад
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Link className="hyg" to="/">
                Главная
              </Link>
            </Nav.Link>
            <Nav.Link href="#catalog">
              <Link className="hyg" to="/catalog">
                Каталог
              </Link>
            </Nav.Link>
            <Nav.Link href="#stock">
              <Link className="hyg" to="/stock">
                Акции
              </Link>
            </Nav.Link>
            <Nav.Link href="#aboutUs">
              <Link className="hyg" to="/aboutUs">
                О нас
              </Link>
            </Nav.Link>
            <Nav.Link href="#delivery">
              <Link className="hyg" to="/delivery">
                Доставка
              </Link>
            </Nav.Link>
          </Nav>

          <Link to="/cart">
            <div className="icon">
              <IoCartOutline />
            </div>
          </Link>

          <Link to="/entrance">
            <div className="icon">
              <VscAccount />
            </div>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
