import { useState } from "react";
function JobCards() {
  const [phoneName, setPhoneName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [estimateBill, setEstimateBill] = useState("");
  const [issue, setIssue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Job Card Created Successfully ✅");

    // Clear form
    setPhoneName("");
    setCompanyName("");
    setEstimateBill("");
    setIssue("");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          New Job Card
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Phone Name */}
          <input
            type="text"
            placeholder="Phone Name"
            value={phoneName}
            onChange={(e) => setPhoneName(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          {/* Company Name */}
          <input
            type="text"
            placeholder="Company Name (Apple, Samsung, etc.)"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          {/* Estimate Bill */}
          <input
            type="number"
            placeholder="Estimate Bill ₹"
            value={estimateBill}
            onChange={(e) => setEstimateBill(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          {/* Issue Description */}
          <textarea
            placeholder="Issue Description"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            rows="3"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-400 transition duration-300 font-semibold"
          >
            Create Job Card
          </button>
        </form>
      </div>
    </div>
  );

}

export default JobCards;