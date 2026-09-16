import React from 'react';
import FadeIn from '../FadeIn';
import { SOCIAL_ANALYTICS } from '../../data/analytics';
import { TrendingUp, Users, Sparkles, Briefcase, ExternalLink } from 'lucide-react';

export const SocialAnalyticsSection: React.FC = () => {
  const { overview, platforms } = SOCIAL_ANALYTICS;

  const getPlatformIcon = (platformName: string) => {
    switch (platformName) {
      case 'Instagram':
        return (
          <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case 'Twitter / X':
        return (
          <svg className="w-4 h-4 text-sky-400 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'TikTok':
        return (
          <svg className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        );
      case 'YouTube':
        return (
          <svg className="w-5 h-5 text-red-400 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section
      id="stats"
      className="w-full bg-[#0C0C0C] py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/70 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Audience &amp; Influence</span>
            </div>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)' }}
            >
              Reach &amp; Community
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-400 font-light leading-relaxed">
              I don&apos;t just post renders into the void — I build genuine hype. Here&apos;s a quick snapshot of the audience tuning in across my channels.
            </p>
          </FadeIn>
        </div>

        {/* 4 Big Overview Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
          <FadeIn delay={0.05} y={20}>
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden group hover:border-pink-500/40 transition-colors">
              <div className="text-xs uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-400" />
                <span>Total Audience</span>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {overview.totalFollowers}
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-mono">
                Across all social platforms
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} y={20}>
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden group hover:border-purple-500/40 transition-colors">
              <div className="text-xs uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>Total Views</span>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {overview.totalViews}
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-mono">
                Lifetime video impressions
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} y={20}>
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
              <div className="text-xs uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Brand Collabs</span>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {overview.brandsCollabed}
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-mono">
                Commercial campaigns delivered
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/90 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="text-xs uppercase tracking-widest text-zinc-400 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Engagement Rate</span>
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                {overview.engagementRate}
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-mono">
                ~3x creator benchmark average
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Breakdown by Platform */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {platforms.map((item, idx) => (
            <FadeIn
              key={item.platform}
              delay={0.1 + idx * 0.08}
              y={25}
              className="h-full"
            >
              <div className="h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Top bar with icon and link */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-zinc-800/80 flex items-center justify-center border border-zinc-700/50">
                        {getPlatformIcon(item.platform)}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                          {item.platform}
                        </h3>
                        <span className="text-xs text-zinc-400 font-mono">
                          {item.handle}
                        </span>
                      </div>
                    </div>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800/70 hover:bg-zinc-700 text-xs text-zinc-300 hover:text-white transition-colors"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Vibe / Content description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {item.vibe}
                  </p>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80">
                  <div>
                    <span className="block text-[11px] text-zinc-500 uppercase tracking-wider">
                      Followers
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.followers}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] text-zinc-500 uppercase tracking-wider truncate">
                      {item.primaryMetricLabel}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.primaryMetricValue}
                    </span>
                  </div>

                  <div>
                    <span className="block text-[11px] text-zinc-500 uppercase tracking-wider truncate">
                      {item.secondaryMetricLabel}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {item.secondaryMetricValue}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialAnalyticsSection;
