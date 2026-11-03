import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Portfolio } from './components/Portfolio';
import { Redactor } from './components/Redactor';
import { CertAdp } from './components/CertAdp';
import { CertPl400 } from './components/CertPl400';
import { CertBH } from './components/CertBH';
import { CertCcarp } from './components/CertCcarp';

function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      color: '#343a40',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div style={{
        fontSize: '8rem',
        fontWeight: 'bold',
        color: '#ff6b6b',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        lineHeight: 1
      }}>
        404
      </div>
      <h2 style={{
        fontSize: '2rem',
        margin: '1rem 0',
        fontWeight: 600
      }}>
        Tuyệt vọng quá! Trang này không tồn tại.
      </h2>
      <p style={{
        fontSize: '1.1rem',
        color: '#6c757d',
        maxWidth: '500px',
        margin: '0 auto 2rem auto',
        lineHeight: 1.6
      }}>
        Có vẻ như bạn đã đi lạc hoặc đường dẫn này đã bị hỏng. 
        Đừng lo, hãy quay lại trải nghiệm an toàn.
      </p>
      <Link 
        to="/" 
        style={{
          padding: '0.6rem 1.5rem',
          backgroundColor: '#333',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: 500,
          fontSize: '1rem',
          transition: 'background-color 0.2s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#333'}
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/redact" element={<Redactor />} />
        <Route path="/cert/adp" element={<CertAdp />} />
        <Route path="/cert/pl400" element={<CertPl400 />} />
        <Route path="/cert/ccarp" element={<CertCcarp />} />
        <Route path="/cert/ccar-p" element={<CertCcarp />} />
        <Route path="/cert/dlbh" element={<CertBH />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
