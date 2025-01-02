import React from "react";
import Navbar from "../Components/Navbar";

const Quiz = () => {
  return (
    <div>
      <Navbar />
      <div className="quizsContainer">
        <div className="firstContainer">
          <div className="leftPart">
            <img src="./img/quiz-img.png" alt="quiz-img" />
            <div className="textContainer">
              <h2>Quiz</h2>
              <p>
                Veuillez <i>valider un test</i> pour connaître votre score.
              </p>
            </div>
          </div>
          <div className="rightPart">
            <div className="rightPartContainer">
              <p>
                Vous pouvez faire un test <i>aléatoirement</i> grâce à ce bouton
              </p>
              <button>
                <i class="fa-solid fa-shuffle"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="secondContainer">
          <div className="card">
            <h2>Métiers possibles</h2>
            <p>cultures générales</p>
            <div className="progressbar"></div>
            <button>
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>généralité Javascript</h2>
            <p>connaissances</p>
            <div className="progressbar"></div>
            <button>
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Outiles et technos</h2>
            <p>avantages</p>
            <div className="progressbar"></div>
            <button>
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Javascript beug</h2>
            <p>drôle ( rigole stp )</p>
            <div className="progressbar"></div>
            <button>
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
