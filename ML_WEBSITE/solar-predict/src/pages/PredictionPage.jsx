// src/pages/PredictionPage.jsx
import React, { useState } from "react";

export default function PredictionPage() {
  const [formData, setFormData] = useState({
    avgTemperature: "",
    avgWindDirection: "",
    avgWindSpeed: "",
    relativeHumidity: "",
    avgWindSpeedPeriod: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const payload = {
        "Average Temperature (Day)": formData.avgTemperature,
        "Average Wind Direction (Day)": formData.avgWindDirection,
        "Average Wind Speed (Day)": formData.avgWindSpeed,
        "Relative Humidity": formData.relativeHumidity,
        "Average Wind Speed (Period)": formData.avgWindSpeedPeriod,
      };

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.prediction) {
        setResult(`🔋 Predicted Power Generated: ${data.prediction.toFixed(2)} kW`);
      } else {
        setResult(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setResult(`❌ Could not reach backend: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Solar Energy Prediction</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="avgTemperature" className="mb-2">Average Temperature (Day)</label>
            <input type="number" step="any" id="avgTemperature" name="avgTemperature" value={formData.avgTemperature} onChange={handleChange} className="border px-4 py-2 rounded-lg" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="avgWindDirection" className="mb-2">Average Wind Direction (Day)</label>
            <input type="number" step="any" id="avgWindDirection" name="avgWindDirection" value={formData.avgWindDirection} onChange={handleChange} className="border px-4 py-2 rounded-lg" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="avgWindSpeed" className="mb-2">Average Wind Speed (Day)</label>
            <input type="number" step="any" id="avgWindSpeed" name="avgWindSpeed" value={formData.avgWindSpeed} onChange={handleChange} className="border px-4 py-2 rounded-lg" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="relativeHumidity" className="mb-2">Relative Humidity</label>
            <input type="number" step="any" id="relativeHumidity" name="relativeHumidity" value={formData.relativeHumidity} onChange={handleChange} className="border px-4 py-2 rounded-lg" required />
          </div>

          <div className="flex flex-col">
            <label htmlFor="avgWindSpeedPeriod" className="mb-2">Average Wind Speed (Period)</label>
            <input type="number" step="any" id="avgWindSpeedPeriod" name="avgWindSpeedPeriod" value={formData.avgWindSpeedPeriod} onChange={handleChange} className="border px-4 py-2 rounded-lg" required />
          </div>
        </div>

        <button type="submit" className="w-full bg-yellow-500 text-white py-2 text-lg rounded-xl mt-6 hover:bg-yellow-600">
          {loading ? "Predicting..." : "Predict"}
        </button>

        {result && (
          <div className="mt-4 p-4 bg-gray-100 border rounded text-lg text-center">
            {result}
          </div>
        )}
      </form>
    </div>
  );
}
