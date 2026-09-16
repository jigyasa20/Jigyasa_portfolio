export interface PlatformStat {
  platform: 'Instagram' | 'Twitter / X' | 'TikTok' | 'YouTube';
  handle: string;
  followers: string;
  primaryMetricLabel: string;
  primaryMetricValue: string;
  secondaryMetricLabel: string;
  secondaryMetricValue: string;
  vibe: string;
  url: string;
  color: string;
}

export interface SocialAnalyticsData {
  overview: {
    totalViews: string;
    totalFollowers: string;
    brandsCollabed: string;
    engagementRate: string;
  };
  platforms: PlatformStat[];
}

export const SOCIAL_ANALYTICS: SocialAnalyticsData = {
  overview: {
    totalViews: '18.5M+',
    totalFollowers: '495K+',
    brandsCollabed: '35+',
    engagementRate: '8.6%',
  },
  platforms: [
    {
      platform: 'Instagram',
      handle: '@jigyasa.3d',
      followers: '210K',
      primaryMetricLabel: 'Reel Views',
      primaryMetricValue: '11.2M',
      secondaryMetricLabel: 'Avg. Reel Reach',
      secondaryMetricValue: '185K',
      vibe: 'Daily 3D aesthetic drops, viral motion loops & behind-the-scenes.',
      url: 'https://instagram.com',
      color: 'from-pink-500/20 via-purple-500/10 to-transparent',
    },
    {
      platform: 'Twitter / X',
      handle: '@jigyasa_3d',
      followers: '115K',
      primaryMetricLabel: 'Monthly Impressions',
      primaryMetricValue: '4.8M',
      secondaryMetricLabel: 'Community Retweets',
      secondaryMetricValue: '34K',
      vibe: 'Real-time creative thoughts, Web3 discussions & high-res render teasers.',
      url: 'https://x.com',
      color: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    },
    {
      platform: 'TikTok',
      handle: '@jigyasa.creates',
      followers: '125K',
      primaryMetricLabel: 'Total Likes',
      primaryMetricValue: '2.4M',
      secondaryMetricLabel: 'Viral Video Ratio',
      secondaryMetricValue: '28%',
      vibe: 'Fast, punchy 3D tutorials and viral CGI audio edits.',
      url: 'https://tiktok.com',
      color: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      platform: 'YouTube',
      handle: 'Jigyasa 3D',
      followers: '45K',
      primaryMetricLabel: 'Watch Hours',
      primaryMetricValue: '320K',
      secondaryMetricLabel: 'Average Retention',
      secondaryMetricValue: '72%',
      vibe: 'Full breakdown sessions, lighting masterclasses & project timelapses.',
      url: 'https://youtube.com',
      color: 'from-red-500/20 via-orange-500/10 to-transparent',
    },
  ],
};
