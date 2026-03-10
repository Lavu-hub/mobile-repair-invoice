import {
FaUsers,
FaUserShield,
FaUserCog,
FaEdit,
FaTrash
} from "react-icons/fa";

function UsersTable({ filteredUsers, editUser, deleteUser }) {

return (

<div className="space-y-6">

{/* HEADER */}

<div className="flex items-center gap-3">

<div className="bg-orange-100 p-2 rounded-lg">
<FaUsers className="text-orange-500"/>
</div>

<h2 className="text-2xl font-bold text-gray-700">
Users Management
</h2>

</div>


{/* TABLE CARD */}

<div className="bg-white rounded-2xl shadow-md border overflow-hidden">

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="bg-gray-100 text-gray-600">

<tr>

<th className="p-4 text-left">User</th>
<th className="p-4 text-left">Email</th>
<th className="p-4 text-left">Phone</th>
<th className="p-4 text-left">Role</th>
<th className="p-4 text-left">Actions</th>

</tr>

</thead>


<tbody>

{filteredUsers.map((user,index)=>(

<tr
key={index}
className="border-b hover:bg-gray-50 transition"
>


{/* USER */}

<td className="p-4 flex items-center gap-3">

<div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">

{user.name.charAt(0)}

</div>

<div>

<p className="font-semibold text-gray-700">
{user.name}
</p>

</div>

</td>


{/* EMAIL */}

<td className="p-4 text-gray-600">

{user.email}

</td>


{/* PHONE */}

<td className="p-4 text-gray-700">

{user.phone}

</td>


{/* ROLE */}

<td className="p-4">

<span
className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit
${user.role==="Admin"
? "bg-orange-100 text-orange-700"
: "bg-green-100 text-green-700"}
`}
>

{user.role==="Admin" && <FaUserShield />}
{user.role==="Mechanic" && <FaUserCog />}

{user.role}

</span>

</td>


{/* ACTIONS */}

<td className="p-4 flex gap-3">

<button
onClick={()=>editUser(index)}
className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition"
>

<FaEdit/>

</button>


<button
onClick={()=>deleteUser(index)}
className="bg-red-50 hover:bg-red-100 text-red-600 p-2 rounded-lg transition"
>

<FaTrash/>

</button>

</td>


</tr>

))}

</tbody>

</table>

</div>

</div>

</div>

)

}

export default UsersTable;