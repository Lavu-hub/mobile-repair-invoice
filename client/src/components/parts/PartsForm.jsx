import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaTools, FaTrash } from "react-icons/fa";

function PartsForm(){

const API = "https://mobile-repair-apis.onrender.com/api";

const [brands,setBrands] = useState([]);
const [models,setModels] = useState([]);

const [brand,setBrand] = useState("");
const [model,setModel] = useState("");

const [parts,setParts] = useState([
 { part:"", type:"", price:"", stock:"" }
]);

////////////////////////////////////////////////////
// FETCH BRANDS
////////////////////////////////////////////////////

const fetchBrands = async ()=>{

try{

const res = await axios.get(`${API}/phones/all-brands`);
setBrands(res.data.data);

}catch(err){
console.error("Failed to load brands");
}

}

////////////////////////////////////////////////////
// FETCH MODELS
////////////////////////////////////////////////////

const fetchModels = async (selectedBrand)=>{

try{

const res = await axios.get(`${API}/phones/models/${selectedBrand}`);
setModels(res.data.data);

}catch(err){
console.error("Failed to load models");
}

}

////////////////////////////////////////////////////
// LOAD BRANDS
////////////////////////////////////////////////////

useEffect(()=>{
fetchBrands();
},[]);

////////////////////////////////////////////////////
// HANDLE BRAND
////////////////////////////////////////////////////

const handleBrandChange = (value)=>{

setBrand(value);
setModel("");
fetchModels(value);

}

////////////////////////////////////////////////////
// ADD ROW
////////////////////////////////////////////////////

const addRow = ()=>{

setParts([...parts,{ part:"", type:"", price:"", stock:"" }]);

}

////////////////////////////////////////////////////
// DELETE ROW
////////////////////////////////////////////////////

const deleteRow = (index)=>{

const updated = parts.filter((_,i)=> i !== index);
setParts(updated);

}

////////////////////////////////////////////////////
// UPDATE ROW
////////////////////////////////////////////////////

const updatePart = (index,field,value)=>{

const updated = [...parts];
updated[index][field] = value;

setParts(updated);

}

////////////////////////////////////////////////////
// SUBMIT PARTS
////////////////////////////////////////////////////

const handleSubmit = async () => {

if(!brand || !model){
alert("Please select brand and model");
return;
}

for(const p of parts){

if(!p.part || !p.type || !p.price || !p.stock){
alert("Please fill all part fields");
return;
}

}

try{

for(const p of parts){

await axios.post(`${API}/parts/add-part`,{

brand,
model,
partName: p.part,
type: p.type,
price: Number(p.price),
stock: Number(p.stock)

})

}

alert("Parts added successfully");

setParts([{ part:"", type:"", price:"", stock:"" }]);

}catch(err){

console.error(err.response?.data);
alert(err.response?.data?.message || "Error adding parts");

}

}

////////////////////////////////////////////////////
// UI
////////////////////////////////////////////////////

return(

<div className="bg-white p-6 md:p-8 rounded-2xl shadow border">

<h2 className="text-xl font-semibold mb-6 flex items-center gap-2">

<FaTools/>
Add Mobile Parts

</h2>


{/* BRAND + MODEL */}

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

<select
value={brand}
onChange={(e)=>handleBrandChange(e.target.value)}
className="border rounded-xl p-3 outline-none"
>

<option value="">Select Brand</option>

{brands.map((b,index)=>(
<option key={index} value={b.brand}>
{b.brand}
</option>
))}

</select>


<select
value={model}
onChange={(e)=>setModel(e.target.value)}
disabled={!brand}
className="border rounded-xl p-3 outline-none"
>

<option value="">Select Model</option>

{models.map((m,index)=>(
<option key={index} value={m.model}>
{m.model}
</option>
))}

</select>

</div>


{/* PART ROWS */}

<div className="space-y-4">

{parts.map((p,index)=>(

<div
key={index}
className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center"
>

<input
value={p.part}
onChange={(e)=>updatePart(index,"part",e.target.value)}
placeholder="Part Name"
className="border rounded-xl p-3 outline-none"
/>

<input
value={p.type}
onChange={(e)=>updatePart(index,"type",e.target.value)}
placeholder="Type (Original / Copy)"
className="border rounded-xl p-3 outline-none"
/>

<input
value={p.price}
onChange={(e)=>updatePart(index,"price",e.target.value)}
placeholder="Price"
className="border rounded-xl p-3 outline-none"
/>

<input
value={p.stock}
onChange={(e)=>updatePart(index,"stock",e.target.value)}
placeholder="Stock"
className="border rounded-xl p-3 outline-none"
/>

<button
onClick={()=>deleteRow(index)}
className="text-red-500 flex items-center gap-2"
>

<FaTrash/>
Remove

</button>

</div>

))}

</div>


{/* ADD ROW */}

<button
onClick={addRow}
className="mt-4 flex items-center gap-2 text-orange-600 font-semibold"
>

<FaPlus/>
Add Row

</button>


{/* SUBMIT */}

<button
onClick={handleSubmit}
className="mt-6 bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-xl text-white font-semibold shadow flex items-center gap-2"
>

<FaPlus/>
Add Parts

</button>

</div>

)

}

export default PartsForm;