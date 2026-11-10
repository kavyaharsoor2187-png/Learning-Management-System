import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function MyCourses({ enrolledIds, onViewCourse }) {
  const myCourses = courses.filter(course =>
    enrolledIds.includes(course.id)
  )

  return (
    <div>
      <div className="section-heading">
        <h2>My Courses</h2>
        <p>Continue learning from your enrolled courses</p>
      </div>

      {myCourses.length > 0 ? (
        <div className="course-grid">
          {myCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onView={onViewCourse}
            />
          ))}
        </div>
      ) : (
        <p>You haven't enrolled in any courses yet.</p>
      )}
    </div>
  )
}

export default MyCourses