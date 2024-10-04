import { Col, Container, Row, Table } from "react-bootstrap";
import disp1 from "../../../../images/araclar/lpg disp seri7.png";
import disp2 from "../../../../images/araclar/7 serisi 3-Photoroom.png";

const Seri7lpg = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">7 Serisi LPG Pompası</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={disp1} width={250} height={350} />
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
                  Etkileşimli 17” LCD. ATM tipi tuş takımı ve gömülü tasarımla
                  net bir görüntü
                </li>
                <li>Kolonların belirginleştirilmesini sağlayan 4 adet spot.</li>
                <li>3D tasarımlı sütunlar. Tamamen özgün ve estetik</li>
                <li>
                  Grafik veya TFT ekran. Net ve canlı görüntüler. Renkli ekrana
                  geçiş.
                </li>
              </ul>
            </p>
            <p>
              Kredi kartı kullanım seçenekleri RFID teknolojisi ile hızlı veri
              aktarımı ZVA nozul kullanımı Birim fiyatları ve veri gösterimi
              Derinleştirilmiş ön panel Tamamen oval hatlara hakim Orijinal
              hidrolik parçalar
            </p>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
              Multimedya tasarımı (tamamen kendi kendine yeten elektronik)
              Tek/Çift hortum yapılandırmaları Paslanmaz çelik veya toz
              kaplamalı çelikten çeşitli kabin stilleri Arka aydınlatmalı
              ekranlı elektronik bilgisayar kaydı Entegre Para ve Hacim
              elektronik toplamlayıcıları Çoğu POS ve kart okuyucu sistemiyle
              arayüz kullanılabilirliği Uluslararası para birimi seçenekleri
              mevcuttur Otomatik Sıcaklık Telafisi (ATC) Elektronik Kalibrasyon
              ATM tipi paslanmaz çelik tuş takımı Pozitif Deplasmanlı Piston
              Ölçer
            </p>
          </Col>
          <Col md={6} className="mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>7 Serisi</th>
                  <th>Tipi</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7.11 </td>
                  <td>inovasyon</td>
                  <td>1 Nozzle</td>
                </tr>
                <tr>
                  <td>7.22</td>
                  <td>inovasyon</td>
                  <td>2 Nozzle</td>
                </tr>
                <tr>
                  <td>7.44</td>
                  <td>inovasyon</td>
                  <td>4 Nozzle</td>
                </tr>
              </tbody>
            </Table>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <p>
            Debi max-min (lpm) : 5 – 50 lpm Çalışma Ortamı : -30 / +60 C Sıcaklık Ölçüm Aralığı : :- 25 / +55ºC Bağıl Nem : %95
            </p>
            <p>
              Tam multimedya desteği (İnternet, Monitörde Satış, TV, Videolar
              vb.) 3D tasarımlı sütunlar Paslanmaz çelikten yapılmış tuş takımı
              ünitesi Spot aydınlatma desteği Kredi kartıyla ödenebilir self
              servis seçeneği RFID kart arayüz ünitesi Elektronik ünite en son
              teknoloji ile tasarlanmıştır Otomasyon, kasa ve her türlü
              multimedya (PC veya Uydu) sistemleri ile tam uyumludur
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

export default Seri7lpg;
