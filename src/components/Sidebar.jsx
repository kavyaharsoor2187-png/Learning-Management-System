import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  User,
  Settings,
  ClipboardList
} from 'lucide-react'

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Courses', icon: BookOpen },
    { name: 'My Courses', icon: GraduationCap },
    { name: 'Quizzes', icon: ClipboardList },
    { name: 'Profile', icon: User },
    { name: 'Admin', icon: Settings }
  ]

  return (
    <aside className="sidebar">
      <h2 className="logo">LearnHub</h2>

      <p className="menu-title">MENU</p>

      {menuItems.map((item) => {
        const Icon = item.icon

        return (
          <button
            key={item.name}
            className={`menu-item ${activePage === item.name ? 'active' : ''}`}
            onClick={() => setActivePage(item.name)}
          >
            <Icon size={20} />
            <span>{item.name}</span>
          </button>
        )
      })}
    </aside>
  )
}

export default Sidebar