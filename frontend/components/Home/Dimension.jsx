import Image from "next/image";
import dimesion from "@/public/Assets/dimesion.png"; // your image

export default function Dimensions() {
  return (
    <section className="bg-gray-100 py-10 sm:py-14 md:py-20 px-4 text-center">
      {/* Top Small Heading */}
      <h3 className="text-3xl md:text-4xlfont-medium font-semibold mb-3">
        Designed to fit your everyday jeans
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-xs sm:max-w-md md:max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed">
        Made to work with standard belt loops,{" "}
        <span className="font-semibold">lightweight and flexible</span> so it
        fits naturally on your waist and stays out of the way all day.{" "}
        <span className="font-semibold">Simple size, perfect fit.</span>
      </p>

      {/* Image */}
      <div className="flex justify-center">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
          <Image
            src={dimesion}
            alt="Dimensions"
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
