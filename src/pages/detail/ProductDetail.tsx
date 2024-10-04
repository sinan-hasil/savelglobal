import { useParams } from "react-router-dom";
import KonteynerTipi from "./tasinabilir/Konteyner";
import RomorkTipi from "./tasinabilir/Romork";
import LpgSkid from "./tasinabilir/LpgSskid";
import Seri1 from "./Dispenserler/akaryakit/Seri1";
import Seri3 from "./Dispenserler/akaryakit/Seri3";
import Seri5 from "./Dispenserler/akaryakit/Seri5";
import Seri6 from "./Dispenserler/akaryakit/Seri6";
import Seri7 from "./Dispenserler/akaryakit/Seri7";
import Seri2lpg from "./Dispenserler/LPG/Seri2lpg";
import Seri3lpg from "./Dispenserler/LPG/Seri3lpg";
import Seri7lpg from "./Dispenserler/LPG/Seri7lpg";

const ProductDetail = () => {
  const { productName } = useParams<{ productName: string }>();

  const getProductComponent = (name: string) => {
    switch (name) {
      case "Konteyner Tipi":
        return <KonteynerTipi />;
      case "Römork Tipi":
        return <RomorkTipi />;
      case "LPG Skid Sistem":
        return <LpgSkid />;
      case "1 Serisi Akaryakıt Pompası":
        return <Seri1 />;
      case "3 Serisi Akaryakıt Pompası":
        return <Seri3 />;
      case "5 Serisi Akaryakıt Pompası":
        return <Seri5 />;
      case "6 Serisi Akaryakıt Pompası":
        return <Seri6 />;
      case "7 Serisi Akaryakıt Pompası":
        return <Seri7 />;
        case "2 Serisi LPG Dispenseri":
        return <Seri2lpg />;
      case "3 Serisi LPG Dispenseri":
        return <Seri3lpg />;
      case "7 Serisi LPG Dispenseri":
        return <Seri7lpg />;
      default:
        return <div>Ürün bulunamadı</div>;
    }
  };

  return <div>{productName && getProductComponent(productName)}</div>;
};

export default ProductDetail;
