import { Col, Container, Row, Table } from "react-bootstrap";
import disp1 from "../../../../images/araclar/1 serisi 2.png";
import disp2 from "../../../../images/araclar/1 serisi iç.png";

const Seri1 = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">1 Serisi Akaryakıt Pompası</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={disp1} width={300} height={350} />
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
                  Galvaniz saçtan üretilmiş dayanıklı kasa Otomasyon, ödeme
                  kaydedici sistemlere tam uyumluluk Basınçlı veya Emişli Üretim
                  -30 / +80 ºC ve %95 bağıl nemde çalışabilme ± 0,5 % hassasiyet
                </li>
                <li>
                  380 ACV /50 Hz trifaze veya 220 ACV monofaze Aşırı yüke karşı
                  korunmuş, ex-proof, 0.75 kW motor
                </li>
                <li>
                  Tüm pompalarımızda ,pistonlu, pozitif yer değiştirmeli, hassas
                  ayarlanabilir, +-0.0025 (Binde 2.5) ölçüm hassasiyetinde
                  metreler kullanılmaktadır.
                </li>
                <li>
                  Emişli pompalarımızda pozitif deplasmanlı döner tip, hava
                  seperatörlü, ayarlanabilir by pass valfli, üzerinde entegre
                  emiş filtresi bulunan, V-Kayış tahrikli, 50/80/120 dk arası
                  debilerde santrifüjler bulunmaktadır.
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
                  <th>1 Serisi</th>
                  <th>Tipi</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.11 E</td>
                  <td>Basic</td>
                  <td>1 Ürün 1 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>1.12 E</td>
                  <td>Basic</td>
                  <td>1 Ürün 2 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>1.22 E</td>
                  <td>Basic</td>
                  <td>2 Ürün 2 Tabanca Emişli</td>
                </tr>
                <tr>
                  <td>1.24 E</td>
                  <td>Basic</td>
                  <td>2 Ürün 4 Tabanca Emişli</td>
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
                  <td>1.11 B</td>
                  <td>Basic</td>
                  <td>1 Ürün 1 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>1.12 B</td>
                  <td>Basic</td>
                  <td>1 Ürün 2 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>1.22 B</td>
                  <td>Basic</td>
                  <td>2 Ürün 2 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>1.24 B</td>
                  <td>Basic</td>
                  <td>2 Ürün 4 Tabanca Basınçlı</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              Pompalarımızda 12 haneli litre, para, vardiya litre ve vardiya
              para elektronik totalizatöre ilaveten 7 haneli elektromekanik
              totalizatör de kullanmaktadır.
            </p>
            <p>
              Normal pompalarda 3/4", yüksek verimli pompalarda 1" otomatik
              aliminyum gövdeli tabancalar kullanılmaktadır..Hortumlar da aynı
              şekilde 3/4" veya 1" çaplarındadır. Kullanımı kolaylaştırmak için
              360 derece dönebilen mafsal kullanılmaktadır.
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

export default Seri1;
