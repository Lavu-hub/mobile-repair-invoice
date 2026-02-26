function Home() {

  return (

    <div className="min-h-screen">

      
      {/* Navbar */}

      <nav className="navbar px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold tracking-wide">

          MobileCare

        </h1>


        <button className="btn-primary px-5 py-2 rounded-lg font-medium">

          Book Repair

        </button>

      </nav>




      {/* Hero Section */}

      <section className="flex flex-col items-center justify-center text-center py-20 px-6">


        <h2 className="text-4xl font-bold mb-4">

          Fast & Reliable Mobile Repair

        </h2>



        <p className="text-gray-500 max-w-xl mb-8">

          Screen replacement, battery issues, software problems —

          we fix everything with expert care and genuine parts.

        </p>



        <button className="btn-primary px-6 py-3 rounded-xl text-lg font-semibold shadow-md">

          Get Started

        </button>


      </section>



      {/* Cards Section */}

      <div className="grid grid-cols-3 gap-6 px-10 pb-10">


        <div className="card">

          <h3 className="text-lg font-semibold mb-2">

            Screen Repair

          </h3>

          <p className="text-gray-500">

            Quick screen replacement service.

          </p>

        </div>



        <div className="card">

          <h3 className="text-lg font-semibold mb-2">

            Battery Replacement

          </h3>

          <p className="text-gray-500">

            Long lasting battery installation.

          </p>

        </div>



        <div className="card">

          <h3 className="text-lg font-semibold mb-2">

            Software Fix

          </h3>

          <p className="text-gray-500">

            Fast software troubleshooting.

          </p>

        </div>


      </div>


    </div>

  );

}

export default Home;