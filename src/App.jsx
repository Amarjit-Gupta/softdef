import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import PlantSection from "./components/PlantSection";
import SectionTitle from "./components/SectionTitle";
import TestimonialCard from "./components/TestimonialCard";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroBanner/>
      <SectionTitle/>
      <TestimonialCard/>
      <PlantSection/>
      <Footer/>
    </div>
  );
};
export default App;
