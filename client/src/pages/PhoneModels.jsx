import { useState, useEffect } from "react";
import axios from "axios";

import PhonesHeader from "../components/phones/PhonesHeader";
import PhonesStats from "../components/phones/PhonesStats";
import PhoneForm from "../components/phones/PhoneForm";
import PhonesGallery from "../components/phones/PhonesGallery";

function PhoneModels() {

const [phones,setPhones] = useState([]);

const [brand,setBrand] = useState("");
const [model,setModel] = useState("");
const [type,setType] = useState("");

const [search,setSearch] = useState("");
const [editIndex,setEditIndex] = useState(null);

const API = "https://mobile-repair-apis.onrender.com/api/phones";

///////////////////////////
// FETCH ALL PHONES
///////////////////////////

const fetchPhones = async () => {
  try {

    const brandsRes = await axios.get(`${API}/all-brands`);
    const brands = brandsRes.data.data;

    let allPhones = [];

    for (const b of brands) {

      const modelsRes = await axios.get(`${API}/models/${b.brand}`);

      const models = modelsRes.data.data;   // ✅ fix here

      const formatted = models.map((m) => ({
        brand: b.brand,
        model: m.model,
        type: m.type
      }));

      allPhones = [...allPhones, ...formatted];
    }

    setPhones(allPhones);

  } catch (err) {
    console.error(err);
    alert("Failed to load phones");
  }
};

useEffect(()=>{
fetchPhones();
},[]);



///////////////////////////
// ADD / UPDATE
///////////////////////////

const savePhone = async () => {

if(!brand || !model || !type){
alert("Fill all fields");
return;
}

try{

// UPDATE MODEL
if(editIndex !== null){

const oldPhone = filteredPhones[editIndex];

await axios.put(
`${API}/update-model/${oldPhone.brand}/${encodeURIComponent(oldPhone.model)}`,
{
newModel: model,
type
}
);

alert("Phone Updated");

}

// ADD MODEL
else{

await axios.post(`${API}/add-model`,{
brand,
model,
type
});

alert("Phone Added");

}

fetchPhones();

setBrand("");
setModel("");
setType("");
setEditIndex(null);

}catch(err){

alert(err.response?.data?.message || "Error");

}

};


///////////////////////////
// DELETE BRAND
///////////////////////////

const deletePhone = async (index)=>{

const phone = filteredPhones[index];

if(!window.confirm("Delete this phone model?")) return;

try{

await axios.delete(
`${API}/delete-model/${phone.brand}/${encodeURIComponent(phone.model)}`
);

alert("Phone Deleted");

fetchPhones();

}catch(err){

alert("Delete failed");

}

};


///////////////////////////
// EDIT (UI only for now)
///////////////////////////

const editPhone = (index)=>{

const phone = filteredPhones[index];

setBrand(phone.brand);
setModel(phone.model);
setType(phone.type);

setEditIndex(index);

window.scrollTo({
top:0,
behavior:"smooth"
});

};



///////////////////////////
// SEARCH
///////////////////////////

const filteredPhones = phones.filter((p)=>
p.model.toLowerCase().includes(search.toLowerCase())
);



///////////////////////////
// STATS
///////////////////////////

const androidCount = phones.filter(p=>p.type==="Android").length;
const iosCount = phones.filter(p=>p.type==="iPhone").length;



return(

<div className="space-y-6">

<PhonesHeader
search={search}
setSearch={setSearch}
/>

<PhonesStats
phones={phones}
androidCount={androidCount}
iosCount={iosCount}
/>

<PhoneForm

brand={brand}
model={model}
type={type}

setBrand={setBrand}
setModel={setModel}
setType={setType}

savePhone={savePhone}
editIndex={editIndex}

/>

<PhonesGallery

filteredPhones={filteredPhones}

editPhone={editPhone}
deletePhone={deletePhone}

/>

</div>

)

}

export default PhoneModels;