// import React from "react";
// import {
//   FaHome,
//   FaCalendarAlt,
//   FaShoppingCart,
//   FaRegCreditCard,
//   FaStar,
//   FaBookOpen,
//   FaUtensils,
//   FaShoppingBag,
//   FaPhoneAlt,
// } from "react-icons/fa";
// import { Outlet, Link, NavLink } from "react-router-dom";

// const Dashboard = () => {
    
//   const links = [
//     { to: "/dashboard/user-home", label: "User Home", icon: <FaHome /> },
//     { to: "/dashboard/reservation", label: "Reservation", icon: <FaCalendarAlt /> },
//     { to: "/dashboard/payment-history", label: "Payment History", icon: <FaRegCreditCard /> },
//     { to: "/dashboard/my-cart", label: "My Cart", icon: <FaShoppingCart /> },
//     { to: "/dashboard/add-review", label: "Add Review", icon: <FaStar /> },
//     { to: "/dashboard/my-booking", label: "My Booking", icon: <FaBookOpen /> },
//     { to: "/", label: "Home", icon: <FaHome />, isDivider: true },
//     { to: "/menu", label: "Menu", icon: <FaUtensils /> },
//     { to: "/shop", label: "Shop", icon: <FaShoppingBag /> },
//     { to: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row h-screen">
//       {/* Sidebar */}
//       <div className="bg-[#D1A054] text-[#151515] w-full md:w-1/4 lg:w-1/5 p-4">
//         <div className="text-2xl font-bold mb-8 new_heading_font">
//           CafeBarisal <br /> Restaurant
//         </div>
//         <nav className="space-y-4">
//           {links.map((link, index) => (
//             <React.Fragment key={index}>
//               {link.isDivider && <hr className="my-4 border-white" />}
//               <NavLink to={link.to} className={({isActive}) => `new_heading_font text-xl flex items-center space-x-2 transition-all duration-300 hover:text-white ${isActive ? "text-white" : ""}`}>
//                 {link.icon}
//                 <span>{link.label}</span>
//               </NavLink>
//             </React.Fragment>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex items-start justify-start bg-gray-50 p-6">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaShoppingCart,
  FaRegCreditCard,
  FaStar,
  FaBookOpen,
  FaUtensils,
  FaShoppingBag,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { to: "/dashboard/user-home", label: "User Home", icon: <FaHome /> },
    { to: "/dashboard/reservation", label: "Reservation", icon: <FaCalendarAlt /> },
    { to: "/dashboard/payment-history", label: "Payment History", icon: <FaRegCreditCard /> },
    { to: "/dashboard/my-cart", label: "My Cart", icon: <FaShoppingCart /> },
    { to: "/dashboard/add-review", label: "Add Review", icon: <FaStar /> },
    { to: "/dashboard/my-booking", label: "My Booking", icon: <FaBookOpen /> },
    { to: "/", label: "Home", icon: <FaHome />, isDivider: true },
    { to: "/menu", label: "Menu", icon: <FaUtensils /> },
    { to: "/shop", label: "Shop", icon: <FaShoppingBag /> },
    { to: "/contact", label: "Contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile Menu Button */}
      <button
        className="bg-[#D1A054] text-white p-4 md:hidden flex items-center justify-center"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars className="text-2xl" />
      </button>

      {/* Sidebar */}
      <div
        className={`bg-[#D1A054] text-[#151515] w-full md:w-1/4 lg:w-1/5 p-4 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="text-2xl font-bold mb-8 new_heading_font text-center md:text-left">
          CafeBarisal <br /> Restaurant
        </div>
        <nav className="space-y-4">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.isDivider && <hr className="my-4 border-gray-300" />}
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `new_heading_font text-xl flex items-center space-x-2 transition-all duration-300 hover:text-white ${
                    isActive ? "text-white font-semibold" : "text-gray-800"
                  }`
                }
              >
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

