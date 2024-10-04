import { Col, Container, Row, Table } from 'react-bootstrap'
import konteyner1 from "../../../images/araclar/konteynır tipi.png"
import konteyner2 from "../../../images/araclar/konteyner tipi1.png"
const Konteyner = () => {
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
              Konteyner tipi taşınabilir akaryakıt istasyonları, çelik S-235 JRG
              2 malzemeden üretilmiş güçlü ve dayanıklı bir yapıya sahiptir.
              Çift cidarlı tank tasarımı sayesinde olası sızıntı riskleri
              minimize edilmiştir. KT4S-Kaplama Sistemi ile deniz suyu ve güneş
              ışınlarına karşı korumalıdır.
            </p>
            <p>
              Hızlı kurulum, minimum alan gereksinimi ve kolay taşınabilirlik
              özellikleriyle öne çıkar. Özellikle uzak bölgelerde, şantiyelerde
              ve acil durum senaryolarında ideal çözüm sunar.
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <p>
              40ft modellerde 6 mm iç cidar ve 4 mm dış cidar, 20ft ve 10ft
              modellerde 5 mm iç cidar ve 3 mm dış cidar kullanılmıştır. Entegre
              kaçak algılama sistemi ile güvenlik en üst düzeydedir. ISO
              standartlarında üretim ve CSC sertifikası ile uluslararası
              nakliyeye uygundur.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>İstasyon Modeli</th>
                  <th>En (mm)</th>
                  <th>Boy (mm)</th>
                  <th>Yükseklik (mm)</th>
                  <th>Ağırlık (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SM-ISO-40ft</td>
                  <td>2438</td>
                  <td>12192</td>
                  <td>2591 (2438)</td>
                  <td>10000</td>
                </tr>
                <tr>
                  <td>SM-ISO-20ft</td>
                  <td>2438</td>
                  <td> 6058</td>
                  <td>2591 (2438)</td>
                  <td>5600</td>
                </tr>
                <tr>
                  <td>SM-ISO-10ft</td>
                  <td>2438</td>
                  <td>2991</td>
                  <td>2591 (2438)</td>
                  <td>2400</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <p>
              Farklı model seçenekleriyle her türlü ihtiyaca cevap verebilen
              taşınabilir istasyonlar, çift cidarlar arasında bulunan entegre
              kaçak algılama sistemi sayesinde, herhangi bir sızıntı durumunu
              anında algılayarak kullanıcıya hızlı bir şekilde bildirim sağlar
              ve böylece çevre güvenliği açısından da önemli bir avantaj sunar.
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex justify-content-center">
            <img src={konteyner2} width={400} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Konteyner