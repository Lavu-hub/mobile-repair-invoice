function Invoices() {

  return (

    <div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">

        Invoices

      </h1>


      <div className="bg-white p-4 md:p-6 rounded shadow overflow-auto">

        <table className="min-w-full border">

          <thead>

            <tr className="bg-gray-200">

              <th className="p-3 border">

                Customer

              </th>

              <th className="p-3 border">

                Phone

              </th>

              <th className="p-3 border">

                Amount

              </th>

              <th className="p-3 border">

                Status

              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-3 border">

                Rahul

              </td>

              <td className="p-3 border">

                Samsung A51

              </td>

              <td className="p-3 border">

                ₹2500

              </td>

              <td className="p-3 border text-green-600">

                Paid

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Invoices;