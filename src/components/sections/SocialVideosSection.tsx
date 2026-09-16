import React, { useRef, useEffect, useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SOCIAL_VIDEOS, type VideoShowcaseItem } from '../../data/socialVideos';
import FadeIn from '../FadeIn';

interface SocialVideosSectionProps {
  onSelectVideo?: (video: VideoShowcaseItem) => void;
}

export const SocialVideosSection: React.FC<SocialVideosSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updatePosition = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
      setOffset(calculatedOffset);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    updatePosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updatePosition, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updatePosition);
    };
  }, []);

  const row1 = SOCIAL_VIDEOS.slice(0, 4);
  const row2 = SOCIAL_VIDEOS.slice(4, 8);

  const row1Tripled = [...row1, ...row1, ...row1];
  const row2Tripled = [...row2, ...row2, ...row2];

  // Both rows start shifted left so their left edge never shows an empty gap while sliding.
  const row1Transform = `translateX(${offset - 700}px)`;
  const row2Transform = `translateX(${-offset - 150}px)`;

  const renderVideoCard = (video: VideoShowcaseItem, idx: number, prefix: string) => {
    // X's video host (video.twimg.com) refuses playback on other sites, so those
    // cards show their thumbnail instead. Self-hosted .mp4 files still autoplay.
    const isMp4 = video.videoUrl?.includes('.mp4') && !video.videoUrl.includes('twimg.com');
    const targetUrl = video.externalLink || video.videoUrl;
    const isX = video.platform.toLowerCase().includes('twitter') || video.platform.toLowerCase().includes('x');

    return (
      <a
        key={`${prefix}-${idx}`}
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Open on ${video.platform}: ${video.title}`}
        className="group relative w-[320px] sm:w-[380px] md:w-[440px] aspect-video rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800/80 cursor-pointer shadow-xl transition-all duration-500 hover:border-pink-500/60 hover:shadow-[0_0_35px_rgba(182,0,168,0.3)] hover:scale-[1.02] block shrink-0 select-none"
      >
        {/* Continuous silent autoplay for direct videos; high-res cover fallback for reels */}
        {isMp4 ? (
          <video
            src={video.videoUrl}
            poster={video.thumbnailUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
          />
        ) : (
          <img
            src={video.thumbnailUrl}
            alt={video.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
          />
        )}

        {/* Ambient Dark Gradient for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/25 pointer-events-none transition-opacity duration-300 group-hover:opacity-85" />

        {/* Top Badges: Platform + Duration */}
        <div className="absolute top-3.5 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-medium tracking-wider uppercase text-white flex items-center gap-1.5 shadow-sm">
            {isX ? (
              <svg className="w-3 h-3 text-sky-400 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            ) : (
              <svg className="w-3 h-3 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            )}
            {video.platform}
          </span>
          {video.duration && (
            <span className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 shadow-sm">
              {video.duration}
            </span>
          )}
        </div>

        {/* Floating Quick Action Badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white border border-white/30 text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-2xl">
            <span>Open Post</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Post Title */}
        <div className="absolute bottom-3.5 left-4 right-4 z-10 pointer-events-none">
          <h3 className="text-xs sm:text-sm font-semibold text-white truncate group-hover:text-pink-200 transition-colors">
            {video.title}
          </h3>
        </div>
      </a>
    );
  };

  return (
    <section
      id="videos"
      ref={sectionRef}
      className="w-full bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-12 overflow-hidden select-none"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <FadeIn delay={0} y={20} className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Click Any Card To Open Post</span>
          </div>
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-none"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4.4rem)' }}
          >
            Content That Gets Noticed
          </h2>
        </FadeIn>
      </div>

      {/* Dual Row Interactive Video Showcase */}
      <div className="flex flex-col gap-4">
        {/* Row 1: Moves right on scroll */}
        <div
          className="flex gap-4 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
            transition: 'transform 0.08s linear',
          }}
        >
          {row1Tripled.map((video, idx) => renderVideoCard(video, idx, 'row1'))}
        </div>

        {/* Row 2: Moves left on scroll */}
        <div
          className="flex gap-4 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
            transition: 'transform 0.08s linear',
          }}
        >
          {row2Tripled.map((video, idx) => renderVideoCard(video, idx, 'row2'))}
        </div>
      </div>
    </section>
  );
};

export default SocialVideosSection;
