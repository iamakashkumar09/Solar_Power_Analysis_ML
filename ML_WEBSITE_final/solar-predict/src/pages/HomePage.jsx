import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[500px] flex flex-col">

      {/* Hero Section */}
      <section className="flex-grow bg-gradient-to-br from-yellow-100 to-white px-8 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800 py-12">WELCOME TO THE DASHBOARD</h1>
        <h2 className="text-4xl font-bold mb-4 text-gray-800 mb-10">
          Predict Solar Energy Output with Precision
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Using machine learning to forecast solar power generation based on weather and environmental data.
        </p>
        <button
          onClick={() => navigate("/prediction")}
          className="bg-yellow-500 text-white px-6 py-2 text-lg rounded-xl shadow hover:scale-110 transition-all duration-300"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
