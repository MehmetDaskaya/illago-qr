// src/app/menu/page.js
"use client";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import MenuItemBox from "../components/MenuItemBox";

const MenuPage = () => {
  const [menuData, setMenuData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [collapsedCategories, setCollapsedCategories] = useState({});

  // Initialize all categories as collapsed in useEffect after fetching data
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/main/public/menuData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
        // Set all categories as collapsed initially
        const initialCollapsedState = data.categories.reduce(
          (acc, category) => {
            acc[category.name] = true;
            return acc;
          },
          {}
        );
        setCollapsedCategories(initialCollapsedState);
      });

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle function for collapsing categories
  const toggleCategory = (categoryName) => {
    setCollapsedCategories((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  if (isLoading || !menuData) return <Loading />;

  return (
    <div className="min-h-screen bg-[url('https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/background-texture.png')] bg-cover bg-center text-gray-800 p-4">
      <div className="relative -left-4 max-w-6xl mx-auto">
        {/* Spiral Background on the Left */}
        <div
          className="absolute -left-2 top-0 h-full w-28 bg-repeat-y z-50"
          style={{
            backgroundImage:
              "url('https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/book-spring.png')",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-lg ml-12">
          {/* Adjust `ml-12` for spacing */}
          <h1 className="text-4xl font-extrabold font-edu text-center text-red-600 mb-10">
            Menukort
          </h1>
          {menuData.categories.map((category) => (
            <div key={category.name} className="mb-12 ">
              {/* Category Title */}
              <div
                onClick={() => toggleCategory(category.name)}
                className="flex items-center font-edu justify-between cursor-pointer"
              >
                <h2 className="text-3xl font-bold text-green-700 mb-4">
                  {category.name}
                </h2>
                <span className="text-gray-500">
                  {collapsedCategories[category.name] ? "▼" : "▲"}
                </span>
              </div>

              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />

              {/* Collapsible Category Items */}
              {!collapsedCategories[category.name] && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <MenuItemBox key={item.name} item={item} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
