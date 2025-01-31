import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

const Quizs = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionsTheme, setQuestionsTheme] = useState(0);

  const [firstquiz, setFirstQuiz] = useState(0);
  const [secondquiz, setSecondQuiz] = useState(0);
  const [thirdquiz, setThirdQuiz] = useState(0);
  const [fourthquiz, setFourthQuiz] = useState(0);
  useEffect(() => {
    getGlobalScore();
  }, []);

  const getGlobalScore = () => {
    // Convertir les valeurs en nombres après récupération
    setFirstQuiz(Number(localStorage.getItem(1)) || 0);
    setSecondQuiz(Number(localStorage.getItem(2)) || 0);
    setThirdQuiz(Number(localStorage.getItem(3)) || 0);
    setFourthQuiz(Number(localStorage.getItem(4)) || 0);
  };

  const reset = () => {
    localStorage.setItem(1, 0); // Utiliser newScore
    localStorage.setItem(2, 0); // Utiliser newScore
    localStorage.setItem(3, 0); // Utiliser newScore
    localStorage.setItem(4, 0); // Utiliser newScore
    window.location.reload(); 
  };

  const open = (theme) => {
    setIsActive(true);

    if (theme === 1) {
      setQuestionsTheme(1);
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
      setQuestionsTheme(2);
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
      setQuestionsTheme(3);
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
      setQuestionsTheme(4);
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
    let newScore = score; // Stocker temporairement le score actuel.

    if (choice === questions[currentQuestionIndex].answer) {
      newScore = score + 1; // Incrémenter le score.
      setScore(newScore); // Mettre à jour l'état.
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Fin du quiz
      setIsQuizEnded(true);

      // Utiliser le score mis à jour pour l'enregistrement
      setTimeout(() => {
        localStorage.setItem(questionsTheme, newScore); // Utiliser newScore
        setIsQuizEnded(false);
        setIsActive(false);
        setCurrentQuestionIndex(0);
        getGlobalScore();
        setScore(0); // Réinitialiser le score pour le prochain quiz
      }, 1000);
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
                Veuillez <i>valider un test</i> pour connaître votre score à
                l'aide des barres de progrès !
              </p>
            </div>
          </div>
          <div className="rightPart">
            <div className="rightPartContainer">
              <p>
                Vous pouvez  <i>réinitialiser</i> vos quizzs grâce à ce bouton
              </p>
              <button onClick={() => reset()} id="random">
                <i class="fa-solid fa-shuffle"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="secondContainer">
          <div className="card">
            <h2>Métiers possibles</h2>
            <p>cultures générales</p>
            <div className="progressbar">
              <div
                style={{
                  width: `${(firstquiz / 4) * 100}%`,
                  backgroundColor:
                    firstquiz === 1
                      ? "#ff3c5f"
                      : firstquiz === 2
                      ? "#ce6704"
                      : firstquiz === 3
                      ? "#fdd61a"
                      : firstquiz === 3
                      ? "#7ed957"
                      : "ffffff",
                }}
                className="container"
              ></div>
            </div>
            <button onClick={() => open(1)} id="metiers">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Généralités JavaScript</h2>
            <p>connaissances</p>
            <div className="progressbar">
              {" "}
              <div
                style={{
                  width: `${(secondquiz / 4) * 100}%`,
                  backgroundColor:
                    secondquiz === 1
                      ? "#ff3c5f"
                      : secondquiz === 2
                      ? "#ce6704"
                      : secondquiz === 3
                      ? "#fdd61a"
                      : secondquiz === 3
                      ? "#7ed957"
                      : "ffffff",
                }}
                className="container"
              ></div>
            </div>
            <button onClick={() => open(2)} id="connaissances">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Outiles et technos</h2>
            <p>avantages</p>
            <div className="progressbar">
              {" "}
              <div
                style={{
                  width: `${(thirdquiz / 4) * 100}%`,
                  backgroundColor:
                    thirdquiz === 1
                      ? "#ff3c5f"
                      : thirdquiz === 2
                      ? "#ce6704"
                      : thirdquiz === 3
                      ? "#fdd61a"
                      : thirdquiz === 3
                      ? "#7ed957"
                      : "ffffff",
                }}
                className="container"
              ></div>
            </div>
            <button onClick={() => open(3)} id="outilsTechnos">
              <i class="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="card">
            <h2>Les bugs incompris</h2>
            <p>intéressant</p>
            <div className="progressbar">
              {" "}
              <div
                style={{
                  width: `${(fourthquiz / 4) * 100}%`,
                  backgroundColor:
                    fourthquiz === 1
                      ? "#ff3c5f"
                      : fourthquiz === 2
                      ? "#ce6704"
                      : fourthquiz === 3
                      ? "#fdd61a"
                      : fourthquiz === 3
                      ? "#7ed957"
                      : "ffffff",
                }}
                className="container"
              ></div>
            </div>
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
