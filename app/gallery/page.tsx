"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#000814] via-[#001d3d] to-[#000814] text-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-24">
        {/* Page Title */}
        <h1 className="mb-10 text-center">
          <span className="block text-6xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
           Gallery
          </span>
        </h1>

        {/* Coming Soon Message */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg p-10 text-center max-w-lg">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-3">
            Coming Soon
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our gallery is getting ready! Stay tuned for amazing sports moments and highlights.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
