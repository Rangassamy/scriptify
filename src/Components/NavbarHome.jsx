import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const NavbarHome = () => {
  const [isActive, setIsActive] = useState(false);

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
  

  const open = () => {
    setIsActive(true);
  };
  const close = () => {
    setIsActive(false);
  };
  return (
    <div>
      <div id="NavbarHome">
        <div className="leftpart">
          <img id="logo" src="./img/logo-js.png" alt="logo javascript" />
          <Link id="brand" to="/">
            <h1>Scriptify</h1>
          </Link>
        </div>
        <div className="rightpart">
          <button onClick={open}>infos</button>
        </div>
      </div>
      <div id="popup-container" className={isActive ? "active" : "inactive"}>
        <div id="popup" className={isActive ? "active" : "inactive"}>
          <h3>À quoi sert ce site ?</h3>
          <p>
            Ce site a été créé par un élève passionné d'informatique pour aider
            les étudiants à pratiquer et à apprendre la programmation en
            JavaScript. Il offre un accès direct et simplifié à des outils
            pédagogiques pour développer vos compétences.
          </p>
          <h3>Description des pages</h3>
          <p>
            Accueil : Accédez rapidement aux principales sections du site.
            <br /> 
            Quiz : Testez vos connaissances en JavaScript grâce à des
            quiz sur des sujets variés. 
            <br /> 
            Projets : Réalisez des projets pratiques en HTML, CSS et JavaScript, adaptés à différents niveaux de difficulté.
          </p>
          <button id="popup-animation" onClick={close}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarHome;
