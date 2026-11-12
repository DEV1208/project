import React from 'react';
import { Video, Calendar, Users, CheckSquare, Clock, ShieldCheck, FileText } from 'lucide-react';
import { GlassCard, PageHeader } from '../components/UI';

export default function VideoCalls() {
  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Video Calls & Virtual Meetings" icon={Video} />

      {/* Intro */}
      <div className="mb-10 p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-slate-800 rounded-2xl">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          In the modern digital workplace, video calls are embedded into almost every job role. Whether you are scheduling high-stakes client reviews or attending routine team stand-ups, understanding how to manage meetings professionally is vital for remote success.
        </p>
      </div>

      <div className="space-y-8">
        {/* Section 1 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <Calendar className="text-cyan-600 dark:text-cyan-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Effectively Scheduling Online Meetings</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Effective scheduling goes beyond picking a time slot. It requires respecting participant time zones, defining a clear meeting objective, and attaching a structured agenda in advance so attendees can prepare.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase text-blue-600 dark:text-cyan-400 block mb-1">Best Practice</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">Always include dial-in details, clear agendas, and estimated time allocations in calendar invitations.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 block mb-1">Time Zones</span>
              <p className="text-xs text-slate-600 dark:text-slate-300">Use calendar scheduling tools that automatically convert times across international or regional boundaries.</p>
            </div>
          </div>
        </GlassCard>

        {/* Section 2 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <Users className="text-blue-600 dark:text-blue-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Meeting Etiquette & Professionalism</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Virtual meeting etiquette dictates how participants present themselves on camera, manage audio feedback, and engage constructively during discussions.
          </p>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-emerald-500 mt-1 shrink-0" />
              <span><strong>Camera Policy:</strong> Keep your camera on when speaking or in smaller collaborative groups to foster human connection and non-verbal cues.</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-emerald-500 mt-1 shrink-0" />
              <span><strong>Audio Discipline:</strong> Mute your microphone when not speaking to eliminate background noise, keyboard clatter, and audio feedback loops.</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck size={16} className="text-emerald-500 mt-1 shrink-0" />
              <span><strong>Active Engagement:</strong> Use chat features and virtual hand-raising to ask questions without interrupting active speakers.</span>
            </li>
          </ul>
        </GlassCard>

        {/* Section 3 */}
        <GlassCard hover className="space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4">
            <CheckSquare className="text-emerald-600 dark:text-emerald-400" size={24} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Post-Meeting Follow-Ups</h2>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            What happens after a meeting is just as important as the meeting itself. Clear documentation prevents miscommunication and ensures accountability.
          </p>
          <div className="p-4 bg-blue-50/50 dark:bg-cyan-950/20 border border-blue-100 dark:border-cyan-500/20 rounded-xl">
            <span className="text-xs font-mono uppercase text-blue-700 dark:text-cyan-400 block mb-1 font-semibold">Action Items & Minutes</span>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Distribute concise meeting minutes within 24 hours. Clearly list assigned owners, deliverable deadlines, and links to cloud recordings or shared documentation.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}