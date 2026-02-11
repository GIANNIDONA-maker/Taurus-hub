import type { Metadata } from "next";
import { Shield, Wifi, Globe, Zap, ExternalLink, Server, Lock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools | Taurus Hub",
  description: "Essential utilities and security tools for your digital operations.",
};

// 1. Configuration for the Surfshark Promo
const SURFSHARK_LINKS = [
  { label: "Get Surfshark (Server 1)", url: "https://links.surfsharkbiz.com/s/c/4Lo65tymkfgVqOlNLr4a3OZB0_t9HjahRZp-5_0ywrEvtCYA0EEfqp5Y79g4ePvsdruiHCRooLycC9YWqUqoCW2qMl6MR7rKkm3sO9N2lQpSrAuPk747K18XX5-MSa9PQiIN92NBI1uII3JRtISjaYRMcuhtS7zAzUW-ukdTvI-W0EhcYSFl6O2IPWo0UnZOvl-Ao-i0Zy4sAUiXpbjWXCNHTTk97dVprIiPJmySzW_ne14o5kkP6E6TGljjRjBiRUBR1rPE8sKwgTBqhS__TnU-2KMKTo7icbt2FCYFl92XrWwAC_qmGbvAIqz_OICodh4NAd6v9tsfDc3bRbgk_qigAwAF73ohh19u_aeR06k89ltYMVcyu-UDsI_wGkvzFR9nzF90NAwYIqu5qVsF99vUjxQ0AUYyPQhltHC9g8R1MfzgrFawNcQuYYc06pxz4copd3UpdTHqNw/8m8z2M4Ve00w0EmC_z_Jv6oyTagbu5OF/17" },
  { label: "Get Surfshark (Server 2)", url: "https://links.surfsharkbiz.com/s/c/4Lo65tymkfgVqOlNLr4a3OZB0_t9HjahRZp-5_0ywrEvtCYA0EEfqp5Y79g4ePvsdruiHCRooLycC9YWqUqoCW2qMl6MR7rKkm3sO9N2lQpSrAuPk747K18XX5-MSa9PQiIN92NBI1uII3JRtISjaYRMcuhtS7zAzUW-ukdTvI-W0EhcYSFl6O2IPWo0UnZOvl-Ao-i0Zy4sAUiXpbjWXCNHTTk97dVprIiPJmySzW_ne14o5kkP6E6TGljjRjBiRUBR1rPE8sKwgTBqhS__TnU-2KMKTo7icbt2FCYFl92XrWwAC_qmGbvAIqz_OICodh4NAd6v9tsfDc3bRbgk_qigAwAF73ohh19u_aeR06k89ltYMVcyu-UDsI_wGkvzFR9nzF90NAwYIqu5qVsF99vUjxQ0AUYyPQhltHC9g8R1MfzgrFawNcQuYYc06pxz4copd3UpdTHqNw/8m8z2M4Ve00w0EmC_z_Jv6oyTagbu5OF/17" },
  { label: "Get Surfshark (Server 3)", url: "https://links.surfsharkbiz.com/s/c/btjEXA0g5QgkmUBRjbmhoT45PB-g0jRTyNkrYIH4rMuc6aE-2NUPimladzkcb8KSDfy2RqZM7Ya8a7B7Uiq302Tw4lpMc5De2waYLOvCUT-1qv-ZPO9PYH4uUD_zlGNWWadGHsRSWc7Q0ZjmOTJpsiPDXKHopiBrGL-SzrPDwk30OCgEv-Fv5srFl_WOTSdyt6a1VvRC-XWaDVkKBvHNlacXC_v2r2aY-7l9C8Fl4X0v2LI-8OJRl5U2Z4NqCd8fc7jj3-_U7HhFz1LfzDCrKNrzXDYq7vKIhkijK9OUNLexGfZuPM6Vm8cZ61bpReCG4_sfd1YE5NX8BKF0dd757FwqIhB30uMbEHVPQJF2Ok28SrVbrCSuOUCclokUGMxuO5Q9gEvrCjxG5mL41YnsDHsKvJgCoa9ZTJXj2gvmsQHmfxTS6yiqb6xxWn46CNFrlkDrqjZVn3A/a55WZW451N7zvL5pm_SrEzHH7aUpahVl/17" },
];

const FEATURES = [
  { icon: Globe, title: "Global Network", desc: "Access content from anywhere." },
  { icon: Shield, title: "No-Logs Policy", desc: "Your data stays private, always." },
  { icon: Zap, title: "Lightning Fast", desc: "High-speed servers for streaming." },
  { icon: Server, title: "Unlimited Devices", desc: "Protect your whole home." },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Command Center Tools
          </h1>
          <p className="text-slate-400">
            Curated utilities to secure, optimize, and enhance your digital workflow.
          </p>
        </div>

        {/* Featured Tool: Surfshark (Transformed from your HTML) */}
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 relative z-10">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                <Lock size={12} /> Recommended Security
              </div>
              
              <h2 className="text-3xl font-bold text-white">
                Discover Surfshark VPN
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Protect your privacy and browse securely with Surfshark&apos;s advanced VPN technology. 
                Don&apos;t let prying eyes see your data.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1.5 rounded-lg bg-slate-800 text-blue-400">
                      <feature.icon size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-200 text-sm">{feature.title}</h4>
                      <p className="text-xs text-slate-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col justify-center space-y-4 bg-slate-950/50 p-6 rounded-2xl border border-slate-800/50">
              <h3 className="text-center text-slate-400 text-sm font-medium mb-2">
                Exclusive Affiliate Offers
              </h3>
              {SURFSHARK_LINKS.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 transform hover:-translate-y-0.5"
                >
                  <span>{link.label}</span>
                  <ExternalLink size={18} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
              <p className="text-center text-xs text-slate-600 mt-4">
                By clicking these links, you support Taurus Hub.
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder for Future Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-800 border-dashed flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-slate-600">
                <Zap size={20} />
              </div>
              <h3 className="font-medium text-slate-400">Tool Slot #{i}</h3>
              <p className="text-xs text-slate-600">Coming soon...</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
