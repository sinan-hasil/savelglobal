import { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Row,
} from "react-bootstrap";
import logo from "../../icons/logopng.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import img1 from "../../images/araclar/konteynır tipi.png";
import img2 from "../../images/araclar/römork tipi.png";
import img3 from "../../images/araclar/akaryakıt disp seri3.png";
import img4 from "../../images/araclar/akaryakıt disp seri1.png";
import img5 from "../../images/araclar/akaryakıt disp seri5.png";
import img6 from "../../images/araclar/akaryakıt disp seri6.png";
import img7 from "../../images/araclar/akaryakıt disp seri7.png";
import img8 from "../../images/araclar/lpg disp seri2.png";
import img9 from "../../images/araclar/lpg disp seri3.png";
import img10 from "../../images/araclar/lpg disp seri7.png";
import "./products.css";

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
    Otomasyon: ["..."],
  },
  {
    Endüstriyel: [
      "Jenetatör",
      "Yakıt Kontrol Sistemleri",
      "İstasyon Kurulumu",
      "Proje Danışmanlık ve Mühendislik",
      "Servis Hizmetleri",
    ],
  },
  {
    "Savel Shop": ["..."],
  },
];

const Products = () => {
  const [show, setShow] = useState<boolean>(false);
  const [showdrop, setShowDrop] = useState(true);
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>(
    "Taşınabilir İstasyon"
  );
  const [categoryItems, setCategoryItems] = useState<string[]>([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleDrop = () => setShowDrop(!showdrop);

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
    setSelectedCategory(category);
  };

  useEffect(() => {
    const selectedProduct = products.find(
      (product) => Object.keys(product)[0] === selectedCategory
    );
    if (selectedProduct) {
      const categoryName = Object.keys(selectedProduct)[0];
      const productItems = selectedProduct[categoryName];
      if (Array.isArray(productItems)) {
        setCategoryItems(productItems);
      } else {
        const subItems = Object.values(productItems).flat();
        setCategoryItems(subItems);
      }
    }
  }, [selectedCategory]);

  const productDescriptions: { [key: string]: string } = {
    "Konteyner Tipi": "Bu taşınabilir istasyon, konteyner tipi bir yapı sunar.",
    "Römork Tipi":
      "Römork tipi istasyon, taşınabilir yakıt depolama çözümleri sağlar.",
    "7 Serisi Akaryakıt Pompası":
      "Yüksek performanslı 7 Serisi akaryakıt pompası.",
    "6 Serisi Akaryakıt Pompası":
      "Daha küçük ölçekli yakıt istasyonları için ideal.",
  };

  const productImages: { [key: string]: string } = {
    "Konteyner Tipi": img1,
    "Römork Tipi": img2,
    "7 Serisi Akaryakıt Pompası": img3,
    "6 Serisi Akaryakıt Pompası": img4,
    "5 Serisi Akaryakıt Pompası": img5,
    "3 Serisi Akaryakıt Pompası": img6,
    "1 Serisi Akaryakıt Pompası": img7,
    "7 Serisi LPG Dispenseri": img8,
    "3 Serisi LPG Dispenseri": img9,
    "2 Serisi LPG Dispenseri": img10,
  };
    
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
                <Button className="z-3" variant="outline" onClick={handleShow}>
                  <RxHamburgerMenu className="text-white" size={25} />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <div className="content">
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
                      {openCategories[categoryName] ? (
                        <p>
                          <IoMdArrowDropup />
                        </p>
                      ) : (
                        <p>
                          <IoMdArrowDropdown />
                        </p>
                      )}
                    </div>
                    {openCategories[categoryName] && (
                      <div className="product-list">
                        {Array.isArray(product[categoryName])
                          ? (product[categoryName] as string[]).map(
                              (item, idx) => <div key={idx}>{item}</div>
                            )
                          : Object.entries(product[categoryName]).map(
                              ([subCategory, items]) => (
                                <div key={subCategory}>
                                  <strong>{subCategory}</strong>
                                  {(items as string[]).map((item, idx) => (
                                    <p key={idx}>{item}</p>
                                  ))}
                                </div>
                              )
                            )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="output">
          <Container>
            <h5 className="mt-3 text-center">
              {selectedCategory.toUpperCase()}
            </h5>
            <Row className="mt-5">
              {categoryItems.length > 0 ? (
                categoryItems.map((item, index) => (
                  <Col md={4} key={index}>
                    <Card style={{ width: "18rem" }}>                      
                      <Card.Img
                        className="ms-3"
                        variant="top"
                        src={
                          productImages[item] ||
                          `https://via.placeholder.com/300x200?text=${item}`
                        }
                      />
                      <Card.Body>
                        <Card.Title>{item}</Card.Title>
                        <Card.Text>
                          {productDescriptions[item] ||
                            "Bu ürün hakkında bilgi mevcut değil."}
                        </Card.Text>
                        <Button variant="primary">Detaylı Bilgi</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>Seçilen ürün detayları burada gösterilebilir</p>
              )}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Products;