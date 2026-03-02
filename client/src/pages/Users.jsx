import { useEffect, useState } from "react";
import axios from "axios";

import UsersHeader from "../components/users/UsersHeader";
import UsersStats from "../components/users/UsersStats";
import UserForm from "../components/users/UserForm";
import UsersTable from "../components/users/UsersTable";

const API = "https://mobile-repair-apis.onrender.com/api/auth";

function Users() {

const [users,setUsers] = useState([]);

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("");

const [search,setSearch] = useState("");

const [editIndex,setEditIndex] = useState(null);
const [editId,setEditId] = useState(null);



///////////////////////////
// GET USERS
///////////////////////////

const getUsers = async()=>{

try{

const res = await axios.get(`${API}/users`);

setUsers(res.data.data);

}
catch(err){

console.log(err);

}

}

useEffect(()=>{

getUsers();

},[]);



///////////////////////////
// ADD + UPDATE USER
///////////////////////////

const saveUser = async()=>{

if(!name || !email || !password || !role){

alert("Fill all fields");
return;

}

try{

// UPDATE USER

if(editId){

await axios.put(`${API}/users/${editId}`,{

name,
email,
phone,
password,
role: role.toLowerCase()

});

alert("User Updated");

}

// ADD USER

else{

await axios.post(`${API}/register`,{

name,
email,
phone,
password,
role: role.toLowerCase()

});

alert("User Added");

}

getUsers();

setName("");
setEmail("");
setPhone("");
setPassword("");
setRole("");

setEditIndex(null);
setEditId(null);

}
catch(err){

alert(err.response?.data?.message || "Error");

}

};



///////////////////////////
// DELETE USER
///////////////////////////

const deleteUser = async(id)=>{

if(!window.confirm("Delete this user?")) return;

try{

await axios.delete(`${API}/users/${id}`);

alert("User Deleted");

getUsers();

}
catch(err){

console.log(err);

}

};



///////////////////////////
// EDIT USER
///////////////////////////

const editUser = (index) => {

const user = filteredUsers[index];

// Auto fill form
setName(user.name);
setEmail(user.email);
setPhone(user.phone);
setPassword(user.password); // password bhi fill hoga

setRole(
user.role === "admin" ? "Admin" : "Mechanic"
);

setEditIndex(index);
setEditId(user._id);

// Scroll to form
window.scrollTo({
top:0,
behavior:"smooth"
});

};


///////////////////////////
// FILTER
///////////////////////////

const filteredUsers = users.filter((u)=>

u.name.toLowerCase().includes(search.toLowerCase())

);



///////////////////////////
// STATS
///////////////////////////

const adminCount = users.filter(u=>u.role==="admin").length;

const mechCount = users.filter(u=>u.role==="mechanic").length;



return(

<div className="space-y-6">

<UsersHeader
search={search}
setSearch={setSearch}
/>

<UsersStats
users={users}
adminCount={adminCount}
mechCount={mechCount}
/>

<UserForm

name={name}
email={email}
phone={phone}
password={password}
role={role}

setName={setName}
setEmail={setEmail}
setPhone={setPhone}
setPassword={setPassword}
setRole={setRole}

saveUser={saveUser}
editIndex={editIndex}

/>

<UsersTable

filteredUsers={filteredUsers}

editUser={editUser}

deleteUser={(index)=>deleteUser(filteredUsers[index]._id)}

/>

</div>

)

}

export default Users;