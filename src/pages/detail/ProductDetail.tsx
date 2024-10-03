import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Nav, Table } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import img1 from "../../images/araclar/konteynır tipi.png";
import img2 from "../../images/araclar/römork tipi.png";
import img4 from "../../images/araclar/akaryakıt disp seri1.png";
import img5 from "../../images/araclar/akaryakıt disp seri5.png";
import img6 from "../../images/araclar/akaryakıt disp seri6.png";
import img7 from "../../images/araclar/akaryakıt disp seri7.png";
import img8 from "../../images/araclar/lpg disp seri2.png";
import img9 from "../../images/araclar/lpg disp seri3.png";
import img10 from "../../images/araclar/akaryakıt disp seri7.png";
import tasinabilir2 from "../../images/araclar/tasinabilir2.png";
import romorktip1 from "../../images/araclar/römork tipi1.png";
import akaryakitseri7s2 from "../../images/araclar/akaryakıt disp seri7-2.webp";
import "./detail.css";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ProductContent {
  mainDescription: string;
  technicalDetails: string;
  additionalInfo: string;
  features: {
    label: string;
    value: string;
    en?: string;
    boy?: string;
    yukseklik?: string;
    agirlik?: string;
  }[];
  extraContent?: {
    description: string;
    image: string;
  };
  extraInfo?: string;
}

