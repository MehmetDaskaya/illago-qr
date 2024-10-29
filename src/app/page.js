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
    <div className="min-h-screen bg-[url('https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/illago-front.jpg')] bg-cover bg-center text-gray-800 p-4 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <main className="text-center max-w-2xl px-8 py-16 bg-white bg-opacity-90 rounded-xl shadow-xl">
        <img
          src="https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/illago-front.jpg" // Replace with the actual path to your logo image
          alt="Cafeteria il Lago Logo"
          className="mx-auto mb-6 w-32 h-32 object-contain" // Adjust width and height as needed
        />

        <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-600 mb-6 tracking-wide">
          Velkommen til Cafeteria il Lago
        </h1>
        <p className=" my-16 text-xl sm:text-2xl text-gray-700  leading-relaxed">
          Oplev den autentiske smag af hjemmelavede pizzaer og kebab i hjertet
          af Trekroner
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
          <Link href="/menu">
            <div className="px-8 py-3 text-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Se Madmenu
            </div>
          </Link>
          <Link href="/drikkemenu">
            <div className="px-8 py-3 text-2xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1">
              Se Drikkemenu
            </div>
          </Link>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="mt-24 w-full text-center">
        <p className="text-sm text-gray-500 font-light">
          © {new Date().getFullYear()} Cafeteria il Lago • Alle rettigheder
          forbeholdes
        </p>
      </footer>
    </div>
  );
}
