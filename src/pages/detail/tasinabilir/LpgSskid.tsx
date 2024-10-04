import { Col, Container, Row } from "react-bootstrap";
import konteyner1 from "../../../images/araclar/DSCN3669-Photoroom.png";
import konteyner2 from "../../../images/araclar/DSCN3670-Photoroom.png";

const LpgSskid = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">Konteyner Tipi İstasyon</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={konteyner1} width={300} />
          </Col>
          <Col md={6}>
            <h3>Ürün Detayları</h3>
            <p>
              Skid (veya mobil) kurulumlar, geçici ama kalıcı dağıtım
              taleplerini karşılamak için ideal çözümlerdir. Kurulum süresi
              neredeyse sıfırdır. Sadece bir güç kaynağı sağlayın ve sistem LPG
              dağıtımına hazırdır. Skid kurulumları minimum miktarda alan
              gerektirir ve bu nedenle alanın sınırlı olduğu durumlar için
              mükemmel bir çözümdür
            </p>
            <p>
              Hükümetlerin otogazı onayladığı birçok ülkede, başlamak genellikle
              zordur. Bunları dolduracak yer yoksa kimse araç dönüştürme
              ekipmanına yatırım yapmaya istekli değildir. Öte yandan,
              işletmelere hemen hitap etmeyecekse kimse doldurma sahalarına
              yatırım yapmaz. Bu çıkmaz, mobil kurulumlarla çözülebilir.
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <p>
              Buna paralel olarak, bir araba veya hatta bir şirket filosu
              dönüştürülebilir. Sabit bir istasyonu haklı çıkaracak kadar
              yeterli araç dönüştürüldüğünde, mobil tesisler o bölgede otogaz
              başlatmak için başka bir yere taşınabilir. Açıkça, aynı anda daha
              fazla kızak tesisi faaliyette olduğunda, araçların dönüşümü de
              daha hızlı yayılacaktır.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <ul style={{listStyle: "none"}}>
                <li>ATEX ve CE Sertifikalı LPG Dispenserleri</li>
                <li>RS485 veya Akım döngüsü haberleşme seçenekleri, tam otomasyon desteği</li>
                <li>* Full ATC sistem</li>
                <li>Elektronik ve mekanik Kalibrasyon</li>
                <li>Acil butonu</li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
          <ul style={{listStyle: "none"}}>
                <li> Loyd sertifikalı LPG tankları</li>
                <li>Elektronik tank seviye göstergesi</li>
                <li>Düşük ve yüksek seviye alarm sistemi</li>
                <li>Avrupa Standartlarına Uygunluk</li>
                <li>Gaz kaçağı tespit ve alarm sistemi</li>
            </ul>
          </Col>

          <Col md={6} className="mt-5 d-flex justify-content-center">
            <img src={konteyner2} width={400} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LpgSskid