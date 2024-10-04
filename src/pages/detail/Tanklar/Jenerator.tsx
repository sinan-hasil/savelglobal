import { Col, Container, Row } from "react-bootstrap";
import konteyner1 from "../../../images/araclar/jeneratör tankı.png";
import konteyner2 from "../../../images/araclar/jeneratortank11.png";

const Jenerator = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">Jeneratör Tankı</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={konteyner1} width={300} />
          </Col>
          <Col md={6}>
            <h3>Ürün Detayları</h3>
            <p>
              Jeneratör tankları, jeneratörlerin kesintisiz çalışması için yakıt
              depolayan özel tasarımlı tanklardır. Dayanıklı malzemelerden
              üretilen bu tanklar, genellikle dizel yakıtla çalışır ve uzun
              süreli enerji ihtiyaçlarını karşılar. Sızdırmaz yapıları ve
              güvenlik önlemleri sayesinde yakıtı güvenli bir şekilde muhafaza
              ederler. Ayrıca, çeşitli kapasitelerde üretilerek farklı jeneratör
              tiplerine uyum sağlarlar.
            </p>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              Jeneratör tankları, güvenilir enerji kaynağı sağlamak için
              tasarlanmış, dayanıklı ve sızdırmaz yapıya sahip yakıt depolama
              üniteleridir. Çoğunlukla dizel yakıtla çalışan bu tanklar,
              jeneratörlerin uzun süre kesintisiz çalışmasını sağlar ve
              işletmeler için enerji sürekliliği sunar.
            </p>
            <p>
              Farklı kapasitelerde üretilen jeneratör tankları, küçük ve büyük
              ölçekli projelerde kullanım için esneklik sunar. Güvenlik
              ekipmanları ile donatılan bu tanklar, yakıt yönetimini
              kolaylaştırırken, çevreye olan etkileri de minimuma indirir.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
                Jeneratör tankları, zorlu koşullara dayanıklı malzemelerden
                üretilir ve uzun ömürlüdür.
              </li>
              <li style={{ padding: "15px" }}>
                Yakıtın güvenli bir şekilde depolanması için sızdırmaz özellikte
                tasarlanmıştır.
              </li>
              <li style={{ padding: "15px" }}>
                İhtiyaca göre küçükten büyüğe çeşitli kapasite seçenekleri
                sunar.
              </li>
              <li style={{ padding: "15px" }}>
              Basınç tahliye vanaları ve izleme sistemleri gibi güvenlik önlemleriyle donatılmıştır.
              </li>
              <li style={{ padding: "15px" }}>
              Jeneratörlerin kesintisiz çalışmasını sağlayarak acil durumlarda güvenilir enerji kaynağı sunar.
              </li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
                {" "}
                Yüksek yakıt kapasitesi
              </li>
              <li style={{ padding: "15px" }}>
              Paslanmaz çelik yapı
              </li>
              <li style={{ padding: "15px" }}>
              Kolay bakım imkanı
              </li>
              <li style={{ padding: "15px" }}>
              Sızdırmaz bağlantı noktaları
              </li>
              <li style={{ padding: "15px" }}>
              Hızlı yakıt ikmali
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

export default Jenerator;
