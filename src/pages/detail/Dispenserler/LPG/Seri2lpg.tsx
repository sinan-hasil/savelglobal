import { Col, Container, Row, Table } from "react-bootstrap";
import disp1 from "../../../../images/araclar/2 serisi 2-Photoroom.png";
import disp2 from "../../../../images/araclar/2 serisi 3-Photoroom.png";

const Seri2lpg = () => {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">2 Serisi LPG Pompası</h1>
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
                <li>Tek LCD veya Klasik 3 ekran. Net ve canlı görüntüler</li>
                <li>
                  2*16 ekran, göstergeli ergonomik tasarım. Menü kısayolları ile
                  hızlı ve kolay kullanım
                </li>
                <li>
                  Görsel tasarımlarla desteklenmiş elektronik ön panel. Net
                  görüş sağlayan bir tasarım.
                </li>
                <li>
                  Hidrolik Debimetre, LPG dağıtım ünitesindeki en hayati
                  parçadır. Debimetre, otogaz dağıtıcı üreticilerinin zorlu
                  ihtiyaçlarını ve talepkar gereksinimlerini karşılamak üzere
                  tasarlanmıştır.
                </li>
              </ul>
            </p>
            <p>
              Elektronik ünite son teknoloji ile tasarlanmıştır. Kasa ve
              otomasyona tam uyum. Net görünürlük Birim fiyatlar ve veri
              gösterimi Dayanıklı şasi galvanizli çelikten yapılmıştır OPW
              Nozulları Kullanılarak Orijinal hidrolik parçalar
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
                  <th>2 Serisi</th>
                  <th>Tipi</th>
                  <th>Açıklama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2.11 </td>
                  <td>klasik</td>
                  <td>1 Nozzle</td>
                </tr>
                <tr>
                  <td>2.22</td>
                  <td>klasik</td>
                  <td>2 Nozzle</td>
                </tr>
                <tr>
                  <td>2.44</td>
                  <td>klasik</td>
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
            Elektronik ünite son teknoloji ile tasarlanmıştır. Kasa ve otomasyona tam uyum. Net görünürlük Birim fiyatlar ve veri gösterimi Dayanıklı şasi galvanizli çelikten yapılmıştır OPW Nozulları Kullanılarak Orijinal hidrolik parçalar

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

export default Seri2lpg;
