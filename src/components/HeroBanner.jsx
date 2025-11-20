import nagy from '../assets/nagy.png';
import gimg from '../assets/gimg.png';
import { GiPlayButton } from "react-icons/gi";
import PlantCard from './PlantCard';
import "./HeroBanner.css";
import HeroCard from './HeroCard';

const HeroBanner = () => {

    let background = {
        backgroundImage: `url(${nagy})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat"
    };

    return (
        <div id="home" className="border border-[#192016] xl:h-[180vh] w-full backgroundimg">
            <div className="flex flex-col-reverse lg:flex-row mt-5">
                <div className="h-125 lg:w-125 w-79 flex flex-col justify-around m-auto font-inter">
                    <div>
                        <p className="text-5xl text-gray-300 font-bold">Earth's Exhale</p>
                        <span className='text-gray-300'>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</span> <br />
                        <button className="border py-1 px-4 rounded text-white">Buy Now</button><button className='border border-white ml-2 p-2 rounded-full'><GiPlayButton className='text-white' /></button><span className='text-white ml-2 font-indie'>Live Demo...</span>
                    </div>
                    <div className="relative rounded-[40px] lg:w-85 w-79 p-6 blur-box transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                        <div className="flex justify-between items-center w-51">
                            <div className='h-14 w-14 border rounded-full'><img src={gimg} alt="girl image" className='rounded-full object-cover h-full w-full' /></div>
                            <div><p className='text-white text-xl'>Ronnie Hamill</p>
                                <div className="flex justify-between w-24" aria-hidden>
                                    <svg viewBox="0 0 24 24" className="star">
                                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                    </svg>
                                    <svg viewBox="0 0 24 24" className="star">
                                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                    </svg>
                                    <svg viewBox="0 0 24 24" className="star">
                                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                    </svg>
                                    <svg viewBox="0 0 24 24" className="star">
                                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                    </svg>
                                    <svg viewBox="0 0 24 24" className="star half">
                                        <defs>
                                            <linearGradient id="g1" x1="0" x2="1">
                                                <stop offset="55%" stopColor="#F8D64E" />
                                                <stop offset="55%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" fill="url(#g1)" stroke="#F8D64E" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-300 mt-3'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
                        <span className="absolute top-0 left-0 w-15 h-30 border-t-[0.1px] border-l-[0.1px] border-gray-500 rounded-tl-[40px]"></span>
                        <span className="absolute bottom-0 left-0 w-15 h-30 border-b-[0.1px] border-l-[0.1px] border-gray-500 rounded-bl-[40px]"></span>
                    </div>
                </div>
                <div className="rounded-[40px] h-85 w-68 m-auto lg:mb-50 font-inter text-gray-300">
                    <HeroCard/>
                </div>
            </div>
            <PlantCard />
        </div>
    );
};
export default HeroBanner;
