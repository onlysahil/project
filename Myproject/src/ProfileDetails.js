import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
  const profile = JSON.parse(localStorage.getItem('studentProfile'));

  return (
    <form>
    <div>
      <h1>Profile Details</h1>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>

      <h2>Educational History</h2>
      <ul>
      <p><strong>Education:</strong> {profile.education}</p>
      </ul>

      <h2>Enrolled Courses</h2>
      <ul>
      <p><strong>Courses:</strong> {profile.courses}</p>
      </ul>

      <Link to="/edit-profile"><button>Edit Profile</button></Link>
    </div>
    </form>
  );
};

export default ProfileDetails;