"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Diamond, Globe } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden bg-noise">
      {/* Ambient Gold Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#D4AF37] opacity-[0.08] blur-[150px] rounded-full pointer-events-none" />
      
      {/* Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <div className="text-2xl font-serif font-bold tracking-widest text-white">AUREUS</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 tracking-wide">
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Concierge</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Vault</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Membership</Link>
        </div>
        <button className="px-6 py-2 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
          Client Login
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-center px-4 relative z-10 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-6 backdrop-blur-md">
            Invitation Only
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 leading-tight">
            Invest in the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCEEAC] to-[#D4AF37]">Timeless.</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg text-slate-400 font-light leading-relaxed mb-10">
            A digital sanctuary for those who have transcended the need for noise. 
            Secure asset management, bespoke concierge, and global sovereignty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-[#D4AF37] text-black font-semibold text-sm uppercase tracking-widest hover:bg-white transition-all duration-500 flex items-center gap-2">
              Request Access <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/10 text-white font-semibold text-sm uppercase tracking-widest hover:border-white transition-all duration-500 backdrop-blur-sm">
              View Manifesto
            </button>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Shield size={24} />} 
          title="Sovereign Security" 
          desc="Military-grade encryption with biometric hardware authentication keys."
        />
        <FeatureCard 
          icon={<Diamond size={24} />} 
          title="Tangible Assets" 
          desc="Real-time valuation of fine art, horology, and precious metals."
        />
        <FeatureCard 
          icon={<Globe size={24} />} 
          title="Global Concierge" 
          desc="AI-driven logistics for the modern polymath. Available 24/7."
        />
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#D4AF37]/30 transition-colors duration-500 group">
      <div className="mb-6 text-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity">{icon}</div>
      <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-300 transition-colors">{desc}</p>
    </div>
  );
}
