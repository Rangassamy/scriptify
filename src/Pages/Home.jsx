import React, { useEffect } from "react";
import NavbarHome from "../Components/NavbarHome";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.to(".line", {
      width: 30,
      repeat: -1,
      yoyo: true,
      duration: 1,
      stagger: 1,
    });
  }, []);

  return (
    <div>
      <NavbarHome />
      <div id="Home">
        <div className="firstPart">
          <div className="leftPart">
            <a href="/Quizs">Quizs</a>
          </div>
          <div className="middlePartContainer">
            <div className="middlePart">
              <div className="box">
                <i id="arrow1" class="fa-solid fa-chevron-left"></i>
              </div>
              <div className="box">
                <div className="circlePack1">
                  <div className="circle" id="circle1"></div>
                  <div className="circle" id="circle2"></div>
                  <div className="circle" id="circle3"></div>
                </div>
                <div className="linePack2">
                  <div className="line" id="line1"></div>
                  <div className="line" id="line2"></div>
                  <div className="line" id="line3"></div>
                  <div className="line" id="line4"></div>
                  <div className="line" id="line5"></div>
                </div>
              </div>
              <div className="box">
                <img id="img" src="./img/hero-img.png" alt="js-book" />
              </div>
              <div className="box">
                <div className="linePack1">
                  <div className="line" id="line1"></div>
                  <div className="line" id="line2"></div>
                  <div className="line" id="line3"></div>
                  <div className="line" id="line4"></div>
                  <div className="line" id="line5"></div>
                </div>
                <div className="circlePack2">
                  <div className="circle" id="circle1"></div>
                  <div className="circle" id="circle2"></div>
                  <div className="circle" id="circle3"></div>
                </div>
              </div>
              <div className="box">
                <i id="arrow2" class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className="rightPart">
            <a href="/Projects">Projects</a>
          </div>
        </div>
        <div className="secondPart">
          <h2>Javascript,</h2>
          <p>Le language le plus utilisé par les dévleoppeurs web.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
