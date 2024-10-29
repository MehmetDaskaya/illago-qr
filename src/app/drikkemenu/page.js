"use client";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import MenuItemBox from "../components/MenuItemBox";

const DrikkeMenuPage = () => {
  const [menuData, setMenuData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [collapsedCategories, setCollapsedCategories] = useState({});

  useEffect(() => {
    // Fetch menu data
    fetch(
      "https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/main/public/drikkeMenuData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setMenuData(data);
        // Initialize all categories as collapsed
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
      <div className="max-w-6xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-edu font-extrabold text-center text-red-600 mb-10">
          Menukort
        </h1>

        {menuData.categories.map((category) => (
          <div key={category.name} className="mb-12">
            {/* Category Title with Toggle */}
            <div
              onClick={() => toggleCategory(category.name)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h2 className="text-3xl font-edu font-bold text-green-700 mb-4">
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
              className="w-full h-24 object-cover rounded-lg mb-4"
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
  );
};

export default DrikkeMenuPage;
