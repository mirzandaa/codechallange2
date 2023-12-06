import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../../assets/img/hero.png";

import { kelasTerbaru} from "../data/index"

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1 className="mb-4">
              Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dignissimos molestias obcaecati hic natus ad expedita quibusdam, quia voluptate asperiores libero consectetur voluptatem illum assumenda dolores repellendus laudantium omnis eum!</p>
            <button className ="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">Lihat Kelas </button>
            <button className ="btn btn-outline-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2"> Lihat Promo</button>
          </Col>
          <Col lg="6" className="pt-lg-0 pt-5">
          <img src = {HeroImage} alt="hero-img"/>
          </Col>
        </Row>
      </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className= "text-center fw-bold">Product Terbaru</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rerum, porro aliquam eius sit illum. Nisi quidem nulla delectus, eum temporibus reiciendis corrupti. Repudiandae soluta, aut a iste ducimus officiis.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map ((kelas) => {
          return <Col key ={kelas.id}>
            <img src={kelas.image} alt= "unsplash.com" />
            <div>
              <i className={kelas.star1}></i>
              <i className={kelas.star2}></i>
              <i className={kelas.star3}></i>
              <i className={kelas.star4}></i>
              <i className={kelas.star5}></i>
            </div>
          </Col>;
            })} 
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
