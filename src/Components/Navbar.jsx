import React from "react";

const Navbar = ({ page }) => {
  return (
    <div id="Navbar">
      <div className="leftpart">
        <img src="./img/logo-js.png" alt="logo javascript" />
        <a href="/"><h1>Scriptify</h1></a>
      </div>

      <ul className="rightpart">
        <li>
          
        </li>
        <li>
          <a href="/Projects">Projects</a>
        </li>
        <li>
          <a href="/Quizs">Quizs</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
