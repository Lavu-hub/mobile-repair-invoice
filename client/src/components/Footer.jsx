import { FaMobileAlt, FaHeart, FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
      w-full
      flex flex-col md:flex-row
      items-center md:items-center
      justify-center md:justify-between
      gap-2 md:gap-4
      px-4 sm:px-6 md:px-8
      py-4
      text-sm sm:text-base
      text-center md:text-left
      "
      style={{ backgroundColor: "var(--navbar)", color: "white" }}
    >
      {/* Left */}
      <div className="flex items-center gap-2">
        <FaMobileAlt className="text-lg" />
        <span className="font-medium whitespace-nowrap">
          MobileCare Repair System
        </span>
      </div>

      {/* Center */}
      <div className="flex items-center gap-2 text-gray-300">
        <span>Made with</span>
        <FaHeart className="text-red-400 animate-pulse" />
        <span>for Repair Shops</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <FaCopyright />
        <span>2026 MobileCare</span>
      </div>
    </footer>
  );
}

export default Footer;