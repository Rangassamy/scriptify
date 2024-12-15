import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import React Router
import Hero from "./Pages/Hero";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Hero />} />{" "}
          {/* Route pour la page d'accueil */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
