function Dashboard() {
  return (

    <div className="p-4 md:p-6">

      {/* Title */}

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Dashboard
      </h1>


      {/* Cards Section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white p-6 rounded shadow text-center sm:text-left">

          <h2 className="text-gray-500">
            Total Phones
          </h2>

          <p className="text-2xl font-bold">
            120
          </p>

        </div>


        <div className="bg-white p-6 rounded shadow text-center sm:text-left">

          <h2 className="text-gray-500">
            Pending Jobs
          </h2>

          <p className="text-2xl font-bold">
            35
          </p>

        </div>


        <div className="bg-white p-6 rounded shadow text-center sm:text-left">

          <h2 className="text-gray-500">
            Completed Jobs
          </h2>

          <p className="text-2xl font-bold">
            80
          </p>

        </div>


        <div className="bg-white p-6 rounded shadow text-center sm:text-left">

          <h2 className="text-gray-500">
            Today's Jobs
          </h2>

          <p className="text-2xl font-bold">
            10
          </p>

        </div>

      </div>



      {/* Table Section */}

      <div className="bg-white p-4 md:p-6 rounded shadow">

        <h2 className="text-lg md:text-xl font-bold mb-4">
          Recent Jobs
        </h2>


        {/* Table Scroll Mobile */}

        <div className="overflow-x-auto">

          <table className="min-w-full border text-sm md:text-base">

            <thead>

              <tr className="bg-gray-200">

                <th className="p-3 border">Customer</th>

                <th className="p-3 border">Phone</th>

                <th className="p-3 border">Problem</th>

                <th className="p-3 border">Status</th>

              </tr>

            </thead>


            <tbody>

              <tr>

                <td className="p-3 border">Rahul</td>

                <td className="p-3 border">Samsung A51</td>

                <td className="p-3 border">Display Issue</td>

                <td className="p-3 border text-orange-500">
                  Pending
                </td>

              </tr>


              <tr>

                <td className="p-3 border">Amit</td>

                <td className="p-3 border">Redmi Note 10</td>

                <td className="p-3 border">Battery</td>

                <td className="p-3 border text-green-500">
                  Done
                </td>

              </tr>


              <tr>

                <td className="p-3 border">Suresh</td>

                <td className="p-3 border">iPhone 11</td>

                <td className="p-3 border">Speaker</td>

                <td className="p-3 border text-orange-500">
                  Pending
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>


    </div>

  );
}

export default Dashboard;