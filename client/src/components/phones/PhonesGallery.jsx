import {
FaMobileAlt,
FaAndroid,
FaApple,
FaEdit,
FaTrash
} from "react-icons/fa";

function PhonesGallery({ filteredPhones, editPhone, deletePhone }) {

return (

<div className="bg-white p-4 md:p-6 rounded-2xl shadow border overflow-x-auto">

<h2 className="text-lg md:text-xl font-semibold mb-4 flex gap-2 items-center">

<FaMobileAlt />

All Phone Models

</h2>

<table className="min-w-[700px] w-full">

<thead className="border-b text-gray-500 text-sm">

<tr>

<th className="p-3 md:p-4 text-left">Brand</th>
<th className="p-3 md:p-4 text-left">Model</th>
<th className="p-3 md:p-4 text-left">Type</th>
<th className="p-3 md:p-4 text-left">Actions</th>

</tr>

</thead>

<tbody>

{filteredPhones.map((phone,index)=>(

<tr
key={index}
className="border-b hover:bg-gray-50 transition"
>

<td className="p-3 md:p-4 font-semibold">
{phone.brand}
</td>

<td className="p-3 md:p-4 text-gray-600">
{phone.model}
</td>

<td className="p-3 md:p-4">

<span className={`px-3 py-1 rounded-full text-xs md:text-sm flex gap-2 items-center w-fit
${phone.type==="iPhone"
? "bg-gray-200 text-black"
: "bg-green-100 text-green-700"}
`}>

{phone.type==="iPhone" && <FaApple />}
{phone.type==="Android" && <FaAndroid />}

{phone.type}

</span>

</td>

<td className="p-3 md:p-4 flex gap-4">

<button
onClick={()=>editPhone(index)}
className="text-blue-500 hover:scale-110 transition"
>

<FaEdit/>

</button>

<button
onClick={()=>deletePhone(index)}
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

export default PhonesGallery;