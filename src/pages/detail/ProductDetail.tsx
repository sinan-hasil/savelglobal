import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
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
import tasinabilir2 from "../../images/araclar/tasinabilir2.png";

import { FaArrowLeftLong } from "react-icons/fa6";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  details: string;
  list: string[];
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
    "Koyteyner tipi serisi, Savel'in sunduğu yenilikçi ve taşınabilir akaryakıt istasyon çözümüdür. ISO standartlarında, CSC sertifikalı ve BIC-CODE'lu bu istasyonlar, geleneksel akaryakıt istasyonlarına kıyasla daha esnek, ekonomik ve hızlı kurulum imkanı sunar.",
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

const productList: { [key: string]: string[] } = {
  "Konteyner Tipi": [
    "Standart Ebatlar: ISO 40-HC / 40 / 20 / 10 ft",
    "Sertifikasyon: CSC sertifikalı, BIC-CODE'lu",
    "Tank Yapısı: Çift cidarlı",
  ],
  "Römork Tipi": [
    "Taşınabilir ve kolay kurulabilir",
    "Acil durumlar için ideal",
    "Maksimum mobilite sağlar",
  ],
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const decodedId = decodeURIComponent(id || "");

  const product: Product = {
    id: decodedId,
    name: decodedId,
    description:
      productDescriptions[decodedId] || "Ürün açıklaması mevcut değil.",
    image:
      productImages[decodedId] ||
      `https://via.placeholder.com/300x200?text=${decodedId}`,
    details: productDetails[decodedId] || "Detaylı ürün bilgisi mevcut değil.",
    list: productList[decodedId] || [],
  };

  return (
    <>
      <Container className="my-5">
        <Nav.Link as={Link} to={"/products"} className="mb-5">
          <FaArrowLeftLong />
        </Nav.Link>
        <h2 className="text-center mb-5">{product.name}</h2>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={230}
            />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h4>Ürün Detayları</h4>
            <p>{product.details}</p>
          </Col>
          <Col md={6} className="mt-5 d-flex align-items-center">
            <h4></h4>
            {/* <ul>
              {product.list.length > 0 ? (
                product.list.map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>Ürün özellikleri mevcut değil.</li>
              )}
            </ul> */}
            <p>
              Taşınabilir akaryakıt istasyonları, çelik S-235 JRG 2 malzemeden
              üretilmiş güçlü ve dayanıklı bir yapıya sahiptir. Çift cidarlı
              tank tasarımı sayesinde olası sızıntı riskleri minimize
              edilmiştir. Ayrıca, tankın dış kısmında uygulanan KT4S-Kaplama
              Sistemi, istasyonu deniz suyu ve güneş ışınları gibi çevresel
              etkilere karşı koruyarak uzun ömürlü bir kullanım sunar. Bu
              kaplama sistemi, özellikle aşırı iklim koşullarında bile
              istasyonun güvenli ve verimli çalışmasını sağlar.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <p>
              Farklı model seçenekleriyle her türlü ihtiyaca cevap verebilen
              taşınabilir istasyonlar, 40ft modellerde 6 mm iç cidar ve 4 mm dış
              cidar, 20ft ve 10ft modellerde ise 5 mm iç cidar ve 3 mm dış cidar
              ile üretilmiştir. Çift cidarlar arasında bulunan entegre kaçak
              algılama sistemi, herhangi bir sızıntı durumunu anında algılayarak
              kullanıcıya hızlı bir şekilde bildirim sağlar ve böylece çevre
              güvenliği açısından da önemli bir avantaj sunar.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} className="d-flex align-items-center">
            <p>
              Taşınabilir akaryakıt istasyonları, çelik S-235 JRG 2 malzemeden
              üretilmiş güçlü ve dayanıklı bir yapıya sahiptir. Çift cidarlı
              tank tasarımı sayesinde olası sızıntı riskleri minimize
              edilmiştir. Ayrıca, tankın dış kısmında uygulanan KT4S-Kaplama
              Sistemi, istasyonu deniz suyu ve güneş ışınları gibi çevresel
              etkilere karşı koruyarak uzun ömürlü bir kullanım sunar. Bu
              kaplama sistemi, özellikle aşırı iklim koşullarında bile
              istasyonun güvenli ve verimli çalışmasını sağlar.
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={tasinabilir2} width={350} height={300} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetail;
