// src/app/components/MenuItemBox.js
import { FiDollarSign } from "react-icons/fi";

const MenuItemBox = ({ item }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold text-red-700 mb-2">
          {item.name}
        </h3>
        <p className="text-gray-600 text-sm italic mb-4">
          {item.ingredients.join(", ")}
        </p>
        <div className="flex items-center justify-center gap-1 text-lg text-green-700 font-bold">
          <FiDollarSign className="text-green-700" />
          {item.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default MenuItemBox;
