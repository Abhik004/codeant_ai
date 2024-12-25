import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepositoriesPage from './pages/RepositoriesPage';
import SignupPage from './pages/SignupPage';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepositoriesPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;