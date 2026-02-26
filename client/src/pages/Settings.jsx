function Settings() {

  return (

    <div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">

        Settings

      </h1>


      <div className="bg-white p-4 md:p-6 rounded shadow max-w-xl">

        <h2 className="text-xl font-bold mb-4">

          Shop Details

        </h2>


        <div className="space-y-4">

          <input
            placeholder="Shop Name"
            className="border p-3 rounded w-full"
          />

          <input
            placeholder="Phone Number"
            className="border p-3 rounded w-full"
          />

          <input
            placeholder="Address"
            className="border p-3 rounded w-full"
          />

        </div>


        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">

          Save Settings

        </button>

      </div>

    </div>

  );

}

export default Settings;