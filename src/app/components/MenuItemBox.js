// src/app/components/MenuItemBox.js

const MenuItemBox = ({ item }) => {
  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-200">
      {/* Item Name and Details */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-red-700">{item.name}</h3>

        {/* Description (if available) */}
        {item.description && (
          <p className="text-gray-600 text-sm italic">{item.description}</p>
        )}

        {/* Ingredients (if available) */}
        {item.ingredients && (
          <p className="text-gray-600 text-sm italic">
            {item.ingredients.join(", ")}
          </p>
        )}
      </div>

      {/* Price */}
      <div className="flex items-center text-lg text-green-700 font-bold ml-4">
        <span className="mr-1 !text-md">DKK </span> {item.price.toFixed(2)}
      </div>
    </div>
  );
};

export default MenuItemBox;
