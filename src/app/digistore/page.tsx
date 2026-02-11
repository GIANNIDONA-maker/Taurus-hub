"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ShoppingBag, Zap } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";

// 1. Product Data (Easy to manage)
const products = [
  {
    title: "Starter Pack",
    desc: "Templates + quickstart docs.",
    price: "$9",
    features: ["Instant download", "Clear instructions", "Lifetime access"],
    highlight: false,
  },
  {
    title: "Creator Bundle",
    desc: "More tools, more assets, more value.",
    price: "$19",
    features: ["Updated monthly", "Extra templates", "Bonus resources"],
    highlight: true, // This one pops
  },
  {
    title: "Pro Kit",
    desc: "Full suite + priority updates.",
    price: "$39",
    features: ["Everything included", "Priority releases", "Best value"],
    highlight: false,
  },
];

export default function DigistorePage() {
  return (
    <div className="min-h-screen bg-[#070A0F] text-slate-100 overflow-hidden relative selection:bg-[#7C5CFF]/30">
      
      {/* 2. Global Ambient Background (The "Aurora") */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[16%] w-[900px] h-[520px] bg-[radial-gradient(circle,rgba(124,92,255,0.18),transparent_60%)]" />
        <div className="absolute top-[18%] right-[12%] w-[880px] h-[520px] bg-[radial-gradient(circle,rgba(47,230,184,0.14),transparent_58%)]" />
        <div className="absolute bottom-[8%] left-[50%] -translate-x-1/2 w-[760px] h-[560px] bg-[radial-gradient(circle,rgba(0,255,150,0.10),transparent_62%)]" />
      </div>

      <div className="relative max-w-[1150px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        
        {/* 3. Hero Section with 3D Tilt Effect */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[20px] overflow-hidden p-8 sm:p-12 border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.55)] group"
        >
          {/* Hero Background Image Overlay */}
          <div className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F]/90 via-[#070A0F]/50 to-[#070A0F]/80 pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs text-slate-300 shadow-lg backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2FE6B8] animate-pulse" />
              <span>Curated • Instant access • Clean downloads</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
              Digistore
            </h1>
            
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Digital products, templates, and packs. Buy once, download instantly.
              Secure payments, no accounts required.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="#store"
                className="px-6 py-3 rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#2FE6B8]/50 border border-[#7C5CFF]/50 text-white font-bold shadow-[0_0_20px_rgba(124,92,255,0.3)] hover:shadow-[0_0_30px_rgba(124,92,255,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2"
              >
                <ShoppingBag size={18} /> Browse Products
              </Link>
              <Link 
                href="/join"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm flex items-center gap-2"
              >
                <Zap size={18} /> Join / Unlock
              </Link>
            </div>
          </div>
        </motion.section>

        {/* 4. Product Grid */}
        <div id="store" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pb-20">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} delay={idx * 0.1} />
          ))}
        </div>

      </div>
    </div>
  );
}

function ProductCard({ product, delay }: { product: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
      className={clsx(
        "relative rounded-2xl p-6 border transition-all duration-300 group preserve-3d",
        product.highlight 
          ? "bg-white/[0.07] border-[#2FE6B8]/30 shadow-[0_0_40px_rgba(47,230,184,0.1)]" 
          : "bg-white/[0.03] border-white/10 hover:border-white/20"
      )}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{product.title}</h3>
      <p className="text-slate-400 text-sm mb-6 relative z-10">{product.desc}</p>

      <ul className="space-y-3 mb-8 relative z-10">
        {product.features.map((feat: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-300 group-hover:text-[#2FE6B8] transition-colors">
            <Check size={14} className="text-[#2FE6B8]" />
            {feat}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
        <div>
          <span className="text-2xl font-bold text-white block">{product.price}</span>
          <span className="text-xs text-slate-500 uppercase tracking-wider">One-time</span>
        </div>
        <Link 
          href="/join"
          className={clsx(
            "px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1",
            product.highlight
              ? "bg-[#2FE6B8] text-black hover:bg-[#25b893]"
              : "bg-white/10 text-white hover:bg-white/20"
          )}
        >
          Buy <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
