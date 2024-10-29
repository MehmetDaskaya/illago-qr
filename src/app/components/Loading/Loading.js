// src/app/components/Loading/Loading.js
import { useEffect, useState } from "react";

export default function Loading() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen is mobile or desktop
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check
    checkIfMobile();

    // Event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Conditionally render the GIF based on device type */}
      {isMobile ? (
        <img
          src="https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/CafeillagoYourStory.gif"
          alt="Loading..."
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src="https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/Cafeillago-loading.gif"
          alt="Loading..."
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Loading Spinner */}
      <div className="absolute flex items-center justify-center">
        {isMobile ? (
          <div className=" relative top-20 w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        ) : (
          <div className="relative top-40  w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        )}
      </div>
    </div>
  );
}
