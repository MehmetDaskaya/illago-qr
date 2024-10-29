"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "./components/Loading/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    if (hasLoaded) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-[url('https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/background-texture.png')] bg-cover bg-center text-gray-800 p-4 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <main className="text-center max-w-xl px-6 py-12 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-4">
          Velkommen til Cafeteria il Lago
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Nyd Trekroners bedste hjemmelavede pizzaer og kebab
        </p>
        <div className="flex flex-col">
          <Link href="/menu">
            <div className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              Se Madmenu
            </div>
          </Link>
          <Link href="/menu">
            <div className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              Se Drikkemenu
            </div>
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-16 w-full text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Pizzeria • All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
