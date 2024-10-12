import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [areaText, setAreaText] = useState<string>("")

  const handleWhatsAppSend = (event: React.FormEvent) => {
    event.preventDefault();
    const phoneNumber = "+905072992776";
    const url =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      "Merhaba! sizden bilgi almak istiyorum." +
      "\n" +
      "Ad: " +
      `${name} - ` +
      "\n" +
      "Soyad: " +
      `${lastName} - ` +
      "\n" +
      "Telefon: " +
      `${phone} - 
      "Talep: " + ${areaText}`;

    window.open(url, "_blank")?.focus();
  };

  return (
    <>
      <Container className="mt-5 py-5">
        <div className="text-center p-5">
          <h3>Bize Ulaşın</h3>
          <p className="px-5">
            Savel ekibi olarak size en iyi hizmeti sunmak için buradayız.
            Ürünlerimiz, hizmetlerimiz veya iş ortaklıklarımız hakkında bilgi
            almak ya da herhangi bir sorunuz için bizimle iletişime
            geçebilirsiniz. Aşağıdaki formu doldurarak mesajınızı bize
            iletebilir ya da doğrudan iletişim numaralarımızdan bize
            ulaşabilirsiniz.
          </p>
        </div>
        <form onSubmit={handleWhatsAppSend}>
          <Row>
            <Col sm={12} md={6} className="p-3">
              <label htmlFor="name">
                <small>Adınız</small>
              </label>
              <Form.Control
                required
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>

            <Col sm={12} md={6} className="p-3">
              <label htmlFor="lastName">
                <small>Soyadınız</small>
              </label>
              <Form.Control
                required
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Col>

            <Col md={12} className="p-3">
              <label htmlFor="tel">
                <small>Tel No</small>
              </label>
              <Form.Control
                required
                id="tel"
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Col>
            <Col>
            <small>Talepleriniz</small>
              <Form.Control
                as="textarea"
                style={{ height: "100px", marginBottom: "20px" }}
                onChange={(e) => setAreaText(e.target.value)}
              />
            </Col>
          </Row>
          <Button type="submit">Gönder</Button>
        </form>
      </Container>

      <Container className="border-top p-5">
        <Row>
          <Col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96785.69263330118!2d29.78370754638406!3d40.70584360566332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14cb4f94f9856835%3A0x9acb2a6037c7f064!2sSepetlip%C4%B1nar%2C%20No%3A110%20D130%2C%2041275%20Ba%C5%9Fiskele%2FKocaeli!3m2!1d40.705872899999996!2d29.866108399999998!5e0!3m2!1str!2str!4v1728308484911!5m2!1str!2str"
              width="600"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col className="d-flex justify-content-center flex-column align-items-center gap-4">
            <div className="d-flex align-items-center gap-3">
              <SiHomeassistantcommunitystore />
              <p className="p-0 m-0">
                Sepetlipınar Mah. D-130 Karayolu Cad. No:110 Başiskele / Kocaeli
                41275
              </p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <BsTelephone />
              <p className="p-0 m-0">0262 658 00 70</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <CiMail />
              <p className="p-0 m-0">info@savel.com.tr</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
