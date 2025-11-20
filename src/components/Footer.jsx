import navbarimg from '../assets/navbarimg.png';

const Footer = () => {
    return(
        <div id="contact" className=" bg-[#192016] pt-0 lg:pt-15 xl:pt-30 text-white pb-10 xl:pb-15">
            <div className=" w-79 xl:w-350 m-auto flex flex-col justify-between xl:flex-row">
                <div className=" w-74"><div className=" h-13 w-42 flex"><img src={navbarimg} alt="Navbar image" className="h-full w-12" /><span className=" font-bold mt-3 text-xl text-gray-300">FloraVision.</span></div>
                <p className='text-white mt-5'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
                </div>
                <div className=" text-gray-300 w-50">
                    <p className='font-bold mb-5'>Quick Link's</p>
                    <ul>
                        <li className='underline mb-3'><a href="#home">Home</a></li>
                        <li className='underline mb-3'><a href="#plant">Type's of plant's</a></li>
                        <li className='underline mb-3'><a href="#contact">Contact</a></li>
                        <li className='underline mb-3'><a href="#contact">Privacy</a></li>
                    </ul>
                </div>
                <div className=" w-79">
                    <p className='font-bold text-white'>For Every Update.</p>
                    <div className="border-2 rounded mt-7 flex items-center">
                        <input type="text" className='w-54.5 text-white px-3 py-1 outline-0' placeholder='Enter Email' />
                        <button className='py-1 px-3 bg-white text-black text-[12px] font-bold h-full rounded'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div className=" w-79 xl:w-350 m-auto mt-3 flex justify-between">
                <div className=" xlw-28 w-25 flex justify-between font-medium"><p>FB</p> <p>TW</p> <p>LI</p></div>
                <div className=" w-50 text-center text-[14px] xl:mr-25 mr-0">FloraVision © all right reserve</div>
            </div>
        </div>
    );
};
export default Footer;
