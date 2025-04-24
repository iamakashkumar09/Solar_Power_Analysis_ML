import React from "react";
import { Sun, BarChart3, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Feature = () => {
    const navigate = useNavigate();
  return (
    <div>
      <section id="features" className="bg-white py-16 px-8 grid md:grid-cols-3 gap-8">
        <div onClick={()=>navigate('/prediction')} className="text-center cursor-pointer hover:shadow-2xl transition-shadow duration-300">
          <Sun className="mx-auto text-yellow-500" size={40} />
          <h3 className="text-xl font-semibold mt-4">Real-Time Predictions</h3>
          <p className="text-gray-600 mt-2">
            Get accurate predictions based on up-to-date weather conditions.
          </p>
        </div>
        <div onClick={()=>navigate('/analytics')} className="text-center cursor-pointer hover:shadow-2xl transition-shadow duration-300">
          <BarChart3 className="mx-auto text-yellow-500" size={40} />
          <h3 className="text-xl font-semibold mt-4">Detailed Analytics</h3>
          <p className="text-gray-600 mt-2">
            Visualize energy trends and historical performance with easy-to-read charts.
          </p>
        </div>
        <div onClick={()=>navigate('/global-access')} className="text-center cursor-pointer hover:shadow-2xl transition-shadow duration-300">
          <Globe className="mx-auto text-yellow-500" size={40} />
          <h3 className="text-xl font-semibold mt-4">Global Access</h3>
          <p className="text-gray-600 mt-2">
            Accessible from anywhere — monitor your solar data from any device.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Feature