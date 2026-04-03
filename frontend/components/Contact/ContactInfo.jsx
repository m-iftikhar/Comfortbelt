import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4b2e1e] mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Reach out to us anytime — we’re here to help you.
        </p>
      </div>

      {/* Contact Items */}
      <div className="space-y-5">

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="bg-[#6B4226] text-white p-3 rounded-full">
            <Mail size={18} />
          </div>
          <div>
            <p className="font-semibold text-[#4b2e1e]">Email</p>
            <p className="text-gray-600 text-sm">
              muhammadiftikhar.dev@gmail.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="bg-[#6B4226] text-white p-3 rounded-full">
            <Phone size={18} />
          </div>
          <div>
            <p className="font-semibold text-[#4b2e1e]">Phone</p>
            <p className="text-gray-600 text-sm">
              +92 310 4628 296
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="bg-[#6B4226] text-white p-3 rounded-full">
            <MapPin size={18} />
          </div>
          <div>
            <p className="font-semibold text-[#4b2e1e]">Address</p>
            <p className="text-gray-600 text-sm">
              5400, Lahore, Pakistan
            </p>
          </div>
        </div>

      </div>

      {/* Extra Info */}
      <div className="bg-gray-100 p-4 rounded-lg mt-6">
        <p className="text-sm text-gray-600">
          We’re here for you 24/7 — anytime you need support!
        </p>
      </div>

    </div>
  );
}