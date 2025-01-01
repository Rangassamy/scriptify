import React from "react";
import Navbar from "../Components/Navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projectsContainer">
        <div className="card">
          <img src="./img/form-img.png" alt="formulaire image" />
          <h2>formulaire</h2>
          <ul className="stareContainer">
            <i class="fa-solid fa-star"></i>
          </ul>
          <a
            href="./documents/Cahiers des charges formulaire.pdf"
            download="Cahiers des charges formulaire.pdf"
            class="download-btn"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
        <div className="card">
          <img src="./img/calculate-img.png" alt="calculatrice image" />
          <h2>Calculatrice</h2>
          <ul className="stareContainer">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </ul>
          <a
            href="./documents/Cahiers des charges calculatrice.pdf"
            download="Cahiers des charges calculatrice.pdf"
            class="download-btn"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
        <div className="card">
          <img src="./img/rock-paper-scissors.png" alt="chifoumi image" />
          <h2>Chifoumi</h2>
          <ul className="stareContainer">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </ul>
          <a
            href="./documents/Cahiers des charges chifoumi.pdf"
            download="Cahiers des charges chifoumi.pdf"
            class="download-btn"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
        <div className="card">
          <img src="./img/todolist-img.png" alt="todolist image" />
          <h2>Todolist</h2>
          <ul className="stareContainer">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </ul>
          <a
            href="./documents/Cahiers des charges todolist.pdf"
            download="Cahiers des charges todolist.pdf"
            class="download-btn"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
