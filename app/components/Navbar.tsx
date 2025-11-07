"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/features", label: "Features" },
    { href: "/plans", label: "Plans" },
    // { href: "/privacy-policy", label: "Privacy Policy" },
    // { href: "/terms-and-conditions", label: "Terms" },
  ];

  return (
    <nav className="bg-blue-900/90 backdrop-blur-md text-white flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3" onClick={handleLogoClick}>
        <Image
          src="/logo.png"
          alt="Stream Sport Logo"
          width={40}
          height={40}
          className="rounded-md"
        />
        <span className="text-2xl font-semibold tracking-wide">Stream Sport</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition-colors duration-300 ${
              pathname === link.href || (link.href.startsWith("#") && pathname === "/")
                ? "text-red-400"
                : "hover:text-gray-300"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-900/95 backdrop-blur-md flex flex-col items-center py-4 space-y-4 md:hidden shadow-lg z-40">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors duration-300 ${
                pathname === link.href || (link.href.startsWith("#") && pathname === "/")
                  ? "text-red-400"
                  : "hover:text-gray-300"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
