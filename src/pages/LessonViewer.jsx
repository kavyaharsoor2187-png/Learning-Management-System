import { useState } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'

function LessonViewer({ lessonIndex, onNavigate, onComplete, completedLessons }) {
  const lessons = [
    'Introduction to the Course',
    'Getting Started',
    'Understanding the Basics',
    'Practical Examples',
    'Advanced Concepts',
    'Final Project'
  ]

  const [completed, setCompleted] = useState(false)

  const currentLesson = lessons[lessonIndex]

  const handleComplete = () => {
    onComplete(lessonIndex)
    setCompleted(true)
  }

  return (
    <div className="lesson-viewer">
      <div className="section-heading">
        <h2>{currentLesson}</h2>
        <p>Lesson {lessonIndex + 1} of {lessons.length}</p>
      </div>

      <div className="video-placeholder">
        <div>
          <span>▶</span>
          <h3>Lesson Video</h3>
          <p>Learning content will be displayed here.</p>
        </div>
      </div>

      <div className="lesson-description">
        <h3>About This Lesson</h3>
        <p>
          Learn important concepts through practical examples
          and step-by-step explanations.
        </p>
      </div>

      <button
        className="complete-btn"
        onClick={handleComplete}
        disabled={completedLessons.includes(lessonIndex)}
      >
        <CheckCircle size={18} />
        {completedLessons.includes(lessonIndex) || completed
          ? 'Lesson Completed'
          : 'Mark as Complete'}
      </button>

      <div className="lesson-navigation">
        <button
          disabled={lessonIndex === 0}
          onClick={() => onNavigate(lessonIndex - 1)}
        >
          <ChevronLeft size={18} /> Previous
        </button>

        <button
          disabled={lessonIndex === lessons.length - 1}
          onClick={() => onNavigate(lessonIndex + 1)}
        >
          Next <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}

export default LessonViewer