import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import JobCards from "./pages/JobCards";
import Mechanics from "./pages/Mechanics";
import Invoices from "./pages/Invoices";
import Settings from "./pages/Settings";

function Layout() {

  return (

    <BrowserRouter>

      <div className="flex flex-col md:flex-row min-h-screen">


        {/* Sidebar */}

        <Sidebar />


        <div className="flex flex-col flex-1">


          {/* Navbar */}

          <Navbar />


          {/* Main Content */}

          <div className="flex-1 p-4 md:p-6 bg-gray-100">

            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route path="/jobcards" element={<JobCards />} />

              <Route path="/mechanics" element={<Mechanics />} />

              <Route path="/invoices" element={<Invoices />} />

              <Route path="/settings" element={<Settings />} />

            </Routes>

          </div>


          {/* Footer */}

          <Footer />

        </div>

      </div>

    </BrowserRouter>

  );

}

export default Layout;