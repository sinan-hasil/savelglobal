import { Col, Container, Row } from "react-bootstrap";
import konteyner1 from "../../../images/araclar/istasyonkurulım1.jpeg";
import konteyner2 from "../../../images/araclar/istasyonkurulım2.jpg";

const Istasyonkurulum = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">Akaryakıt İstasyonu Kurulumu</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={konteyner1} width={300} />
          </Col>
          <Col md={6}>
            <p>
              Savel olarak akaryakıt istasyonlarının kurulumunda uzmanlaşmış
              ekibimiz, ihtiyaçlarınıza en uygun çözümleri sunmaktadır. İstasyon
              kurulumu sürecinde proje planlamasından montaj ve devreye almaya
              kadar tüm adımları titizlikle yönetiyoruz. Hem taşınabilir
              istasyonlar hem de sabit istasyonlar için güvenli, çevre dostu ve
              enerji verimliliği yüksek teknolojiler kullanarak, işletmenizin
              gereksinimlerini karşılayan anahtar teslim hizmetler sağlıyoruz.
              Akaryakıt istasyonlarınızı en kısa sürede devreye alırken, iş
              güvenliği ve yasal düzenlemelere tam uyum sağlamak önceliğimizdir.
            </p>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              Savel, akaryakıt istasyonu kurulumunda güvenilir ve hızlı çözümler
              sunar. Proje aşamasından devreye almaya kadar her adımda, güvenlik
              ve verimlilik ön planda tutularak anahtar teslim hizmetler sağlar.
            </p>
            <p>
              bir tane daha ChatGPT: ChatGPT Savel, akaryakıt istasyonu
              kurulumunda deneyimli ekibiyle hızlı, güvenli ve çevre dostu
              çözümler sunar. İhtiyaçlarınıza uygun projelerle, işletmenize özel
              anahtar teslim hizmetler sağlamaktayız.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
                Akaryakıt istasyonu kurulumunu baştan sona yönetir,
                ihtiyaçlarınıza özel çözümler sunarız.
              </li>
              <li style={{ padding: "15px" }}>
                Tüm süreçlerde iş güvenliği ve yasal düzenlemelere tam uyum
                sağlarız.
              </li>
              <li style={{ padding: "15px" }}>
                {" "}
                Enerji verimliliği yüksek ve çevreye duyarlı ekipmanlar
                kullanırız.
              </li>
              <li style={{ padding: "15px" }}>
                İstasyon kurulumunu en kısa sürede tamamlayarak işletmenizi
                hızlıca faaliyete geçiririz.
              </li>
              <li style={{ padding: "15px" }}>
                Deneyimli ekibimizle projelendirme, montaj ve devreye alma
                aşamalarında profesyonel destek sunarız.
              </li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}> Anahtar teslim kurulum</li>
              <li style={{ padding: "15px" }}>Hızlı proje teslimi</li>
              <li style={{ padding: "15px" }}>Güvenli ekipman kullanımı.</li>                
              <li style={{ padding: "15px" }}>Çevre dostu çözümler</li>
              <li style={{ padding: "15px" }}>Yasal uyumluluk garantisi</li>
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

export default Istasyonkurulum;
