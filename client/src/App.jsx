import React from 'react';
import './App.css';
import CalendarPage from './pages/Calendar';
import Confirm from './pages/Confirm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarPage />} />
        <Route path="confirm" element={<Confirm />} />
        <Route path="*" element={<p>Error: Page Not Found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
