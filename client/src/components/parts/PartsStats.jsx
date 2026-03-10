import { FaTools, FaAndroid, FaApple } from "react-icons/fa";

function PartsStats(){

return(

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

<div>

<p className="text-gray-500 text-sm">
Total Parts
</p>

<h2 className="text-3xl font-bold">
120
</h2>

</div>

<div className="bg-orange-100 p-3 rounded-xl text-orange-600">
<FaTools size={22}/>
</div>

</div>


<div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

<div>

<p className="text-gray-500 text-sm">
Android Parts
</p>

<h2 className="text-3xl font-bold text-green-600">
80
</h2>

</div>

<div className="bg-green-100 p-3 rounded-xl text-green-600">
<FaAndroid size={22}/>
</div>

</div>


<div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

<div>

<p className="text-gray-500 text-sm">
iPhone Parts
</p>

<h2 className="text-3xl font-bold">
40
</h2>

</div>

<div className="bg-gray-200 p-3 rounded-xl text-black">
<FaApple size={22}/>
</div>

</div>

</div>

)

}

export default PartsStats;