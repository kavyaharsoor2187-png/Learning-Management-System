import { Clock, BookOpen, ArrowRight } from 'lucide-react'

function CourseCard({ course, onView }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />

      <div className="course-card-content">
        <span className="course-category">{course.category}</span>

        <h3>{course.title}</h3>

        <p>By {course.instructor}</p>

        <div className="course-meta">
          <span><Clock size={15} /> {course.duration}</span>
          <span><BookOpen size={15} /> {course.lessons} Lessons</span>
        </div>

        <div className="progress-info">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>

        <div className="progress-bar">
          <div style={{ width: `${course.progress}%` }}></div>
        </div>

        <button className="view-course-btn" onClick={() => onView(course)}>
          View Course <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default CourseCard