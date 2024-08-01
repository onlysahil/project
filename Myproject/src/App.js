import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileEdit from './ProfileEdit';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProfileDetails />} />
          <Route path="/edit-profile" element={<ProfileEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;