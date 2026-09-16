import React from 'react';
import FadeIn from '../FadeIn';
import { Sparkles } from 'lucide-react';

// Brand logos imported from assets (taken from Logo folder)
import baseLogo from '../../assets/brands/Base.png';
import bybitLogo from '../../assets/brands/Bybit.jpg';
import cakeWalletLogo from '../../assets/brands/Cake Wallet.jpg';
import dabbaLogo from '../../assets/brands/Dabba Network.jpg';
import fhenixLogo from '../../assets/brands/Fhenix.jpg';
import huddleLogo from '../../assets/brands/Huddle.jpg';
import seraLogo from '../../assets/brands/Sera Protocol.png';
import stellarLogo from '../../assets/brands/Stellar.jpg';

interface BrandItem {
  name: string;
  category: string;
  logo: string;
}

const BRANDS: BrandItem[] = [
  { name: 'Base', category: 'Coinbase L2', logo: baseLogo },
  { name: 'Bybit', category: 'Crypto Exchange', logo: bybitLogo },
  { name: 'Cake Wallet', category: 'DeFi & Mobile', logo: cakeWalletLogo },
  { name: 'Dabba Network', category: 'DePIN Connectivity', logo: dabbaLogo },
  { name: 'Fhenix', category: 'Confidential FHE', logo: fhenixLogo },
  { name: 'Huddle01', category: 'Decentralized Audio/Video', logo: huddleLogo },
  { name: 'Sera Protocol', category: 'AI & Data Ecosystem', logo: seraLogo },
  { name: 'Stellar', category: 'Global Financial Network', logo: stellarLogo },
];

// Tripled array for seamless infinite moving ticker
const TICKER_ROW_1 = [...BRANDS, ...BRANDS, ...BRANDS];
const TICKER_ROW_2 = [...BRANDS.slice(4), ...BRANDS.slice(0, 4), ...BRANDS, ...BRANDS];

export const BrandLogoWall: React.FC = () => {
  return (
    <section
      id="brands"
      className="w-full bg-white text-[#0C0C0C] pt-10 pb-24 sm:pb-28 md:pb-36 overflow-hidden relative z-0"
    >
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 mb-12 sm:mb-16">
        {/* Header with requested title */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-mono uppercase tracking-widest text-[#0C0C0C]/70 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Collaborations &amp; Partners</span>
            </div>
            <h2
              className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5.2rem)' }}
            >
              Projects i&apos;ve worked with
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base text-[#0C0C0C]/65 max-w-xl mx-auto font-light leading-relaxed">
              From decentralized networks and Web3 ecosystems to real-time communication protocols - here are some of the teams I’ve created for.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Moving Brand Logo Ticker (Row 1: Moves Left) */}
      <div className="w-full overflow-hidden py-3 border-t border-black/10">
        <div className="flex w-max animate-marquee select-none items-center">
          {TICKER_ROW_1.map((brand, i) => (
            <div
              key={`ticker-row1-${i}`}
              className="flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8 group cursor-pointer"
            >
              {/* Logo Card */}
              <div className="w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 bg-zinc-50 p-3 sm:p-4 shadow-sm group-hover:shadow-xl group-hover:border-purple-500/50 group-hover:scale-108 transition-all duration-300 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter contrast-[1.02] group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Brand Name Below Logo */}
              <span className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0C0C0C] group-hover:text-purple-600 transition-colors text-center whitespace-nowrap">
                {brand.name}
              </span>

              {/* Category / Detail */}
              <span className="text-[10px] sm:text-[11px] text-zinc-500 font-light tracking-wide text-center whitespace-nowrap">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Moving Brand Logo Ticker (Row 2: Reverse Movement) */}
      <div className="w-full overflow-hidden py-4 border-b border-black/10 mt-3">
        <div className="flex w-max animate-marquee-reverse select-none items-center">
          {TICKER_ROW_2.map((brand, i) => (
            <div
              key={`ticker-row2-${i}`}
              className="flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8 group cursor-pointer"
            >
              {/* Logo Card */}
              <div className="w-18 h-18 sm:w-22 sm:h-22 md:w-26 md:h-26 rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 bg-zinc-50 p-3 sm:p-4 shadow-sm group-hover:shadow-xl group-hover:border-pink-500/50 group-hover:scale-108 transition-all duration-300 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter contrast-[1.02] group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Brand Name Below Logo */}
              <span className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0C0C0C] group-hover:text-pink-600 transition-colors text-center whitespace-nowrap">
                {brand.name}
              </span>

              {/* Category / Detail */}
              <span className="text-[10px] sm:text-[11px] text-zinc-500 font-light tracking-wide text-center whitespace-nowrap">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogoWall;
