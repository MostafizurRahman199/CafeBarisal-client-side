// import React from 'react'

import { useDarkMode } from "../../Context/DarkModeContext";


const OrderCard = ({foodData}) => {
  const {darkMode} = useDarkMode();



  return (
    <div className={`w-11/12 md:w-10/12 mx-auto my-20`}>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foodData.map((item, index) => (
          <div
            key={index}
            className=" border h-[450px] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all flex flex-col justify-between duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="flex-1 w-full h-1/2 object-cover "
            />
            <div className={`p-4 flex-1 flex flex-col justify-center ${darkMode === true ? "bg-[#1A1A1D] text-white" : "bg-[#F3F3F3]"}  `}>
              <h3 className="text-xl font-bold text-center">{item.name}</h3>
              <p className={`${darkMode === true ? "bg-[#1A1A1D] text-white" : "bg-[#F3F3F3] text-[#151515] "} text-sm mb-4 text-center`}>{item.recipe}</p>
             <div className="flex justify-center items-center">
             <button className="px-4  py-2 text-center  text-[#D99904] border-b-2 border-[#D99904] rounded-lg bg-[#E8E8E8] hover:bg-[#1F2937] hover:border-[#1F2937]  w-fit">
                ADD TO CART
              </button>
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
