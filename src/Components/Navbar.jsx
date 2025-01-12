import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      "#brand",
      { y: -150, ease: "power3.out" }, // État initial
      { y: 0, duration: 5, ease: "power3.out" } // État final
    );
    gsap.fromTo(
      "#logo",
      { y: -150, ease: "power3.out" }, // État initial
      { y: 0, duration: 5, ease: "power3.out" } // État final
    );
  }, []);
  return (
    <div id="Navbar">
      <div className="leftpart">
        <img src="./img/logo-js.png" alt="logo javascript" id="logo" />
        <Link id="brand" to="/">
          <h1>Scriptify</h1>
        </Link>
      </div>

      <ul className="rightpart">
        <Link to="/Projects">Projects</Link>
        <Link to="/Quizs">Quizs</Link>
      </ul>
    </div>
  );
};

export default Navbar;
