import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Globe, Video, Users, Mail, Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ isDark, setIsDark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: Globe },
    { path: '/video-calls', label: 'Video Calls', icon: Video },
    { path: '/crm', label: 'CRM', icon: Users },
    { path: '/emails', label: 'Emails', icon: Mail }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-cyan-400 dark:to-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <Globe className="text-white dark:text-slate-950" size={20} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
            Remote<span className="font-light text-blue-600 dark:text-cyan-400">Connect</span>
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive 
                    ? 'bg-white dark:bg-cyan-500/15 text-blue-600 dark:text-cyan-400 shadow-sm border border-slate-200 dark:border-cyan-500/30' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }
                `}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Right: Theme Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all cursor-pointer"
          >
            {isDark ? (
              <>
                <Sun size={18} className="text-amber-400" />
                <span className="text-xs font-mono">Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={18} className="text-blue-600" />
                <span className="text-xs font-mono">Dark Mode</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>
    </header>
  );
}