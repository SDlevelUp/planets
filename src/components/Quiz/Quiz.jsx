import { useState } from 'react';
import styles from './_Quiz.module.scss';
import { resultInitalState } from '../../js/constants';
import Result from '../Result/Result';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIndex, setAnswerIndex] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnwswerClick = (answer, index) => {
    setAnswerIndex(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIndex(null);
    setResult((prev) =>
      answer
        ? {
          ...prev,
          score: prev.score + 5,
          correctAnswers: prev.correctAnswers + 1,
        }
        : {
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
        }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
  };

  return (
    <div className={styles['quiz-container-row']}>
      <div className={styles['quiz-container']}>
        {!showResult ? (
          <>
            <span className={styles['active-question-no']}>{currentQuestion + 1}</span>
            <span className={styles['total-question']}>/{questions.length}</span>
            <h2>{question}</h2>
            <ul>
              {choices.map((choice, index) => (
                <li
                  onClick={() => onAnwswerClick(choice, index)}
                  key={choice}
                  className={answerIndex === index ? styles['selected-answer'] : ''}
                >
                  {choice}
                </li>
              ))}
            </ul>
            <div className={styles['bottom']}>
              <button onClick={onClickNext} disabled={answerIndex === null}>
                {currentQuestion === questions.length - 1 ? 'Fin' : 'Suivant'}
              </button>
            </div>
          </>
        ) : (
          <Result
            result={result}
            onTryAgain={onTryAgain}
            totalQuestions={questions.length}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;