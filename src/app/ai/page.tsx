import type { Metadata } from "next";
import { ExternalLink, Bot, Brain, Sparkles, Shield, User } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

export const metadata: Metadata = {
  title: "AI Bots | Taurus Hub",
  description: "Pick a Monica bot and open it in a new tab.",
};

// 1. Data Structure
interface BotItem {
  title: string;
  icon: React.ElementType;
  tag: string;
  desc: string;
  href: string; // The Monica share link
  color: string; // Tailwind text color class for the icon
}

const bots: BotItem[] = [
  {
    title: "Bad Energy Repeller",
    icon: Shield,
    tag: "PROTECTION",
    desc: "Calm, protective routing. Blocks noise and negativity.",
    href: "#", // TODO: Replace with actual Monica link
    color: "text-blue-400",
  },
  {
    title: "Small Business Systems",
    icon: Brain,
    tag: "SYSTEMS",
    desc: "Structure, routines, and operating clarity for owners.",
    href: "#",
    color: "text-purple-400",
  },
  {
    title: "The Healers AI",
    icon: Sparkles,
    tag: "HEALERS",
    desc: "Grounded education. No medical promises. Just clarity.",
    href: "#",
    color: "text-pink-400",
  },
  {
    title: "Insight Engine",
    icon: Bot,
    tag: "INSIGHT",
    desc: "Signal → slow down → test → decide. Strategic thinking.",
    href: "#",
    color: "text-emerald-400",
  },
  {
    title: "Gianni Dona",
    icon: User,
    tag: "VOICE",
    desc: "Calm, human-first guidance lane. The core persona.",
    href: "#",
    color: "text-white",
  },
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-[#070A0F] text-[#EAF0FF] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* 2. Global Ambient Background (Matches Home & Digistore) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[20%] w-[900px] h-[600px] bg-[radial-gradient(circle,rgba(124,92,255,0.15),transparent_60%)]" />
        <div className="absolute top-[10%] right-[10%] w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(47,230,184,0.10),transparent_55%)]" />
      </div>

      <div className="relative max-w-[1150px] mx-auto">
        
        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg">
            AI Bots
          </h1>
          <p className="mt-3 text-slate-400 text-lg max-w-2xl">
            Specialized agents for specific tasks. Each one opens a public Monica share link in a new tab.
          </p>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot, index) => (
            <a
              key={index}
              href={bot.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className={clsx("p-3 rounded-xl bg-white/5 border border-white/5", bot.color)}>
                  <bot.icon size={24} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-black/20 border border-white/10 text-slate-400 group-hover:text-white transition-colors">
                  {bot.tag}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-[#2FE6B8] transition-colors">
                {bot.title}
              </h2>
              
              <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed relative z-10">
                {bot.desc}
              </p>

              <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center text-sm font-medium text-slate-500 group-hover:text-white transition-colors">
                Open Bot <ExternalLink size={14} className="ml-2 opacity-50 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>

        {/* Setup Hint */}
        <div className="mt-16 p-4 rounded-xl border border-dashed border-slate-800 bg-slate-900/50 text-center max-w-lg mx-auto">
          <p className="text-xs text-slate-500 font-mono">
            <strong>Dev Note:</strong> Update the <code>href</code> fields in <code>src/app/ai/page.tsx</code> with your actual Monica share links.
          </p>
        </div>

      </div>
    </div>
  );
}
