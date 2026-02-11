import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { clsx } from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GIANNIDONA — Hub",
  description: "Privacy-first. Human-first. No noise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={clsx(inter.className, "min-h-screen bg-[#070A0F] text-[#EAF0FF]")}>
        
        {/* Global Navigation (The TopShell) */}
        <div className="max-w-[1150px] mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <header className="relative flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_10px_26px_rgba(0,0,0,0.38)] transition-all hover:shadow-[0_0_30px_rgba(124,92,255,0.1)] z-50">
            
            {/* Brand */}
            <div className="flex items-center gap-3 min-w-[220px]">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#2FE6B8]/60 shadow-lg flex items-center justify-center font-black text-xs tracking-widest text-white/90">
                GD
              </div>
              <div>
                <div className="font-extrabold text-sm tracking-widest uppercase text-white">GIANNIDONA</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wide">Calm Hub • Clean Routes</div>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-wrap justify-center gap-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/digistore">Digistore</NavLink>
              <NavLink href="/tools">Tools</NavLink>
              <NavLink href="/ai">AI Bots</NavLink>
              <NavLink href="/join">Join / Unlock</NavLink>
            </nav>
          </header>
        </div>

        {children}

        {/* Global Footer */}
        <footer className="max-w-[1150px] mx-auto px-4 py-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span>GIANNIDONA — calm, privacy-first, human-first.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/digistore" className="hover:text-[#2FE6B8] transition-colors">Digistore</Link>
            <Link href="/tools" className="hover:text-[#2FE6B8] transition-colors">Tools</Link>
            <Link href="/join" className="hover:text-[#2FE6B8] transition-colors">Join</Link>
          </div>
        </footer>

      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm hover:bg-white/10 hover:text-white hover:border-white/20 hover:-translate-y-px transition-all duration-200"
    >
      {children}
    </Link>
  );
}
