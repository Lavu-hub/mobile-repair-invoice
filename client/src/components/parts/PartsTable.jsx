import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaTools } from "react-icons/fa";

function PartsTable(){

const API = "https://mobile-repair-apis.onrender.com/api";

const [parts,setParts] = useState([]);

const [editPart,setEditPart] = useState(null);

const [editForm,setEditForm] = useState({
partName:"",
type:"",
price:"",
stock:""
});

//////////////////////////////////////////////////
// FETCH PARTS
//////////////////////////////////////////////////

const fetchParts = async ()=>{

try{

const res = await axios.get(`${API}/parts/all-parts`);

setParts(res.data.data);

}catch(err){

console.error("Failed to load parts");

}

}

useEffect(()=>{

fetchParts();

},[]);

//////////////////////////////////////////////////
// GROUP PARTS
//////////////////////////////////////////////////

const groupedParts = parts.reduce((acc,part)=>{

const key = `${part.brand}-${part.model}`;

if(!acc[key]){
acc[key] = [];
}

acc[key].push(part);

return acc;

},{});

//////////////////////////////////////////////////
// DELETE
//////////////////////////////////////////////////

const deletePart = async(id)=>{

try{

await axios.delete(`${API}/parts/${id}`);

fetchParts();

}catch(err){

console.error("Delete failed");

}

}

//////////////////////////////////////////////////
// EDIT OPEN
//////////////////////////////////////////////////

const openEdit = (part)=>{

setEditPart(part);

setEditForm({
partName: part.partName,
type: part.type,
price: part.price,
stock: part.stock
});

}

//////////////////////////////////////////////////
// EDIT CHANGE
//////////////////////////////////////////////////

const handleEditChange = (field,value)=>{

setEditForm({
...editForm,
[field]:value
});

}

//////////////////////////////////////////////////
// UPDATE
//////////////////////////////////////////////////

const updatePart = async ()=>{

try{

await axios.put(`${API}/parts/${editPart._id}`,editForm);

setEditPart(null);

fetchParts();

}catch(err){

console.error("Update failed");

}

}

//////////////////////////////////////////////////
// UI
//////////////////////////////////////////////////

return(

<div className="space-y-8">

{/* PAGE HEADER */}

<div className="flex items-center justify-between">

<h2 className="text-2xl font-bold flex items-center gap-3 text-gray-700">

<div className="bg-orange-100 p-2 rounded-lg">
<FaTools className="text-orange-500"/>
</div>

Mobile Parts Inventory

</h2>

</div>


{/* PART LIST */}

{Object.keys(groupedParts).map((key)=>{

const partsList = groupedParts[key];

const { brand, model } = partsList[0];

return(

<div
key={key}
className="bg-white rounded-2xl shadow-md border overflow-hidden"
>

{/* CARD HEADER */}

<div className="flex justify-between items-center bg-gray-50 px-6 py-4 border-b">

<div>

<h3 className="text-lg font-semibold text-gray-800">
{brand}
</h3>

<p className="text-sm text-gray-500">
{model}
</p>

</div>

<div className="text-sm bg-gray-200 px-3 py-1 rounded-full">
{partsList.length} Parts
</div>

</div>


{/* TABLE */}

<div className="overflow-x-auto">

<table className="w-full text-sm">

<thead className="bg-gray-100 text-gray-600">

<tr>

<th className="p-4 text-left">Part Name</th>
<th className="p-4 text-left">Type</th>
<th className="p-4 text-left">Price</th>
<th className="p-4 text-left">Stock</th>
<th className="p-4 text-left">Actions</th>

</tr>

</thead>


<tbody>

{partsList.map((p)=>(

<tr
key={p._id}
className="border-b hover:bg-gray-50 transition"
>

<td className="p-4 font-medium text-gray-700">
{p.partName}
</td>

<td className="p-4">

<span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
{p.type}
</span>

</td>

<td className="p-4 font-semibold text-gray-700">
₹{p.price}
</td>

<td className="p-4">

<span
className={`px-2 py-1 rounded text-xs font-semibold ${
p.stock < 5
? "bg-red-100 text-red-600"
: "bg-green-100 text-green-600"
}`}
>

{p.stock} in stock

</span>

</td>

<td className="p-4 flex gap-3">

<button
onClick={()=>openEdit(p)}
className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition"
>

<FaEdit/>

</button>

<button
onClick={()=>deletePart(p._id)}
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

)

})}


{/* EDIT MODAL */}

{editPart && (

<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

<div className="bg-white rounded-2xl shadow-xl p-8 w-[420px] space-y-5">

<h3 className="text-xl font-semibold text-gray-700">
Edit Mobile Part
</h3>

<input
value={editForm.partName}
onChange={(e)=>handleEditChange("partName",e.target.value)}
placeholder="Part Name"
className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
/>

<input
value={editForm.type}
onChange={(e)=>handleEditChange("type",e.target.value)}
placeholder="Type (Original / Copy)"
className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
/>

<input
value={editForm.price}
onChange={(e)=>handleEditChange("price",e.target.value)}
placeholder="Price"
className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
/>

<input
value={editForm.stock}
onChange={(e)=>handleEditChange("stock",e.target.value)}
placeholder="Stock"
className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-400"
/>

<div className="flex justify-end gap-3 pt-3">

<button
onClick={()=>setEditPart(null)}
className="px-5 py-2 rounded-lg border hover:bg-gray-100"
>
Cancel
</button>

<button
onClick={updatePart}
className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow"
>
Update
</button>

</div>

</div>

</div>

)}

</div>

)

}

export default PartsTable;