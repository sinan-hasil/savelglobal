import { Col, Container, Row, Table } from "react-bootstrap";
import romork1 from "../../../images/araclar/römork tipi.png";
import romork2 from "../../../images/araclar/römork tipi1.png";

const Romork = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">Römork Tipi İstasyon</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={romork1} width={400} />
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
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Mobil Basic</th>
                  <th>Tipi</th>
                  <th>Litre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SM-05</td>
                  <td>mobil</td>
                  <td>5.000</td>
                </tr>
                <tr>
                  <td>SM-10</td>
                  <td>mobil</td>
                  <td>10.000</td>
                </tr>
                <tr>
                  <td>SM-15</td>
                  <td>mobil</td>
                  <td>15.000</td>
                </tr>
                <tr>
                  <td>SM-20</td>
                  <td>mobil</td>
                  <td>20.000</td>
                </tr>
                <tr>
                  <td>SM-25</td>
                  <td>mobil</td>
                  <td>25.000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6} className="mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Mobil Basic</th>
                  <th>Tipi</th>
                  <th>Litre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SM-0</td>
                  <td>mobil</td>
                  <td>30.000</td>
                </tr>
                <tr>
                  <td>SM-35</td>
                  <td>mobil</td>
                  <td>35.000</td>
                </tr>
                <tr>
                  <td>SM-40</td>
                  <td>mobil</td>
                  <td>40.000</td>
                </tr>
                <tr>
                  <td>SM-45</td>
                  <td>mobil</td>
                  <td>45.000</td>
                </tr>
                <tr>
                  <td>SM-50</td>
                  <td>mobil</td>
                  <td>50.000</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col md={6} className="mt-5 d-flex flex-column justify-content-center">
            <p>
              Farklı model seçenekleriyle her türlü ihtiyaca cevap verebilen
              taşınabilir istasyonlar, çift cidarlar arasında bulunan entegre
              kaçak algılama sistemi sayesinde, herhangi bir sızıntı durumunu
              anında algılayarak kullanıcıya hızlı bir şekilde bildirim sağlar
              ve böylece çevre güvenliği açısından da önemli bir avantaj sunar.
            </p>
            <p>
              Taşınabilir ve esneklik arayanlar için ideal bir çözümdür. Kolayca
              taşınabilir ve hızla kullanılabilir, bu sayede acil durum yakıt
              ihtiyaçları vea geçici şantiyelerde pratik kullanım sağlar.
              Savel'in römork tipi taşınabilir istasyonları güvenlik
              özellikleriyle de öne çıkar; yüksek kaliteli tank yapısı ve kaçak
              algılama sistemleri sayesinde çevre dostu bir çözüm sunar
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex justify-content-center">
            <img src={romork2} width={400} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Romork;
