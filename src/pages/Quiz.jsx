
import { useState } from 'react'
import {
  CheckCircle,
  Award,
  BookOpen,
  RotateCcw,
  CircleHelp
} from 'lucide-react'

function Quiz() {
  const questions = [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Text Machine Language',
        'Hyper Transfer Markup Language',
        'Home Tool Markup Language'
      ],
      answer: 0
    },
    {
      question: 'Which language is used for styling web pages?',
      options: ['Java', 'CSS', 'Python', 'SQL'],
      answer: 1
    },
    {
      question: 'Which library is used to build React applications?',
      options: ['Django', 'Laravel', 'React', 'Flask'],
      answer: 2
    }
  ]

  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length

  const handleRetry = () => {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="quiz-page">

      <div className="quiz-heading">
        <div>
          <h2>Course Quiz</h2>
          <p>Test your knowledge and track your learning progress.</p>
        </div>

        <div className="quiz-heading-icon">
          <BookOpen size={28} />
        </div>
      </div>

      <div className="quiz-info">
        <div className="quiz-info-item">
          <CircleHelp size={20} />
          <div>
            <strong>{questions.length} Questions</strong>
            <span>Total questions</span>
          </div>
        </div>

        <div className="quiz-info-item">
          <Award size={20} />
          <div>
            <strong>100%</strong>
            <span>Maximum score</span>
          </div>
        </div>
      </div>

      <div className="quiz-progress-section">
        <div className="quiz-progress-text">
          <span>Your Progress</span>
          <strong>
            {Object.keys(answers).length} / {questions.length} Answered
          </strong>
        </div>

        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{
              width: `${(Object.keys(answers).length / questions.length) * 100}%`
            }}
          ></div>
        </div>
      </div>

      {questions.map((question, index) => (
        <div className="quiz-card" key={index}>

          <div className="quiz-question-heading">
            <span>Question {index + 1}</span>
            <span>{index + 1} of {questions.length}</span>
          </div>

          <h3>{question.question}</h3>

          <div className="quiz-options-list">
            {question.options.map((option, optionIndex) => (
              <label
                className={`quiz-option ${
                  answers[index] === optionIndex ? 'selected' : ''
                }`}
                key={optionIndex}
              >
                <input
                  type="radio"
                  name={`question-${index}`}
                  disabled={submitted}
                  checked={answers[index] === optionIndex}
                  onChange={() =>
                    setAnswers({
                      ...answers,
                      [index]: optionIndex
                    })
                  }
                />

                <span className="option-letter">
                  {String.fromCharCode(65 + optionIndex)}
                </span>

                <span className="option-text">{option}</span>
              </label>
            ))}
          </div>

        </div>
      ))}

      {!submitted ? (
        <div className="quiz-submit-section">
          <p>
            Please answer all questions before submitting your quiz.
          </p>

          <button
            className="quiz-submit-btn"
            disabled={Object.keys(answers).length !== questions.length}
            onClick={() => setSubmitted(true)}
          >
            Submit Quiz <CheckCircle size={18} />
          </button>
        </div>
      ) : (
        <div className="quiz-result">

          <div className="result-icon">
            <Award size={38} />
          </div>

          <h2>Quiz Completed!</h2>
          <p>You have successfully completed the quiz.</p>

          <div className="result-score">
            <strong>{score} / {questions.length}</strong>
            <span>Your Final Score</span>
          </div>

          <div className="result-percentage">
            {Math.round((score / questions.length) * 100)}% Correct
          </div>

          <button className="quiz-retry-btn" onClick={handleRetry}>
            <RotateCcw size={17} /> Retry Quiz
          </button>

        </div>
      )}

    </div>
  )
}

export default Quiz
