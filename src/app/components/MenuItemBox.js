// src/app/components/MenuItemBox.js
import { FiDollarSign } from "react-icons/fi";

const MenuItemBox = ({ item }) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
      {/* Item Name and Ingredients */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-red-700">{item.name}</h3>
        <p className="text-gray-600 text-sm italic">
          {item.ingredients.join(", ")}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center text-lg text-green-700 font-bold ml-4">
        <FiDollarSign className="text-green-700" />
        {item.price.toFixed(2)}
      </div>
    </div>
  );
};

export default MenuItemBox;
