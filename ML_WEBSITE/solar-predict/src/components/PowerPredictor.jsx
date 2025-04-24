import React, { useState } from "react";

const features = [
  "Average Temperature (Day)",
  "Average Wind Direction (Day)",
  "Average Wind Speed (Day)",
  "Relative Humidity",
  "Average Wind Speed (Period)",
];

export default function PowerPredictor() {
  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (data.prediction) {
        setResult(`🔋 Predicted Power: ${data.prediction.toFixed(2)} kW`);
      } else {
        setResult(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setResult(`❌ Could not connect to backend: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Solar Power Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {features.map((name) => (
          <div key={name}>
            <label className="block font-medium">{name}</label>
            <input
              type="number"
              name={name}
              step="any"
              required
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
        >
          {loading ? "Predicting..." : "Predict"}
        </button>
      </form>
      {result && <div className="mt-4 text-lg">{result}</div>}
    </div>
  );
}
