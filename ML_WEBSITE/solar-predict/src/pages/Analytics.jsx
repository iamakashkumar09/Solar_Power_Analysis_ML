// src/pages/Analytics.jsx
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Example data (you can replace this with actual data from backend or static files)
const temperatureData = [
  { day: 1, value: 25 },
  { day: 2, value: 26 },
  { day: 3, value: 24 },
  { day: 4, value: 27 },
  { day: 5, value: 28 },
];

const humidityData = [
  { day: 1, value: 60 },
  { day: 2, value: 63 },
  { day: 3, value: 62 },
  { day: 4, value: 59 },
  { day: 5, value: 65 },
];

const windSpeedData = [
  { day: 1, value: 8 },
  { day: 2, value: 10 },
  { day: 3, value: 7 },
  { day: 4, value: 9 },
  { day: 5, value: 11 },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Preprocessing Analytics</h2>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Temperature Over Days</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={temperatureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Humidity Over Days</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={humidityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4">Wind Speed Over Days</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={windSpeedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
