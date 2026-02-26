import { FaMobileAlt, FaHeart, FaCopyright } from "react-icons/fa";

function Footer() {

  return (

    <div
      className="
      text-center md:flex md:justify-between md:items-center
      px-4 md:px-8 py-3 md:py-4
      text-sm md:text-base
      "
      style={{ backgroundColor: "var(--navbar)", color: "white" }}
    >

      {/* Left */}

      <div className="flex justify-center md:justify-start items-center gap-2 mb-2 md:mb-0">

        <FaMobileAlt />

        <span className="font-medium">

          MobileCare Repair System

        </span>

      </div>



      {/* Center */}

      <div className="flex justify-center items-center gap-2 text-gray-300 mb-2 md:mb-0">

        Made with

        <FaHeart className="text-red-400" />

        for Repair Shops

      </div>



      {/* Right */}

      <div className="flex justify-center md:justify-end items-center gap-2">

        <FaCopyright />

        2026 MobileCare

      </div>


    </div>

  );

}

export default Footer;