import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-10 py-12 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Creator Credit */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="hero-heading font-black text-2xl uppercase tracking-tight">
            Jigyasa
          </span>
          <span className="hidden sm:inline text-zinc-600">/</span>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
            3D Creator &amp; Visual Storyteller
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-[#D7E2EA]/70">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter / X
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            TikTok
          </a>
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Say Hello
          </button>
        </div>

        {/* Right: Back to top */}
        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/70 hover:text-white transition-colors p-2 rounded-full border border-zinc-800 hover:border-zinc-700"
          aria-label="Back to top"
        >
          <span className="hidden sm:inline pl-1">Back To Top</span>
          <div className="w-7 h-7 rounded-full bg-zinc-900 group-hover:bg-zinc-800 flex items-center justify-center transition-colors">
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Jigyasa. Crafted with love &amp; 3D passion.</p>
        <p className="mt-2 sm:mt-0 font-mono text-zinc-500">Jigyasa - 3D Creator</p>
      </div>
    </footer>
  );
};

export default Footer;
