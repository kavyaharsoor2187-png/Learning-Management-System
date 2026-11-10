
import { useState } from 'react'
import {
  Search,
  Bell,
  UserCircle,
  ChevronDown,
  User,
  LogOut,
  BookOpen,
  X
} from 'lucide-react'

function Topbar({ setActivePage }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const notifications = [
    {
      id: 1,
      title: 'Welcome to your LMS!',
      message: 'Start exploring courses and improve your skills.',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'Continue learning',
      message: 'Your enrolled courses are waiting for you.',
      icon: BookOpen
    }
  ]

  return (
    <header className="topbar">
      <div className="topbar-welcome">
        <h2>Welcome back, Student! 👋</h2>
        <p>Continue your learning journey and achieve your goals.</p>
      </div>

      <div className="topbar-right">
        <div className="search-box">
          <Search size={19} />
          <input type="text" placeholder="Search courses..." />
        </div>

        {/* Notifications */}
        <div className="topbar-dropdown-wrapper">
          <button
            className="notification-btn"
            onClick={() => {
              setShowNotifications(!showNotifications)
              setShowProfileMenu(false)
            }}
          >
            <Bell size={21} />
            <span className="notification-dot"></span>
          </button>

          {showNotifications && (
            <div className="topbar-dropdown notification-dropdown">
              <div className="dropdown-heading">
                <h3>Notifications</h3>
                <button onClick={() => setShowNotifications(false)}>
                  <X size={17} />
                </button>
              </div>

              {notifications.map(item => {
                const Icon = item.icon
                return (
                  <div className="notification-item" key={item.id}>
                    <div className="notification-icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.message}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Profile dropdown */}
        <div className="topbar-dropdown-wrapper">
          <button
            className="user-info"
            onClick={() => {
              setShowProfileMenu(!showProfileMenu)
              setShowNotifications(false)
            }}
          >
            <div className="user-avatar">
              <UserCircle size={25} />
            </div>

            <div className="user-details">
              <span className="user-name">Student</span>
              <span className="user-role">Learner</span>
            </div>

            <ChevronDown
              size={17}
              className={showProfileMenu ? 'arrow-rotate' : ''}
            />
          </button>

          {showProfileMenu && (
            <div className="topbar-dropdown profile-dropdown">
              <button
                onClick={() => {
                  setActivePage('Profile')
                  setShowProfileMenu(false)
                }}
              >
                <User size={17} />
                My Profile
              </button>

              <button
                onClick={() => {
                  setShowProfileMenu(false)
                  alert('You have been logged out of the demo.')
                }}
              >
                <LogOut size={17} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Topbar
