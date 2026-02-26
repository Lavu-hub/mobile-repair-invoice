import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaClipboardList,
  FaUsers,
  FaFileInvoice,
  FaCog,
  FaMobileAlt
} from "react-icons/fa";

function Sidebar() {

  const [open, setOpen] = useState(false);
  const location = useLocation();


  const activeLink = (path) =>
    location.pathname === path
      ? "bg-white text-black shadow-md"
      : "hover:bg-gray-700";


  return (
    <>

      {/* Mobile Topbar */}

      <div
        className="md:hidden flex justify-between items-center p-4 text-white"
        style={{ backgroundColor: "var(--sidebar)" }}
      >

        <h2 className="text-xl font-bold tracking-wide flex items-center gap-2">
          <FaMobileAlt />
          MobileCare
        </h2>


        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          ☰
        </button>

      </div>



      {/* Sidebar */}

      <div
        className={`
          fixed md:static
          top-0 left-0
          min-h-screen
          w-64
          text-white
          p-6
          z-50
          flex flex-col
          transform ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          transition duration-300
        `}
        style={{
          backgroundColor: "var(--sidebar)"
        }}
      >


        {/* Close Mobile */}

        <div className="md:hidden flex justify-end mb-4">

          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
          >
            ✕
          </button>

        </div>



        {/* Logo */}

        <h2 className="text-2xl font-bold mb-10 tracking-wide flex items-center gap-2">

          <FaMobileAlt size={22} />

          MobileCare

        </h2>



        {/* Menu */}

        <ul className="space-y-3 text-[17px] flex-1">


          <li>

            <Link
              to="/"
              className={`flex items-center gap-3 p-3 rounded-lg transition ${activeLink("/")}`}
              onClick={() => setOpen(false)}
            >
              <FaTachometerAlt size={18} />
              Dashboard
            </Link>

          </li>



          <li>

            <Link
              to="/jobcards"
              className={`flex items-center gap-3 p-3 rounded-lg transition ${activeLink("/jobcards")}`}
              onClick={() => setOpen(false)}
            >
              <FaClipboardList size={18} />
              Job Cards
            </Link>

          </li>



          <li>

            <Link
              to="/mechanics"
              className={`flex items-center gap-3 p-3 rounded-lg transition ${activeLink("/mechanics")}`}
              onClick={() => setOpen(false)}
            >
              <FaUsers size={18} />
              Mechanics
            </Link>

          </li>



          <li>

            <Link
              to="/invoices"
              className={`flex items-center gap-3 p-3 rounded-lg transition ${activeLink("/invoices")}`}
              onClick={() => setOpen(false)}
            >
              <FaFileInvoice size={18} />
              Invoices
            </Link>

          </li>



          <li>

            <Link
              to="/settings"
              className={`flex items-center gap-3 p-3 rounded-lg transition ${activeLink("/settings")}`}
              onClick={() => setOpen(false)}
            >
              <FaCog size={18} />
              Settings
            </Link>

          </li>


        </ul>



        {/* Bottom */}

        <div className="text-sm opacity-60">

          © 2026 MobileCare

        </div>


      </div>



      {/* Overlay */}

      {open && (

        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black opacity-40 md:hidden"
        ></div>

      )}

    </>
  );
}

export default Sidebar;