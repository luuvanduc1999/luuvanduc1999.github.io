import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from './components/Portfolio';
import { Redactor } from './components/Redactor';
import { CertAdp } from './components/CertAdp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/redact" element={<Redactor />} />
        <Route path="/cert/adp" element={<CertAdp />} />
      </Routes>
    </Router>
  );
}

export default App;
