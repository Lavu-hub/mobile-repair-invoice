import { useState } from "react";
function Mechanics() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const [mechanics, setMechanics] = useState([
    {
      name: "Ravi",
      email: "ravi@gmail.com",
      phone: "9876543210",
      password: "1234",
      role: "Senior"
    }
  ]);
  const addMechanic = () => {
    if (!name || !email || !phone || !password || !role) {
      alert("Please fill all fields");
      return;
    }
    const newMechanic = { name, email, phone, password, role };

    setMechanics([...mechanics, newMechanic]);

    // Clear fields
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRole("");
  };

  


  return (

    <div>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Mechanics
      </h1>

      {/* Add Mechanic */}
      <div className="bg-white p-6 rounded shadow mb-8">

        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded"
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-3 rounded"
          />

          <input
            type="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded"
          />

         <select
  value={role}
  onChange={(e) => setRole(e.target.value)}
  className="border p-3 rounded"
>
  <option value="">Select Role</option>
  <option value="Admin">Admin</option>
  <option value="Mechanic">Mechanic</option>
</select>

        </div>

        <button
          onClick={addMechanic}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
        >
          Add Mechanic
        </button>

      </div>
       <div className="bg-white p-6 rounded shadow overflow-auto">

        <h2 className="text-xl font-bold mb-4">
          All Mechanics
        </h2>

        <table className="min-w-full border">

          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Password</th>
              <th className="p-3 border">Role</th>
            </tr>
          </thead>

          <tbody>
            {mechanics.map((m, index) => (
              <tr key={index}>
                <td className="p-3 border">{m.name}</td>
                <td className="p-3 border">{m.email}</td>
                <td className="p-3 border">{m.phone}</td>
                <td className="p-3 border">{m.password}</td>
                <td className="p-3 border">{m.role}</td>
              </tr>
            ))}
          </tbody>

        </table>


       </div>

    </div>

  );

}

export default Mechanics;