"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Wrench, Lock } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative rounded-[20px] overflow-hidden p-8 sm:p-12 min-h-[500px] flex items-center border border-white/10 bg-[#0B1020] shadow-[0_18px_60px_rgba(0,0,0,0.55)] group">
        
        {/* Animated Background Layers (The "Aurora") */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(124,92,255,0.15),transparent_70%)]"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[10%] -right-[10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(47,230,184,0.12),transparent_70%)]"
          />
          {/* Background Image Overlay */}
          <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-6">
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF]" />
            <span>Privacy-first • Human-first • No noise</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-xl">
            Your hub for tools, <br />
            bots, and calm guidance.
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
            Simple navigation. Clean options. No hype. 
            If you want full access, the only door is <span className="text-white font-semibold">/join/</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="#explore"
              className="px-6 py-3 rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#7C5CFF]/60 border border-[#7C5CFF]/50 text-white font-bold shadow-[0_10px_26px_rgba(124,92,255,0.2)] hover:shadow-[0_0_30px_rgba(124,92,255,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Explore Hub
            </Link>
            <Link 
              href="/join"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
            >
              Join / Unlock
            </Link>
          </div>

          {/* Meta Pills */}
          <div className="flex flex-wrap gap-2 pt-4 text-[10px] uppercase tracking-wider text-slate-500 font-medium">
            {['No Tracking', 'No Accounts', 'Offline-Friendly', 'Education-Only'].map((tag) => (
              <span key={tag} className="px-2 py-1 rounded-md border border-white/5 bg-white/[0.02]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section id="explore" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        
        <Card 
          title="Digistore" 
          desc="Curated digital products. Buy once, own forever."
          icon={<ShoppingBag className="text-[#2FE6B8]" />}
          href="/digistore"
          cta="Shop Now"
        />

        <Card 
          title="Tools" 
          desc="Free utilities to help you build and explore."
          icon={<Wrench className="text-[#7C5CFF]" />}
          href="/tools"
          cta="Browse Tools"
        />

        <Card 
          title="Join / Unlock" 
          desc="Premium access for full ecosystem support."
          icon={<Lock className="text-pink-400" />}
          href="/join"
          cta="Join Now"
          highlight
        />

      </section>
    </main>
  );
}

function Card({ title, desc, icon, href, cta, highlight }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative p-6 rounded-2xl border flex flex-col h-full transition-all duration-300 ${
        highlight 
        ? "bg-gradient-to-b from-white/10 to-transparent border-white/20 shadow-[0_0_30px_rgba(124,92,255,0.1)]" 
        : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
      }`}
    >
      <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit border border-white/5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed">{desc}</p>
      
      <Link 
        href={href}
        className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
          highlight ? "text-white hover:text-[#2FE6B8]" : "text-[#2FE6B8] hover:text-white"
        }`}
      >
        {cta} <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
