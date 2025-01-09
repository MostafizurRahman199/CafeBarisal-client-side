




import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { useMutation, useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import ApiComponent from "../../../API/ApiComponent";
import Loading from "../../../components/Loading/Loading";
import ErrorPage from "../../../components/Error.jsx/ErrorPage";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import useMenu from "../../../hooks/useMenu";
import { FaRegEdit } from "react-icons/fa";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";


const ManageItems = () => {

  const {deleteMenuItem, updateMenuItem } = ApiComponent();

  const {menuData, isLoading, isError, error, refetch} = useMenu();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModalOpen = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  
  // console.log(selectedItem);
  const handleModalClose = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };


// console.log(selectedItem);

  const handleUpdate = () => {
    // Add your update logic here (e.g., API call to update item)
    // console.log(selectedItem);
    updateItemMutation.mutate(selectedItem);


    // console.log(updatedData)
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: "The item has been updated successfully.",
      timer: 1500,
      showConfirmButton: false,
    });
    handleModalClose();
    refetch(); // Refetch menu data
  };



    const deleteUserMutation = useMutation({
    mutationFn: (id) => deleteMenuItem(id),
    onSuccess: () => {
      refetch(); 
      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "The item has been deleted successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to delete the item. Please try again.",
      });
    },
  });





  const updateItemMutation = useMutation({
    mutationFn: (selectedItem) => updateMenuItem(selectedItem),
    onSuccess: () => {
      refetch();
      Swal.fire({
        icon: "success",
        title: "Item Updated!",
        text: "The user role has been updated successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update the user role. Please try again.",
      });
    },
  });




    const handleDelete = (id) => {
    // console.log("hello");
    // SweetAlert2 Confirmation Dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUserMutation.mutate(id); // Trigger deletion if confirmed
      }
    });
  };






//   {
//     "_id": "642c155b2c4774f05c36ee7e",
//     "name": "Fish Parmentier",
//     "recipe": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
//     "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-5-370x247.jpg",
//     "category": "popular",
//     "price": 14.5
// }


