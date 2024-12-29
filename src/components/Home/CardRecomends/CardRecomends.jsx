


import React from "react";
import SectionHeading from "../../SectionHeading/SectionHeading";
import pizza from "../../../../public/menu/pizza-bg.jpg"
import dessert from "../../../../public/menu/dessert-bg.jpeg"
import soup from "../../../../public/menu/soup-bg.jpg"

const CardRecomends = () => {
  const menuItems = [
    {
      name: "Caeser Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: pizza, // Replace with actual image URLs
    },
    {
      name: "Caeser Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: dessert, // Replace with actual image URLs
    },
    {
      name: "Caeser Salad",
      description: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
      image: soup, // Replace with actual image URLs
    },
  ];

  return (
    <div className="w-10/12 mx-auto my-20">
      <SectionHeading title1={"---Should Try---"} title2={"CHEF RECOMMENDS"}></SectionHeading>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border h-[541px] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.name}
              className="flex-1 w-full h-1/2 object-cover "
            />
            <div className="p-4 flex-1 flex flex-col justify-center bg-[#F3F3F3] ">
              <h3 className="text-xl font-bold text-center">{item.name}</h3>
              <p className="text-[#151515] text-sm mb-4 text-center">{item.description}</p>
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

export default CardRecomends;
