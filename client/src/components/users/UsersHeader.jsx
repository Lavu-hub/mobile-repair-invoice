import { FaUsers, FaSearch } from "react-icons/fa";

function UsersHeader({search,setSearch}){

return(

<div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 md:p-6 rounded-2xl text-white shadow-lg">

<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">


<div className="flex gap-3 items-center">

<div className="bg-white/20 p-3 md:p-4 rounded-xl">
<FaUsers size={22}/>
</div>

<div>

<h1 className="text-xl md:text-2xl font-bold">
Users Dashboard
</h1>

<p className="text-orange-100 text-sm">
Manage system users and mechanics
</p>

</div>

</div>


<div className="flex items-center bg-white rounded-xl px-4 py-2 text-black gap-2 shadow w-full md:w-auto">

<FaSearch className="text-gray-400"/>

<input
placeholder="Search user..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="outline-none w-full"
/>

</div>


</div>

</div>

)

}

export default UsersHeader