import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroimg from '../assets/heroimg.png';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import "./HeroCard.css";

const HeroCard = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div
      style={{
        width: "260px",
        height: "345px",
        margin: "0 auto",

        position: "relative",
        overflow: "visible",

      }}
    >
      <Slider {...settings}>
        <div className="w-full transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
          <div className="w-[260px] flex justify-center items-start overflow-visible">
            <div className="border border-gray-600 rounded-[40px] h-[300px] w-[260px] relative overflow-visible mt-10 blur-box">
              <div className="w-[180px] h-[60%] m-auto -translate-y-10 z-10 relative">
                <img
                  src={heroimg}
                  alt="hero image"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className=" w-[200px] mx-auto mt-[-30px] relative z-0">
                <span className=" block">Indoor Plant</span>
                <span className="text-xl block">Aglaonema plant</span>
                <button className="border py-1 px-4 rounded  mt-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
          <div className="w-[260px] flex justify-center items-start overflow-visible">
            <div className="border border-gray-500 rounded-[40px] h-[300px] w-[260px] relative overflow-visible mt-10 blur-box">
              <div className="w-[180px] h-[60%] m-auto -translate-y-10 z-10 relative">
                <img src={card1} alt="hero image" className="h-full w-full object-cover rounded-[20px]"/>
              </div>
              <div className=" w-[200px] mx-auto mt-[-30px] relative z-0">
                <span className=" block">Indoor Plant</span>
                <span className="text-xl block">Plantain Lilies</span>
                <button className="border py-1 px-4 rounded  mt-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
          <div className="w-[260px] flex justify-center items-start overflow-visible">
            <div className="border border-gray-500 rounded-[40px] h-[300px] w-[260px] relative overflow-visible mt-10 blur-box">
              <div className="w-[180px] h-[60%] m-auto -translate-y-10 z-10 relative">
                <img src={card2} alt="hero image" className="h-full w-full object-cover rounded-[20px]"/>
              </div>
              <div className=" w-[200px] mx-auto mt-[-30px] relative z-0">
                <span className=" block">Indoor Plant</span>
                <span className="text-xl block">Agave plant</span>
                <button className="border py-1 px-4 rounded  mt-2">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
export default HeroCard;

// slider prevbtn
const PrevBtn = ({ onClick, currentSlide }) => {
  return (
    <div
      className="slick-prev"
      style={{
        bottom: "93px",
        left: "7px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        zIndex: 20,
        opacity: currentSlide === 0 ? 0 : 1,
        transition: "opacity 0.3s",
      }}
      onClick={onClick}
    />
  );
}

// slider nextbtn
const NextBtn = ({ onClick, currentSlide, slideCount }) => {
  return (
    <div
      className="slick-next"
      style={{
        bottom: "93px",
        right: "7px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        zIndex: 20,
        opacity: currentSlide === slideCount - 1 ? 0 : 1,
        transition: "opacity 0.3s",
      }}
      onClick={onClick}
    />
  );
}
