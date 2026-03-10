import {
FaMobileAlt,
FaAndroid,
FaApple,
FaEdit,
FaTrash
} from "react-icons/fa";

function PhonesGallery({ filteredPhones, editPhone, deletePhone }) {

return (

<div className="space-y-6">

{/* HEADER */}

<div className="flex items-center gap-3">

<div className="bg-orange-100 p-2 rounded-lg">
<FaMobileAlt className="text-orange-500"/>
</div>

<h2 className="text-2xl font-bold text-gray-700">
Phone Models
</h2>

</div>


{/* TABLE CARD */}

<div className="bg-white rounded-2xl shadow-md border overflow-hidden">

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="bg-gray-100 text-gray-600">

<tr>

<th className="p-4 text-left">Brand</th>
<th className="p-4 text-left">Model</th>
<th className="p-4 text-left">Type</th>
<th className="p-4 text-left">Actions</th>

</tr>

</thead>


<tbody>

{filteredPhones.map((phone,index)=>(

<tr
key={index}
className="border-b hover:bg-gray-50 transition"
>

{/* BRAND */}

<td className="p-4 font-semibold text-gray-700">
{phone.brand}
</td>


{/* MODEL */}

<td className="p-4 text-gray-600">
{phone.model}
</td>


{/* TYPE */}

<td className="p-4">

<span
className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 w-fit
${phone.type==="iPhone"
? "bg-gray-200 text-black"
: "bg-green-100 text-green-700"}
`}
>

{phone.type==="iPhone" && <FaApple />}
{phone.type==="Android" && <FaAndroid />}

{phone.type}

</span>

</td>


{/* ACTIONS */}

<td className="p-4 flex gap-3">

<button
onClick={()=>editPhone(index)}
className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition"
>

<FaEdit/>

</button>

<button
onClick={()=>deletePhone(index)}
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

export default PhonesGallery;