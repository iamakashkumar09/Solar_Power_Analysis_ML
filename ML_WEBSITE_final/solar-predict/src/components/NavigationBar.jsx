import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBar({ openSignupForm, openSigninForm }) {
  const navigate = useNavigate();
  return (
    <header className="bg-yellow-500 text-white py-4 px-8 shadow-md flex justify-between items-center">
      <h1 onClick={() => navigate('/')} className="text-2xl font-bold cursor-pointer">SolarPredict</h1>
      <nav>
        <ul className="flex gap-6 text-base">
          <li><a href="#features" className="hover:underline">Features</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
