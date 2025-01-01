import React from "react";

const Navbar = () => {
 
  return (
    <div id="Navbar">
      <div className="leftpart">
        <img src="./img/logo-js.png" alt="logo javascript" />
        <a href="/">
          <h1>Scriptify</h1>
        </a>
      </div>

      <ul className="rightpart">
        <a href="/Projects">Projects</a>
        <a href="/Quizs">Quizs</a>
      </ul>
    </div>
  );
};

export default Navbar;
