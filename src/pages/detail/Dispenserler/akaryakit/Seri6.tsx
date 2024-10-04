import { Col, Container, Row, Table } from "react-bootstrap";
import disp1 from "../../../../images/araclar/akaryakıt disp seri6.png";
import disp2 from "../../../../images/araclar/6serisi2.jpg";

const Seri6 = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">6 Serisi Akaryakıt Pompası</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={disp1} width={400} />
          </Col>
          <Col md={6}>
            <h3>Ürün Detayları</h3>
            <p>
              görsel pompa tasarımında uygun fiyatlara mükemmel kalitede pompa
              çözümleri.Yeni Festivalimiz, yepyeni bir festival 10 mikrona kadar
              hassas filtreleme sistemi, elektronik kalibrasyonlu ölçüm ünitesi
              ve dokunmatik LCD ekran. Paslanmaz çelik gövde ve özel kaplama ile
              zorlu hava koşullarına dayanıklı. Özellikle 7 Serisi LPG
              dispenserleri, etkileşimli 17 inç LCD ekranı ve ATM tipi klavyesi
              ile dikkat çekmektedir. Bu modeller, 1, 2 veya 4 nozul seçeneği
              sunarak farklı ihtiyaçlara cevap vermektedir.
            </p>
            <p>
              Savel, yakıt sektöründe teknoloji ile yeniliği birleştirmeyi
              hedefleyen bir şirkettir. Müşteri memnuniyetini en üst düzeyde
              tutmayı amaçlayan Savel, yüksek kaliteli ürünler ve müşteri odaklı
              çözümler sunmaktadır. Şirket, LPG ve CNG dispenserleri gibi
              çeşitli ekipmanlar üretmektedir.
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex flex-column justify-content-center">
            <p>
              Görsel pompa tasarımında uygun fiyatlara mükemmel kalitede pompa
              çözümleri. Yeni Festivalimiz, yepyeni bir festival.
            </p>
            <p>
              Kredi kartı kullanım opsiyonu RFID teknoloji ile hızlı veri akışı.
              Direk internet bağlantısı Birim fiyat ve data ekranı
              Derinleştirilmiş ön panel Yeni metre teknolojisi Mükemmel görsel
              şölen
            </p>
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
                  <td>6.12 B</td>
                  <td>Festival</td>
                  <td> 1 Ürün 2 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>6.24 B</td>
                  <td>Festival</td>
                  <td> 2 Ürün 4 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>6.36 B</td>
                  <td>Festival</td>
                  <td> 3 Ürün 6 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>6.48 B</td>
                  <td>Festival</td>
                  <td> 4 Ürün 8 Tabanca Basınçlı</td>
                </tr>
                <tr>
                  <td>6.510 B</td>
                  <td>Festival</td>
                  <td> 5 Ürün 10 Tabanca Basınçlı</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              nteraktif kullanılabilen 19” LCD. Yeni multimedya dünyasına tam
              uyumluluk. ATM tip keypad. Gömülü tasarım ve net görüntü
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
            <img src={disp2} width={300} height={400} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Seri6;
