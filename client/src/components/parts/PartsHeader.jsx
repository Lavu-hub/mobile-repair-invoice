import { FaTools, FaSearch } from "react-icons/fa";

function PartsHeader() {

return(

<div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl text-white shadow-lg">

<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

<div className="flex gap-3 items-center">

<div className="bg-white/20 p-4 rounded-xl">
<FaTools size={22}/>
</div>

<div>

<h1 className="text-2xl font-bold">
Mobile Parts
</h1>

<p className="text-orange-100 text-sm">
Manage mobile spare parts inventory
</p>

</div>

</div>


<div className="flex items-center bg-white rounded-xl px-4 py-2 text-black gap-2 shadow">

<FaSearch className="text-gray-400"/>

<input
placeholder="Search parts..."
className="outline-none"
/>

</div>

</div>

</div>

)

}

export default PartsHeader;