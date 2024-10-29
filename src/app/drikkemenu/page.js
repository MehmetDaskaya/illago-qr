// src/app/menu/page.js
"use client";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import MenuItemBox from "../components/MenuItemBox";

const DrikkeMenuPage = () => {
  const [menuData, setMenuData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch menu data
    fetch(
      "https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/main/public/drikkeMenuData.json"
    )
      .then((res) => res.json())
      .then((data) => setMenuData(data));

    // Set a timeout to control loading display
    const timer = setTimeout(() => setIsLoading(false), 2000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Show the loading component for at least 2 seconds
  if (isLoading || !menuData) return <Loading />;

  return (
    <div className="min-h-screen bg-[url('https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/background-texture.png')] bg-cover bg-center text-gray-800 p-4">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-center text-red-600 mb-10 font-maven">
          Menukort
        </h1>

        {menuData.categories.map((category) => (
          <div key={category.name} className="mb-12">
            {/* Category Title */}
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              {category.name}
            </h2>
            {/* Category Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-24 object-cover rounded-lg mb-4"
            />
            {/* Category Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

export default DrikkeMenuPage;
