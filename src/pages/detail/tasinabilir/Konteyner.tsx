import { Col, Container, Row, Table } from "react-bootstrap";
import konteyner1 from "../../../images/araclar/konteynır tipi.png";
import konteyner2 from "../../../images/araclar/konteyner tipi1.png";
import konteyner3 from "../../../images/araclar/15e1c776f33da5.png";
import { SiBlackmagicdesign } from "react-icons/si";
import { IoBuild } from "react-icons/io5";
import { FaToiletsPortable } from "react-icons/fa6";
import { GiHornInternal } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { BsBuildingGear } from "react-icons/bs";
import { MdAgriculture } from "react-icons/md";
import { FaPersonMilitaryPointing } from "react-icons/fa6";
import { IoIosTrain } from "react-icons/io";
import { MdEmergency } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import "./style.css";

const data1 = [
  {
    model: "SM - C - 10 - 1T",
    type: "MobilContainer – 10 FEET",
    volume: "8m³",
    pump: "1 Series",
    number: "1",
    dimension: "299 x 259 x 244",
  },
  {
    model: "SM - C - 10 - 2T",
    type: "MobilContainer – 10 FEET",
    volume: "4+4m³",
    pump: "1 Series",
    number: "2",
    dimension: "299 x 259 x 244",
  },
  {
    model: "SM - C - 20 - 1T",
    type: "MobilContainer – 20 FEET",
    volume: "23m³",
    pump: "1 Series",
    number: "1",
    dimension: "606 x 259 x 244",
  },
  {
    model: "SM - C - 20 - 2T",
    type: "MobilContainer – 20 FEET",
    volume: "12+12m³",
    pump: "1 Series",
    number: "2",
    dimension: "606 x 259 x 244",
  },
  {
    model: "SM - C - 20 - 1T O",
    type: "MobilContainer – 20 FEET – 2m² Ofis",
    volume: "18m³",
    pump: "1 Series",
    number: "1",
    dimension: "606 x 259 x 244",
  },
  {
    model: "SM - C - 20 - 2T O",
    type: "MobilContainer – 20 FEET – 2m² Ofis",
    volume: "9 + 9m³",
    pump: "1 Series",
    number: "2",
    dimension: "606 x 259 x 244",
  },
  {
    model: "SM - C - 40 - 1T",
    type: "MobilContainer – 40 FEET",
    volume: "46m³",
    pump: "1 Series",
    number: "1",
    dimension: "1219 x 259 x 244",
  },
];

const data2 = [
  {
    model: "SM - C - 40 - 2T",
    type: "MobilContainer – 40 FEET",
    volume: "23 + 23m³",
    pump: "1 Series",
    number: "2",
    dimension: "1219 x 259 x 244",
  },
  {
    model: "SM - C - 40 - 1T O",
    type: "MobilContainer – 40 FEET – 5m² Ofis",
    volume: "40m³",
    pump: "1 Series",
    number: "1",
    dimension: "1219 x 259 x 244",
  },
  {
    model: "SM - C - 40 - 2T O",
    type: "MobilContainer – 40 FEET – 5m² Ofis",
    volume: "20 + 20m³",
    pump: "1 Series",
    number: "2",
    dimension: "1219 x 259 x 244",
  },
  {
    model: "SM - HC - 40 - 1T",
    type: "MobilContainer – 40 FEET HIGH CUBE",
    volume: "60m³",
    pump: "1 Series",
    number: "1",
    dimension: "1219 x 290 x 244",
  },
  {
    model: "SM - HC - 40 - 2T",
    type: "MobilContainer – 40 FEET HIGH CUBE",
    volume: "30 + 30m³",
    pump: "1 Series",
    number: "2",
    dimension: "1219 x 290 x 244",
  },
  {
    model: "SM - HC - 40 - 1T O",
    type: "MobilContainer – 40 FEET HIGH CUBE – 5m² Ofis",
    volume: "50m³",
    pump: "1 Series",
    number: "1",
    dimension: "1219 x 290 x 244",
  },
  {
    model: "SM - HC - 40 - 2T O",
    type: "MobilContainer – 40 FEET HIGH CUBE – 5m² Ofis",
    volume: "25 + 25m³",
    pump: "1 Series",
    number: "2",
    dimension: "1219 x 290 x 244",
  },
];

