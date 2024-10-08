import { Col, Container, Row } from "react-bootstrap";
import konteyner1 from "../../../images/araclar/yakıtkontrol.png";
import konteyner2 from "../../../images/araclar/yakitkontrol1.png";

const Yakitkontrol = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">Yakıt Kontrol Sistemleri</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={konteyner1} width={300} />
          </Col>
          <Col md={6}>
            <h3>Ürün Detayları</h3>
            <p>
              Savel Yakıt Kontrol Sistemleri, akaryakıt yönetim süreçlerini
              optimize eden yenilikçi çözümler sunar. İstasyonlar için
              geliştirilen bu sistemler, depolama tankları, pompalar ve diğer
              ekipmanlar üzerindeki yakıt seviyelerini anlık olarak izleyip
              raporlar. Otomatik ölçümleme ve uzaktan takip imkanı sağlayarak,
              stokların verimli yönetilmesine, kayıp-kaçakların önlenmesine ve
              işletme maliyetlerinin düşürülmesine yardımcı olur. Ayrıca,
              kullanıcı dostu arayüzleri sayesinde, istasyon sahipleri yakıt
              tüketimlerini daha iyi analiz ederek operasyonlarını daha
              sürdürülebilir ve kârlı hale getirebilirler.
            </p>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              Savel Yakıt Kontrol Sistemleri, akaryakıt istasyonlarında yakıt
              seviyelerini anlık olarak izleyip yönetmeyi sağlayan bir çözümdür.
              Verimli stok takibi ve kayıpların önlenmesi için optimize edilmiş
              bu sistem, istasyon sahiplerine maliyet avantajı sunar.
            </p>
            <p>
              istasyonlarda yakıt tüketimini takip ederek verimli bir yönetim
              sağlar. Gerçek zamanlı izleme ve raporlama özellikleriyle, stok
              yönetimini kolaylaştırır ve maliyetleri düşürür.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
              Savel Yakıt Kontrol Sistemleri, yakıt seviyelerini anlık olarak izleyerek stok durumunu sürekli güncel tutar.
              </li>
              <li style={{ padding: "15px" }}>
              Yakıt kayıplarını ve kaçaklarını tespit ederek istasyonlardaki kayıpların önüne geçer.
              </li>
              <li style={{ padding: "15px" }}>
                {" "}
                Otomatik raporlama sayesinde stok seviyeleri kolayca takip edilip optimize edilir.
              </li>
              <li style={{ padding: "15px" }}>
              Daha verimli bir yakıt yönetimi sunarak işletme maliyetlerini düşürmeye yardımcı olur.
              </li>
              <li style={{ padding: "15px" }}>
              Kolay kullanımlı ara yüzü ile istasyon yöneticileri yakıt tüketimini hızlıca analiz edebilir.
              </li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
                {" "}
                Kayıp ve kaçak önleme.
              </li>
              <li style={{ padding: "15px" }}>
              Uzak erişim ve kontrol.
              </li>
              <li style={{ padding: "15px" }}>
              Otomatik uyarı ve bildirimler.
              </li>
              <li style={{ padding: "15px" }}>
              Günlük tüketim raporlaması.
              </li>
              <li style={{ padding: "15px" }}>
              Kayıp ve kaçak önleme.
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

export default Yakitkontrol;
