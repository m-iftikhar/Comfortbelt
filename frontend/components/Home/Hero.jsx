import Image from "next/image";
import hero from "@/Assets/hero.png";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* LEFT SIDE (TEXT) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#412416] mb-4 sm:mb-6 leading-tight">
            Ditch the buckle.
            <br />
            Upgrade your jeans.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-md mx-auto md:mx-0">
            Experience ultimate comfort with our buckleless belt.
            No bulk, no pressure — just a perfect fit every time.
          </p>

          <button className="bg-[#6a4a2b] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded text-sm sm:text-base hover:bg-[#8a6a4a] transition">
            More info
          </button>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src={hero}
            alt="belt"
            priority
            className="
              w-[200px] 
              sm:w-[260px] 
              md:w-[320px] 
              lg:w-[400px] 
              xl:w-[450px] 
              h-auto object-contain
            "
          />
        </div>

      </div>
    </section>
  );
}