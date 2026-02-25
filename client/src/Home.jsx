function Home()
{
    return(
        <>
       
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          MobileCare
        </h1>

        <button className="bg-orange-500 hover:bg-orange-400 transition duration-300 px-5 py-2 rounded-lg font-medium">
          Book Repair
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Fast & Reliable Mobile Repair
        </h2>

        <p className="text-gray-600 max-w-xl mb-8">
          Screen replacement, battery issues, software problems —
          we fix everything with expert care and genuine parts.
        </p>

        <button className="bg-orange-500 hover:bg-orange-400 transition duration-300 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md">
          Get Started
        </button>
      </section>

    </div>
  
        </>
    );

}
export default Home;