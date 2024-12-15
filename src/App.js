import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Quizs from "./Pages/Quizs";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Définition des routes */}
        <Routes>
          {/* Route pour la page d'accueil */}
          <Route path="/" element={<Home />} />{" "}
          <Route path="/Projects" element={<Projects />} />{" "}
          <Route path="/Quizs" element={<Quizs />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
