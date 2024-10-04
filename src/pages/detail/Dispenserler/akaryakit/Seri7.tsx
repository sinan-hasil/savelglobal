import { Col, Container, Row, Table } from "react-bootstrap";
import disp1 from "../../../../images/araclar/akaryakıt disp seri7.png";
import disp2 from "../../../../images/araclar/akaryakıt disp seri7-2.webp";

const Seri7 = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">7 Serisi Akaryakıt Pompası</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={disp1} width={400} />
          </Col>
          <Col md={6}>
            <h3>Ürün Detayları</h3>
            <p>
              7 Serisi, yüksek hacimli istasyonlar için geliştirilmiş premium
              segment bir akaryakıt pompasıdır. Dakikada 130 litreye varan dolum
              hızı ve çoklu ödeme sistemi entegrasyonu ile öne çıkar.
            </p>
            <p>
              Savel, yakıt sektöründe teknoloji ile yeniliği birleştirmeyi
              hedefleyen bir şirkettir. Müşteri memnuniyetini en üst düzeyde
              tutmayı amaçlayan Savel, yüksek kaliteli ürünler ve müşteri odaklı
              çözümler sunmaktadır. Şirket, LPG ve CNG dispenserleri gibi
              çeşitli ekipmanlar üretmektedir.
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <p>
              10 mikrona kadar hassas filtreleme sistemi, elektronik
              kalibrasyonlu ölçüm ünitesi ve dokunmatik LCD ekran. Paslanmaz
              çelik gövde ve özel kaplama ile zorlu hava koşullarına dayanıklı.
              Özellikle 7 Serisi LPG dispenserleri, etkileşimli 17 inç LCD
              ekranı ve ATM tipi klavyesi ile dikkat çekmektedir. Bu modeller,
              1, 2 veya 4 nozul seçeneği sunarak farklı ihtiyaçlara cevap
              vermektedir.
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>7 Serisi</th>
                  <th>Tipi</th>
                  <th>Özellikler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7.11</td>
                  <td>İnovasyon</td>
                  <td> 1 nozzle</td>
                </tr>
                <tr>
                  <td>SM-35</td>
                  <td>İnovasyon</td>
                  <td> 2 nozzle</td>
                </tr>
                <tr>
                  <td>SM-40</td>
                  <td>İnovasyon</td>
                  <td> 3 nozzle</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
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
            <img src={disp2} width={400} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Seri7;
