import { useState, useEffect } from "react";
import { Button, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../icons/logopng.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
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
  const [openCategories, setOpenCategories] = useState<{ [key: string]: boolean }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("Taşınabilir İstasyon");
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
    // Seçilen kategoriye göre ürünleri belirle
    const selectedProduct = products.find(product => Object.keys(product)[0] === selectedCategory);
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
          Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
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
                    <div onClick={() => toggleCategory(categoryName)} className="category-item">
                      <p>{categoryName}</p>
                      {openCategories[categoryName] ? (
                        <p><IoMdArrowDropup /></p>
                      ) : (
                        <p><IoMdArrowDropdown /></p>
                      )}
                    </div>
                    {openCategories[categoryName] && (
                      <div className="product-list">
                        {Array.isArray(product[categoryName])
                          ? (product[categoryName] as string[]).map((item, idx) => (
                              <div key={idx}>{item}</div>
                            ))
                          : Object.entries(product[categoryName]).map(([subCategory, items]) => (
                              <div key={subCategory}>
                                <strong>{subCategory}</strong>
                                {(items as string[]).map((item, idx) => (
                                  <p key={idx}>{item}</p>
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
        <div className="output">
          <h5>{selectedCategory}</h5>
          {categoryItems.length > 0 ? (
            <ul>
              {categoryItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>Seçilen ürün detayları burada gösterilebilir</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
