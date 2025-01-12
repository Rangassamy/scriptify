import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import gsap from "gsap";

const Quizs = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);

  useEffect(() => {
    gsap.to(".card", {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  const questions = [
    {
      question:
        "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
      choices: ["indexOf()", "map()", "filter()", "reduce()"],
      answer: "filter()",
    },
    {
      question:
        "Quelle méthode JavaScript permet de vérifier si un élément figure dans un tableau",
      choices: ["isNaN()", "includes()", "findIndex()", "isOdd()"],
      answer: "includes()",
    },
    {
      question: "Quelle méthode transforme du JSON en un objet Javascript ?",
      choices: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.object()",
        "JSON.toJS",
      ],
      answer: "JSON.parse()",
    },
    {
      question:
        "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
      choices: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
      answer: "Math.round()",
    },
  ];

  const open = (choice) => {
    setIsActive(true);

    if (choice === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizEnded(true);
      setTimeout(() => {
        setIsActive(false);
      }, 4000);
    }
  };

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
              <button id="random">
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
            <button onClick={open} id="metiers">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Généralités JavaScript</h2>
            <p>connaissances</p>
            <div className="progressbar"></div>
            <button onClick={open} id="connaissances">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Outiles et technos</h2>
            <p>avantages</p>
            <div className="progressbar"></div>
            <button onClick={open} id="outilsTechnos">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Les bugs incompris</h2>
            <p>intéressant</p>
            <div className="progressbar"></div>
            <button onClick={open} id="beugDrole">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="Quiz">
        <div id="quiz-box" className={isActive ? "active" : "inactive"}>
          <div className="quizContainer">
            <h1>
              <span>Q</span>uiz <i className="far fa-question-circle"></i>
            </h1>

            {isQuizEnded ? (
              <div>
                <h2>Quiz terminé !</h2>
                <h3>
                  Votre score est de : {score} / {questions.length}
                </h3>
                <p>retour à la page précédente...</p>
              </div>
            ) : (
              <div>
                <h2>{questions[currentQuestionIndex].question}</h2>
                <div className="choices">
                  {questions[currentQuestionIndex].choices.map(
                    (choice, index) => (
                      <button
                        key={index}
                        onClick={() => open(choice)}
                        className="btn"
                      >
                        {choice}
                      </button>
                    )
                  )}
                </div>
                <p>
                  Question {currentQuestionIndex + 1} sur {questions.length}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizs;
