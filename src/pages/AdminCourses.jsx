import { useState } from 'react'
import { Plus, Trash2, BookOpen } from 'lucide-react'
import initialCourses from '../data/courses'

function AdminCourses() {
  const [courses, setCourses] = useState(() => {
    return JSON.parse(localStorage.getItem('adminCourses')) || initialCourses
  })

  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: '',
    category: 'Development',
    duration: '8 hours',
    lessons: 10,
    price: 'Free',
    progress: 0,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600'
  })

  const handleAdd = (e) => {
    e.preventDefault()

    const updated = [
      ...courses,
      { ...newCourse, id: Date.now(), lessons: Number(newCourse.lessons) }
    ]

    setCourses(updated)
    localStorage.setItem('adminCourses', JSON.stringify(updated))

    setNewCourse({
      title: '',
      instructor: '',
      category: 'Development',
      duration: '8 hours',
      lessons: 10,
      price: 'Free',
      progress: 0,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600'
    })
  }

  const handleDelete = (id) => {
    const updated = courses.filter(course => course.id !== id)
    setCourses(updated)
    localStorage.setItem('adminCourses', JSON.stringify(updated))
  }

  return (
    <div className="admin-page">
      <div className="section-heading">
        <h2>Admin Course Management</h2>
        <p>Add and manage learning courses</p>
      </div>

      <form className="admin-form" onSubmit={handleAdd}>
        <h3><Plus size={20} /> Add New Course</h3>

        <input
          placeholder="Course Title"
          required
          value={newCourse.title}
          onChange={e => setNewCourse({ ...newCourse, title: e.target.value })}
        />

        <input
          placeholder="Instructor Name"
          required
          value={newCourse.instructor}
          onChange={e => setNewCourse({ ...newCourse, instructor: e.target.value })}
        />

        <select
          value={newCourse.category}
          onChange={e => setNewCourse({ ...newCourse, category: e.target.value })}
        >
          <option>Development</option>
          <option>Design</option>
          <option>Business</option>
        </select>

        <input
          type="number"
          min="1"
          placeholder="Number of Lessons"
          value={newCourse.lessons}
          onChange={e => setNewCourse({ ...newCourse, lessons: e.target.value })}
        />

        <button type="submit" className="view-course-btn">
          <Plus size={18} /> Add Course
        </button>
      </form>

      <h3 className="admin-list-title">Available Courses ({courses.length})</h3>

      {courses.map(course => (
        <div className="admin-course-item" key={course.id}>
          <span><BookOpen size={20} /> {course.title}</span>

          <button onClick={() => handleDelete(course.id)}>
            <Trash2 size={18} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default AdminCourses