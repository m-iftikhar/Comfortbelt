"use client";

import { useState } from "react";
import Image from "next/image";
import main from "@/Assets/main.png";

export default function ProductSection() {
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(main);

  const images = [main, main, main, main];

  return (
    <div className="w-full bg-white">

      <div className="w-full px-4 md:px-10 lg:px-20 xl:px-32 py-10">
        
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

          {/* 🔥 LEFT SIDE (GALLERY) */}
          <div className="flex gap-4">

            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className="w-16 h-16 border rounded cursor-pointer overflow-hidden hover:opacity-80"
                >
                  <Image
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div className="relative w-full aspect-square bg-white rounded-lg p-6">
                <Image
                  src={activeImage}
                  alt="product"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-contain"
                />
              </div>
            </div>

          </div>

          {/* 🔥 RIGHT SIDE */}
          <div className="max-w-[500px]">

            <div className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded">
              GOING VIRAL | LOW STOCK
            </div>

            <h1 className="text-3xl font-bold mt-4">
              Buckle Free Belt
            </h1>

            <p className="text-yellow-500 mt-2">
              ⭐⭐⭐⭐⭐
              <span className="text-gray-600 ml-2 text-sm">
                Rated 4.9/5 by 264 reviews
              </span>
            </p>

            {/* Price */}
            <div className="flex items-center gap-3 mt-4">
              <span className="line-through text-gray-400">
                Rs. 5,673
              </span>

              <span className="text-2xl font-bold">
                Rs. 3,683
              </span>

              <span className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
                SAVE 35%
              </span>

              <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                Sold out
              </span>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>🔒 <b>Stays secure</b> without slipping</li>
              <li>😊 All-day comfort <b>without pressure</b></li>
              <li>👕 <b>Cleaner look</b> with no bulky buckle</li>
              <li>🎯 <b>Perfect fit</b> without constant adjusting</li>
            </ul>

            {/* Quantity */}
            <div className="mt-6">
              <p className="mb-2 font-medium">Quantity</p>
              <div className="flex items-center border w-32 justify-between px-4 py-2 rounded-lg">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            {/* Colors */}
            <div className="mt-5">
              <p className="mb-2 font-medium">Color: brown</p>
              <div className="flex gap-3">
                <div className="w-7 h-7 bg-[#8B4513] rounded-full border-2 border-black"></div>
                <div className="w-7 h-7 bg-black rounded-full border-2 border-gray-300"></div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8">
              <button className="w-full border border-gray-400 py-3 rounded-lg font-semibold text-gray-600">
                SOLD OUT
              </button>
            </div>

            <div className="mt-3">
              <button className="w-full bg-gradient-to-r from-purple-400 to-purple-600 text-white py-3 rounded-lg font-semibold">
                Buy with shop
                <span className="bg-white text-purple-600 px-2 py-1 rounded ml-2">
                  Pay
                </span>
              </button>
            </div>

            {/* Review */}
            <div className="mt-6 flex gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-700">
                  I got this as a gift for my boyfriend and he ended up loving it way more than I expected.
                </p>
                <div className="text-sm mt-2">
                  <b>Emily J.</b> ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="mt-6 space-y-3">
              <details className="border-b pb-3">
                <summary>🏷️ Limited-Time Offer</summary>
              </details>

              <details className="border-b pb-3">
                <summary>🚚 Free & Insured Shipping</summary>
              </details>

              <details className="border-b pb-3">
                <summary>🔄 30-Day Money-Back Guarantee</summary>
              </details>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}