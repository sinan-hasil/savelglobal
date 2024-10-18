import { Col, Container, Row, Table } from "react-bootstrap";
import silindir from "../../../images/araclar/silindir tip.png";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaToiletsPortable } from "react-icons/fa6";
import { MdOutlineViewCompactAlt } from "react-icons/md";
import { FaPlugCircleCheck } from "react-icons/fa6";
import { SiEasyeda } from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { SiInfracost } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";
import "./style.css";

const data = [
  { SavMobil: "SM-05", tipi: "Mobil", aciklama: "mobil 5.000 Lt." },
  { SavMobil: "SM-10", tipi: "Mobil", aciklama: "mobil 10.000 Lt." },
  { SavMobil: "SM-15", tipi: "Mobil", aciklama: "mobil 15.000 Lt." },
  { SavMobil: "SM-19", tipi: "Mobil", aciklama: "mobil 19.000 Lt." },
  { SavMobil: "SM-25", tipi: "Mobil", aciklama: "mobil 25.000 Lt." },
  { SavMobil: "SM-30", tipi: "Mobil", aciklama: "mobil 30.000 Lt." },
  { SavMobil: "SM-40", tipi: "Mobil", aciklama: "mobil 40.000 Lt." },
  { SavMobil: "SM-50", tipi: "Mobil", aciklama: "mobil 50.000 Lt." },
];
const Silindirtip = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img src={silindir} className="img-fluid" />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h3>Genel Bakış</h3>
          <p>
            SavMobil, geleneksel akaryakıt istasyonlarına alternatif maliyeti
            düşük, dinamik ve güvenirliği yüksek olan mobil istasyon
            çözümleridir.
          </p>
          <p>
            Sezonluk ihtiyaçların doğduğu tatil yöreleri, marinalar ve tarım
            alanları gibi bölgelerde, mobil yakıt çözümleri büyük avantaj
            sağlar. Ayrıca motor sporları gibi özel organizasyonlar, şantiyeler,
            maden işletmeleri ve büyük filoların yakıt ikmali gereksinimlerine
            yönelik ideal bir çözüm sunar. Sabit istasyon kurulum maliyetini
            karşılamayan düşük hacimli ve kısa süreli talepler için de uygundur.
            Aynı zamanda, akaryakıt istasyonlarında kurulum, revize ve yenileme
            işlemleri sırasında bu sistemler pratik bir alternatif olarak öne
            çıkar.
          </p>
        </Col>

        <Col md={6} className="mt-5">
          <p>
            SavMobil Serisi Geleneksel akaryakıt istasyonlarına göre şu
            avantajlara sahiptir;
          </p>

          <div>
            <div className="main d-flex align-items-center gap-3 mt-2">
              <FaMoneyBillWave
                className="icon icon-6"
                style={{ fontSize: "40px" }}
              />{" "}
              Düşük maliyet
            </div>
          </div>

          <div className="main d-flex align-items-center gap-3 mt-2">
            <FaToiletsPortable
              className="icon icon-7"
              style={{ fontSize: "40px" }}
            />
            <div>Taşınabilirlik</div>
          </div>

          <div className="main d-flex align-items-center gap-3 mt-2">
            <MdOutlineViewCompactAlt
              className="icon icon-8"
              style={{ fontSize: "40px" }}
            />
            <div>Kompakt yapı</div>
          </div>

          <div className="main d-flex align-items-center gap-3 mt-2">
            <FaPlugCircleCheck
              className="icon icon-9"
              style={{ fontSize: "40px" }}
            />
            <div>Tak-çalıştır</div>
          </div>

          <div className="main d-flex align-items-center gap-3 mt-2">
            <SiEasyeda className="icon icon-10" style={{ fontSize: "40px" }} />
            <div>Hızlı ve kolay montaj</div>
          </div>

          <div className="main d-flex align-items-center gap-3 mt-2">
            <SiInfracost
              className="icon icon-13"
              style={{ fontSize: "40px" }}
            />
            <div>İstasyon sahasında daha az işlem, düşük altyapı maliyeti</div>
          </div>

          <div className="main d-flex align-items-center gap-3 mt-2">
            <MdOutlineSecurity
              className="icon icon-14"
              style={{ fontSize: "40px" }}
            />
            <div>Yüksek güvenlik önlemleri</div>
          </div>

          <div className="main d-flex align-items-center gap-3 mt-2">
            <MdHealthAndSafety
              className="icon icon-15"
              style={{ fontSize: "40px" }}
            />
            <div>Doğal yapıyı koruma</div>
          </div>

          <div className="main d-flex align-items-center gap-3 mt-2">
            <SiAffinitydesigner
              className="icon icon-16"
              style={{ fontSize: "40px" }}
            />
            <div>Çağdaş ve sağlam yapıya sahip mühendislik tasarımı</div>
          </div>
        </Col>

        <Col className="d-flex align-items-center">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Tipi</th>
                <th>Açıklama</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.SavMobil}</td>
                  <td>{item.tipi}</td>
                  <td>{item.aciklama}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Silindirtip;
