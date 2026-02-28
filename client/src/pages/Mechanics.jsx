import { useState } from "react";
import {
  FaUsers,
  FaUserPlus,
  FaUserShield,
  FaUserCog,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUser,
  FaEdit,
  FaTrash
} from "react-icons/fa";

function Users() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [password,setPassword] = useState("")
  const [role,setRole] = useState("")

  const [editIndex,setEditIndex] = useState(null)

  const [users,setUsers] = useState([
    { name:"Ravi",email:"ravi@gmail.com",phone:"9876543210",password:"1234",role:"Mechanic"},
    { name:"Admin",email:"admin@gmail.com",phone:"9999999999",password:"admin",role:"Admin"}
  ])


  // Add or Update User

  const saveUser = ()=>{

    if(!name || !email || !phone || !password || !role){
      alert("Fill all fields")
      return
    }

    const newUser = {name,email,phone,password,role}

    // Update Mode

    if(editIndex !== null){

      const updatedUsers = [...users]
      updatedUsers[editIndex] = newUser

      setUsers(updatedUsers)
      setEditIndex(null)

    }

    // Add Mode

    else{

      setUsers([...users,newUser])

    }

    setName("")
    setEmail("")
    setPhone("")
    setPassword("")
    setRole("")
  }



  // Edit Function

  const editUser = (index)=>{

    const user = users[index]

    setName(user.name)
    setEmail(user.email)
    setPhone(user.phone)
    setPassword(user.password)
    setRole(user.role)

    setEditIndex(index)

  }



  // Delete Function

  const deleteUser = (index)=>{

    const confirmDelete = window.confirm("Delete this user?")

    if(confirmDelete){

      const updatedUsers = users.filter((_,i)=> i !== index)
      setUsers(updatedUsers)

    }

  }



  return (

<div className="space-y-6">


{/* Header */}

<div className="flex items-center gap-3">

<FaUsers size={28} className="text-orange-500"/>

<h1 className="text-3xl font-bold">
User Management
</h1>

</div>



{/* Form */}

<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">

<h2 className="text-xl font-semibold mb-5 flex gap-2 items-center">

<FaUserPlus className="text-orange-500"/>

{editIndex !== null ? "Update User" : "Add New User"}

</h2>



<div className="grid md:grid-cols-2 gap-4">


{/* Name */}

<div className="flex items-center border border-gray-200 rounded-xl p-3 gap-3 bg-gray-50">

<FaUser className="text-gray-400"/>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="outline-none w-full bg-transparent"
/>

</div>



{/* Email */}

<div className="flex items-center border border-gray-200 rounded-xl p-3 gap-3 bg-gray-50">

<FaEnvelope className="text-gray-400"/>

<input
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="outline-none w-full bg-transparent"
/>

</div>



{/* Phone */}

<div className="flex items-center border border-gray-200 rounded-xl p-3 gap-3 bg-gray-50">

<FaPhone className="text-gray-400"/>

<input
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="outline-none w-full bg-transparent"
/>

</div>



{/* Password */}

<div className="flex items-center border border-gray-200 rounded-xl p-3 gap-3 bg-gray-50">

<FaLock className="text-gray-400"/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="outline-none w-full bg-transparent"
/>

</div>



{/* Role */}

<div className="md:col-span-2">

<label className="text-sm font-semibold text-gray-600">

User Role

</label>


<div className="flex items-center border border-gray-200 rounded-xl px-4 py-3 mt-1 bg-gray-50">

<FaUserShield className="text-gray-400 mr-3"/>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
className="w-full outline-none bg-transparent"
>

<option value="">Select Role</option>
<option value="Admin">Admin</option>
<option value="Mechanic">Mechanic</option>

</select>

</div>

</div>


</div>



{/* Button */}

<button
onClick={saveUser}
className="mt-6 flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 rounded-xl text-white transition"
>

<FaUserPlus/>

{editIndex !== null ? "Update User" : "Add User"}

</button>


</div>



{/* Table */}

<div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 overflow-x-auto">

<h2 className="text-xl font-semibold mb-4">

All Users

</h2>


<table className="min-w-full">


<thead className="bg-gray-50">

<tr>

<th className="p-3 text-left">Name</th>
<th className="p-3 text-left">Email</th>
<th className="p-3 text-left">Phone</th>
<th className="p-3 text-left">Role</th>
<th className="p-3 text-left">Action</th>

</tr>

</thead>


<tbody>

{users.map((user,index)=>(

<tr
key={index}
className="border-t hover:bg-gray-50"
>

<td className="p-3 font-medium">
{user.name}
</td>

<td className="p-3 text-gray-600">
{user.email}
</td>

<td className="p-3">
{user.phone}
</td>


<td className="p-3">

<span
className="px-3 py-1 rounded-full text-sm flex gap-2 items-center w-fit"
style={{
backgroundColor:user.role==="Admin"?"#FFF7ED":"#ECFDF5",
color:user.role==="Admin"?"#C2410C":"#065F46"
}}
>

{user.role==="Admin" && <FaUserShield/>}
{user.role==="Mechanic" && <FaUserCog/>}

{user.role}

</span>

</td>


<td className="p-3 flex gap-3">


<button
onClick={()=>editUser(index)}
className="text-blue-500 hover:text-blue-700"
>

<FaEdit size={18}/>

</button>



<button
onClick={()=>deleteUser(index)}
className="text-red-500 hover:text-red-700"
>

<FaTrash size={18}/>

</button>


</td>


</tr>

))}

</tbody>

</table>

</div>


</div>

  )
}

export default Users