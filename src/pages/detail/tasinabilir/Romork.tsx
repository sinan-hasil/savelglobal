import { Col, Container, Row, Table } from "react-bootstrap";
import romork1 from "../../../images/araclar/römork tipi.png";
import romork2 from "../../../images/araclar/römork tipi1.png";

const data = [
  {
    kapasite: "1000 / 220",
    uzunluk: 3063,
    genislik: 1780,
    yukseklik: 1660,
    bosAgirlik: 765,
    doluAgirlik: 1635,
  },
  {
    kapasite: "2000 / 440",
    uzunluk: 3595,
    genislik: 1870,
    yukseklik: 1857,
    bosAgirlik: 1016,
    doluAgirlik: 2756,
  },
  {
    kapasite: "2500 / 550",
    uzunluk: 3630,
    genislik: 1880,
    yukseklik: 1945,
    bosAgirlik: 1600,
    doluAgirlik: 3612,
  },
  {
    kapasite: "3000 / 660",
    uzunluk: 4575,
    genislik: 2152,
    yukseklik: 2228,
    bosAgirlik: 1745,
    doluAgirlik: 3796,
  },
  {
    kapasite: "4500 / 1000",
    uzunluk: 5520,
    genislik: 2350,
    yukseklik: 2350,
    bosAgirlik: 2245,
    doluAgirlik: 6300,
  },
  {
    kapasite: "6000 / 1310",
    uzunluk: 5855,
    genislik: 2600,
    yukseklik: 2640,
    bosAgirlik: 2840,
    doluAgirlik: 8060,
  },
  {
    kapasite: "10000 / 2650",
    uzunluk: 6215,
    genislik: 2793,
    yukseklik: 2674,
    bosAgirlik: 4120,
    doluAgirlik: 12168,
  },
];

const Romork = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">Römork Tipi İstasyon</h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={romork1} className="img-fluid" />
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h3>Temel Özellikler</h3>
            <p>
              Kapasiteleri: 1000, 2000, 2500, 3000, 4500, 6000 ve 10 000 litre %
              110 PPG2 (Kirlilik Önleme yönergeleri) uyarınca muhafazalı
              Yürürlükteki mevzuata tamamen uygun Sert galvanizli boru çerçeve
              (kasa) üzerine oturtulmuş çelik tank (1000L, 2000l & 2500L
              modeller) Ağır iş tipi çelik çerçeve (kasa) üzerinde oturtulmuş
              çelik tank ( 3000l, 4500L, 6000L & 10 000L modeller) Ağır şantiye
              şartlarına uygun özellikler İlave istikrar için şaşırtma levha ile
              kaplanmış iç tank
            </p>
          </Col>

          <Col md={6} className="mt-5 d-flex align-items-center">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Kapasite (litre/galon)</th>
                  <th>Uzunluk (mm)</th>
                  <th>Genişlik (mm)</th>
                  <th>Yükseklik (mm)</th>
                  <th>Boş Ağırlık (kg)</th>
                  <th>Dolu Ağırlık (kg)</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.kapasite}</td>
                    <td>{item.uzunluk}</td>
                    <td>{item.genislik}</td>
                    <td>{item.yukseklik}</td>
                    <td>{item.bosAgirlik}</td>
                    <td>{item.doluAgirlik}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={6} className="mt-5 d-flex flex-column justify-content-center">
            <h3>Ürün Bilgileri</h3>
            <p>
              Yakıt koruma aralıklı bu şantiye tipi çekiler, yerinde
              hareketlilik ile emniyetli, güvenli yakıt depo lama sağlar. 1000 -
              10 000 litre kapasite ile şantiyelerde geniş bir uygulama alanı
              bulur. İç ve dış tankları, çelikten imal edilen araç, PPG2
              Kirlilik Önleme Esaslarına göre % 110 bir set kapasitesi sağlar.
              Dalgalanma önleyici dalga kıran ve şaşırtma levhalı tasarım
              özelliğine sahip tanklarda, basınç kontrol vanası, otomatik tek
              yönlü havalandırma ve tam kapalı manyetik sürücü tank içeriği
              göstergesi mevcuttur. Yakıt dağıtım ekipmanları ve iç tankın giriş
              - çıkışları, tankın arkasında kilitlenebilir emniyetli b ir dolaba
              yerleştirilmiştir. A laşım gövdeli el pompası (akış hızı dakikada
              80 litre) ve 1 / 2 "BSP jeneratör besleme ve dönüş bağlantıları
              standart olarak takılıdır
            </p>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <h3>Standart özellikleri</h3>
            <ul>
              <li>
                Tümüyle şaşırtma levhası ile kaplanmış ve basınç testine tabi
                tutulmuş iç tank
              </li>
              <li>
                Sert galvanizli çelik borudan imal edilmiş kasa (6000 ve 10 000
                litreli modeller hariç) 1000, 2000 ve 2500 litreli tank
                modelleri Yakıt dağıtım ekipmanı ve tank giriş - çıkışlarını
                korumak amaçlı kilitlenebilir kabin tank seviye göstergesi
              </li>
              <li>
                Maksimum akış hızı, dakikada 80 lt olan alaşım gövdeli el
                pompası.
              </li>
              <li>
                kıt filtresi (Değiştirilebilir öğeli) ve su boşaltma noktası
              </li>
              <li>
                Otomatik havalandırma ve basınç kontrol vanası El freni, çeki
                halkası ve 11.5/80 - 15.3 flotasyon özellikli lastikler
              </li>
            </ul>
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
