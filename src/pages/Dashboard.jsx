import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react'
import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function Dashboard({ onViewCourse }) {
  const enrolledCourses = courses.filter(course => course.progress > 0)

  return (
    <div className="dashboard">
      <div className="welcome-banner">
        <div>
          <h1>Welcome to LearnHub!</h1>
          <p>Learn something new every day. Keep growing!</p>
        </div>
        <BookOpen size={55} />
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <BookOpen size={25} />
          <h2>04</h2>
          <p>Enrolled Courses</p>
        </div>

        <div className="stat-card">
          <Clock size={25} />
          <h2>12</h2>
          <p>Hours Learned</p>
        </div>

        <div className="stat-card">
          <Award size={25} />
          <h2>03</h2>
          <p>Certificates</p>
        </div>

        <div className="stat-card">
          <TrendingUp size={25} />
          <h2>65%</h2>
          <p>Average Progress</p>
        </div>
      </div>

      <div className="section-heading">
        <div>
          <h2>Continue Learning</h2>
          <p>Pick up where you left off</p>
        </div>
      </div>

      <div className="course-grid">
        {enrolledCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            onView={onViewCourse}
          />
        ))}
      </div>
    </div>
  )
}

export default Dashboard