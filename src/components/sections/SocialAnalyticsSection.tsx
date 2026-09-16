import React from 'react';
import FadeIn from '../FadeIn';
import CountUp from '../CountUp';
import { SOCIAL_ANALYTICS } from '../../data/analytics';
import { TrendingUp, Sparkles, ExternalLink, ShieldCheck, Eye, Users, BarChart3, Activity } from 'lucide-react';

export const SocialAnalyticsSection: React.FC = () => {
  const { overview, platforms } = SOCIAL_ANALYTICS;

  const getPlatformIcon = (platformName: string) => {
    switch (platformName) {
      case 'YouTube':
        return (
          <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
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
      default:
        return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section
      id="stats"
      className="w-full bg-[#0C0C0C] py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 relative z-10 select-none"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <FadeIn delay={0} y={20}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/70 mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Audience Growth &amp; Influence</span>
            </div>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-none text-center"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5.2rem)' }}
            >
              Social Reach &amp; Influence
            </h2>
            <p className="mt-4 text-xs sm:text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
              Authentic attention, genuine engagement, and zero vanity inflation. A verified snapshot of my actual audience reach across YouTube, Instagram, and Twitter/X.
            </p>
          </FadeIn>
        </div>

        {/* Strong Combined Stats Card (Overall Highlights) */}
        <FadeIn delay={0.1} y={25} className="mb-12 sm:mb-16">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] bg-gradient-to-b from-zinc-900/90 via-zinc-950/90 to-[#0C0C0C] border border-zinc-800 p-6 sm:p-10 shadow-2xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

            <div className="relative z-10">
              {/* Header inside the combined card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-zinc-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-mono uppercase tracking-widest text-zinc-300 font-bold">
                      Combined Reach &amp; Impact Overview
                    </h3>
                    <p className="text-[11px] text-zinc-500 font-mono">
                      {overview.breakdownNote}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 self-start sm:self-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Organic Metrics</span>
                </div>
              </div>

              {/* 4 Combined Numbers Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
                {/* 1. Combined Views */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-red-400" />
                    <span>Views &amp; Impressions</span>
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    <CountUp value={overview.totalViewsAndImpressions} />
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-mono">
                    4.23M YT + 554.5K IG + 421.7K X
                  </span>
                </div>

                {/* 2. Total Community */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-pink-400" />
                    <span>Dedicated Community</span>
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    <CountUp value={overview.totalCommunity} />
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-mono">
                    Subscribers &amp; Followers
                  </span>
                </div>

                {/* 3. Total Viewers / Reach */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Viewers &amp; Reach</span>
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    <CountUp value={overview.totalReachAndViewers} />
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-mono">
                    Across campaign releases
                  </span>
                </div>

                {/* 4. Average Engagement */}
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Average Engagement</span>
                  </span>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    <CountUp value={overview.avgEngagement} />
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-500 mt-2 font-mono">
                    ~3x above 1.5% creator average
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Side-by-Side 3 Platform Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {platforms.map((platform, idx) => (
            <FadeIn
              key={platform.platform}
              delay={0.15 + idx * 0.1}
              y={25}
              className="h-full"
            >
              <div
                className={`h-full rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-zinc-900/70 to-zinc-950/90 border ${platform.borderColor} transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Subtle platform glow */}
                <div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${platform.glowColor} rounded-full blur-2xl pointer-events-none -z-0`}
                />

                <div className="relative z-10">
                  {/* Top bar with platform badge & icon */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                        {getPlatformIcon(platform.platform)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight leading-tight">
                          {platform.platform}
                        </h3>
                        <span className="text-xs text-zinc-400 font-mono">
                          {platform.handle}
                        </span>
                      </div>
                    </div>

                    {/* Visit Link Pill Option with user's real URL */}
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border ${platform.pillColor} hover:scale-105 transition-all duration-200 shadow-sm cursor-pointer`}
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Big Followers Hero Box */}
                  <div className="mb-4 p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800/60 text-center">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      <CountUp value={platform.followers} />
                    </span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-zinc-400 mt-1 font-semibold">
                      {platform.followersLabel}
                    </span>
                  </div>

                  {/* Views / Impressions Metric */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between py-3 px-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/60 text-xs">
                      <span className="text-zinc-400 uppercase tracking-wider font-mono">
                        {platform.viewsLabel}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white font-mono">
                        <CountUp value={platform.views} />
                      </span>
                    </div>
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

