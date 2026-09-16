import React, { useRef, useEffect, useState } from 'react';
import { Play, Sparkles, Eye, Heart } from 'lucide-react';
import { SOCIAL_VIDEOS, type VideoShowcaseItem } from '../../data/socialVideos';
import FadeIn from '../FadeIn';

interface SocialVideosSectionProps {
  onSelectVideo: (video: VideoShowcaseItem) => void;
}

export const SocialVideosSection: React.FC<SocialVideosSectionProps> = ({ onSelectVideo }) => {
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

  const row1Transform = `translateX(${offset - 150}px)`;
  const row2Transform = `translateX(${-(offset - 150)}px)`;

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
            <span>Click Any Video To Watch</span>
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
          {row1Tripled.map((video, idx) => (
            <div
              key={`row1-vid-${idx}`}
              onClick={() => onSelectVideo(video)}
              className="group relative w-[320px] sm:w-[400px] md:w-[440px] h-[220px] sm:h-[260px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/80 cursor-pointer shadow-xl transition-all duration-500 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(182,0,168,0.25)] hover:scale-[1.02]"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium tracking-wider uppercase text-white">
                  {video.platform}
                </span>
                {video.duration && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-mono text-zinc-300">
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:bg-fuchsia-600 group-hover:border-white shadow-2xl">
                  <Play className="w-6 h-6 ml-0.5 fill-current" />
                </div>
              </div>

              {/* Bottom Title & Stats */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-sm sm:text-base font-semibold text-white truncate group-hover:text-pink-200 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-1.5 text-[11px] text-zinc-400 font-mono">
                  {video.views && (
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </span>
                  )}
                  {video.likes && (
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-pink-400" />
                      {video.likes}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
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
          {row2Tripled.map((video, idx) => (
            <div
              key={`row2-vid-${idx}`}
              onClick={() => onSelectVideo(video)}
              className="group relative w-[320px] sm:w-[400px] md:w-[440px] h-[220px] sm:h-[260px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/80 cursor-pointer shadow-xl transition-all duration-500 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(182,0,168,0.25)] hover:scale-[1.02]"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium tracking-wider uppercase text-white">
                  {video.platform}
                </span>
                {video.duration && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-mono text-zinc-300">
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-115 group-hover:bg-fuchsia-600 group-hover:border-white shadow-2xl">
                  <Play className="w-6 h-6 ml-0.5 fill-current" />
                </div>
              </div>

              {/* Bottom Title & Stats */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="text-sm sm:text-base font-semibold text-white truncate group-hover:text-pink-200 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 mt-1.5 text-[11px] text-zinc-400 font-mono">
                  {video.views && (
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </span>
                  )}
                  {video.likes && (
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-pink-400" />
                      {video.likes}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialVideosSection;
