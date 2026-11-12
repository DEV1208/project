import React from 'react';

export const GlassCard = ({ children, className = "", hover = false, onClick }) => (
  <div 
    onClick={onClick}
    className={`
      bg-white dark:bg-white/5 backdrop-blur-md 
      border border-slate-200 dark:border-slate-700/50 
      rounded-2xl p-6 md:p-8 
      shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] 
      ${hover ? 'transition-all duration-300 hover:border-blue-400 dark:hover:border-cyan-500/50 hover:shadow-md dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]' : ''}
      ${className}
    `}
  >
    {children}
  </div>
);

export const PageHeader = ({ title, icon: Icon }) => (
  <div className="mb-12 border-b border-slate-200 dark:border-slate-800/80 pb-8 flex items-center gap-4">
    <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-cyan-950/30 border border-blue-100 dark:border-cyan-500/20 rounded-xl text-blue-600 dark:text-cyan-400">
      <Icon size={28} />
    </div>
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h1>
    </div>
  </div>
);

export const EmptySlot = ({ height = "h-20", label = "CONTENT SLOT", className = "" }) => (
  <div className={`w-full rounded-xl border border-dashed border-slate-300 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/40 flex items-center justify-center ${height} ${className}`}>
    <span className="text-slate-400 dark:text-slate-600 text-xs font-mono tracking-widest uppercase">{label}</span>
  </div>
);