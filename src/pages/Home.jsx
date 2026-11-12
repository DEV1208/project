import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MessageSquare, Video, Mail, Phone, LayoutList, 
  Globe, Users, AlertTriangle, CheckCircle, Zap, Clock, 
  BrainCircuit, ShieldCheck, ChevronRight, MessageCircle,
  ExternalLink, ArrowRight, Sun, Moon
} from 'lucide-react';

// --- UI COMPONENTS ---

const GlassCard = ({ children, className = "", hover = false, onClick }) => (
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

const PageHeader = ({ title, icon: Icon }) => (
  <div className="mb-12 border-b border-slate-200 dark:border-slate-800/80 pb-8 flex items-center gap-4">
    <div className="inline-flex items-center justify-center p-3 bg-blue-50 dark:bg-cyan-950/30 border border-blue-100 dark:border-cyan-500/20 rounded-xl text-blue-600 dark:text-cyan-400">
      <Icon size={28} />
    </div>
    <div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h1>
    </div>
  </div>
);

const EmptySlot = ({ height = "h-20", label = "CONTENT SLOT", className = "" }) => (
  <div className={`w-full rounded-xl border border-dashed border-slate-300 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-900/40 flex items-center justify-center ${height} ${className}`}>
    <span className="text-slate-400 dark:text-slate-600 text-xs font-mono tracking-widest uppercase">{label}</span>
  </div>
);

// --- PAGES ---

const HomePage = ({ navigate }) => (
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
          
          <div className="w-full mb-8">
            <EmptySlot height="h-28" label="HERO TAGLINE & SIMPLE INTRODUCTION TO WORKPLACE COMMUNICATION" />
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate('video-calls')} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2 text-sm">
              1. Video Calls <ArrowRight size={16} />
            </button>
            <button onClick={() => navigate('crm')} className="px-5 py-2.5 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-lg border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-2 text-sm">
              2. CRM & ITSM
            </button>
            <button onClick={() => navigate('emails')} className="px-5 py-2.5 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium rounded-lg border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-2 text-sm">
              3. Emails
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Project Overview</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
            <EmptySlot height="h-48" label="WHY ONLINE COMMUNICATION MATTERS (OVERVIEW SLOT)" />
          </GlassCard>
        </div>
      </div>
    </section>

    {/* Use Cases Navigation Grid */}
    <section className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 block mb-2">Core Modules</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Communication Use Cases</h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">
          Select a use case below to navigate to its dedicated sub-page.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Module 1: Video Calls */}
        <GlassCard hover className="flex flex-col h-full cursor-pointer group" onClick={() => navigate('video-calls')}>
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-100 dark:border-cyan-500/20">
              <Video size={24} />
            </div>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-600 font-semibold">01 / MODULE</span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            Video Calls
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
            Scheduling • Meeting Etiquette • Follow-Ups
          </p>
          
          <EmptySlot height="h-32" label="SIMPLE INTRO: VIDEO CALLS IN EVERYDAY WORK" className="mb-6" />
          
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60 text-blue-600 dark:text-cyan-400 font-medium text-sm mt-auto">
            <span>Open Sub-Page</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </GlassCard>

        {/* Module 2: CRM */}
        <GlassCard hover className="flex flex-col h-full cursor-pointer group" onClick={() => navigate('crm')}>
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-500/20">
              <Users size={24} />
            </div>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-600 font-semibold">02 / MODULE</span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            Customer Relations (CRM)
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
            ITSM • Customer Calls • Incident Notifications
          </p>
          
          <EmptySlot height="h-32" label="SIMPLE INTRO: ONLINE CUSTOMER EXPERIENCE & ITSM" className="mb-6" />
          
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60 text-blue-600 dark:text-cyan-400 font-medium text-sm mt-auto">
            <span>Open Sub-Page</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </GlassCard>

        {/* Module 3: Emails */}
        <GlassCard hover className="flex flex-col h-full cursor-pointer group" onClick={() => navigate('emails')}>
          <div className="flex items-center justify-between mb-6">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
              <Mail size={24} />
            </div>
            <span className="text-xs font-mono text-slate-400 dark:text-slate-600 font-semibold">03 / MODULE</span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
            Emails
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
            Efficiency • Clarity • Professional Tone
          </p>
          
          <EmptySlot height="h-32" label="SIMPLE INTRO: WRITING EFFICIENT & EFFECTIVE EMAILS" className="mb-6" />
          
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/60 text-blue-600 dark:text-cyan-400 font-medium text-sm mt-auto">
            <span>Open Sub-Page</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </GlassCard>
      </div>
    </section>

    {/* References Section */}
    <section className="py-12 border-t border-slate-200 dark:border-slate-800/60">
      <div className="max-w-4xl">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
          <LayoutList className="text-slate-400 dark:text-slate-500" size={20} /> 
          APA References
        </h2>
        <EmptySlot height="h-48" label="REFERENCES LIST (APA FORMATTING REQUIRED)" />
      </div>
    </section>
  </div>
);

