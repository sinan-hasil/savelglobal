import { Col, Container, Row } from "react-bootstrap";
import konteyner1 from "../../../images/araclar/projedanismanlik.jpg";
import konteyner2 from "../../../images/araclar/projedanismanlık.jpg";

const Projedanismanlik = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">Proje Danışmanlık ve Mühendislik</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={konteyner1} width={300} />
          </Col>
          <Col md={6}>
            <p>
              Savel, Proje Danışmanlık ve Mühendislik hizmetleriyle akaryakıt
              istasyonları ve endüstriyel tesisler için kapsamlı çözümler
              sunmaktadır. Uzman mühendislik ekibimiz, projelerinizi planlama,
              tasarım, teknik danışmanlık ve uygulama süreçlerinde en yüksek
              standartlara uygun şekilde yönetir. Projenizin her aşamasında
              verimliliği artırmayı, maliyetleri optimize etmeyi ve güvenliği ön
              planda tutarak, işletmenize katma değer sağlıyoruz. Yasal
              mevzuatlara uygunluk ve çevresel sürdürülebilirlik ilkeleri
              doğrultusunda, size özel projeler üretiyoruz.
            </p>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              Savel, akaryakıt istasyonu ve endüstriyel projeler için uzman
              mühendislik ve danışmanlık hizmetleri sunar. Projelerinizi
              güvenli, verimli ve çevre dostu bir şekilde tasarlar, uygulama
              sürecini titizlikle yönetiriz. Yasal düzenlemelere uygun
              çözümlerle işletmenize değer katıyoruz.
            </p>
            <p>
              Savel, akaryakıt istasyonu ve sanayi projelerinde profesyonel
              mühendislik ve danışmanlık hizmetleri sunar. Projelerinizi
              zamanında ve bütçenize uygun olarak, güvenlik ve çevresel
              standartlara uygun şekilde hayata geçiririz.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
              Akaryakıt istasyonu ve sanayi projelerinde uzman mühendislik çözümleri sunuyoruz.
              </li>
              <li style={{ padding: "15px" }}>
              Projeleri belirlenen süre ve bütçeye uygun şekilde tamamlarız
              </li>
              <li style={{ padding: "15px" }}>
                {" "}
                Güvenliği ve çevreyi ön planda tutarak çözümler sunarız.
              </li>
              <li style={{ padding: "15px" }}>
              Tüm projelerde yasal gerekliliklere uyum sağlarız.
              </li>
              <li style={{ padding: "15px" }}>
              Proje süreçlerini uzman kadro ile titizlikle yönetiriz.
              </li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}> Profesyonel mühendislik hizmetleri</li>
              <li style={{ padding: "15px" }}>Zamanında ve bütçeye uygun teslim</li>
              <li style={{ padding: "15px" }}>
              Güvenlik ve çevre odaklı çözümler
              </li>
              <li style={{ padding: "15px" }}>Yasal düzenlemelere tam uyum</li>
              <li style={{ padding: "15px" }}>Proje yönetiminde uzmanlık</li>
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

export default Projedanismanlik;
