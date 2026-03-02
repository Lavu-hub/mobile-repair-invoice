import {
FaUsers,
FaUser,
FaEnvelope,
FaPhone,
FaLock
} from "react-icons/fa";

function UserForm({

name,
email,
phone,
password,
role,
setName,
setEmail,
setPhone,
setPassword,
setRole,
saveUser,
editIndex

}){

return(

<div className="bg-white p-5 md:p-8 rounded-2xl shadow border">

<h2 className="text-lg md:text-xl font-semibold mb-6 flex gap-2 items-center">

<FaUser/>

{editIndex!==null?"Update User":"Add New User"}

</h2>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">


<div className="flex items-center border rounded-xl px-3">

<FaUser className="text-gray-400"/>

<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="p-3 md:p-4 outline-none w-full"
/>

</div>



<div className="flex items-center border rounded-xl px-3">

<FaEnvelope className="text-gray-400"/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="p-3 md:p-4 outline-none w-full"
/>

</div>



<div className="flex items-center border rounded-xl px-3">

<FaPhone className="text-gray-400"/>

<input
placeholder="Phone"
value={phone}
maxLength={10}
onChange={(e)=>{
const v=e.target.value.replace(/\D/g,"")
if(v.length<=10)setPhone(v)
}}
className="p-3 md:p-4 outline-none w-full"
/>

</div>



<div className="flex items-center border rounded-xl px-3">

<FaLock className="text-gray-400"/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="p-3 md:p-4 outline-none w-full"
/>

</div>



<div className="relative md:col-span-2">

<label className="text-sm font-semibold text-gray-600 mb-2 block">
User Role
</label>

<select
value={role}
onChange={(e)=>setRole(e.target.value)}
className="w-full px-4 py-4 rounded-xl border border-gray-300 
focus:border-orange-500 focus:ring-2 focus:ring-orange-200
outline-none transition bg-gray-50 hover:bg-white
text-gray-700 font-medium shadow-sm cursor-pointer"
>

<option value="">Select Role</option>

<option value="Admin">
Administrator
</option>

<option value="Mechanic">
Mechanic
</option>

</select>

</div>


</div>


<button
onClick={saveUser}
className="mt-6 w-full md:w-auto bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-xl text-white font-semibold shadow transition flex gap-2 items-center justify-center"
>

<FaUsers/>

{editIndex!==null?"Update User":"Add User"}

</button>


</div>

)

}

export default UserForm