const VideoCallsPage = () => {
  const sections = [
    { 
      title: "1. Scheduling Online Meetings", 
      subtitle: "How to effectively plan, invite, and prepare participants across time zones.",
      icon: Clock, 
      color: "text-blue-600 dark:text-blue-400" 
    },
    { 
      title: "2. Meeting Etiquette", 
      subtitle: "Best practices for camera usage, muting, active participation, and speaking turns.",
      icon: Video, 
      color: "text-cyan-600 dark:text-cyan-400" 
    },
    { 
      title: "3. Post-Meeting Follow-Up", 
      subtitle: "Action items, distributing meeting minutes, and asynchronous updates.",
      icon: CheckCircle, 
      color: "text-emerald-600 dark:text-emerald-400" 
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Video Calls" icon={Video} />

      <div className="mb-8">
        <EmptySlot height="h-24" label="OVERVIEW: WHY VIDEO CALLS MATTER IN THE ONLINE AGE" />
      </div>

      <div className="space-y-6">
        {sections.map((sec, idx) => (
          <GlassCard key={idx} hover className="flex flex-col gap-6">
            <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800/60 pb-4">
              <div className="flex items-center gap-4">
                <sec.icon size={24} className={sec.color} />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{sec.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{sec.subtitle}</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <span className="block text-xs font-mono text-slate-500 mb-2 uppercase">Core Strategies</span>
                <EmptySlot height="h-36" label="KEY STRATEGIES & GUIDELINES" />
              </div>
              <div>
                <span className="block text-xs font-mono text-blue-600 dark:text-cyan-500/70 mb-2 uppercase">Practical Do's & Don'ts</span>
                <EmptySlot height="h-36" label="CHECKLIST OR SCENARIO EXAMPLE" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

const CRMPage = () => {
  const crmTopics = [
    { title: "IT Service Management (ITSM) & CX", icon: ShieldCheck, label: "BALANCING TECHNICAL SUPPORT WITH CUSTOMER EXPERIENCE" },
    { title: "Direct Customer Phone Calls", icon: Phone, label: "TONE, ACTIVE LISTENING & DE-ESCALATION ON CALLS" },
    { title: "Incident Notifications & Updates", icon: AlertTriangle, label: "WRITING CLEAR OUTAGE / INCIDENT STATUS UPDATES" },
    { title: "Omnichannel Ticket Tracking", icon: MessageSquare, label: "MAINTAINING CONTEXT ACROSS CRM PLATFORMS" }
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Customer Relation Management (CRM)" icon={Users} />

      <div className="mb-8">
        <EmptySlot height="h-24" label="INTRODUCTION TO ONLINE CUSTOMER RELATIONS & ITSM" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {crmTopics.map((topic, idx) => (
          <GlassCard key={idx} hover className="flex flex-col h-full gap-4">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800/60 pb-4 mb-2">
              <topic.icon size={20} className="text-blue-600 dark:text-cyan-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{topic.title}</h3>
            </div>
            
            <div>
              <span className="block text-xs font-mono text-slate-500 mb-2 uppercase">Communication Strategy</span>
              <EmptySlot height="h-28" label={topic.label} />
            </div>
            
            <div>
              <span className="block text-xs font-mono text-emerald-600 dark:text-emerald-500/70 mb-2 uppercase">Real-World Template / Example</span>
              <EmptySlot height="h-28" label="SAMPLE SCRIPT OR NOTIFICATION TEMPLATE" />
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

const EmailsPage = () => {
  const emailPillars = [
    { title: "Subject Lines & Clarity", desc: "Crafting actionable, searchable subject lines." },
    { title: "Structure & Brevity", desc: "Using the BLUF (Bottom Line Up Front) method and bullet points." },
    { title: "Tone & Professionalism", desc: "Avoiding passive-aggressive phrasing and reading between the lines." },
    { title: "Call to Action & Sign-offs", desc: "Making next steps and deadlines unmistakable." }
  ];

  return (
    <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
      <PageHeader title="Effective & Efficient Emails" icon={Mail} />

      <div className="mb-8">
        <EmptySlot height="h-24" label="INTRO: WHY MOST EMAILS FAIL & HOW TO FIX THEM" />
      </div>

      <div className="space-y-4 mb-10">
        {emailPillars.map((pillar, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 rounded-xl shadow-sm">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-cyan-500 font-mono text-sm mt-1">{`0${idx + 1}`}</span>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{pillar.desc}</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <EmptySlot height="h-24" label="TECHNIQUES & EXAMPLES" />
            </div>
          </div>
        ))}
      </div>
      
      <GlassCard>
        <span className="block text-xs font-mono text-blue-600 dark:text-cyan-500/70 mb-4 uppercase">Before & After Comparison</span>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <span className="block text-xs font-mono text-red-500 mb-2 uppercase">Ineffective Email</span>
            <EmptySlot height="h-40" label="BAD EMAIL EXAMPLE" />
          </div>
          <div>
            <span className="block text-xs font-mono text-emerald-500 mb-2 uppercase">Effective Email</span>
            <EmptySlot height="h-40" label="REWRITTEN PRO EMAIL EXAMPLE" />
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [currentPage]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'video-calls', label: 'Video Calls' },
    { id: 'crm', label: 'CRM' },
    { id: 'emails', label: 'Emails' }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage navigate={setCurrentPage} />;
      case 'video-calls': return <VideoCallsPage />;
      case 'crm': return <CRMPage />;
      case 'emails': return <EmailsPage />;
      default: return <HomePage navigate={setCurrentPage} />;
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} h-full w-full min-h-screen`}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 font-sans selection:bg-blue-200 dark:selection:bg-cyan-500/30 selection:text-blue-900 dark:selection:text-cyan-100 transition-colors duration-300">
        
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-lg transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              
              {/* Logo */}
              <div 
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => setCurrentPage('home')}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-cyan-400 dark:to-blue-600 rounded-xl flex items-center justify-center shadow-md dark:shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:shadow-lg dark:group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all">
                  <Globe className="text-white" size={22} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  Remote<span className="font-light text-blue-600 dark:text-cyan-400">Connect</span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-2 mr-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => setCurrentPage(link.id)}
                      className={`
                        px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                        ${currentPage === link.id 
                          ? 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-cyan-500/30 shadow-sm dark:shadow-[0_0_10px_rgba(6,182,212,0.1)]' 
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50 border border-transparent'
                        }
                      `}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>

                {/* Theme Toggle */}
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl animate-in slide-in-from-top-2">
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setCurrentPage(link.id)}
                    className={`
                      block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors
                      ${currentPage === link.id 
                        ? 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-cyan-500/20' 
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                      }
                    `}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <main className="pt-20 min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-300">
          {renderPage()}
        </main>

        {/* Footer */}
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

        {/* Custom Styles for animations & text formatting */}
        <style dangerouslySetInnerHTML={{__html: `
          .animate-in {
            animation-duration: 0.5s;
            animation-fill-mode: both;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation-name: fade-in;
          }
          .hanging-indent {
            text-indent: -1.5em;
            padding-left: 1.5em;
          }
        `}} />
      </div>
    </div>
  );
}