import {
  FaUserShield,
  FaSignOutAlt,
  FaBell
} from "react-icons/fa";

function Navbar() {
  return (
    <nav
      className="
      w-full
      flex items-center justify-between
      px-4 sm:px-6 md:px-8
      py-3 md:py-4
      shadow-md
      flex-wrap
      gap-3
      "
      style={{ backgroundColor: "var(--navbar)", color: "white" }}
    >

      {/* Left Side */}
      <h1 className="flex items-center gap-2 text-base sm:text-lg md:text-xl font-semibold">
        <FaUserShield className="text-lg md:text-xl" />
        <span className="hidden sm:inline">Admin Dashboard</span>
        <span className="sm:hidden">Admin</span>
      </h1>


      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-4">

        {/* Notification */}
        <div className="relative cursor-pointer hover:text-gray-300 transition">
          <FaBell className="text-lg md:text-xl" />
          
          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>


        {/* Logout Button */}
        <button
          className="
          flex items-center gap-2
          px-3 sm:px-4
          py-1.5 sm:py-2
          bg-orange-500
          hover:bg-orange-600
          rounded-lg
          text-xs sm:text-sm md:text-base
          transition
          "
        >
          <FaSignOutAlt />

          {/* Hide text on very small screens */}
          <span className="hidden sm:inline">
            Logout
          </span>

        </button>

      </div>

    </nav>
  );
}

export default Navbar;