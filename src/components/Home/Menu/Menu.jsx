

import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";

const Menu = () => {
  const menuItems = [
    { name: "Roast Duck Breast", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" },
    { name: "Escalope De Veau", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" },
    { name: "Fish Parmentier", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" },
    { name: "Tuna Niçoise", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" },
    { name: "Chicken and Walnut Salad", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" },
    { name: "Roasted Pork Belly", price: "$14.5", description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" },
  ];

  return (
    <div className="w-full p-2 sm:w-10/12 md:p-0 mx-auto my-12">
       <SectionHeading title1={"---Check it out---"} title2={"FROM OUR MENU"}></SectionHeading>
   
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex md:h-[104px] items-start justify-between   rounded-lg hover:scale-105 transition-all duration-300 gap-4 md:gap-8"
          >
            <div className="h-10 w-20  sm:h-10 sm:w-10 md:h-full md:w-40 bg-[#D9D9D9] rounded-full rounded-tl-none">
                
            </div>
           
            <div className="flex">
            <div>
              <h3 className="text-lg font-semibold new_heading_font">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
            <div className="text-xl font-bold text-[#BB8506]">{item.price}</div>
            </div>


          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 text-black rounded-2xl border-b-4 border-black">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;