const Konteyner = () => {
  return (
    <>
      <Container className="py-5">
        <h1 className="text-center mb-5">
          SAVEL SEYYAR KONTEYNER AKARYAKIT İSTASYONLARI
        </h1>
        <Row>
          <Col md={6} className="d-flex justify-content-center">
            <img src={konteyner1} width={300} />
          </Col>
          <Col md={6}>
            <p>
              SAVEL CONTAINER, ISO standartlarına uygun konteyner formunda
              dizayn edilmiş bir depolama tankıdır. Konteyner tipi mobil
              akaryakıt istasyonu, taşınabilir bir yakıt dağıtım sistemi olarak
              tasarlanmış konteyner içinde yer alan modern bir akaryakıt
              istasyonudur. Bu istasyonlar, farklı ölçülerde dizayn edilerek
              üretilir. Müşterinin kullanım amacına ve ihtiyacına göre çeşitli
              ekipman ve sistemler ile donatılabilmektedir. Standart üretim
              ebatları: ISO 40-HC / 40 / 20 / 10 ft, ile üretim yapılmaktadır.
            </p>
            <p>
              Hızlı kurulum, minimum alan gereksinimi ve kolay taşınabilirlik
              özellikleriyle öne çıkar. Özellikle uzak bölgelerde, şantiyelerde
              ve acil durum senaryolarında ideal çözüm sunar.
            </p>
          </Col>

          

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <div className="main d-flex align-items-center gap-3 mt-2">
              <BsBuildingGear
                className="icon icon-6"
                style={{ fontSize: "40px" }}
              />
              <div>
                <b>Şantiyeler: </b>
                <p>
                  İnşaat alanlarında makine ve araçların yakıt ihtiyacını
                  karşılamak için kullanılır.
                </p>
              </div>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <MdAgriculture
                className="icon icon-7"
                style={{ fontSize: "40px" }}
              />
              <div>
                <b>Tarım Arazileri: </b>
                <p>Tarım makineleri için yakıt temininde avantaj sağlar.</p>
              </div>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <FaPersonMilitaryPointing
                className="icon icon-8"
                style={{ fontSize: "40px" }}
              />
              <div>
                <b>Askeri Alanlar: </b>
                <p>
                  Askeri sahalar, operasyonlar ve afet durumlarında hızlı yakıt
                  temini için idealdir.
                </p>
              </div>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <IoIosTrain
                className="icon icon-9"
                style={{ fontSize: "40px" }}
              />
              <div>
                <b>Lojistik ve Taşımacılık: </b>
                <p>
                  Uzak bölgelerdeki dağıtım noktalarında veya firmanızın
                  garajında yakıt sağlamak için kullanılabilir.
                </p>
              </div>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <MdEmergency
                className="icon icon-10"
                style={{ fontSize: "40px" }}
              />
              <div>
                <b>Acil Durum ve Acil Yardım: </b>
                <p>
                  Doğal afet durumlarında acil yakıt temini için kullanılabilir.
                </p>
              </div>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <MdOutlineTravelExplore
                className="icon icon-11"
                style={{ fontSize: "40px" }}
              />
              <div>
                <b>Turizm Alanları: </b>
                <p>
                  Sezonluk veya tam zamanlı turizm sahalarında veya etkinlik
                  alanlarında kolay yakıt ulaşımı için kullanılabilir.
                </p>
              </div>
            </div>
          </Col>

          <Col
            md={6}
            className="mt-5 d-flex flex-column justify-content-center"
          >
            <h2 className="text-center mb-4">Mobil Container Tablosu 1</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>TEK / ÇİFT CİDARLI TİP</th>
                  <th>Volume</th>
                  <th>Pump</th>
                  <th>Number</th>
                  <th>Dimension (UxYxG) cm</th>
                </tr>
              </thead>
              <tbody>
                {data1.map((item, index) => (
                  <tr key={index}>
                    <td>{item.model}</td>
                    <td>{item.type}</td>
                    <td>{item.volume}</td>
                    <td>{item.pump}</td>
                    <td>{item.number}</td>
                    <td>{item.dimension}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          <Col md={6} className="mt-5">
            <h3>Ürün Detayları</h3>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <SiBlackmagicdesign
                className="icon icon-1"
                style={{ fontSize: "60px" }}
              />
              <span>
                Konteynerler ve yakıt tankları , ihtiyaca göre farklı boyutlarda
                ve yapılandırmalarda üretilebilir. Bu, istasyonun kapasitesini
                ve işlevselliğini artırır.
              </span>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <IoBuild className="icon icon-2" style={{ fontSize: "50px" }} />
              <span>
                Konteyner tipi istasyonlar, sahada hızlı bir şekilde
                kurulabilir. Montajı kolaydır ve genellikle aynı gün içinde
                hizmete alınabilir.
              </span>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <FaToiletsPortable
                className="icon icon-3"
                style={{ fontSize: "50px" }}
              />
              <span>
                Bu tür istasyonlar, deniz, tır ve demiryolları taşımacılığına
                uygun CSC ve BIC Code standartları ile ihtiyaç duyulan yere
                kolayca taşınabilir .
              </span>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <GiHornInternal
                className="icon icon-4"
                style={{ fontSize: "60px" }}
              />
              <span>
                Firmanızın ihtiyaçlarını EN 12285 2 ve UL142 ile en yüksek
                seviyede standartlarla karşılamaktayız. SGS, INTERTEK, TURK
                LOYDU gibi 3. Parti gözetim hizmetlerini de sunmaktayız.
              </span>
            </div>

            <div className="main d-flex align-items-center gap-3 mt-2">
              <MdOutlineSecurity
                className="icon icon-5"
                style={{ fontSize: "90px" }}
              />
              <span>
                Modern konteyner tipi istasyonlar, çevreye duyarlı; sızıntı,
                yangın , yıldırım, deprem ve patlama gibi risklere karşı çeşitli
                güvenlik önlemleri ile donatılmıştır. Yangın söndürme
                sistemleri, sızıntı algılama sistemleri ve acil durum
                prosedürleri gibi özellikler içerir. İş Güvenliği Mevzuatına
                uygun üretim yapılmaktadır.
              </span>
            </div>
          </Col>
          <Col md={6} className="mt-5 d-flex justify-content-center">
            <img src={konteyner2} width={400} />
          </Col>

          <Col className="d-flex flex-column align-items-center mt-5">
            <h2 className="text-center mb-4">Mobil Container Tablosu 2</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>TEK / ÇİFT CİDARLI TİP</th>
                  <th>Volume</th>
                  <th>Pump</th>
                  <th>number</th>
                  <th>Dimension (UxYxG) cm</th>
                </tr>
              </thead>
              <tbody>
                {data2.map((item, index) => (
                  <tr key={index}>
                    <td>{item.model}</td>
                    <td>{item.type}</td>
                    <td>{item.volume}</td>
                    <td>{item.pump}</td>
                    <td>{item.number}</td>
                    <td>{item.dimension}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>

          <Col className="d-flex justify-content-center mt-5">
            <ul className="text-center">
              <h2>STANDART ÖZELLİKLER</h2>
              <li>ISO Standartları (20' - 40' – 40’HC )</li>
              <li>Akaryakıt Depolamaya Uygun Statik Tasarım</li>
              <li>
                Korozyon Koruması d eniz suyu ve güneş ışınlarına dayanıklı.
              </li>
              <li>RAL kodu müşteri isteğine göre uygulanır.</li>
              <li>EN 12285 - 2 Sertifikalı Depolama Tankı</li>
              <li>ATEX Sertifikalı Dağıtıcı / Pompa</li>
              <li>Teknik Oda</li>
              <li>Tek / Çift Cidarlı Tank</li>
              <li>1,2,3 veya 4 Bölmeli Tank</li>
              <li>CSC P lakası ve BIC KODU</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col sm={12} className="d-flex justify-content-center mt-5">
            <ul className="text-center">
              <h2>STANDART ÖZELLİKLER</h2>
              <li>Yakıt Seviye Göstergesi</li>
              <li>Manhole (kilitleme özelliğine sahip)</li>
              <li>ATEX Aydınlatma</li>
              <li>Elektrik Kontrol Panosu</li>
              <li>Yakıt Borulama</li>
              <li>Yangın Tüpü</li>
              <li>Havalandırma</li>
              <li>Merdiven</li>
            </ul>
          </Col>
          <Col sm={12}>
            <img src={konteyner3} className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Konteyner;
