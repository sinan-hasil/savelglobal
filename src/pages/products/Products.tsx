import {
  Button,
  Dropdown,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import logo from "../../icons/logopng.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "./products.css";

const Products = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="bg-dark">
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

                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Some text as placeholder. In real life you can have the
                      elements you have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                  </Offcanvas>
                </Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
      </Navbar>

      <div className="content">
        <div className="nav-drop d-flex flex-column">
          <Dropdown>
            <Dropdown.Toggle
              className="w-100 show"
              variant="outline"
              id="dropdown-basic"
              aria-expanded="true"
            >
              Ürün Listesi
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="output">asd</div>
      </div>
    </>
  );
};

export default Products;
