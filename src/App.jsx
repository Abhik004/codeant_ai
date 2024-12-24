import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RepositoriesPage from './pages/RepositoriesPage';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepositoriesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
