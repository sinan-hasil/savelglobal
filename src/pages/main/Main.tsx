import { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";
import logo from "../../icons/logopng.png";
import Footer from "../footer/Footer";

const Main = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className="z-3">
            <img src={logo} width={170} alt="Site Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto">
                <Nav.Link className="d-flex align-items-center">
                  <span className="z-3 fs-5 text-white">TR</span>
                  <Button
                    className="z-3"
                    variant="outline"
                    onClick={handleShow}
                  >
                    <RxHamburgerMenu className="text-white" size={25} />
                  </Button>
                  <Nav.Link className="z-3" as={Link} to={"/products"}>
                    <Button variant="outline-light">Ürünler</Button>
                  </Nav.Link>
                  <Nav.Link className="z-3" as={Link} to={"/contact"}>
                    <Button variant="outline-light">İletişim</Button>
                  </Nav.Link>

                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body></Offcanvas.Body>
                  </Offcanvas>
                </Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />

      <Footer />
    </>
  );
};

export default Main;
