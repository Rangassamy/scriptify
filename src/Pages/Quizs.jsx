import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import gsap from "gsap";

const Quizs = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    gsap.to(".card", {
      y: 30,
      repeat: -1,
      yoyo: true,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  const open = (theme) => {
    setIsActive(true);

    if (theme === 1) {
      setQuestions([
        {
          question: "Quel métier est le plus souvent associé à JavaScript ?",
          choices: [
            "Administrateur système",
            "Data Scientist",
            "Développeur Front-End",
            "Ingénieur DevOps",
          ],
          answer: "Développeur Front-End",
        },
        {
          question: "JavaScript est essentiel pour travailler comme :",
          choices: [
            "Architecte réseau",
            "Développeur Web",
            "Analyste financier",
            "Rédacteur technique",
          ],
          answer: "Développeur Web",
        },
        {
          question:
            "Un développeur Full-Stack travaillant avec JavaScript peut utiliser :",
          choices: [
            "Node.js pour le backend",
            "SQL uniquement",
            "Java pour les scripts",
            "Kubernetes",
          ],
          answer: "Node.js pour le backend",
        },
        {
          question:
            "Quel rôle nécessite des compétences en JavaScript et en design ?",
          choices: [
            "Data Engineer",
            "Développeur UX/UI",
            "Analyste en cybersécurité",
            "Chef de produit",
          ],
          answer: "Développeur UX/UI",
        },
      ]);
    } else if (theme === 2) {
      setQuestions([
        {
          question: "En quelle année JavaScript a-t-il été créé ?",
          choices: ["1985", "1990", "1995", "2000"],
          answer: "1995",
        },
        {
          question: "Qui a créé JavaScript ?",
          choices: [
            "Bill Gates",
            "Tim Berners-Lee",
            "Guido van Rossum",
            "Brendan Eich",
          ],
          answer: "Brendan Eich",
        },
        {
          question: "JavaScript est un langage de :",
          choices: [
            "Script interprété",
            "Compilation statique",
            "Machine virtuelle",
            "Base de données",
          ],
          answer: "Script interprété",
        },
        {
          question: "Quelle entreprise est à l'origine de JavaScript ?",
          choices: ["Netscape", "Google", "Microsoft", "Apple"],
          answer: "Netscape",
        },
      ]);
    } else if (theme === 3) {
      setQuestions([
        {
          question:
            "Quel framework JavaScript est principalement utilisé pour construire des interfaces utilisateur ?",
          choices: ["Django", "React", "Flask", "Laravel"],
          answer: "React",
        },
        {
          question:
            "Quelle technologie permet d'exécuter JavaScript côté serveur ?",
          choices: ["Node.js", "Angular", "jQuery", "TypeScript"],
          answer: "Node.js",
        },
        {
          question:
            "Quel outil est utilisé pour gérer les dépendances dans les projets JavaScript ?",
          choices: ["Git", "Docker", "npm", "Jenkins"],
          answer: "npm",
        },
        {
          question:
            "Quel framework est connu pour son architecture basée sur des composants ?",
          choices: ["Express.js", "Backbone.js", "Vue.js", "PHP"],
          answer: "Vue.js",
        },
      ]);
    } else if (theme === 4) {
      setQuestions([
        {
          question: "Que retourne typeof NaN en JavaScript ?",
          choices: ["undefined", "null", "number", "NaN"],
          answer: "number",
        },
        {
          question: "Quelle est la valeur de 0.1 + 0.2 === 0.3 en JavaScript ?",
          choices: ["true", "false", "undefined", "NaN"],
          answer: "false",
        },
        {
          question: "Que se passe-t-il si on exécute [1, 2] + [3, 4] ?",
          choices: ["[1, 2, 3, 4]", "10", '"1,23,4"', "Erreur"],
          answer: '"1,23,4"',
        },
        {
          question: "Que retourne [] == ![] en JavaScript ?",
          choices: ["true", "false", "undefined", "Erreur"],
          answer: "true",
        },
      ]);
    }
  };

  const handleChoice = (choice) => {
    if (choice === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizEnded(true);
      setTimeout(() => {
        setIsQuizEnded(false);
        setIsActive(false);
        setCurrentQuestionIndex(0);
        setScore(0);
      }, 2000);
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
              <button onClick={() => open(Math.floor(Math.random() * 4) + 1)} id="random">
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
            <button onClick={() => open(1)} id="metiers">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Généralités JavaScript</h2>
            <p>connaissances</p>
            <div className="progressbar"></div>
            <button onClick={() => open(2)} id="connaissances">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Outiles et technos</h2>
            <p>avantages</p>
            <div className="progressbar"></div>
            <button onClick={() => open(3)} id="outilsTechnos">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Les bugs incompris</h2>
            <p>intéressant</p>
            <div className="progressbar"></div>
            <button onClick={() => open(4)} id="beugDrole">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </div>

      {isActive ? (
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
                questions.length > 0 && (
                  <div>
                    <h2>{questions[currentQuestionIndex].question}</h2>
                    <div className="choices">
                      {questions[currentQuestionIndex].choices.map(
                        (choice, index) => (
                          <button
                            key={index}
                            onClick={() => handleChoice(choice)}
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
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Quizs;
