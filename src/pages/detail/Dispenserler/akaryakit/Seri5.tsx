import { Col, Container, Row, Table } from "react-bootstrap";
import disp1 from "../../../../images/araclar/akaryakıt disp seri5.png";
import disp2 from "../../../../images/araclar/seri5-2.webp";

const Seri5 = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">5 Serisi Akaryakıt Pompası</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={disp1} width={400} />
          </Col>
          <Col md={6}>
            <h3>Ürün Detayları</h3>
            <p>
              <ul
                style={{
                  listStyle: "none",
                  padding: "0",
                }}
              >
                <li>
                  26" veya 32” LCD desteği. Direk PC veya Uydu anten bağlantı
                  seçeneği
                </li>
                <li>
                  Grafik veya TFT ekran. Görüntüsü net ve canlı. Renkli
                  ekranlara geçiş
                </li>
                <li>
                  Görsel tasarımlarla destekli elektronik ön panel. Net görüş
                  açısı sağlayan tasarım
                </li>
                <li>
                  Sade hidrolik aksam. Hatasız brody, hatasız pulser, hatasız
                  selonoid valf
                </li>
              </ul>
            </p>
            <p>
              Savel, yakıt sektöründe teknoloji ile yeniliği birleştirmeyi
              hedefleyen bir şirkettir. Müşteri memnuniyetini en üst düzeyde
              tutmayı amaçlayan Savel, yüksek kaliteli ürünler ve müşteri odaklı
              çözümler sunmaktadır. Şirket, LPG ve CNG dispenserleri gibi
              çeşitli ekipmanlar üretmektedir.
            </p>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>6 Serisi</th>
                  <th>Tipi</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5.24 E</td>
                  <td>multimedya</td>
                  <td>2 Ürün 4 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>5.36 E</td>
                  <td>multimedya</td>
                  <td>3 Ürün 6 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>5.48 E</td>
                  <td>multimedya</td>
                  <td>4 Ürün 8 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>5.510 E</td>
                  <td>multimedya</td>
                  <td>5 Ürün 10 Tabanca Emişli</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6} className="mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>6 Serisi</th>
                  <th>Tipi</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5.24 B</td>
                  <td>multimedya</td>
                  <td> 2 Ürün 4 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>5.36 B</td>
                  <td>multimedya</td>
                  <td>3 Ürün 6 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>5.48 B</td>
                  <td>multimedya</td>
                  <td> 3 Ürün 6 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>6.48 B</td>
                  <td>multimedya</td>
                  <td>4 Ürün 8 Tabanca Basınçlı</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              İnteraktif kullanılabilen 19” LCD. Yeni multimedya dünyasına tam
              uyumluluk. ATM tip keypad. Gömülü tasarım ve net görüntü
            </p>
            <p>
              Direk PC bağlantısı (USB & Ethernet) RFID teknoloji ile hızlı veri
              akışı. OPW tabanca kullanımı Birim fiyat ve data ekranı Net görüş
              açısı Tamamen hakim oval hatlar Özgün hidrolik aksam
            </p>
            <p>
              İnternet aracılığı ile uzaktan pompaya müdahale Uzaktan bağlantı
              ile en kısa servis müdahalesi ve doğru çözüm üretme
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex justify-content-center">
            <img src={disp2} width={300} height={400} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Seri5;
