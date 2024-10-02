import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
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
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../icons/logopng.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import Footer from "../footer/Footer";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string;
}

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

const productDescriptions: { [key: string]: string } = {
  "Konteyner Tipi": "Bu taşınabilir istasyon, konteyner tipi bir yapı sunar.",
  "Römork Tipi":
    "Römork tipi istasyon, taşınabilir yakıt depolama çözümleri sağlar.",
  "7 Serisi Akaryakıt Pompası":
    "Yüksek performanslı 7 Serisi akaryakıt pompası.",
  "6 Serisi Akaryakıt Pompası":
    "Daha küçük ölçekli yakıt istasyonları için ideal.",
  "5 Serisi Akaryakıt Pompası":
    "Orta ölçekli istasyonlar için uygun 5 Serisi akaryakıt pompası.",
  "3 Serisi Akaryakıt Pompası":
    "Kompakt ve verimli 3 Serisi akaryakıt pompası.",
  "1 Serisi Akaryakıt Pompası":
    "Temel ihtiyaçlar için tasarlanmış 1 Serisi akaryakıt pompası.",
  "7 Serisi LPG Dispenseri":
    "Yüksek hacimli LPG istasyonları için 7 Serisi dispenser.",
  "3 Serisi LPG Dispenseri":
    "Orta ölçekli LPG istasyonları için 3 Serisi dispenser.",
  "2 Serisi LPG Dispenseri":
    "Küçük ve orta ölçekli LPG istasyonları için 2 Serisi dispenser.",
};

const productDetails: { [key: string]: string } = {
  "Konteyner Tipi":
    "Konteyner tipi istasyonlar, hızlı kurulum ve taşınabilirlik avantajları sunar. Özellikle geçici veya mobil yakıt ihtiyaçları için idealdir. Dayanıklı yapısı ve kompakt tasarımı ile çeşitli alanlarda kullanılabilir.",
  "Römork Tipi":
    "Römork tipi istasyonlar, maksimum mobilite sağlar. Acil durum yakıt ihtiyaçları, uzak bölgeler veya geçici şantiyelerde kullanım için mükemmeldir. Kolay taşınabilir ve hızlı kurulum özellikleri ile öne çıkar.",
  "7 Serisi Akaryakıt Pompası":
    "7 Serisi akaryakıt pompaları, yüksek hacimli istasyonlar için tasarlanmıştır. Hızlı dolum kapasitesi, çoklu hortum seçenekleri ve gelişmiş otomasyon özellikleri ile dikkat çeker. Dayanıklı yapısı uzun ömürlü kullanım sağlar.",
  "6 Serisi Akaryakıt Pompası":
    "6 Serisi, orta ölçekli istasyonlar için ideal bir seçimdir. Kompakt tasarımı ve verimli çalışma prensibi ile alan tasarrufu sağlarken yüksek performans sunar. Kullanıcı dostu arayüzü ile kolay kullanım imkanı tanır.",
  "5 Serisi Akaryakıt Pompası":
    "5 Serisi pompalar, dengeli performans ve uygun maliyet sunar. Orta ölçekli istasyonlar için tasarlanmış olup, güvenilir operasyon ve kolay bakım özellikleri ile öne çıkar.",
  "3 Serisi Akaryakıt Pompası":
    "3 Serisi, küçük ve orta ölçekli istasyonlar için kompakt bir çözümdür. Enerji verimliliği ve düşük bakım maliyetleri ile işletme giderlerini minimize eder. Basit ve sağlam tasarımı ile uzun ömürlü kullanım sağlar.",
  "1 Serisi Akaryakıt Pompası":
    "1 Serisi, temel ihtiyaçlar için tasarlanmış ekonomik bir çözümdür. Küçük istasyonlar veya özel kullanımlar için idealdir. Basit yapısı ile kolay kurulum ve bakım imkanı sunar.",
  "7 Serisi LPG Dispenseri":
    "7 Serisi LPG dispenserleri, yüksek hacimli LPG istasyonları için geliştirilmiştir. Hızlı dolum kapasitesi ve gelişmiş güvenlik özellikleri ile öne çıkar. Çoklu araç dolumu için uygundur.",
  "3 Serisi LPG Dispenseri":
    "3 Serisi LPG dispenserleri, orta ölçekli istasyonlar için ideal bir seçimdir. Kompakt tasarımı ve verimli çalışma prensibi ile kullanım kolaylığı sağlar. Güvenlik ve performans dengesi ile dikkat çeker.",
  "2 Serisi LPG Dispenseri":
    "2 Serisi, küçük ve orta ölçekli LPG istasyonları için tasarlanmıştır. Ekonomik ve güvenilir bir çözüm sunar. Basit yapısı ile kolay kurulum ve bakım avantajı sağlar.",
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const decodedId = decodeURIComponent(id || "");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const product: Product = {
    id: decodedId,
    name: decodedId,
    description:
      productDescriptions[decodedId] || "Ürün açıklaması mevcut değil.",
    image:
      productImages[decodedId] ||
      `https://via.placeholder.com/300x200?text=${decodedId}`,
    details: productDetails[decodedId] || "Detaylı ürün bilgisi mevcut değil.",
  };

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

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
                    <Button variant="outline">Ürünler</Button>
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

      <Container className="my-5">
        <Nav.Link
         as={Link}
         to={"/products"}
         className="mb-5"
         >
          <FaArrowLeftLong />
        </Nav.Link>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <Image src={product.image} alt={product.name} width={300} height={230} />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>Ürün Detayları</h4>
            <p>{product.details}</p>
            {/* <Button variant="secondary"><Nav.Link as={Link} to={"/products"}>Ürün Listesine Dön</Nav.Link></Button> */}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ProductDetail;
