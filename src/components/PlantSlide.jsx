import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Card.css';
import { Card1, Card2, Card3, Card4 } from "./Card";

const PlantSlide = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowBtn />,
    prevArrow: <PrevArrowBtn />,
  };

  return (
    <div className="plant-card">
      <Slider {...settings}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </Slider>
    </div>
  );
}
export default PlantSlide;

const PrevArrowBtn = ({ onClick, currentSlide }) => {
  return (
    <button
      className="slick-prev"
      onClick={onClick}
      style={{
        position: "absolute",
        left: "10px",
        bottom: "20px",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        opacity: currentSlide === 0 ? 0.5 : 1,
        cursor: "pointer",
        zIndex: 30,
      }}
    ></button>
  );
}

const NextArrowBtn = ({ onClick, currentSlide, slideCount }) => {
  return (
    <button
      className="slick-next"
      onClick={onClick}
      style={{
        position: "absolute",
        right: "10px",
        bottom: "20px",
        width: "35px",
        height: "35px",
        borderRadius: "50%",
        opacity: currentSlide === slideCount - 1 ? 0.5 : 1,
        cursor: "pointer",
        zIndex: 30,
      }}
    ></button>
  );
}
