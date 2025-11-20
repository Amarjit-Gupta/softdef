import PlantSlide from "./PlantSlide";

const PlantSection = () => {
    return(
        <div className="bg-[#192016]">
            <div className="corner-border-box corner-border-box1 relative inline-block p-2 rounded-xl text-2xl md:text-3xl left-1/2 -translate-x-1/2 text-white mt-20 mb-10">
                Our Best O2
            </div>
            <div>
                <PlantSlide/>
            </div>
        </div>
    );
};
export default PlantSection;
