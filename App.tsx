import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from './components/Portfolio';
import { Redactor } from './components/Redactor';
import { CertAdp } from './components/CertAdp';
import { CertPl400 } from './components/CertPl400';
import { CertBH } from './components/CertBH';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/redact" element={<Redactor />} />
        <Route path="/cert/adp" element={<CertAdp />} />
        <Route path="/cert/pl400" element={<CertPl400 />} />
      </Routes>
    </Router>
  );
}

export default App;
