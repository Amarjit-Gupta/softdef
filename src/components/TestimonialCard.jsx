import review1 from '../assets/review1.png';
import review2 from '../assets/review2.png';
import review3 from '../assets/review3.png';
import "./TestimonialCard.css";

const TestimonialCard = () => {
    return (
        <div className="bg-[#192016]">
            <div id="more" className="corner-border-box relative inline-block p-2 rounded-xl text-2xl md:text-3xl left-1/2 -translate-x-1/2 text-white mt-10 lg:mt-23 mb-10 lg:mb-15">
                Customer Review
            </div>
            <div className=" w-77  lg:w-240 grid grid-cols-1 lg:grid-cols-3 gap-x-[18px] gap-y-[18px] lg:gap-y-0 m-auto">
                <div className="relative rounded-[40px] w-77 px-7 py-10 pb-18 bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[40px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[40px]"></span>
                    <div className=" flex justify-between items-center w-49">
                        <div className='h-14 w-14 border rounded-full'><img src={review1} alt="girl image" className='rounded-full object-cover h-full w-full' /></div>
                        <div><p className='text-white text-xl font-medium'>Shelly Russel</p>
                            <div className=" flex justify-between w-17" aria-hidden>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1 half">
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
                    <p className='text-gray-300 mt-8'>Just got my hands on some absolutely awesome plants, and I couldn't be happier!</p>
                </div>
                <div className="relative rounded-[40px] w-77 px-7 py-10 bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[40px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[40px]"></span>
                    <div className=" flex justify-between items-center w-48">
                        <div className='h-14 w-14 border rounded-full'><img src={review2} alt="girl image" className='rounded-full object-cover h-full w-full' /></div>
                        <div><p className='text-white text-xl font-medium'>Lula Rolfson</p>
                            <div className=" flex justify-between w-17" aria-hidden>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1 half">
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
                    <p className='text-gray-300 mt-8'>Each one has its own unique charm and personality, and they've <br /> already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.</p>
                </div>
                <div className="relative rounded-[40px] w-77 px-6 py-10 pb-18 bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[40px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[40px]"></span>
                    <div className=" flex justify-between items-center w-46">
                        <div className='h-14 w-14 border rounded-full'><img src={review3} alt="girl image" className='rounded-full object-cover h-full w-full' /></div>
                        <div><p className='text-white text-xl font-medium'>Carol Huels</p>
                            <div className=" flex justify-between w-17" aria-hidden>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1">
                                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896 4.664 23.17l1.402-8.173L0.132 9.21l8.2-1.192z" />
                                </svg>
                                <svg viewBox="0 0 24 24" className="star1 half">
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
                    <p className='text-gray-300 mt-8'>It's like bringing a little piece of nature indoors. Definitely worth the investment--my plant collection <br /> has never looked better!</p>
                </div>
            </div>
        </div>
    );
};
export default TestimonialCard;
