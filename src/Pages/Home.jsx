import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const page = 1;
  return (
    <div>
      <Navbar key={page} />
      <div id="Home">
        <div className="firstPart">
          <div className="leftPart">
            <a href="/Quizs">Quizs</a>
          </div>
          <div className="middlePart">
            <div className="box">
              <img id="arrow1" src="./img/arrow-img.png" alt="arrow-img" />
            </div>
            <div className="box">
              <div className="circlePack1">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
              </div>
              <div className="linePack2">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
                <div className="line5"></div>
              </div>
            </div>
            {/* <img src="./img/img-hero-page1.png" alt="js-book" /> */}
            <div className="box">
              <img id="img" src="./img/hero-img.png" alt="js-book" />
            </div>
            <div className="box">
              <div className="linePack1">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
                <div className="line5"></div>
              </div>
              <div className="circlePack2">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
              </div>
            </div>
            <div className="box">
              <img id="arrow2" src="./img/arrow-img.png" alt="arrow-img" />
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
