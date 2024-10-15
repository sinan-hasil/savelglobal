import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../icons/logopng.png";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "./main.css";

type ProductItem = string[] | { [key: string]: string[] };

type Product = {
  [key: string]: ProductItem;
};

const products: Product[] = [
  {
    "Taşınabilir İstasyon": ["Konteyner Tipi", "Römork Tipi"],
  },
  {
    Dispenserler: {
      "Akaryakıt Dispenserleri": [
        "7 Serisi Akaryakıt Pompası",
        "6 Serisi Akaryakıt Pompası",
        "5 Serisi Akaryakıt Pompası",
        "3 Serisi Akaryakıt Pompası",
        "1 Serisi Akaryakıt Pompası",
      ],
      "LPG Dispenserleri": [
        "7 Serisi LPG Dispenseri",
        "3 Serisi LPG Dispenseri",
        "2 Serisi LPG Dispenseri",
      ],
    },
  },
  {
    Tanklar: ["Akaryakıt Tankları", "LPG Tankları", "Jeneratör Tankları"],
  },
  {
    "Otomasyon Çözümleri": [""],
  },
  {
    Endüstriyel: [
      "Yakıt Kontrol Sistemleri",
      "İstasyon Kurulumu",
      "Proje Danışmanlık ve Mühendislik",
      "Servis Hizmetleri",
    ],
  },
  {
    "Savel Shop": [
      "Altyapı Tesisat malzemeleri",
      "Yakıt Pompaları",
      "Adblue Ekipmanları",
      "Akaryakıt Ekipmanları",
      "LPG Ekipmanları",
      "Yakıt Sayaçları",
      "Yağ Sayaçları",
      "Ölçü Kontrol",
    ],
  },
];

const Main = () => {
  const [show, setShow] = useState(false);
  const [showdrop, setShowDrop] = useState(true);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const navigate = useNavigate();

  const toggleDrop = () => {
    setShowDrop(!showdrop);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      setOpenCategory(categoryParam);
    } else {
      const defaultCategory = "Taşınabilir İstasyon";
      setOpenCategory(defaultCategory);

      navigate(`?category=${encodeURIComponent(defaultCategory)}`, {
        replace: true,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, navigate]);

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null);
      navigate("", { replace: true });
    } else {
      setOpenCategory(category);

      navigate(`?category=${encodeURIComponent(category)}`, { replace: true });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className="z-3" href="/">
            <img src={logo} width={170} alt="Site Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto">
                <Nav.Link
                  className="text-white d-none d-sm-block"
                  as={Link}
                  to={"/"}
                >
                  Anasayfa
                </Nav.Link>
                <Nav.Link as={Link} to={"/hakkimizda"} className="text-white d-none d-sm-block">
                  Hakkımızda
                </Nav.Link>
                <Nav.Link
                  className="text-white d-none d-sm-block"
                  as={Link}
                  to={"/products"}
                >
                  Ürünler
                </Nav.Link>
                <Nav.Link
                  className="text-white d-none d-sm-block"
                  as={Link}
                  to={"/contact"}
                >
                  İletişim
                </Nav.Link>
                <Button
                  variant="outline"
                  className="text-white fs-5 me-3 d-flex align-items-center d-block d-sm-none"
                  onClick={handleShow}
                >
                  <RxHamburgerMenu />
                </Button>

                <Offcanvas className="w-75" show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold">Savel</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <div className="mb-5">
                      <Nav.Link className="text-dark" as={Link} to={"/"}>
                        Anasayfa
                      </Nav.Link>
                      <Nav.Link
                        as={Link}
                        to={"/hakkimizda"}
                        className="text-dark"
                      >
                        Hakkımızda
                      </Nav.Link>
                      <Nav.Link
                        className="z-3 text-dark"
                        as={Link}
                        to={"/products"}
                      >
                        Ürünler
                      </Nav.Link>
                      <Nav.Link
                        className="z-3 text-dark"
                        as={Link}
                        to={"/contact"}
                      >
                        İletişim
                      </Nav.Link>
                    </div>

                    <div className="nav-drop">
                      <div onClick={toggleDrop} className="drop-btn">
                        <p>ÜRÜN LİSTESİ</p>
                        {showdrop ? (
                          <IoMdArrowDropup className="up-icon" />
                        ) : (
                          <IoMdArrowDropdown />
                        )}
                      </div>
                      {showdrop && (
                        <div className="drop-content">
                          {products.map((product, index) => {
                            const categoryName = Object.keys(product)[0];
                            return (
                              <div key={index}>
                                <div
                                  onClick={() => toggleCategory(categoryName)}
                                  className="category-item"
                                >
                                  <p>{categoryName}</p>
                                  {openCategory === categoryName ? (
                                    <p>
                                      <IoMdArrowDropup />
                                    </p>
                                  ) : (
                                    <p>
                                      <IoMdArrowDropdown />
                                    </p>
                                  )}
                                </div>
                                {openCategory === categoryName && (
                                  <div className="product-list">
                                    {Array.isArray(product[categoryName])
                                      ? (product[categoryName] as string[]).map(
                                          (item, idx) => (
                                            <div
                                              className="category-item"
                                              key={idx}
                                            >
                                              <Nav.Link
                                                as={Link}
                                                to={`/products/${encodeURIComponent(
                                                  item
                                                )}`}
                                              >
                                                {item}
                                              </Nav.Link>
                                            </div>
                                          )
                                        )
                                      : Object.entries(
                                          product[categoryName] as {
                                            [key: string]: string[];
                                          }
                                        ).map(([subCategory, items]) => (
                                          <div key={subCategory}>
                                            <strong>{subCategory}</strong>
                                            {items.map((item, idx) => (
                                              <Nav.Link
                                                className="category-item"
                                                key={idx}
                                                as={Link}
                                                to={`/products/${encodeURIComponent(
                                                  item
                                                )}`}
                                              >
                                                {item}
                                              </Nav.Link>
                                            ))}
                                          </div>
                                        ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
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
