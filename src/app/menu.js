import { useEffect, useState } from "react";

const MenuPage = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetch("/menuData.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data));
  }, []);

  if (!menuData) return <div>Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Restaurant Menu</h1>
      {menuData.categories.map((category) => (
        <div key={category.name} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid gap-6">
            {category.items.map((item) => (
              <MenuItemBox key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const MenuItemBox = ({ item }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover"
      />
      <div className="p-4 flex-1">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-gray-600 text-sm">{item.ingredients.join(", ")}</p>
        <p className="text-gray-800 font-semibold mt-2">
          ${item.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default MenuPage;
