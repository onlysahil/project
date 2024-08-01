import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    email: '',
    contact: '',
    education: '',
    courses: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = localStorage.getItem('studentProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSave = () => {
    localStorage.setItem('studentProfile', JSON.stringify(profile));
    navigate('/');
  };

  

  

  return (
    <div>
      <h1>Edit Profile</h1>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={profile.name || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={profile.age || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={profile.email || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Contact:
        <input
          type="number"
          name="contact"
          value={profile.contact || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Education:
        <input
          type="text"
          name="education"
          value={profile.education || ''}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Courses:
        <input
          type="text"
          name="courses"
          value={profile.courses || ''}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      
    </div>
  );
};

export default ProfileEdit;