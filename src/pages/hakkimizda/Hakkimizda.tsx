import { Container } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import "./hakkimizda.css"

const Hakkimizda = () => {
  const handleWhastapp = () => {
    const phoneNumber = "+905513911163";
    const url =
      "https://wa.me/" +
      phoneNumber +
      "?text=" +
      "Merhaba! Ürünleriniz hakkında bilgi almak istiyorum.";
    window.open(url, "_blank")?.focus();
  };
  return (
    <>
    <div onClick={handleWhastapp} className="wp-div">
        <FaWhatsapp className="wp-icon" />
      </div>

      <Container className="py-5">
        <h1 className="text-center">Hakkımızda</h1>
        <p className="px-5 py-5">
          Savel olarak kendimizi Enerji ekipmanları üretici kulvarında
          görmekteyiz. Başlangıç olarak Akaryakıt pompa elektroniği ve Akaryakıt
          otomasyon hizmetleri alanlarında faaliyete başlayan firmamız zamanla
          büyüme ve gelişme süreçleriyle bugünlere gelmiştir. Halen ilk günün
          heyecanıyla emin ve kararlı adımlarla sektöre heyecan getirmeye devam
          etmekteyiz. Bugün Savel Akaryakıt pompalarından mobil tank çözümlerine
          varana kadar bütün ekipmanları kendi bünyesinde üretmektedir.
          Özellikle mobil istasyon çözümleriyle sektöre yenilik getirmenin
          yanında alternatif çözümlerinde mevcut olduğunu ilgili herkese
          göstermiş olduk.
        </p>


        <p className="px-5 py-5">
          Savel Mobil Enerji İstasyonları konusunda sürekli olarak kendine yeni
          hedefler koymaktadır. Basit tank çözümleriyle başlayan yolumuz bugün
          bir akaryakıt istasyonunda olması gereken her şeyi ihtiva eden
          40ft’lik konteynırlarla devam etmektedir. A’dan Z’ye her şeyini
          kendimizin ürettiği mobil çözümlerde ilave olarak son teknolojik
          ekipmanlarla müşterinin akaryakıt istasyonundan beklediği her şeyi
          konsept olarak sunmaktayız. Klima, Jeneratör, Otomasyon kabini,
          Pompacı odası gibi basit tank çözümlerinde olması beklenmeyen ekipman
          ve ilaveler bizim çözümlerimizde vazgeçilemez ana unsurlardır.
        </p>

        <p className="px-5 py-5">
          Müşteri memnuniyeti bizim için diğer marka değeri taşıyan firmalarda
          olduğu gibi kalite kadar önemli bir unsurdur. Sadece işin bugünü için
          değil yarını içinde kullanıcı hoşnutluğu vazgeçilmez bir Savel
          prensibidir. Özellikle yurtdışı müşterilerimiz sunduğumuz yüksek
          kalite ve daha makul fiyatlar nedeniyle bizimle süreklilik içerisinde
          birliktelik göstermektedirler. Biz müşterilerimize özellikle bazı
          firmalara karşı alternatifin ötesinde bir şövalyelik sergilemekteyiz.
          Bu müşterilerimize kalitenin yanında bizim ürünlerle daha fazla kar
          etme şansı tanımaktadır. İşte müşterilerimizin çoğu bu noktayı
          yakalayıp özümsediği için bize karşı memnuniyetleri kat ve kat
          artmaktadır. Bunun gerçek hayatta sayısız örneği olmasaydı sıfır
          sermaye ile başladığımız bu yolda bugün bu noktalarda olamazdık.
        </p>

        <p></p>
      </Container>
    </>
  );
};

export default Hakkimizda;
