import React from 'react';
import { Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 opacity-70">
          <Globe className="text-blue-600 dark:text-cyan-400" size={20} />
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Remote<span className="font-light">Connect</span>
          </span>
        </div>
        
        <div className="text-slate-500 dark:text-slate-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} COMM-1173 Project. Designed for educational purposes.
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-cyan-500/10 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
            <Mail size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-cyan-500/10 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
            <Globe size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}