import { Col, Container, Row } from "react-bootstrap";
import konteyner1 from "../../../images/araclar/lpg tank1.jpg";
import konteyner2 from "../../../images/araclar/lpg tankı.png";

const Lpgtank = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">LPG Tankı</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={konteyner1} width={300} />
          </Col>
          <Col md={6}>
            <h3>Ürün Detayları</h3>
            <p>
              LPG Depolama Tankları, EN 13445, AD 2000, EN 12542 ve ASME (U
              STAMP), GOST standartlarına uygun olarak üretim ve sertifikasyon
              yapılmaktadır. Ayrıca, 97/23/EC Basınç Ekipmanları Yönetmeliği
              (PED) ile uyumlu olarak üretilmektedir. Yüksek performanslı boya
              uygulamaları EN 12944 standardına uygun olarak yapılmaktadır.
              Farklı depolama kapasiteleri için özel üretim esnekliği
              sunulmaktadır. Standartlara uygun olarak tahribatsız testler
              (Radyografik Test, Penetrant Test, Ultrasonik Test, Magnetik Parça
              Testi vb.) gerçekleştirilmektedir.
            </p>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              Toplu LPG Depolama Tankı Uygulamaları: Toplu LPG tankları, çeşitli
              tesislerde kullanılmaktadır. Bu tanklar, bir tedarikçinin
              bölgedeki talebi karşılamak için büyük miktarlarda propan
              depolamasına yardımcı olur. Toplu tesisler, propanı konut ve
              ticari tüketicilere dağıtmak için kullanılır. Tanklar genellikle
              bobtail yükleme için tasarlanmıştır.
            </p>
            <p>
              Son yıllarda, Marcellus Shale ve diğer şale gazı alanlarında büyük
              gaz rezervleri keşfedilmiştir. Doğal gazdan elde edilen
              hidrokarbonlar, doğal gazın yan ürünleri olarak pazarlanmaktadır.
              Bu durum, LPG depolamak için yeni toplu tesislerin
              geliştirilmesine yol açmıştır.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}>
              Ticari ve konut ısıtma yakıtı
              </li>
              <li style={{ padding: "15px" }}>
              Okul bölgeleri, devlet kurumları ve toplu taşıma şirketleri tarafından filo araç yakıtı
              </li>
              <li style={{ padding: "15px" }}>
              Tarım: mahsul kurutma, araç yakıtı ve yabancı ot kontrolü
              </li>
              <li style={{ padding: "15px" }}>
              Hastaneler ve diğer kurumsal, ticari ve endüstriyel mülkler için yedek yakıt kaynağı
              </li>
              <li style={{ padding: "15px" }}>
              Yedek elektrik jeneratörleri
              </li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <ul style={{ listStyle: "none" }}>
              <li style={{ padding: "15px" }}> Hacim: 3,000 ila 60,000 Litre</li>
              <li style={{ padding: "15px" }}>Tasarım Sıcaklığı: -20º C / +70º C</li>
              <li style={{ padding: "15px" }}>Test Basıncı: 25 Bar, 15º C'de</li>
              <li style={{ padding: "15px" }}>Topraklama bağlantıları</li>
              <li style={{ padding: "15px" }}>SA516-70 yüksek dayanımlı karbon çeliği</li>
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

export default Lpgtank;
