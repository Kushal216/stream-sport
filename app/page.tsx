"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import ScheduleSection from "./components/ScheduleSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#001F3F] via-[#011A33] to-[#000814] min-h-screen text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Welcome to <span className="text-red-500">StreamSport</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Broadcast live matches seamlessly to Facebook, YouTube, and other
            social platforms — all from one unified hub built for sports lovers.
          </p>
          <Link href="/privacy-policy">
            <button className="mt-8 bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white px-8 py-3 rounded-full text-lg font-medium transition-transform transform hover:scale-105 shadow-lg">
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

      {/* About Section */}
      <section className="max-w-5xl mx-auto my-16 p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-center border border-white/10">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-red-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About StreamSport
        </motion.h2>
        <motion.p
          className="text-gray-200 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Say goodbye to switching between multiple platforms. StreamSport
          delivers high-definition sports streaming, live scores, and
          post-match insights — all in one place. Whether you’re tracking your
          favorite team or hosting live tournaments, we’ve got your back with
          seamless connectivity and crystal-clear quality.
        </motion.p>
      </section>

      {/* App Preview */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-6xl mx-auto mt-20 px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/sample2.jpg"
            alt="App Preview"
            width={450}
            height={350}
            className="rounded-2xl shadow-2xl border-2 border-white/20 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        <motion.div
          className="text-center md:text-left max-w-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-semibold text-red-400 mb-4">
            Experience Sports Like Never Before
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            Download our app to enjoy real-time updates, live analytics, and
            customizable notifications — right at your fingertips.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-500 px-8 py-3 rounded-full text-white font-medium transition-transform transform hover:scale-105 shadow-md">
            Download App
          </button>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-24"
      >
        <GallerySection />
      </motion.div>

      {/* Upcoming Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <ScheduleSection />
      </motion.div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
