function JobCards() {
  return (

    <div>

      {/* Title */}

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Job Cards
      </h1>


      {/* Table Card */}

      <div className="bg-white p-4 md:p-6 rounded shadow">


        {/* Scrollable Table (Mobile Friendly) */}

        <div className="overflow-x-auto">


          <table className="min-w-full border text-sm md:text-base">

            <thead>

              <tr className="bg-gray-200 text-left">

                <th className="p-3 border whitespace-nowrap">
                  Customer
                </th>

                <th className="p-3 border whitespace-nowrap">
                  Phone
                </th>

                <th className="p-3 border whitespace-nowrap">
                  Problem
                </th>

                <th className="p-3 border whitespace-nowrap">
                  Status
                </th>

              </tr>

            </thead>


            <tbody>


              <tr className="hover:bg-gray-50">

                <td className="p-3 border whitespace-nowrap">
                  Rahul
                </td>

                <td className="p-3 border whitespace-nowrap">
                  Samsung A51
                </td>

                <td className="p-3 border whitespace-nowrap">
                  Display
                </td>

                <td className="p-3 border whitespace-nowrap text-orange-500 font-semibold">
                  Pending
                </td>

              </tr>



              <tr className="hover:bg-gray-50">

                <td className="p-3 border whitespace-nowrap">
                  Amit
                </td>

                <td className="p-3 border whitespace-nowrap">
                  iPhone 11
                </td>

                <td className="p-3 border whitespace-nowrap">
                  Battery
                </td>

                <td className="p-3 border whitespace-nowrap text-green-500 font-semibold">
                  Done
                </td>

              </tr>


            </tbody>

          </table>


        </div>


      </div>


    </div>

  );
}

export default JobCards;