"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#001F3F] via-[#011A33] to-[#000814] min-h-screen text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
<section className="relative flex flex-col justify-center items-center text-center py-14 px-6 overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
<h1 className="mb-3 text-center">
  <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
    Welcome to
  </span>
  <span className="block text-6xl md:text-7xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
    Stream Sport
  </span>
</h1>



    {/* Combined About Section */}
    <section className="max-w-4xl mx-auto my-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg text-center border border-white/10">
      <motion.h2
        className="text-3xl font-semibold mb-3 text-red-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      </motion.h2>
      <motion.p
        className="text-gray-200 leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Broadcast live matches seamlessly to Facebook, YouTube, and other
        social platforms all from one unified hub built for sports lovers.
        Say goodbye to switching between multiple platforms StreamSport
        delivers high-definition sports streaming, live scores, and
        post-match insights all in one place. Whether you’re tracking your
        favorite team or hosting live tournaments, StreamSport has you
        covered with seamless connectivity and crystal-clear quality.
      </motion.p>
    </section>

    <Link href="/privacy-policy">
      <button className="mt-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-transform transform hover:scale-105 shadow-lg">
        Learn More
      </button>
    </Link>
  </motion.div>

  <motion.div
    className="absolute inset-0 opacity-20 bg-[url('/stadium-bg.jpg')] bg-cover bg-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    transition={{ duration: 1.5 }}
  />
</section>


      {/* App Preview Section - now closer to Hero */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-6xl mx-auto mt-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/sample3.jpg"
            alt="App Preview"
            width={420}
            height={320}
            className="rounded-2xl shadow-xl border border-white/20 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="text-center md:text-left max-w-md"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-3">
            Experience Sports Like Never Before
          </h3>
          <p className="text-gray-300 mb-4 text-lg">
            Download our app to enjoy real-time updates, live analytics, and
            customizable notifications — right at your fingertips.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 px-8 py-3 rounded-full text-white font-medium transition-transform transform hover:scale-105 shadow-md">
            Download App
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
