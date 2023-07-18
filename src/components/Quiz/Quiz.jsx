import { useState } from 'react'
import styles from './_Quiz.module.scss'

const Quiz = ({ questions }) => {

    const [currentQuestion] = useState(0);
    // const{ question, choice, correctAnswer } = questions [currentQuestion];

    return (
        <div className={styles['quiz-container']}>
            <>
                <h1>Quiz</h1>
                <span className={styles['active-question-no']}>{currentQuestion + 1}</span>
                <span className={styles['total-question']}>{currentQuestion + 1}</span>
            </>
        </div>
    )
}

export default Quiz
