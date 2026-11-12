import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoCalls from './pages/VideoCalls';
import CRM from './pages/CRM';
import Emails from './pages/Emails';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans transition-colors duration-300">
        
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video-calls" element={<VideoCalls />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/emails" element={<Emails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}