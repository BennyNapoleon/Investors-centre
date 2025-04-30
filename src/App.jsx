import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanelComponent from './components/AdminPanelComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPanelComponent />} />
        <Route path="/" element={<div style={{ color: 'white', padding: '2rem' }}>Welcome to Investors Centre</div>} />
      </Routes>
    </Router>
  );
}

export default App;
