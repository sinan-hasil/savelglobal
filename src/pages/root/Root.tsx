import { Container } from "react-bootstrap";
import "./root.css";
import { Link } from "react-router-dom";
import logo from "../../icons/logopng.png"
const Root = () => {
  return (
    <>
      <div className="main">
        <Container>
          
          <div className="title">
            <div className="z-2 mt-3">
          <img src={logo} />
          </div>
            <h1 className="text-white z-3">
              WEB SİTEMİZ <br /> ŞUANDA YAPIM AŞAMASINDADIR
            </h1>
          </div>
        </Container>
      </div>
      <p className="z-3 asd"><Link to={"/test"}>test</Link></p>
    </>
  );
};

export default Root;
