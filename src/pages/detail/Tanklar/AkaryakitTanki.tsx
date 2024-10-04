import { Col, Container, Row } from "react-bootstrap";
import konteyner1 from "../../../images/araclar/akaryakittanki.png";
import konteyner2 from "../../../images/araclar/akaryakittanki1.png";

const AkaryakitTanki = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">Akaryakıt Tankı</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={konteyner1} width={300} />
          </Col>
          <Col md={6}>
            <h3>Ürün Detayları</h3>
            <p>
              Akaryakıt tankları, yakıtların güvenli ve verimli bir şekilde
              depolanması için tasarlanmış özel kaplardır. Genellikle çelik veya
              yüksek dayanımlı malzemelerden üretilen bu tanklar, benzin, dizel,
              LPG gibi farklı yakıt türlerini çevreye zarar vermeden muhafaza
              eder. Sızdırmazlık ve dayanıklılık açısından uluslararası
              standartlara uygun olarak üretilen tanklar, yer üstü veya yer altı
              kullanımına uygun olabilir. Depolanan yakıt miktarına ve kullanım
              amacına göre farklı kapasite seçenekleri sunan akaryakıt tankları,
              hem ticari hem de endüstriyel işletmeler için kritik bir rol
              oynar. Güvenlik ekipmanları ve izleme sistemleriyle donatılmış
              olan bu tanklar, hem yakıtın korunmasını hem de çevresel risklerin
              azaltılmasını sağlar.
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex flex-column justify-content-center">
            <p>
              Başlangıçta Ar-Ge'ye odaklandık, daha sonra müşteri sorunlarına
              çözüm bularak müşteri sayımızı artırdık. İyileştirdiğimiz tüm
              ürünlerin testlerini kısa sürede tamamladık. Ve ürünlerimizi
              müşterilerimize tanıttık.
            </p>
            <p>
              Akaryakıt tankları, güvenli yakıt depolaması için tasarlanmış,
              dayanıklı ve sızdırmaz özellikleriyle dikkat çeken kaplardır.
              Farklı kapasite seçenekleri ve güvenlik donanımlarıyla donatılan
              bu tanklar, ticari ve endüstriyel alanlarda güvenilir bir çözüm
              sunar. Yer üstü ve yer altı kullanımına uygun modelleri mevcuttur.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
                Akaryakıt tankları, zorlu çevre koşullarına karşı dayanıklılık
                sağlamak amacıyla paslanmaz çelik veya yüksek mukavemetli
                malzemelerden üretilir.
              </li>
              <li style={{ padding: "15px" }}>
                Güvenli yakıt depolaması için sızdırmazlık özelliği bulunan bu
                tanklar, yakıtın dışarıya kaçmasını önleyerek çevre kirliliğini
                engeller.
              </li>
              <li style={{ padding: "15px" }}>
                {" "}
                İhtiyaçlara göre farklı kapasite seçenekleri sunan akaryakıt
                tankları, küçük işletmelerden büyük endüstriyel tesislere kadar
                geniş kullanım alanına sahiptir.
              </li>
              <li style={{ padding: "15px" }}>
                Tanklar, basınç tahliye vanaları, yangın önleyici sistemler ve
                izleme cihazları gibi güvenlik donanımlarıyla donatılarak, olası
                kazaların önüne geçer.
              </li>
              <li style={{ padding: "15px" }}>
                Farklı ihtiyaçlar doğrultusunda, yer üstünde veya yer altında
                kullanılabilen modeller mevcut olup, saha şartlarına uygun esnek
                çözümler sunar.
              </li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
                {" "}
                Loyd sertifikalı LPG tankları
              </li>
              <li style={{ padding: "15px" }}>
                Elektronik tank seviye göstergesi
              </li>
              <li style={{ padding: "15px" }}>
                Düşük ve yüksek seviye alarm sistemi
              </li>
              <li style={{ padding: "15px" }}>
                Avrupa Standartlarına Uygunluk
              </li>
              <li style={{ padding: "15px" }}>
                Gaz kaçağı tespit ve alarm sistemi
              </li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex justify-content-center">
            <img src={konteyner2} width={400} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AkaryakitTanki;
