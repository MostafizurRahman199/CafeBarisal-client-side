
import { CiShoppingCart } from "react-icons/ci";

const CustomBadge = ({ count, children }) => {
  return (
    <div className="relative inline-block">
      {children}
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};

const AddToCardBadge = () => {
  return (
    <div className="flex items-center gap-8">
      <CustomBadge count={5}>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <CiShoppingCart className="text-xl text-black" />
        </button>
      </CustomBadge>
    </div>
  );
};

export default AddToCardBadge;
