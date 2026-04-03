import Image from "next/image";
import howitworks from "@/public/Assets/howitworks.png";

export default function HowItWorks() {
  return (
    <section className="bg-gray-100 py-10 sm:py-14 md:py-20 px-4">

      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center  mb-8 sm:mb-12 md:mb-16">
        How it works
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* LEFT SIDE */}
        <div className="relative pl-6 sm:pl-10">

          {/* Vertical Line (hide on very small screens if needed) */}
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-[2px] bg-gray-300"></div>

          {/* Step 1 */}
          <div className="flex items-start gap-3 sm:gap-4 mb-8 sm:mb-12 relative">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#8B5E3C] text-white font-bold text-sm sm:text-base z-10">
              1
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#4b2e1e]">
                Clip it on
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Attach to your belt loops
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 sm:gap-4 mb-8 sm:mb-12 relative">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#8B5E3C] text-white font-bold text-sm sm:text-base z-10">
              2
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#4b2e1e]">
                Adjust the fit
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Stretch to your size
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 sm:gap-4 relative">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#8B5E3C] text-white font-bold text-sm sm:text-base z-10">
              3
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#4b2e1e]">
                Move freely
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Stays in place all day
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 sm:space-y-6">
          <div className="rounded-xl overflow-hidden">
            <Image
              src={howitworks}
              alt="How it works"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

      </div>

     

    </section>
  );
}