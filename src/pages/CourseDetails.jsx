import { Clock, BookOpen, User, PlayCircle } from 'lucide-react'

function CourseDetails({ course, onStartLesson }) {
  const lessons = [
    'Introduction to the Course',
    'Getting Started',
    'Understanding the Basics',
    'Practical Examples',
    'Advanced Concepts',
    'Final Project'
  ]

  if (!course) {
    return <p>Please select a course first.</p>
  }

  return (
    <div className="course-details">
      <button className="back-btn" onClick={() => window.history.back()}>
        ← Back
      </button>

      <div className="details-banner">
        <img src={course.image} alt={course.title} />

        <div>
          <span className="course-category">{course.category}</span>
          <h1>{course.title}</h1>
          <p>Learn new skills with expert guidance.</p>

          <p><User size={17} /> {course.instructor}</p>
          <p><Clock size={17} /> {course.duration}</p>
          <p><BookOpen size={17} /> {course.lessons} Lessons</p>

          <button
            className="view-course-btn"
            onClick={() => onStartLesson(0)}
          >
            Start Learning
          </button>
        </div>
      </div>

      <h2>Course Curriculum</h2>

      <div className="lesson-list">
        {lessons.map((lesson, index) => (
          <div className="lesson-item" key={index}>
            <span>
              <PlayCircle size={20} />
              {index + 1}. {lesson}
            </span>

            <button onClick={() => onStartLesson(index)}>
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseDetails
