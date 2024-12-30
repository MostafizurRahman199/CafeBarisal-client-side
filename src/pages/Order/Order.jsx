import React, { useState } from "react";
import Cover from "../../components/Cover/Cover";
import banner2 from "../../../public/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import OrderCard from "./OrderCard";


// Tabs array
const tabs = ["Salad", "Pizza", "Soups", "Desserts", "Drinks"];

const Order = () => {
  const [activeTab, setActiveTab] = useState("Salad");

  const {menuData} = useMenu();
  console.log(menuData);


  const soup = menuData.filter((item)=>item.category === "soup");
  const salad = menuData.filter((item)=>item.category === "salad");
  const pizza = menuData.filter((item)=>item.category === "pizza");
  const dessert = menuData.filter((item)=>item.category === "dessert");
  const offered = menuData.filter((item)=>item.category === "offered");
  const drinks = menuData.filter((item)=>item.category === "drinks");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Dynamic component rendering
  const renderTabContent = () => {
    switch (activeTab) {
      case "Salad":
        return <OrderCard foodData={salad}/>;
      case "Pizza":
        return <OrderCard foodData={pizza}/>;
      case "Soups":
        return <OrderCard foodData={soup}/>;
      case "Desserts":
        return <OrderCard foodData={dessert}/>;
      case "Drinks":
        return <OrderCard foodData={drinks}/>;
      default:
        return <OrderCard foodData={salad}/>;
    }
  };

  return (
    <div className="min-h-screen">
      <Cover
        image={banner2}
        title1={"Order Food"}
        title2={"Craving something delicious? Order your favorite food now!"}
      />

      {/* Tabs Section */}
      <div className="mt-10">
        <div className="flex justify-between flex-wrap px-2 gap-4 sm:gap-8 md:justify-center lg:space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-base sm:text-lg font-semibold pb-1 ${
                activeTab === tab
                  ? "text-[#BB8506] border-b-2 border-[#BB8506]"
                  : "text-gray-700"
              } hover:text-[#BB8506]`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-8 px-4 sm:px-8 md:px-16 text-center">
          <div className="mt-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
