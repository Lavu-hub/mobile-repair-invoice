import {
  FaUserShield,
  FaSignOutAlt,
  FaBell
} from "react-icons/fa";

function Navbar() {

  return (

    <div
      className="px-4 md:px-8 py-4 flex justify-between items-center shadow-md"
      style={{ backgroundColor: "var(--navbar)", color: "white" }}
    >

      {/* Left Side */}

      <h1 className="text-lg md:text-xl font-semibold flex items-center gap-2">

        <FaUserShield size={20} />

        Admin Dashboard

      </h1>



      {/* Right Side */}

      <div className="flex items-center gap-4">


        {/* Notification Icon */}

        <FaBell
          size={18}
          className="cursor-pointer hover:text-gray-300 transition"
        />


        {/* Logout Button */}

        <button
          className="
          flex items-center gap-2
          px-3 md:px-4 py-2
          bg-orange-500
          hover:bg-orange-600
          rounded-lg
          text-sm md:text-base
          transition
          "
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>


    </div>

  );

}

export default Navbar;