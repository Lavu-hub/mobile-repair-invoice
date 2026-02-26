function Mechanics() {

  return (

    <div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Mechanics
      </h1>


      {/* Add Mechanic */}

      <div className="bg-white p-4 md:p-6 rounded shadow mb-8">

        <h2 className="text-xl font-bold mb-4">

          Add Mechanic

        </h2>


        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Mechanic Name"
            className="border p-3 rounded"
          />

          <input
            placeholder="Phone Number"
            className="border p-3 rounded"
          />

        </div>

        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">

          Add Mechanic

        </button>

      </div>



      {/* Mechanic List */}

      <div className="bg-white p-4 md:p-6 rounded shadow overflow-auto">

        <h2 className="text-xl font-bold mb-4">

          All Mechanics

        </h2>


        <table className="min-w-full border">

          <thead>

            <tr className="bg-gray-200">

              <th className="p-3 border">

                Name

              </th>

              <th className="p-3 border">

                Phone

              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-3 border">

                Ravi

              </td>

              <td className="p-3 border">

                9876543210

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Mechanics;