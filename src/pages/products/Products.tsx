import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Nav, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img0 from "../../images/araclar/1 serisi 2.png";
import img1 from "../../images/araclar/konteynır tipi.png";
import img2 from "../../images/araclar/römork tipi.png";
import img5 from "../../images/araclar/akaryakıt disp seri5.png";
import img6 from "../../images/araclar/akaryakıt disp seri6.png";
import img7 from "../../images/araclar/akaryakıt disp seri7.png";
import img8 from "../../images/araclar/lpg disp seri2.png";
import img9 from "../../images/araclar/lpg disp seri3.png";
import img10 from "../../images/araclar/lpg disp seri7.png";
import img11 from "../../images/araclar/akaryakıttankiweb.jpg";
import img12 from "../../images/araclar/lpg tank1.jpg";
import img13 from "../../images/araclar/jeneratör tankı.png";
import img14 from "../../images/araclar/yakıtkontrolsistemi.png";
import img15 from "../../images/araclar/istasyonkurulum.jpg";
import img16 from "../../images/araclar/projedanismanlik.jpg";
import img17 from "../../images/araclar/helpdesk.png";
import img18 from "../../images/araclar/altyapıtesisat.png";
import img19 from "../../images/araclar/pompa.webp";
import img20 from "../../images/araclar/adblue.png";
import img21 from "../../images/araclar/akarykitekipmani.jpg";
import img22 from "../../images/araclar/lpgekipmani.webp";
import img23 from "../../images/araclar/yakitsayac.webp";
import img24 from "../../images/araclar/yağsayac.webp";
import { IoIosArrowDown } from "react-icons/io";
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
    ],
  },
];

const productDescriptions: { [key: string]: string } = {
  "Konteyner Tipi": "Bu taşınabilir istasyon, konteyner tipi bir yapı sunar.",
  "Römork Tipi":
    "Römork tipi istasyon, taşınabilir yakıt depolama çözümleri sağlar.",
  "7 Serisi Akaryakıt Pompası":
    "Yüksek performanslı 7 Serisi akaryakıt pompası.",
  "6 Serisi Akaryakıt Pompası":
    "Daha küçük ölçekli yakıt istasyonları için ideal.",
  "5 Serisi Akaryakıt Pompası": "Yüksek Performanslı Yakıt Dağıtımı",
  "3 Serisi Akaryakıt Pompası": "Dayanıklı ve Verimli Çözümler",
  "1 Serisi Akaryakıt Pompası": "Güçlü Yakıt Dağıtımı, Az Bakım",
  "7 Serisi LPG Dispenseri": "Modern Teknoloji ile Güçlü Yakıt Dağıtımı",
  "3 Serisi LPG Dispenseri": "Dayanıklı ve Ekonomik Çözümler",
  "2 Serisi LPG Dispenseri": "Yüksek Verimlilik ve Güvenilir Performans",
  "Akaryakıt Tankları": "Güvenli ve Dayanıklı Depolama Çözümleri",
  "LPG Tankları": "Güvenli ve Verimli Depolama",
  "Jeneratör Tankları": "Güçlü ve Güvenli Enerji Depolama",
  "Yakıt Kontrol Sistemleri": "Akıllı ve Verimli Yakıt Yönetimi",
  "İstasyon Kurulumu": "Modern Teknoloji ile Hızlı ve Verimli Çalışma",
  "Proje Danışmanlık ve Mühendislik": "Profesyonel Çözümler, Güçlü Sonuçlar",
  "Servis Hizmetleri": "Uzman Kadro ile Kaliteli Destek",
  "Altyapı Tesisat malzemeleri": "Yüksek Kalite ile Uzun Ömürlü Kullanım",
  "Yakıt Pompaları": "Hızlı ve Etkili Yakıt Transferi",
  "Adblue Ekipmanları": "Temiz ve Verimli Egzoz Emisyon Kontrolü",
  "Akaryakıt Ekipmanları": "Güvenilir ve Dayanıklı Yakıt Çözümleri",
  "LPG Ekipmanları": "Güvenli ve Verimli Enerji Çözümler",
  "Yakıt Sayaçları": "Hassas Ölçüm ve Güvenilir Performans",
  "Yağ Sayaçları": "Verimli Yağ Yönetimi İçin İleri Teknoloji",
};

const productImages: { [key: string]: string } = {
  "Konteyner Tipi": img1,
  "Römork Tipi": img2,
  "7 Serisi Akaryakıt Pompası": img7,
  "6 Serisi Akaryakıt Pompası": img6,
  "5 Serisi Akaryakıt Pompası": img5,
  "3 Serisi Akaryakıt Pompası": img6,
  "1 Serisi Akaryakıt Pompası": img0,
  "7 Serisi LPG Dispenseri": img8,
  "3 Serisi LPG Dispenseri": img9,
  "2 Serisi LPG Dispenseri": img10,
  "Akaryakıt Tankları": img11,
  "LPG Tankları": img12,
  "Jeneratör Tankları": img13,
  "Yakıt Kontrol Sistemleri": img14,
  "İstasyon Kurulumu": img15,
  "Proje Danışmanlık ve Mühendislik": img16,
  "Servis Hizmetleri": img17,
  "Altyapı Tesisat malzemeleri": img18,
  "Yakıt Pompaları": img19,
  "Adblue Ekipmanları": img20,
  "Akaryakıt Ekipmanları": img21,
  "LPG Ekipmanları": img22,
  "Yakıt Sayaçları": img23,
  "Yağ Sayaçları": img24,
};

