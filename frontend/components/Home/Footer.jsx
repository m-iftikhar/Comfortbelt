"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#6a4a2b] text-white">

      {/* Top Section */}
      <div className="text-center py-10 px-4">
        <h3 className="text-lg mb-4">Quick links</h3>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <a
          href="https://instagram.com"
          target="_blank"
          className="inline-block mt-6 bg-[#5433eb] text-white px-4 py-2 rounded-full hover:bg-[#5433eb]/80 transition"
        >
          Follow on Instagram
        </a>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* LEFT */}
        <p className="text-sm text-gray-200 text-center sm:text-left">
          © 2026, ComfortBelt Powered by Muhammad Iftikhar
        </p>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 text-lg">

          <a href="https://facebook.com" target="_blank">
            <FaFacebookF className="hover:text-blue-400 transition" />
          </a>

          <a href="https://youtube.com" target="_blank">
            <FaYoutube className="hover:text-red-500 transition" />
          </a>

          <a href="https://tiktok.com" target="_blank">
            <FaTiktok className="hover:text-black transition" />
          </a>

          <a href="mailto:support@comfortbelt.com">
            <Mail className="w-5 h-5 hover:text-yellow-400 transition" />
          </a>

          <a href="https://instagram.com" target="_blank">
            <FaInstagram className="hover:text-purple-400 transition" />
          </a>

        </div>
      </div>

    </footer>
  );
}