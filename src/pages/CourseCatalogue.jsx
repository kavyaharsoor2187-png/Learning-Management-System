
import { useState } from 'react'
import { Search, BookOpen, SlidersHorizontal } from 'lucide-react'
import CourseCard from '../components/CourseCard'
import courses from '../data/courses'

function CourseCatalogue({ onViewCourse, enrolledIds, onEnroll }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredCourses = courses.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      category === 'All' || course.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <div className="courses-page">

      <div className="courses-heading">
        <div>
          <h2>Explore Courses</h2>
          <p>Discover new skills and take your learning journey further.</p>
        </div>

        <div className="courses-heading-icon">
          <BookOpen size={28} />
        </div>
      </div>

      <div className="courses-toolbar">
        <div className="courses-search">
          <Search size={19} />
          <input
            type="text"
            placeholder="Search by course or instructor..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="courses-filter">
          <SlidersHorizontal size={18} />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      <div className="courses-results">
        <h3>All Courses</h3>
        <span>{filteredCourses.length} courses available</span>
      </div>

      <div className="course-grid">
        {filteredCourses.map(course => (
          <div className="catalogue-course-card" key={course.id}>
            <CourseCard
              course={course}
              onView={onViewCourse}
            />

            <div className="catalogue-enroll">
              <button
                className="enroll-btn"
                disabled={enrolledIds.includes(course.id)}
                onClick={() => onEnroll(course.id)}
              >
                {enrolledIds.includes(course.id)
                  ? '✓ Enrolled'
                  : 'Enroll Now'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="courses-empty">
          <BookOpen size={35} />
          <h3>No courses found</h3>
          <p>Try another search or select a different category.</p>
        </div>
      )}

    </div>
  )
}

export default CourseCatalogue
