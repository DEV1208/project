import React from 'react';
import { Globe, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-10 transition-colors dark:border-slate-900 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex items-center gap-2 opacity-80">
          <Globe size={20} className="text-blue-600 dark:text-cyan-400" />
          <span className="font-semibold text-slate-700 dark:text-slate-300">Remote<span className="font-light">Connect</span></span>
        </div>
        <p className="text-center text-sm text-slate-500">© {new Date().getFullYear()} COMM-1173 Project. Designed for educational purposes.</p>
        <a href="mailto:hello@example.com" aria-label="Email project team" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400">
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
}
