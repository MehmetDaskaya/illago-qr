// src/app/components/Loading/Loading.js
export default function Loading() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <img
        src="https://raw.githubusercontent.com/MehmetDaskaya/illago-qr/refs/heads/main/public/Cafeillago-loading.gif"
        alt="Loading..."
        className="absolute inset-0 w-full h-full object-cover sm:object-fill"
      />
      <div className="absolute flex items-center justify-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
