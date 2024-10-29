// src/app/menu/page.js
"use client";
import { useEffect, useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import Loading from "../components/Loading/Loading";
import MenuItemBox from "../components/MenuItemBox";

const MenuPage = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetch("/menuData.json")
      .then((res) => res.json())
      .then((data) => setMenuData(data));
  }, []);

  if (!menuData) return <Loading />;

  return (
    <div className="min-h-screen bg-[url('https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/background-texture.png')] bg-cover bg-center text-gray-800 p-4">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-center text-red-600 mb-10">
          Our Pizza Menu
        </h1>
        {menuData.categories.map((category) => (
          <div key={category.name} className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <FaPizzaSlice className="text-red-600 text-2xl" />
              <h2 className="text-3xl font-bold text-green-700">
                {category.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item) => (
                <MenuItemBox key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
