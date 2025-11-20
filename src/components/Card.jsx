import heroimg from '../assets/heroimg.png';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import sans from '../assets/sans.png';

export const Card1 = () => {
  return (
    <div className="border border-gray-600 rounded-[40px] h-197 lg:h-110 w-79 lg:w-200 flex flex-col lg:flex-row mt-15 lg:mt-10 m-auto justify-between items-center bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
      <div className=" h-110 w-79 lg:w-130 -translate-y-17 lg:-translate-x-11">
        <img src={heroimg} alt="o2 card image" className="w-79 lg:w-125 h-100 lg:h-125" />
      </div>
      <div className=" w-79 lg:w-100 text-gray-300 mb-10 lg:mb-0 px-2 pb-5 lg:pb-0">
        <p className="text-xl">We Have Small And Best O2 Plants Collection’s</p>
        <p className="my-4"> Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
        <p>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
        <div className=" flex justify-between pr-16"><button className="border border-gray-500 px-4 py-1 rounded">Explore</button><p className='mt-2 lg:mt-0'>01/<span className="text-[14px]">04</span></p></div>
      </div>
    </div>
  );
}

export const Card2 = () => {
  return (
    <div className="border border-gray-600 rounded-[40px] h-197 lg:h-110 w-79 lg:w-200 flex flex-col lg:flex-row mt-15 lg:mt-10 m-auto justify-between items-center bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
      <div className=" h-110 w-79 lg:w-130 -translate-y-17 lg:-translate-x-11">
        <img src={card1} alt="o2 card image" className="w-79 lg:w-125 h-100 lg:h-125" />
      </div>
      <div className=" w-79 lg:w-100 text-gray-300 mb-10 lg:mb-0 px-2 pb-5 lg:pb-0">
        <p className="text-xl">We Have Small And Best O2 Plants Collection’s</p>
        <p className="my-4"> Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
        <p>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
        <div className="border border-[#262c23] flex justify-between pr-16"><button className="border border-gray-500 px-4 py-1 rounded">Explore</button><p className='mt-2 lg:mt-0'>02/<span className="text-[14px]">04</span></p></div>
      </div>
    </div>
  );
}

export const Card3 = () => {
  return (
    <div className="border border-gray-600 rounded-[40px] h-197 lg:h-110 w-79 lg:w-200 flex flex-col lg:flex-row mt-15 lg:mt-10 m-auto justify-between items-center bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
      <div className=" h-110 w-79 lg:w-130 -translate-y-17 lg:-translate-x-11">
        <img src={card2} alt="o2 card image" className="w-79 lg:w-125 h-100 lg:h-125" />
      </div>
      <div className=" w-79 lg:w-100 text-gray-300 mb-10 lg:mb-0 px-2 pb-5 lg:pb-0">
        <p className="text-xl">We Have Small And Best O2 Plants Collection’s</p>
        <p className="my-4"> Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
        <p>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
        <div className="border border-[#262c23] flex justify-between pr-16"><button className="border border-gray-500 px-4 py-1 rounded">Explore</button><p className='mt-2 lg:mt-0'>03/<span className="text-[14px]">04</span></p></div>
      </div>
    </div>
  );
}

export const Card4 = () => {
  return (
    <div className="border border-gray-600 rounded-[40px] h-197 lg:h-110 w-79 lg:w-200 flex flex-col lg:flex-row mt-15 lg:mt-10 m-auto justify-between items-center bg-[#262c23] transform transition-all duration-500 hover:scale-101 hover:shadow-lg hover:-translate-y-1  hover:shadow-black/40">
      <div className=" h-110 w-79 lg:w-130 -translate-y-17 lg:-translate-x-11">
        <img src={sans} alt="o2 card image" className="w-79 lg:w-125 h-100 lg:h-125" />
      </div>
      <div className=" w-79 lg:w-100 text-gray-300 mb-10 lg:mb-0 px-2 pb-5 lg:pb-0">
        <p className="text-xl">We Have Small And Best O2 Plants Collection’s</p>
        <p className="my-4"> Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.</p>
        <p>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
        <div className="border border-[#262c23] flex justify-between pr-16"><button className="border border-gray-500 px-4 py-1 rounded">Explore</button><p className='mt-2 lg:mt-0'>04/<span className="text-[14px]">04</span></p></div>
      </div>
    </div>
  );
}
