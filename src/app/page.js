"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "./components/Loading/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timer = setTimeout(() => setIsLoading(false), 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-[url('https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/background-texture.png')] bg-cover bg-center text-gray-800 p-4">
      <main className="">
        <Link href="/menu">
          <div className="text-lg font-semibold text-blue-500 hover:underline">
            View Menu
          </div>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