const Products = () => {
  const [showdrop, setShowDrop] = useState(true);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categoryItems, setCategoryItems] = useState<string[]>([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      setOpenCategory(categoryParam);
      setSelectedCategory(categoryParam);
      updateCategoryItems(categoryParam);
    } else {
      const defaultCategory = "Taşınabilir İstasyon";
      setOpenCategory(defaultCategory);
      setSelectedCategory(defaultCategory);
      updateCategoryItems(defaultCategory);

      navigate(`?category=${encodeURIComponent(defaultCategory)}`, {
        replace: true,
      });
    }
  }, [location.search, navigate]);

  const updateCategoryItems = (category: string) => {
    const selectedProduct = products.find(
      (product) => Object.keys(product)[0] === category
    );
    if (selectedProduct) {
      const categoryName = Object.keys(selectedProduct)[0];
      const productItems = selectedProduct[categoryName];
      if (Array.isArray(productItems)) {
        setCategoryItems(productItems);
      } else if (typeof productItems === "object") {
        const subItems = Object.values(productItems).flat();
        setCategoryItems(subItems);
      }
    }
  };

  const toggleDrop = () => {
    setShowDrop(!showdrop);
  };

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null);
      setSelectedCategory(null);
      setCategoryItems([]);
      navigate("", { replace: true });
    } else {
      setOpenCategory(category);
      setSelectedCategory(category);
      updateCategoryItems(category);

      navigate(`?category=${encodeURIComponent(category)}`, { replace: true });
    }
  };

  const handleDownloadPDF = () => {
    const pdfUrl = "/path/to/your/otomasyon-cozumleri.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "otomasyon-cozumleri.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getImageWidth = (item: string) => {
    const narrowWidthItems = [
      "1 Serisi Akaryakıt Pompası",
      "7 Serisi LPG Dispenseri",
      "3 Serisi LPG Dispenseri",
      "2 Serisi LPG Dispenseri",
    ];
    return narrowWidthItems.includes(item) ? "150px" : "200px";
  };

  const shouldShowDetailLink = (item: string) => {
    const noDetailItems = [
      "Servis Hizmetleri",
      "Altyapı Tesisat malzemeleri",
      "Yakıt Pompaları",
      "Adblue Ekipmanları",
      "Akaryakıt Ekipmanları",
      "LPG Ekipmanları",
      "Yakıt Sayaçları",
      "Yağ Sayaçları",
    ];
    return !noDetailItems.includes(item);
  };

  const shouldShowDetailLink1 = (item: string) => {
    const noDetailItems1 = [
      "Servis Hizmetleri",
      "Altyapı Tesisat malzemeleri",
      "Yakıt Pompaları",
      "Adblue Ekipmanları",
      "Akaryakıt Ekipmanları",
      "LPG Ekipmanları",
      "Yakıt Sayaçları",
      "Yağ Sayaçları",
    ];
    return !noDetailItems1.includes(item);
  };

  return (
    <>
      <div className="content">
        <div className="nav-drop">
          <div onClick={toggleDrop} className="drop-btn">
            <p>ÜRÜN LİSTESİ</p>
            <IoIosArrowDown
              style={{
                transform: showdrop ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s",
              }}
            />
          </div>
          {showdrop && (
            <div className="drop-content">
              {products.map((product, index) => {
                const categoryName = Object.keys(product)[0];
                return (
                  <div key={index}>
                    <div
                      onClick={() => toggleCategory(categoryName)}
                      className="category-title"
                    >
                      <p>{categoryName}</p>
                      <IoIosArrowDown
                        style={{
                          transform:
                            openCategory === categoryName
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease-in-out",
                        }}
                      />
                    </div>
                    {openCategory === categoryName && (
                      <div className="product-list">
                        {Array.isArray(product[categoryName])
                          ? (product[categoryName] as string[]).map(
                              (item, idx) => (
                                <div className="category-item" key={idx}>
                                  {shouldShowDetailLink1(item) ? (
                                    <Nav.Link
                                      as={Link}
                                      to={`/products/${encodeURIComponent(
                                        item
                                      )}`}
                                    >
                                      {item}
                                    </Nav.Link>
                                  ) : (
                                    <span>{item}</span> // Link yerine sadece metni gösteriyoruz.
                                  )}
                                </div>
                              )
                            )
                          : Object.entries(
                              product[categoryName] as {
                                [key: string]: string[];
                              }
                            ).map(([subCategory, items]) => (
                              <div key={subCategory}>
                                <b>{subCategory}</b>
                                {items.map((item, idx) => (
                                  <Nav.Link
                                    className="category-item"
                                    key={idx}
                                    as={Link}
                                    to={`/products/${encodeURIComponent(item)}`}
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
        <div className="output">
          <Container>
            <h5 className="mt-3 text-center">
              {selectedCategory ? selectedCategory.toUpperCase() : "Ürünler"}
            </h5>
            {selectedCategory === "Otomasyon Çözümleri" ? (
              <div className="otomasyon-content mt-4 text-center">
                <p>
                  Otomasyon çözümlerimiz hakkında detaylı bilgi için PDF'i
                  indirebilirsiniz.
                </p>
                <Button onClick={handleDownloadPDF} variant="primary">
                  PDF İndir
                </Button>
              </div>
            ) : (
              <Row className="mt-5">
                {categoryItems.map((item, index) => (
                  <Col sm={12} md={6} lg={4} key={index} className="mb-4">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img
                        className="ms-5"
                        variant="top"
                        style={{
                          width: getImageWidth(item),
                          height: "150px",
                          objectFit: "contain",
                        }}
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
                        {shouldShowDetailLink(item) && (
                          <Button variant="primary">
                            <Nav.Link
                              as={Link}
                              to={`/products/${encodeURIComponent(item)}`}
                            >
                              Detaylı Bilgi
                            </Nav.Link>
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Products;
