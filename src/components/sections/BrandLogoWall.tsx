import React from 'react';
import FadeIn from '../FadeIn';
import { Sparkles } from 'lucide-react';

interface BrandItem {
  name: string;
  category: string;
  symbol: string;
}

const BRANDS: BrandItem[] = [
  { name: 'Polygon', category: 'Web3 & L2', symbol: '⬡' },
  { name: 'Unreal Engine', category: 'Real-time 3D', symbol: '✦' },
  { name: 'Solana', category: 'Ecosystem', symbol: '◎' },
  { name: 'Blender', category: '3D Creation', symbol: '❖' },
  { name: 'Adidas', category: 'Apparel & Renders', symbol: '▲' },
  { name: 'Nike', category: 'Digital Footwear', symbol: '✔' },
  { name: 'Red Bull', category: 'Media & Energy', symbol: '⚡' },
  { name: 'Spotify', category: 'Spatial Audio', symbol: '●' },
  { name: 'Binance', category: 'Crypto & Web3', symbol: '⯁' },
  { name: 'Prada', category: 'Luxury 3D Renders', symbol: '◆' },
  { name: 'Figma', category: 'Design Systems', symbol: '◰' },
  { name: 'VaynerMedia', category: 'Content Campaigns', symbol: '★' },
];

export const BrandLogoWall: React.FC = () => {
  const tickerBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section
      id="brands"
      className="w-full bg-white text-[#0C0C0C] pt-6 pb-24 sm:pb-28 md:pb-32 px-5 sm:px-8 md:px-10 relative z-0"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-mono uppercase tracking-widest text-[#0C0C0C]/70 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Proven Collaborations</span>
            </div>
            <h2
              className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}
            >
              Teams I&apos;ve Created For
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-[#0C0C0C]/65 max-w-xl mx-auto font-light leading-relaxed">
              From global athletic brands and gaming powerhouses to decentralized protocols — here are some teams I’ve had the fun of creating with.
            </p>
          </FadeIn>
        </div>

        {/* Interactive Logo Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {BRANDS.map((brand, idx) => (
            <FadeIn
              key={`brand-${idx}`}
              delay={idx * 0.04}
              y={20}
              className="h-full"
            >
              <div className="group h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-black/10 bg-black/[0.02] hover:bg-black hover:text-white transition-all duration-300 flex flex-col justify-between items-center text-center cursor-default shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="text-2xl sm:text-3xl mb-3 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all text-purple-600 group-hover:text-pink-400">
                  {brand.symbol}
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg tracking-tight uppercase group-hover:text-white transition-colors">
                    {brand.name}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-black/50 group-hover:text-zinc-400 uppercase tracking-wider block mt-1 transition-colors">
                    {brand.category}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Continuous Marquee Ticker */}
        <div className="mt-12 sm:mt-16 overflow-hidden py-4 border-t border-b border-black/10">
          <div className="flex gap-8 w-max animate-marquee select-none">
            {tickerBrands.map((brand, i) => (
              <div
                key={`ticker-${i}`}
                className="flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0C0C0C]/40 hover:text-[#0C0C0C] transition-colors"
              >
                <span>{brand.symbol}</span>
                <span>{brand.name}</span>
                <span className="text-purple-500">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogoWall;