//   {
//     "_id": "677d3f401932dfe6d821aa11",
//     "name": "Pizza special",
//     "category": "pizza",
//     "price": 556,
//     "recipe": "I've made this several times, and we really like it. However, I like it much better as a thicker crust - I don't think it works well as a thin crust. Don't split the dough into two lumps, just spread the whole thing over the pizza pan. I didn't change the cooking time, and it was great.",
//     "imageUrls": [
//         "https://i.ibb.co/JkX8pk9/83804355.webp"
//     ],
//     "createdAt": "2025-01-07T14:50:40.288Z"
// }


  if (isLoading) {
    return <Loading height="screen" />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="w-full md:w-10/12 mx-auto">
      <SectionHeading
        title1={"---How many??---"}
        title2={"MANAGE ALL USERS"}
      ></SectionHeading>




    {/* Modal */}
    <Dialog
  open={isModalOpen}
  handler={handleModalClose}
  animate={{
    mount: { scale: 1, y: 0 },
    unmount: { scale: 0.9, y: -100 },
  }}
  className="max-h-[calc(100vh-20px)]  overflow-y-auto "
>
  <DialogHeader>Update Item</DialogHeader>
  <DialogBody>
    {selectedItem && (
      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={selectedItem.name}
            onChange={(e) =>
              setSelectedItem((prev) => ({ ...prev, name: e.target.value }))
            }
            className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-2"
          />
        </div>

        {/* Category Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            value={selectedItem.category}
            onChange={(e) =>
              setSelectedItem((prev) => ({ ...prev, category: e.target.value }))
            }
            className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-2"
          />
        </div>

        {/* Price Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={selectedItem.price}
            onChange={(e) =>
              setSelectedItem((prev) => ({
                ...prev,
                price: parseFloat(e.target.value),
              }))
            }
            className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-2"
          />
        </div>

        {/* Single Image URL */}
        {selectedItem.image && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              value={selectedItem.image}
              onChange={(e) =>
                setSelectedItem((prev) => ({
                  ...prev,
                  image: e.target.value,
                }))
              }
              className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-2"
            />
          </div>
        )}

        {/* Multiple Image URLs */}
        {selectedItem.imageUrls && (
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URLs
            </label>
            {selectedItem.imageUrls.map((url, index) => (
              <input
                key={index}
                type="url"
                value={url}
                onChange={(e) => {
                  setSelectedItem((prev) => {
                    const updatedUrls = [...prev.imageUrls];
                    updatedUrls[index] = e.target.value;
                    return { ...prev, imageUrls: updatedUrls };
                  });
                }}
                className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-2"
              />
            ))}
          </div>
        )}

        {/* Recipe Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Recipe</label>
          <textarea
            value={selectedItem.recipe}
            onChange={(e) =>
              setSelectedItem((prev) => ({ ...prev, recipe: e.target.value }))
            }
            className="mt-1 block w-full border-gray-300 border-2 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-3 px-2"
          ></textarea>
        </div>
      </div>
    )}
  </DialogBody>

  <DialogFooter className="gap-2">
    <Button variant="gradient" color="red" onClick={handleModalClose}>
      Cancel
    </Button>
    <Button variant="gradient" color="green" onClick={handleUpdate}>
      Update
    </Button>
  </DialogFooter>
</Dialog>










      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Users: {menuData.length}
          </h2>
        </div>

        {/* Users Table */}
        <div className="hidden md:block overflow-x-auto md:h-[300px] lg:h-[400px] overflow-auto">
          <table className="table-auto w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#D1A054] text-white font-normal">
                <th className="py-2 px-4 text-center">No.</th>
                <th className="py-2 px-4 text-center">Image</th>
                <th className="py-2 px-4 text-center">Name</th>
                <th className="py-2 px-4 text-center">Price</th>
                <th className="py-2 px-4 text-center">Created At</th>
                <th className="py-2 px-4 text-center">Role</th>
                <th className="py-2 px-4 text-center">Action</th>
                <th className="py-2 px-4 text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {menuData?.map((item, index) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="text-center">{index + 1}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg">
                      <img
                        src={item.image || item.imageUrls[0]                        }
                        alt={item.name}
                        className="w-full h-full rounded-lg object-cover"
                      />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">{item.name}</td>
                  <td className="py-4 px-4 text-center">{item.category}</td>
                  <td className="py-4 px-4 text-center">{item.price}</td>
                  <td className="py-4 px-4 text-center">
                    {new Date(item.createAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4 text-center ">
                  <button
                      onClick={() => handleModalOpen(item)}
                      className="bg-[#d1a054] btn hover:bg-[#d68916] text-xl text-white"
                    >
              
                     <FaRegEdit />
                    </button>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 btn hover:bg-red-800"
                    >
                      <FaTrashAlt size={18} className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="block md:hidden">
        {menuData?.map((item, index) => (
          <div
            key={item._id}
            className="flex flex-col bg-gray-100 p-4 mb-4 rounded-lg shadow-sm"
          >
            <div className="flex flex-col sm:flex sm:flex-row gap-4 items-center mb-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full">
                <img
                  src={item.image || item.imageUrls[0]}
                  alt={item.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-800  text-center break-word">
                  {item.name}
                </h3>
                <p className="text-gray-600 flex break-words text-[10px] text-center">{item.price}</p>
                <p className="text-gray-600 text-center">{new Date(item.createAt).toLocaleDateString()}</p>
              </div>
              <div className="text-right text-lg font-semibold text-gray-800">
               
              </div>
             <div className="flex items-center gap-2">
             <div>
                Edit
              </div>
              <div>
              <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 p-3 rounded-lg hover:bg-red-800"
                  >
                    <FaTrashAlt size={18} className="text-white" />
                  </button>
              </div>
             </div>
            </div>
          </div>
        ))}
      </div>


      </div>
    </div>
  );
};

export default ManageItems;

