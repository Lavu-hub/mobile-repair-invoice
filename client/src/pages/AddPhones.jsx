function JobCards() {

  return (

    <div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Job Cards
      </h1>


      {/* Add Job Form */}

      <div className="bg-white p-4 md:p-6 rounded shadow mb-8">

        <h2 className="text-xl font-bold mb-4">
          Create Job Card
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="text"
            placeholder="Customer Name"
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            placeholder="Phone Model"
            className="border p-3 rounded w-full"
          />

          <input
            type="text"
            placeholder="Customer Phone Number"
            className="border p-3 rounded w-full"
          />

          <select className="border p-3 rounded w-full">

            <option>Select Mechanic</option>
            <option>Ravi</option>
            <option>Amit</option>

          </select>

        </div>


        <textarea
          placeholder="Problem Description"
          className="border p-3 rounded w-full mt-4"
        />

        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">

          Save Job Card

        </button>

      </div>



      {/* Job List */}

      <div className="bg-white p-4 md:p-6 rounded shadow overflow-auto">

        <h2 className="text-xl font-bold mb-4">

          All Jobs

        </h2>

        <table className="min-w-full border">

          <thead>

            <tr className="bg-gray-200">

              <th className="p-3 border">Customer</th>

              <th className="p-3 border">Phone</th>

              <th className="p-3 border">Mechanic</th>

              <th className="p-3 border">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-3 border">Rahul</td>

              <td className="p-3 border">Samsung A51</td>

              <td className="p-3 border">Ravi</td>

              <td className="p-3 border text-orange-500">

                Pending

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default JobCards;