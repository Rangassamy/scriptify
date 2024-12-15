  const Hero = () => {
  return (
    <div className="Hero">
      <div className="nav">
        <div className="left-part">
          <img src="./img/logo-js.png" alt="logo-design-JS" />
          <h1>scriptify</h1>
        </div>

        <ul className="right-part">
          <li>Projects</li>
          <li>Quiz</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="hero">
        <div className="left-part">
          <h2>Javascript</h2>
          <h3>
            Le language de programmation avec <p>des fonctions</p>
          </h3>
        </div>
        <div className="right-part">
          <img
            src="../../../JavascriptWebSiteRangassamy/img/JS-popularity.webp"
            alt="popularity javascript"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
