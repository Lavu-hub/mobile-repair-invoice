import { FaUsers,FaUserShield,FaUserCog } from "react-icons/fa";

function UsersStats({users,adminCount,mechCount}){

return(

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">


<div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

<div>

<p className="text-gray-500 text-sm">
Total Users
</p>

<h2 className="text-2xl md:text-3xl font-bold">
{users.length}
</h2>

</div>

<div className="bg-orange-100 p-3 rounded-xl text-orange-600">
<FaUsers size={22}/>
</div>

</div>



<div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

<div>

<p className="text-gray-500 text-sm">
Admins
</p>

<h2 className="text-2xl md:text-3xl font-bold text-orange-600">
{adminCount}
</h2>

</div>

<div className="bg-orange-100 p-3 rounded-xl text-orange-600">
<FaUserShield size={22}/>
</div>

</div>



<div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

<div>

<p className="text-gray-500 text-sm">
Mechanics
</p>

<h2 className="text-2xl md:text-3xl font-bold text-green-600">
{mechCount}
</h2>

</div>

<div className="bg-green-100 p-3 rounded-xl text-green-600">
<FaUserCog size={22}/>
</div>

</div>


</div>

)

}

export default UsersStats