const productImages: { [key: string]: string } = {
  "Konteyner Tipi": img1,
  "Römork Tipi": img2,
  "7 Serisi Akaryakıt Pompası": img10,
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

const productContent: { [key: string]: ProductContent } = {
  "Konteyner Tipi": {
    mainDescription:
      "Konteyner tipi taşınabilir akaryakıt istasyonları, çelik S-235 JRG 2 malzemeden üretilmiş güçlü ve dayanıklı bir yapıya sahiptir. Çift cidarlı tank tasarımı sayesinde olası sızıntı riskleri minimize edilmiştir. KT4S-Kaplama Sistemi ile deniz suyu ve güneş ışınlarına karşı korumalıdır.",
    technicalDetails:
      "40ft modellerde 6 mm iç cidar ve 4 mm dış cidar, 20ft ve 10ft modellerde 5 mm iç cidar ve 3 mm dış cidar kullanılmıştır. Entegre kaçak algılama sistemi ile güvenlik en üst düzeydedir. ISO standartlarında üretim ve CSC sertifikası ile uluslararası nakliyeye uygundur.",
    additionalInfo:
      "Hızlı kurulum, minimum alan gereksinimi ve kolay taşınabilirlik özellikleriyle öne çıkar. Özellikle uzak bölgelerde, şantiyelerde ve acil durum senaryolarında ideal çözüm sunar.",
    features: [
      {
        label: "Taşınabilir İstasyon Ölçüleri",
        value: "SM-ISO-40ft",
        en: "2438",
        boy: "12192",
        yukseklik: "2591 (2438)",
        agirlik: "10000",
      },
      {
        label: "En (mm)",
        value: "SM-ISO-20ft",
        en: "2438",
        boy: "6058",
        yukseklik: "2591 (2438)",
        agirlik: "5600",
      },
      {
        label: "Boy (mm)",
        value: "SM-ISO-10ft",
        en: "2438",
        boy: "2991",
        yukseklik: "2591 (2438)",
        agirlik: "2400",
      },
    ],
    extraContent: {
      description:
        "Farklı model seçenekleriyle her türlü ihtiyaca cevap verebilen taşınabilir istasyonlar, çift cidarlar arasında bulunan entegre kaçak algılama sistemi sayesinde, herhangi bir sızıntı durumunu anında algılayarak kullanıcıya hızlı bir şekilde bildirim sağlar ve böylece çevre güvenliği açısından da önemli bir avantaj sunar.",
      image: tasinabilir2,
    },
  },
  "Römork Tipi": {
    mainDescription:
      "Römork tipi taşınabilir istasyonlar, maksimum mobilite için özel olarak tasarlanmıştır. Yüksek kaliteli çelik konstrüksiyon ve çift cidarlı tank yapısı ile güvenli yakıt depolama ve dağıtım imkanı sunar.",
    technicalDetails:
      "Farklı kapasite seçenekleri ile 5.000 ila 50.000 litre arası depolama imkanı. Çift dingil sistemi ve özel süspansiyon ile güvenli taşıma. ADR standartlarına uygun üretim ve ekipman donanımı.",
    additionalInfo:
      "Özellikle madencilik, inşaat ve tarım sektörlerinde yaygın kullanım. Akıllı seviye ölçüm sistemleri ve uzaktan izleme özellikleri opsiyonel olarak sunulmaktadır.",
    features: [
      {
        label: "Römork tipi",
        value: "SM-05",
        en: "5.000",
      },
      {
        label: "Tip",
        value: "SM-10",
        en: "10.000",
      },
      {
        label: "Açıklama",
        value: "SM-15",
        en: "15.000",
      },      
    ],
    extraInfo:
      "Taşınabilir ve esneklik arayanlar için ideal bir çözümdür. Kolayca taşınabilir ve hızla kullanılabilir, bu sayede acil durum yakıt ihtiyaçları vea geçici şantiyelerde pratik kullanım sağlar. Savel'in römork tipi taşınabilir istasyonları güvenlik özellikleriyle de öne çıkar; yüksek kaliteli tank yapısı ve kaçak algılama sistemleri sayesinde çevre dostu bir çözüm sunar ",
  },
  "7 Serisi Akaryakıt Pompası": {
    mainDescription:
      "7 Serisi, yüksek hacimli istasyonlar için geliştirilmiş premium segment bir akaryakıt pompasıdır. Dakikada 130 litreye varan dolum hızı ve çoklu ödeme sistemi entegrasyonu ile öne çıkar.",
    technicalDetails:
      "10 mikrona kadar hassas filtreleme sistemi, elektronik kalibrasyonlu ölçüm ünitesi ve dokunmatik LCD ekran. Paslanmaz çelik gövde ve özel kaplama ile zorlu hava koşullarına dayanıklı. Özellikle 7 Serisi LPG dispenserleri, etkileşimli 17 inç LCD ekranı ve ATM tipi klavyesi ile dikkat çekmektedir. Bu modeller, 1, 2 veya 4 nozul seçeneği sunarak farklı ihtiyaçlara cevap vermektedir.",
    additionalInfo:
      "Savel, yakıt sektöründe teknoloji ile yeniliği birleştirmeyi hedefleyen bir şirkettir. Müşteri memnuniyetini en üst düzeyde tutmayı amaçlayan Savel, yüksek kaliteli ürünler ve müşteri odaklı çözümler sunmaktadır. Şirket, LPG ve CNG dispenserleri gibi çeşitli ekipmanlar üretmektedir.",
    features: [
      {
        label: "Dolum Hızı",
        value: "130 litre/dakika",
        description: ["Hızlı dolum", "Verimlilik artırır"],
      },
      {
        label: "Filtreleme",
        value: "10 mikron hassasiyet",
        description: ["Yüksek kalite filtrasyon", "Kirleticileri azaltır"],
      },
      {
        label: "Ekran",
        value: "Dokunmatik LCD",
        description: ["Kullanıcı dostu arayüz", "Kolay erişim"],
      },
    ],
    extraInfo:
      "Savel, ayrıca uzaktan servis imkanı sağlayarak, internet üzerinden hızlı müdahale yapabilme yeteneği sunmaktadır. Elektronik kalibrasyon, otomatik sıcaklık telafisi ve çeşitli para birimi seçenekleri gibi özellikler, dispenserlerin işlevselliğini artırmaktadır. Sonuç olarak, Savel, yakıt sektöründe yenilikçi çözümler sunarak, hem günümüz hem de geleceğin teknolojilerini bir araya getirmeyi hedeflemektedir.",
  },
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
  };

  const content = productContent[decodedId] || {
    mainDescription: "Ürün detayları henüz eklenmemiştir.",
    technicalDetails: "Teknik detaylar mevcut değil.",
    additionalInfo: "Ek bilgi bulunmamaktadır.",
    features: [],
    extraInfo: "",
  };

  return (
    <Container className="my-5 detail-container">
      <Nav.Link as={Link} to="/products" className="mb-5">
        <FaArrowLeftLong />
      </Nav.Link>

      <h2 className="text-center mb-5">{product.name}</h2>

      <Row style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <Col md={6} className="d-flex justify-content-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={230}
          />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h4>Ürün Detayları</h4>
          <p>{content.mainDescription}</p>
          <p>{content.additionalInfo}</p>
        </Col>
        <Col md={6} className="mt-5 d-flex align-items-center">
          <p>{content.technicalDetails}</p>
        </Col>
        <Col md={6} className="mt-5">
          <h6>Temel Özellikler</h6>
          <ul>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>İstasyon Modeli</th> <th>En (mm)</th>
                  <th>Boy (mm)</th>
                  <th>Yükseklik (mm)</th>
                  <th>Ağırlık (kg)</th>
                </tr>
              </thead>
              <tbody>
                {content.features.map((item, index) => (
                  <tr key={index}>
                    <td>{item.value}</td>
                    <td>{item.en}</td>
                    <td>{item.boy}</td>
                    <td>{item.yukseklik}</td>
                    <td>{item.agirlik}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ul>
        </Col>
      </Row>

      {content.extraContent && (
        <Row className="mt-5">
          <Col md={6} className="d-flex align-items-center">
            <p>{content.extraContent.description}</p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <Image
              src={content.extraContent.image}
              width={350}
              height={300}
              alt={`${product.name} ek görsel`}
            />
          </Col>
        </Row>
      )}

      {decodedId === "Römork Tipi" && content.extraInfo && (
        <Row className="mt-5">
          <Col md={6} className="d-flex align-items-center">
            <p>{content.extraInfo}</p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img src={romorktip1} width={350} alt="Römork Tipi ek görsel" />
          </Col>
        </Row>
      )}

      {decodedId === "7 Serisi Akaryakıt Pompası" && content.extraInfo && (
        <Row className="mt-5">
          <Col md={6} className="d-flex align-items-center">
            <p>{content.extraInfo}</p>
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img
              src={akaryakitseri7s2}
              width={350}
              alt="Römork Tipi ek görsel"
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
