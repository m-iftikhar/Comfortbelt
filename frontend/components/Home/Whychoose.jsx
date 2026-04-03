
export default function WhyChoose() {
  return (
    <section className="bg-gray-100 py-20 text-center px-4 sm:px-0">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Why choose ComfortBelt?
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Traditional belts feel tight and uncomfortable,{" "}
        <span className="font-semibold">ComfortBelt</span> gives you a cleaner
        fit, more comfort and a better everyday experience without the hassle
      </p>

      {/* Comparison Table */}
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden ">

        {/* Header */}
        <div className="grid grid-cols-3 text-center border-b">
          <div></div>
          <div className="py-3 font-semibold text-brown">
            ComfortBelt
          </div>
          <div className="py-3 font-semibold text-gray-500">
            Others
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-3 items-center border-b">
          <div className="bg-[#6B4226] text-white py-4 font-semibold">
            COMFORT
          </div>
          <div className="text-green-500 text-xl">✔</div>
          <div className="text-red-500 text-xl">✖</div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 items-center border-b">
          <div className="bg-[#6B4226] text-white py-4 font-semibold">
            FIT
          </div>
          <div className="text-green-500 text-xl">✔</div>
          <div className="text-red-500 text-xl">✖</div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-3 items-center">
          <div className="bg-[#6B4226] text-white py-4 font-semibold rounded-bl-2xl">
            LOOK
          </div>
          <div className="text-green-500 text-xl">✔</div>
          <div className="text-red-500 text-xl">✖</div>
        </div>

      </div>
    </section>
  );
}