
import { useState } from 'react'
import { UserCircle, Save } from 'lucide-react'

function StudentProfile() {
  const [profile, setProfile] = useState(() => {
    return JSON.parse(localStorage.getItem('studentProfile')) || {
      name: '',
      email: '',
      phone: '',
      course: '',
      bio: ''
    }
  })

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    localStorage.setItem('studentProfile', JSON.stringify(profile))
    alert('Profile updated successfully!')
  }

  return (
    <div className="profile-page">

      <div className="section-heading">
        <h2>Student Profile</h2>
        <p>Manage your personal information and learning details</p>
      </div>

      <div className="profile-card">

        <div className="profile-header">
          <div className="profile-avatar">
            <UserCircle size={55} />
          </div>
          <h3>{profile.name || 'Your Name'}</h3>
          <p>{profile.email || 'Your Email Address'}</p>
          <span>Student Account</span>
        </div>

        <div className="profile-form">

          <div className="profile-field">
            <label>Full Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="profile-field">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>

          <div className="profile-field">
            <label>Phone Number</label>
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="profile-field">
            <label>Learning Interest</label>
            <input
              name="course"
              value={profile.course}
              onChange={handleChange}
              placeholder="Enter your learning interest"
            />
          </div>

          <div className="profile-field full-width">
            <label>About Me</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Write something about yourself"
              rows="4"
            />
          </div>

        </div>

        <div className="profile-actions">
          <button
            className="profile-save-btn"
            onClick={handleSave}
          >
            <Save size={18} />
            Save Changes
          </button>
        </div>

      </div>
    </div>
  )
}

export default StudentProfile
