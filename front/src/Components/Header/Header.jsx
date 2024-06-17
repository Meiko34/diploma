import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
// import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUserCircle } from "react-icons/fa";

// ColorSchemesExample;

// export default function Header() {
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

          <Link onClick={handleShow}>
            {/* to="/cart" */}
            <div className="icon">
              <IoCartOutline />
            </div>
          </Link>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Корзина</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
          <Link to="/entrance">
            <div className="icon">
              {/* <VscAccount /> */}
              <FaUserCircle />
            </div>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
