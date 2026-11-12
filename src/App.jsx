import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoCalls from './pages/VideoCalls';
import CRM from './pages/CRM';
import Emails from './pages/Emails';

// Automatically scrolls to the top of the window when changing routes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Syncs the 'dark' class on the <html> tag whenever the toggle button is clicked
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
      <div className="min-h-screen w-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans selection:bg-blue-200 dark:selection:bg-cyan-500/30 selection:text-blue-900 dark:selection:text-cyan-100 transition-colors duration-300">
        
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video-calls" element={<VideoCalls />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/emails" element={<Emails />} />
          </Routes>
        </main>

        <Footer />

        <style dangerouslySetInnerHTML={{__html: `
          .animate-in {
            animation-duration: 0.4s;
            animation-fill-mode: both;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation-name: fade-in;
          }
        `}} />
      </div>
    </Router>
  );
}