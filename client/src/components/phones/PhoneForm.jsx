import { FaMobileAlt, FaPlus } from "react-icons/fa";

function PhoneForm({

  brand,
  model,
  type,

  setBrand,
  setModel,
  setType,

  savePhone,
  editIndex

}) {

  return (

    <div className="bg-white p-5 md:p-8 rounded-2xl shadow border">

      <h2 className="text-lg md:text-xl font-semibold mb-6 flex gap-2 items-center">

        <FaMobileAlt />

        {editIndex !== null ? "Update Phone Model" : "Add Phone Model"}

      </h2>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Brand */}

        <input
          placeholder="Brand (Samsung, Apple)"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border rounded-xl p-3 outline-none"
        />

        {/* Model */}

        <input
          placeholder="Model (iPhone 13)"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="border rounded-xl p-3 outline-none"
        />

        {/* Type */}

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-xl p-3 outline-none"
        >

          <option value="">Select Type</option>
          <option value="Android">Android</option>
          <option value="iPhone">iPhone</option>

        </select>

      </div>


      <button
        onClick={savePhone}
        className="mt-6 bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-xl text-white font-semibold shadow flex gap-2 items-center"
      >

        <FaPlus />

        {editIndex !== null ? "Update Phone" : "Add Phone"}

      </button>

    </div>

  );

}

export default PhoneForm;