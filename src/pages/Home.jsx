import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, ArrowRight, Video, Users, Mail, ChevronRight, CheckCircle2 } from 'lucide-react';
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
              Remote<span className="font-light text-blue-600 dark:text-cyan-400">Connect</span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Mastering digital communication in the modern workplace. Explore professional strategies for virtual meetings, customer relationship management, and effective corporate correspondence.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <button onClick={() => navigate('/video-calls')} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 text-sm cursor-pointer">
                Explore Video Calls <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Core Objectives</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span>Virtual meeting scheduling & etiquette</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span>ITSM & customer incident communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span>Efficient and professional email composition</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Use Cases / Navigation Grid */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 block mb-2">Module Directory</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Communication Sub-Pages</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">
            Select a module below to review detailed strategies and best practices.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Video Calls Card */}
          <GlassCard hover className="flex flex-col h-full cursor-pointer group" onClick={() => navigate('/video-calls')}>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-500/20">
                <Video size={24} />
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-600 font-semibold">01 / SUB-PAGE</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Video Calls
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
              Scheduling • Meeting Etiquette • Follow-Ups
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Essential strategies for navigating virtual meetings across modern workplaces, managing agendas, and maintaining active professional engagement.
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60 text-blue-600 dark:text-cyan-400 font-medium text-sm mt-auto">
              <span>View Sub-Page</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </GlassCard>

          {/* CRM Card */}
          <GlassCard hover className="flex flex-col h-full cursor-pointer group" onClick={() => navigate('/crm')}>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20">
                <Users size={24} />
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-600 font-semibold">02 / SUB-PAGE</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Customer Relations (CRM)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
              ITSM • Customer Support • Incident Updates
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Focuses on IT Service Management (ITSM) and customer experience, covering live phone interactions and transparent incident notification workflows.
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60 text-blue-600 dark:text-cyan-400 font-medium text-sm mt-auto">
              <span>View Sub-Page</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </GlassCard>

          {/* Emails Card */}
          <GlassCard hover className="flex flex-col h-full cursor-pointer group" onClick={() => navigate('/emails')}>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                <Mail size={24} />
              </div>
              <span className="text-xs font-mono text-slate-400 dark:text-slate-600 font-semibold">03 / SUB-PAGE</span>
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Emails
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
              Efficiency • Clarity • Professional Tone
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Analyzes how to write corporate correspondence efficiently and effectively, avoiding common pitfalls and maximizing reader clarity.
            </p>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60 text-blue-600 dark:text-cyan-400 font-medium text-sm mt-auto">
              <span>View Sub-Page</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}