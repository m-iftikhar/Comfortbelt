"use client";

import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path) =>
    `px-3 py-1 rounded transition-all duration-200 
     ${
       pathname === path
         ? "bg-[#e3a72f] text-black"
         : "hover:underline"
     }`;

  return (
    <div className="bg-white">

      {/* Top Banner */}
      <div className="bg-[#6a4a2b] text-white text-center py-2 text-xs sm:text-sm">
        Spring Sale — 35% Off
      </div>

      {/* Main Nav */}
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-12 py-4">

        {/* Logo */}
        <Link href="/" className="text-lg sm:text-xl font-bold text-[#412416]">
          ComfortBelt
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/product" className={linkClass("/product")}>Product</Link>
          <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Search */}
          <div className="flex items-center border rounded-full overflow-hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 shrink-0"
            >
              <Search size={18} />
            </button>

            <input
              type="text"
              placeholder="Search..."
              className={`bg-transparent outline-none text-sm transition-all duration-300
              ${searchOpen
                ? "w-28 sm:w-40 md:w-48 px-2 opacity-100"
                : "w-0 px-0 opacity-0"
              }`}
            />
          </div>

          {/* Icons */}
          <User className="cursor-pointer hidden sm:block" />
          <ShoppingCart className="cursor-pointer" />

          {/* ✅ Hamburger Button (FIXED) */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu />
          </button>

        </div>
      </div>

      {/* ✅ MOBILE MENU (moved outside) */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#6a4a2b] text-white flex flex-col justify-between">

          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={() => setMenuOpen(false)}>
              <X />
            </button>
          </div>

          {/* Links */}
          <div>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 text-lg ${
                pathname === "/" ? "bg-[#7a5633]" : ""
              }`}
            >
              Home
            </Link>

            <Link
              href="/product"
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 text-lg ${
                pathname === "/product" ? "bg-[#7a5633]" : ""
              }`}
            >
              Product
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-4 text-lg ${
                pathname === "/contact" ? "bg-[#7a5633]" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Bottom Account */}
          <div className="border-t border-white/20 px-6 py-4 flex items-center gap-3">
            <User className="w-5 h-5" />
            <span className="text-base font-medium">Account</span>
          </div>

        </div>
      )}

    </div>
  );
}