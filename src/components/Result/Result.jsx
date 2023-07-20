import styles from "./_Result.module.scss";
import { useState, useEffect } from "react";

const Result = ({ totalQuestions, result, onTryAgain }) => {

  const [name, setName] = useState('');
  const [highScores, setHighScores] = useState([]);
  const [showScores, setShowScores] = useState(false);

  useEffect(() => {
    setHighScores(JSON.parse(localStorage.getItem("highScores")) || []);
  }, []);

  const handleTryAgain = () => {
    setName('');
    setShowScores(false);
    setHighScores([]);
    onTryAgain();
  }

  const handleSave = () => {
    const score = {
      name: name,
      score: result.score
    };
    const newHighScores = [...highScores, score].sort(
      (a, b) => b.score - a.score
    );

    setHighScores(newHighScores);
    setShowScores(true);
    localStorage.setItem("highScores", JSON.stringify(newHighScores));
  }

  return (
    <div className={styles['result']}>
      <h3>Résultat</h3>
      <p>
        Questions total : <span>{totalQuestions}</span>
      </p>

      <p>
        Score total : <span>{result.score}</span>
      </p>
      <p>
        Réponses correctes : <span>{result.correctAnswers}</span>
      </p>
      <p>
        Réponses incorrectes : <span>{result.wrongAnswers}</span>
      </p>

      <button onClick={handleTryAgain}>Réessayer ?</button>

      {!showScores ?
        <>
          <div className={styles['input-container']}>
            <h3>
              Entre ton nom ci-dessous <br /> pour enregistrer ton score !
            </h3>

            <input
              placeholder="Ton nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button onClick={handleSave}>
            Enregistrer
          </button>
        </> : <>
          <table>
            <thead>
              <tr>
                <th>Classement</th>
                <th>Joueur</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {highScores.map((highScore, i) => {
                return (
                  <tr key={`${highScore.score}${highScore.name}${i}`}>
                    <td>{i + 1}</td>
                    <td>{highScore.name}</td>
                    <td>{highScore.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </>}

    </div>
  )
}

export default Result;