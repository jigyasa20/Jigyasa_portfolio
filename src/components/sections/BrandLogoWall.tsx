import React from 'react';
import FadeIn from '../FadeIn';
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
  logo: string;
  bgColor: string;
}

const BRANDS: BrandItem[] = [
  { name: 'Base', logo: baseLogo, bgColor: '#FFFFFF' },
  { name: 'Bybit', logo: bybitLogo, bgColor: '#111727' },
  { name: 'Cake Wallet', logo: cakeWalletLogo, bgColor: '#EFEFF7' },
  { name: 'Dabba Network', logo: dabbaLogo, bgColor: '#1A1A1A' },
  { name: 'Fhenix', logo: fhenixLogo, bgColor: '#FFFFFF' },
  { name: 'Huddle01', logo: huddleLogo, bgColor: '#000000' },
  { name: 'Sera Protocol', logo: seraLogo, bgColor: '#FFFFFF' },
  { name: 'Stellar', logo: stellarLogo, bgColor: '#FFFFFF' },
];

// 6 duplicated sets for mathematically seamless infinite marquee across all screen widths
const TICKER_ITEMS = [
  ...BRANDS,
  ...BRANDS,
  ...BRANDS,
  ...BRANDS,
  ...BRANDS,
  ...BRANDS,
];

export const BrandLogoWall: React.FC = () => {
  return (
    <div id="brands" className="w-full bg-[#0C0C0C] select-none">
      {/* 1. Pink Top Ribbon Banner (Matching reference image) */}
      <div className="w-full bg-[#FFA0C5] text-[#0C0C0C] py-2.5 sm:py-3 px-4 flex items-center justify-center font-bold text-xs sm:text-sm md:text-base tracking-wide uppercase shadow-sm">
        <span className="whitespace-nowrap text-center">
          Your brand needs to tell a story &amp; i can make it happen
        </span>
      </div>

      {/* 2. Brand Logos Section (Dark theme, single line, reduced size) */}
      <section className="w-full bg-[#0C0C0C] pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden relative">
        {/* Title in one line with pink tracked uppercase style */}
        <FadeIn delay={0} y={15}>
          <div className="w-full max-w-7xl mx-auto px-4 mb-8 sm:mb-12 flex items-center justify-center">
            <h2 className="text-[#FFA0C5] font-bold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-xs sm:text-sm md:text-base whitespace-nowrap text-center">
              Projects I&apos;ve worked with
            </h2>
          </div>
        </FadeIn>

        {/* Single Line Moving Ticker with Gradient Edge Fades */}
        <div className="relative w-full overflow-hidden py-2">
          {/* Left edge gradient fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10" />

          {/* Right edge gradient fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10" />

          {/* Single Line Infinite Marquee Track */}
          <div className="flex w-max animate-marquee select-none items-center">
            {TICKER_ITEMS.map((brand, i) => (
              <div
                key={`brand-${brand.name}-${i}`}
                className="flex flex-col items-center justify-center mx-3 sm:mx-5 md:mx-7 group cursor-pointer"
              >
                {/* Circular Brand Logo Badge with matching background color to eliminate squares */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-2 sm:p-2.5 border border-white/20 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:border-[#FFA0C5] group-hover:shadow-[0_0_20px_rgba(255,160,197,0.35)] transition-all duration-300"
                  style={{ backgroundColor: brand.bgColor }}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    className="w-full h-full object-contain filter contrast-[1.02] group-hover:scale-105 transition-transform duration-300 rounded-full"
                    style={{ backgroundColor: brand.bgColor }}
                  />
                </div>

                {/* Brand Name Below Logo */}
                <span className="mt-2.5 sm:mt-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-zinc-400 group-hover:text-white transition-colors text-center whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandLogoWall;
