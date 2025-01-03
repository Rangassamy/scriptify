import React, { useEffect } from "react";
import { gsap } from "gsap";

const NavbarHome = () => {
  useEffect(() => {
    gsap.fromTo(
      "#brand",
      { y: -150,  ease: "power3.out" }, // État initial
      { y: 0, duration: 5, ease: "power3.out" } // État final
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      "#logo",
      { y: -150, ease: "power3.out" }, // État initial
      { y: 0, duration: 5, ease: "power3.out" } // État final
    );
  }, []);
  return (
    <div>
      <div id="Navbar">
        <div className="leftpart">
          <img id="logo" src="./img/logo-js.png" alt="logo javascript" />
          <a href="/">
            <h1 id="brand">Scriptify</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
