import { useState } from "react";
import axios from "axios";
import { FaMobileAlt, FaTag, FaPlus } from "react-icons/fa";
import Headers from "../components/addphones/Headers";

function AddPhones() {

  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const phoneData = {
        type,
        brand,
        model
      };

      const res = await axios.post("/api/phones/add", phoneData);

      alert("Phone Added Successfully ✅");

      // reset form
      setType("");
      setBrand("");
      setModel("");

      console.log(res.data);

    } catch (error) {

      console.log(error);
      alert("Error adding phone ❌");

    }
  };

  return (

    <div className="p-6">

      <div className="bg-white p-6 rounded-2xl shadow border w-full">

        <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <FaMobileAlt />
          Add Phone
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Phone Type */}
          <div className="md:col-span-2">
            <label className="text-sm font-semibold text-gray-600 mb-2 block">
              Phone Type
            </label>

            <select
              value={type}
              onChange={(e)=>setType(e.target.value)}
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="">Select Type</option>
              <option value="Android">Android</option>
              <option value="iPhone">iPhone</option>
            </select>

          </div>

          {/* Brand */}
          <div>
            <label className="text-sm font-semibold text-gray-600 mb-2 block">
              Brand Name
            </label>

            <div className="flex items-center border rounded-xl px-3">
              <FaTag className="text-gray-400"/>
              <input
                type="text"
                placeholder="Enter Brand (Samsung, Apple...)"
                value={brand}
                onChange={(e)=>setBrand(e.target.value)}
                required
                className="p-3 w-full outline-none"
              />
            </div>
          </div>

          {/* Model */}
          <div>
            <label className="text-sm font-semibold text-gray-600 mb-2 block">
              Model Name
            </label>

            <div className="flex items-center border rounded-xl px-3">
              <FaMobileAlt className="text-gray-400"/>
              <input
                type="text"
                placeholder="Enter Model (A51, iPhone 13...)"
                value={model}
                onChange={(e)=>setModel(e.target.value)}
                required
                className="p-3 w-full outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 w-fit shadow-md hover:shadow-lg transition"
          >
            <FaPlus />
            Add Phone
          </button>

        </form>

      </div>

    </div>

  );

}

export default AddPhones; 