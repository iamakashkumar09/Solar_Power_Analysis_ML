import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import PredictionPage from "./pages/PredictionPage";
import Footer from "./components/Footer";
import Analytics from "./pages/Analytics";
import Feature from "./components/Feature";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
      <Feature/>
      <Footer/>
    </Router>
  );
}

export default App;
