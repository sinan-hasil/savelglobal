import { Col, Container, Row, Table } from "react-bootstrap";
import disp1 from "../../../../images/araclar/3 serisi dar 1.png";
import disp2 from "../../../../images/araclar/akaryakıt disp seri3.png";

const Seri3 = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">3 Serisi Akaryakıt Pompası</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={disp1} width={400} height={350} />
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
                  Tek ekran LCD veya klasik 3 göstergeli ekran. Görüntüsü net ve
                  canlı
                </li>
                <li>
                  2*16 ekran göstergeli ergonomik tasarım. Kısa yollarla hızlı
                  ve basit menu kullanımı
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
              Savel, yakıt sektöründe yüksek kaliteli ürünler ve müşteri odaklı
              çözümler sunmaktadır. Teknoloji ile yeniliği birleştirmeyi
              hedefleyen bir şirkettir. Müşteri memnuniyetini en üst düzeyde
              tutmayı amaçlayan Savel, . Şirket, LPG ve CNG dispenserleri gibi
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
                  <th>3 Serisi</th>
                  <th>Tipi</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3.12 E</td>
                  <td>Classic</td>
                  <td>1 Ürün 2 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>3.24 E</td>
                  <td>Classic</td>
                  <td>2 Ürün 4 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>3.36 E</td>
                  <td>Classic</td>
                  <td>3 Ürün 6 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>3.48 E</td>
                  <td>Classic</td>
                  <td>4 Ürün 8 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>3.510 E</td>
                  <td>Classic</td>
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
                  <td>3.12 B</td>
                  <td>Classic</td>
                  <td>1 Ürün 2 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>3.24 B</td>
                  <td>Classic</td>
                  <td>2 Ürün 4 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>3.36 B</td>
                  <td>Classic</td>
                  <td>3 Ürün 6 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>3.48 B</td>
                  <td>Classic</td>
                  <td>4 Ürün 8 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>3.510 B</td>
                  <td>Classic</td>
                  <td>5 Ürün 10 Tabanca Basınçlı</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              Son teknolojiyle dizayn edilmiş elektronik ünite Yazarkasa ve
              Otomasyonlara tam uyumluluk. Birim fiyat ve data ekranı Net görüş
              açısı Galvaniz saçtan üretilmiş dayanıklı kasa OPW tabanca
              kullanımı Özgün hidrolik aksam
            </p>
            <p>
              enerji verimliliğini en üst düzeye çıkarırken bakım maliyetlerini
              de minimumda tutacak şekilde tasarlanmıştır. Paslanmaz çelik
              gövdesi ve yüksek kaliteli malzemeleri sayesinde zorlu hava ve
              çevre koşullarına karşı dayanıklıdır.
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

export default Seri3;
