import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SchedulingCalendar from './pages/SchedulingCalendar';
import SchedulingConfirm from './pages/SchedulingConfirm';
import BookingCalendar from './pages/BookingCalendar';
import BookingConfirm from './pages/BookingConfirm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SchedulingCalendar />} />
        <Route path="scheduling-confirm" element={<SchedulingConfirm />} />
        <Route path="booking-confirm" element={<BookingConfirm />} />
        <Route path="bookings" element={<BookingCalendar />} />
        <Route path="*" element={<p>Error: Page Not Found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
