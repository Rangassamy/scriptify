import React, { useState } from "react";
import Navbar from "./Navbar";

const Quiz = () => {
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const handleAnswer = (choice) => {
    if (choice === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizEnded(true);
    }
  };

  return (
    <div id="Quiz">
      <Navbar />
      <div className="quiz-box">
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
            </div>
          ) : (
            <div>
              <h2>{questions[currentQuestionIndex].question}</h2>
              <div className="choices">
                {questions[currentQuestionIndex].choices.map(
                  (choice, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(choice)}
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
  );
};

export default Quiz;
