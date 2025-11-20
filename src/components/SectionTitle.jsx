import heroimg from '../assets/heroimg.png';
import { IoBagHandleOutline } from "react-icons/io5";
import card1 from '../assets/card1.png';
import cac from '../assets/cac.png';
import swiss from '../assets/swiss.png';
import sans from '../assets/sans.png';
import agave from '../assets/agave.png';

const SectionTitle = () => {
    return (
        <div id="plant" className="bg-[#192016]">
            <div className="corner-border-box relative inline-block p-2 rounded-xl text-2xl md:text-3xl left-1/2 -translate-x-1/2 text-white mt-10 mb-10 font-inter">Our Top Selling Plants</div>
            <div className=" mt-10 w-73  lg:w-238 grid grid-cols-1 lg:grid-cols-3 gap-y-[100px]  lg:gap-y-[140px] gap-x-10 m-auto">
                <div className="relative h-94 w-73 text-gray-300 rounded-[45px] bg-[#262c23]  transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[45px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[45px]"></span>
                    <div><img src={heroimg} alt="hero image" className=' w-60 m-auto -translate-y-17' /></div>
                    <div className='px-5  -mt-15'><p className='text-2xl'>Aglaonema plant</p>
                        <p>The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p></div>
                    <div className=' flex justify-between px-7'><div className='text-2xl'>Rs. 300/-</div>
                        <div><button className='border border-white ml-2 p-2 rounded'><IoBagHandleOutline className='text-white' /></button></div></div>
                </div>
                <div className="relative h-94 w-73 text-gray-300 rounded-[45px] bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[45px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[45px]"></span>
                    <div><img src={card1} alt="hero image" className=' w-60 m-auto -translate-y-17' /></div>
                    <div className='px-7  -mt-15'><p className='text-2xl'>Plantain Lilies</p>
                        <p>Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,</p></div>
                    <div className=' flex justify-between px-7'><div className='text-2xl'>Rs. 380/-</div>
                        <div><button className='border border-white ml-2 p-2 rounded'><IoBagHandleOutline className='text-white' /></button></div></div>
                </div>
                <div className="relative h-94 w-73 text-gray-300 rounded-[45px] bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[45px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[45px]"></span>
                    <div><img src={cac} alt="hero image" className=' w-60 m-auto -translate-y-17' /></div>
                    <div className='px-7  -mt-15'><p className='text-2xl'>Cactus</p>
                        <p className='my-6'>It is known for their ability to thrive in arid environments</p></div>
                    <div className=' flex justify-between px-7'><div className='text-2xl'>Rs. 259/-</div>
                        <div><button className='border border-white ml-2 p-2 rounded'><IoBagHandleOutline className='text-white' /></button></div></div>
                </div>
                <div className="relative h-94 w-73 text-gray-300 rounded-[45px] bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[45px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[45px]"></span>
                    <div><img src={swiss} alt="hero image" className=' w-60 m-auto -translate-y-17' /></div>
                    <div className='px-7  -mt-15'><p className='text-2xl'>Swiss cheese Plant</p>
                        <p className='my-3'>It is a popular tropical houseplant known for its distinctive, perforated leaves</p></div>
                    <div className=' flex justify-between px-7'><div className='text-2xl'>Rs. 400/-</div>
                        <div><button className='border border-white ml-2 p-2 rounded'><IoBagHandleOutline className='text-white' /></button></div></div>
                </div>
                <div className="relative h-94 w-73 text-gray-300 rounded-[45px] bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[45px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[45px]"></span>
                    <div><img src={sans} alt="hero image" className=' w-60 m-auto -translate-y-17' /></div>
                    <div className='px-6  -mt-15'><p className='text-2xl'>Sansevieria plant</p>
                        <p>It is a popular indoor plant admired for its striking appearance and low-maintenance nature.</p></div>
                    <div className=' flex justify-between px-7'><div className='text-2xl'>Rs. 450/-</div>
                        <div><button className='border border-white ml-2 p-2 rounded'><IoBagHandleOutline className='text-white' /></button></div></div>
                </div>
                <div className="relative h-94 w-73 text-gray-300 rounded-[45px] bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
                    <span className="absolute top-0 left-0 w-20 h-20 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[45px]"></span>
                    <span className="absolute bottom-0 right-0 w-20 h-20 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[45px]"></span>
                    <div><img src={agave} alt="hero image" className=' w-60 m-auto -translate-y-17' /></div>
                    <div className='px-5  -mt-15'><p className='text-2xl'>Agave plant</p>
                        <p>The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.</p></div>
                    <div className=' flex justify-between px-7'><div className='text-2xl'>Rs. 359/-</div>
                        <div><button className='border border-white ml-2 p-2 rounded'><IoBagHandleOutline className='text-white' /></button></div></div>
                </div>
            </div>
        </div>
    );
};
export default SectionTitle;
