


// import React from "react";
// import { FaTrashAlt } from "react-icons/fa";
// import useCart from "../../hooks/useCart";

// const MyCart = () => {

// const {data} = useCart();
// console.log(data);

// // {
// //     "_id": "67777b4322e8582a539699a0",
// //     "Item_id": "642c155b2c4774f05c36eeab",
// //     "name": "Goats Cheese Pizza",
// //     "price": 14.5,
// //     "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-370x247.jpg",
// //     "quantity": 1,
// //     "userEmail": "mrahman202003@bscse.uiu.ac.bd"
// // }

//   // Dummy data for table


//   return (
//     <div className="w-10/12 mx-auto bg-white shadow-lg rounded-lg p-6 mt-16">
//       {/* Header */}
//       <div className="flex justify-between items-center border-b pb-4 mb-4">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">Total Bookings: 3</h2>
//           <h2 className="text-xl font-semibold text-gray-800">Total Price: $178</h2>
//         </div>
//         <button className="bg-[#D1A054] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#b5853a]">
//           Pay
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto h-[500px]  overflow-auto ">
//         <table className="table-auto w-full text-left border-collapse ">
//           <thead>
//             <tr className="bg-[#D1A054] text-white">
//               <th className="py-2 px-4 text-center">ITEM IMAGE</th>
//               <th className="py-2 px-4 text-center">QUANTITY</th>
//               <th className="py-2 px-4 text-center">CATEGORY</th>
//               <th className="py-2 px-4 text-center">PRICE</th>
//               <th className="py-2 px-4 text-center">ACTION</th>
//             </tr>
//           </thead>
//           <tbody className="">
//             {data?.map((booking, index) => (
//               <tr key={index} className="border-b">
//                 <td className="py-4 px-4 text-center flex justify-center">
//                   <div className="w-16 h-16 bg-gray-300 rounded-lg ">
//                     <img src={booking.image} alt="" className="w-full h-full rounded-2xl  object-cover"/>
//                   </div>
//                 </td>
//                 <td className="py-4 px-4 item-center text-center">{booking.quantity}</td>
//                 <td className="py-4 px-4 text-center">{booking.category}</td>
//                 <td className="py-4 px-4 text-center">{booking.price}</td>
//                 <td className="py-4 px-4 text-center">
//                   <button className="text-red-500 hover:text-red-700">
//                     <FaTrashAlt size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyCart;




import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const MyCart = () => {
  const { data } = useCart();
  console.log(data);

  // Dummy data for testing
  const sampleData = [
    {
      _id: "1",
      name: "Goats Cheese Pizza",
      price: 14.5,
      image: "https://cristianonew.ukrdevs.com/wp-content/uploads/2017/01/bbq-370x247.jpg",
      quantity: 1,
      category: "Pizza",
    },
    {
      _id: "2",
      name: "Spaghetti Carbonara",
      price: 12.0,
      image: "https://via.placeholder.com/150",
      quantity: 2,
      category: "Pasta",
    },
    {
      _id: "3",
      name: "Grilled Chicken",
      price: 18.0,
      image: "https://via.placeholder.com/150",
      quantity: 1,
      category: "Grill",
    },
  ];

  const cartData = data || sampleData;

  return (
    <div className="w-full md:w-10/12 mx-auto bg-white shadow-lg rounded-lg p-6 mt-16">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Total Bookings: {cartData.length}</h2>
          <h2 className="text-xl font-semibold text-gray-800">
            Total Price: $
            {cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </h2>
        </div>
        <button className="bg-[#D1A054] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-[#b5853a]">
          Pay
        </button>
      </div>

      {/* Table for medium and large devices */}
      <div className="hidden md:block overflow-x-auto h-[500px]  overflow-auto ">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th className="py-2 px-4 text-center">ITEM IMAGE</th>
              <th className="py-2 px-4 text-center">QUANTITY</th>
              <th className="py-2 px-4 text-center">CATEGORY</th>
              <th className="py-2 px-4 text-center">PRICE</th>
              <th className="py-2 px-4 text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-4 px-4 text-center flex justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-lg object-cover"
                    />
                  </div>
                </td>
                <td className="py-4 px-4 text-center">{item.quantity}</td>
                <td className="py-4 px-4 text-center">{item.category}</td>
                <td className="py-4 px-4 text-center">${item.price.toFixed(2)}</td>
                <td className="py-4 px-4 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrashAlt size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card format for small devices */}
      <div className="block md:hidden">
        {cartData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-gray-100 p-4 mb-4 rounded-lg shadow-sm"
          >
            <div className="flex flex-col sm:flex sm:flex-row gap-4 items-center mb-4">
              <div className="w-24 h-24 bg-gray-300 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600">Category: {item.category}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right text-lg font-semibold text-gray-800">
              Price: ${item.price.toFixed(2)}
             </div>
              <div>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrashAlt size={20} />
                </button>
              </div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
