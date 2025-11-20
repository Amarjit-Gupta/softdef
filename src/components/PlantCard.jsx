import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import { IoBagHandleOutline } from "react-icons/io5";

const PlantCard = () => {
  return (
    <div>
      <div className="corner-border-box relative inline-block p-2 rounded-xl text-2xl md:text-3xl left-1/2 -translate-x-1/2 text-white">
        Our Trendy plants
      </div>
      <div className="relative rounded-[60px] lg:w-250 w-79 lg:h-70 h-133 m-auto mt-5 flex lg:flex-row flex-col justify-between blur-box transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40 lg:pr-10 pr-4">
        <span className="absolute top-0 left-0 w-40 h-40 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[60px]"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[60px]"></span>
        <div className=" h-[300px] lg:h-[350px] lg:w-[370px] w-79 -translate-y-10 lg:-translate-y-22"><img src={card1} alt="card image" className=" object-cover h-full w-full rounded-[20px] " /></div>
        <div className=" lg:w-143 w-79 lg:mt-17 -mt-10 pb-13 lg:pb-0 px-5 lg:px-0">
          <p className='text-white text-2xl'>For Your Desks Decorations</p>
          <p className='text-white my-1'>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
          <p className='text-2xl text-white my-1'>Rs. 599/-</p>
          <button className="border py-1 px-5 rounded text-white">Explore</button><button className='border border-white ml-2 p-2 rounded'><IoBagHandleOutline className='text-white' /></button>
        </div>
      </div>
      <div className="relative rounded-[60px] lg:w-250 w-79 lg:h-70 h-133 m-auto lg:mt-25 mt-15 flex lg:flex-row flex-col-reverse justify-between blur-box transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40 lg:pl-10">
      <span className="absolute top-0 left-0 w-40 h-40 border-t-[0.1px] border-l-[0.1px] border-gray-600 rounded-tl-[60px]"></span>
        <span className="absolute bottom-0 right-0 w-40 h-40 border-b-[0.1px] border-r-[0.1px] border-gray-600 rounded-br-[60px]"></span>
        <div className=" lg:w-145 w-79 lg:mt-10 -mt-10 pb-7 lg:pb-0 px-2 lg:px-0 pl-5">
          <p className='text-white text-2xl'>For Your Desks Decorations</p>
          <p className='text-white my-1'>The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
          <p className='text-2xl text-white my-1'>Rs. 399/-</p>
          <button className="border py-1 px-5 rounded text-white">Explore</button><button className='border border-white ml-2 p-2 rounded'><IoBagHandleOutline className='text-white' /></button>
        </div>
        <div className=" h-[300px] lg:h-[350px] lg:w-[370px] w-79 -translate-y-10 lg:-translate-y-22"><img src={card2} alt="card image" className=" object-cover h-full w-full rounded-[20px] " /></div>
      </div>
    </div>
  );
};
export default PlantCard;
