import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import CourseCatalogue from './pages/CourseCatalogue'
import './App.css'
import MyCourses from './pages/MyCourses'
import CourseDetails from './pages/CourseDetails'
import LessonViewer from './pages/LessonViewer'
import Quiz from './pages/Quiz'
import StudentProfile from './pages/StudentProfile'
import AdminCourses from './pages/AdminCourses'
function App() {
  const [activePage, setActivePage] = useState('Dashboard')
  const [selectedCourse, setSelectedCourse] = useState(null)

  const [enrolledIds, setEnrolledIds] = useState(() => {
    return JSON.parse(localStorage.getItem('enrolledCourses')) || [1, 2]
  })
const [lessonIndex, setLessonIndex] = useState(0)

const [completedLessons, setCompletedLessons] = useState(() => {
  return JSON.parse(localStorage.getItem('completedLessons')) || []
})

const handleCompleteLesson = (index) => {
  const updated = [...new Set([...completedLessons, index])]
  setCompletedLessons(updated)
  localStorage.setItem('completedLessons', JSON.stringify(updated))
}
  const handleEnroll = (id) => {
    const updatedIds = [...enrolledIds, id]
    setEnrolledIds(updatedIds)
    localStorage.setItem('enrolledCourses', JSON.stringify(updatedIds))
  }

  const handleViewCourse = (course) => {
    setSelectedCourse(course)
    setActivePage('Course Details')
  }

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      <main className="main-content">
        <Topbar setActivePage={setActivePage} />

        <div className="page-content">
          {activePage === 'Dashboard' ? (
            <Dashboard onViewCourse={handleViewCourse} />
         ) : activePage === 'Courses' ? (
  <CourseCatalogue
    onViewCourse={handleViewCourse}
    enrolledIds={enrolledIds}
    onEnroll={handleEnroll}
  />
) : activePage === 'My Courses' ? (
  <MyCourses
    enrolledIds={enrolledIds}
    onViewCourse={handleViewCourse}
  />
        ) : activePage === 'Course Details' ? (
  <CourseDetails
    course={selectedCourse}
    onStartLesson={(index) => {
      setLessonIndex(index)
      setActivePage('Lesson Viewer')
    }}
  />
) : activePage === 'Lesson Viewer' ? (
  <LessonViewer
    lessonIndex={lessonIndex}
    onNavigate={setLessonIndex}
    onComplete={handleCompleteLesson}
    completedLessons={completedLessons}
  />
         ) : activePage === 'Quizzes' ? (
  <Quiz />
) : activePage === 'Profile' ? (
  <StudentProfile />
) : activePage === 'Admin' ? (
  <AdminCourses />
) : (
  <h1>{activePage}</h1>
)}
        </div>
      </main>
    </div>
  )
}

export default App