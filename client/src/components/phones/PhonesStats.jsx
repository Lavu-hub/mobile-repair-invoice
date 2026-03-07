import { FaMobileAlt, FaAndroid, FaApple } from "react-icons/fa";

function PhonesStats({ phones, androidCount, iosCount }) {

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

      {/* Total Phones */}

      <div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            Total Phones
          </p>

          <h2 className="text-2xl md:text-3xl font-bold">
            {phones.length}
          </h2>

        </div>

        <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
          <FaMobileAlt size={22} />
        </div>

      </div>


      {/* Android */}

      <div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            Android Phones
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-green-600">
            {androidCount}
          </h2>

        </div>

        <div className="bg-green-100 p-3 rounded-xl text-green-600">
          <FaAndroid size={22} />
        </div>

      </div>


      {/* iPhones */}

      <div className="bg-white p-5 rounded-2xl shadow border flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            iPhones
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {iosCount}
          </h2>

        </div>

        <div className="bg-gray-200 p-3 rounded-xl text-black">
          <FaApple size={22} />
        </div>

      </div>

    </div>

  );

}

export default PhonesStats;