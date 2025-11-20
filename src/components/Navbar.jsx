import navbarimg from '../assets/navbarimg.png';
import bag from '../assets/bag.png';
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import "./Navbar.css";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    return (
        <div className="h-20 lg:h-25 w-full bg-[#192016] flex justify-between items-center px-4 md:px-8 sticky top-0 left-0 z-50 ">
            <div className="h-10 w-41 flex"><img src={navbarimg} alt="Navbar image" className="h-full w-10" /><span className="text-gray-300 font-bold font-inter mt-1">FloraVision<span>.</span></span></div>
            <ul className='font-indie'>
                <div className={`lg:w-110 lg:h-7 lg:top-0 text-gray-300 text-xl flex lg:justify-between flex-col lg:flex-row lg:sticky 
            fixed top-20 w-full h-full z-50 text-center  bg-[#192016] gap-10 ${menu ? "right-0" : "x1"} transition duration-1000`}>
                    <li className="pt-7 lg:pt-0"> <a href="#home" onClick={() => setMenu(false)}>Home</a></li>
                    <li className='w-30 flex justify-between items-center relative  drop left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0'>Plants Type<IoMdArrowDropdown />
                        <div className='absolute top-[26px] w-30 rounded dropdown bg-[#20271d]'>
                            <ul>
                                <li className='mt-2 cursor-pointer'> <a href="#plant" onClick={() => setMenu(false)}>Aglaonema</a> </li>
                                <li className='mt-2 cursor-pointer'> <a href="#plant" onClick={() => setMenu(false)}>Cactus</a> </li>
                                <li className='mt-2 cursor-pointer'> <a href="#plant" onClick={() => setMenu(false)}>Sansevieria</a> </li>
                                <li className='mt-2 mb-2 cursor-pointer'> <a href="#plant" onClick={() => setMenu(false)}>Agave</a> </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#more" onClick={() => setMenu(false)}>More</a></li>
                    <li><a href="#contact" onClick={() => setMenu(false)}>Contact</a></li>
                </div>
            </ul>
            <div className="md:w-40 w-30 h-7 text-gray-300 flex justify-between text-2xl">
                <div><IoIosSearch className='text-[27px]' /></div>
                <div><img src={bag} alt="bag" className='h-6 w-6' /></div>
                <div><div className='cursor-pointer lg:pointer-events-none' onClick={() => setMenu(!menu)}>{menu ? <span><RxCross2 className="font-bold text-3xl text-white" /></span> : 
                    <span>
                    <div className=" flex flex-col justify-center h-7 w-6.5 gap-1.5">
                    <div className="bg-white h-[3.1px] rounded"></div>
                    <div className="bg-white h-[3px] rounded w-[70%] ml-2"></div>
                    </div>
                    </span>
                    }</div></div>
            </div>
        </div>
    );
};
export default Navbar;
