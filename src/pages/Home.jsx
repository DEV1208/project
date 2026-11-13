import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowRight } from 'lucide-react';
import { GlassCard } from '../components/UI';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 border-b border-slate-200 dark:border-slate-800/60 mb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-cyan-400 text-xs font-mono mb-6 uppercase tracking-wider shadow-sm">
              <Zap size={14} />
              <span>COMM-1173 Communication Strategies</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
              Remote <span className="font-light text-blue-600 dark:text-cyan-400">Work Guide</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Mastering digital communication in the modern workplace. Explore professional strategies for virtual meetings, customer relationship management, and effective corporate correspondence.
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
              Select a module below to review detailed strategies, etiquette guidelines, and best practices for remote collaboration.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => navigate('/video-calls')} 
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 text-sm cursor-pointer"
              >
                Explore Video Calls <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Hero Empty Container */}
          <div className="lg:col-span-5">
            <GlassCard className="w-full h-64 sm:h-72 border-2 border-slate-300 dark:border-slate-700">
              {/* Intentionally left empty per wireframe */}
            </GlassCard>
          </div>
        </div>
      </section>

      {/* 3-Column Navigation Grid (Header on top, Empty Box in middle, Text below) */}
      <section className="mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Column 1: Video Calls */}
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => navigate('/video-calls')}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Video Calls
            </h3>
            
            <GlassCard hover className="w-full h-44 mb-4 border-2 border-slate-300 dark:border-slate-700">
              {/* Empty container */}
            </GlassCard>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Essential strategies for navigating virtual meetings across modern workplaces, managing agendas, and maintaining active professional engagement.
            </p>
          </div>

          {/* Column 2: CRM */}
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => navigate('/crm')}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Customer Relations (CRM)
            </h3>
            
            <GlassCard hover className="w-full h-44 mb-4 border-2 border-slate-300 dark:border-slate-700">
              {/* Empty container */}
            </GlassCard>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Focuses on IT Service Management (ITSM) and customer experience, covering live phone interactions and transparent incident notification workflows.
            </p>
          </div>

          {/* Column 3: Emails */}
          <div 
            className="flex flex-col cursor-pointer group" 
            onClick={() => navigate('/emails')}
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Emails
            </h3>
            
            <GlassCard hover className="w-full h-44 mb-4 border-2 border-slate-300 dark:border-slate-700">
              {/* Empty container */}
            </GlassCard>
            
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Analyzes how to write corporate correspondence efficiently and effectively, avoiding common pitfalls and maximizing reader clarity.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}