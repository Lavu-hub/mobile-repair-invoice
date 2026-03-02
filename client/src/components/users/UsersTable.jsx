import {
FaUsers,
FaUserShield,
FaUserCog,
FaEdit,
FaTrash
} from "react-icons/fa";

function UsersTable({filteredUsers,editUser,deleteUser}){

return(

<div className="bg-white p-4 md:p-6 rounded-2xl shadow border overflow-x-auto">

<h2 className="text-lg md:text-xl font-semibold mb-4 flex gap-2 items-center">

<FaUsers/>

All Users

</h2>


<table className="min-w-[700px] w-full">

<thead className="border-b text-gray-500 text-sm">

<tr>

<th className="p-3 md:p-4 text-left">User</th>
<th className="p-3 md:p-4 text-left">Email</th>
<th className="p-3 md:p-4 text-left">Phone</th>
<th className="p-3 md:p-4 text-left">Role</th>
<th className="p-3 md:p-4 text-left">Actions</th>

</tr>

</thead>


<tbody>

{filteredUsers.map((user,index)=>(

<tr
key={index}
className="border-b hover:bg-gray-50 transition"
>


<td className="p-3 md:p-4 flex items-center gap-3">


<div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">

{user.name.charAt(0)}

</div>


<p className="font-semibold">

{user.name}

</p>


</td>



<td className="p-3 md:p-4 text-gray-600">

{user.email}

</td>



<td className="p-3 md:p-4">

{user.phone}

</td>



<td className="p-3 md:p-4">

<span className={`px-3 py-1 rounded-full text-xs md:text-sm flex gap-2 items-center w-fit
${user.role==="Admin"
?"bg-orange-100 text-orange-700"
:"bg-green-100 text-green-700"}
`}>

{user.role==="Admin" && <FaUserShield/>}
{user.role==="Mechanic" && <FaUserCog/>}

{user.role}

</span>

</td>



<td className="p-3 md:p-4 flex gap-4">

<button
onClick={()=>editUser(index)}
className="text-blue-500 hover:scale-110 transition"
>

<FaEdit/>

</button>



<button
onClick={()=>deleteUser(index)}
className="text-red-500 hover:scale-110 transition"
>

<FaTrash/>

</button>


</td>


</tr>

))}

</tbody>

</table>

</div>

)

}

export default UsersTable