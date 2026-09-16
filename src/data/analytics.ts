export interface DetailedPlatformStat {
  platform: 'YouTube' | 'Instagram' | 'Twitter / X';
  platformNumber: string;
  handle: string;
  followers: string;
  followersLabel: string;
  views: string;
  viewsLabel: string;
  reach: string;
  reachLabel: string;
  engagement: string;
  engagementLabel: string;
  contentFocus: string;
  themeColor: string;
  pillColor: string;
  borderColor: string;
  glowColor: string;
  url: string;
}

export interface SocialReachData {
  overview: {
    totalViewsAndImpressions: string;
    totalCommunity: string;
    totalReachAndViewers: string;
    avgEngagement: string;
    breakdownNote: string;
  };
  platforms: DetailedPlatformStat[];
}

export const SOCIAL_ANALYTICS: SocialReachData = {
  overview: {
    totalViewsAndImpressions: '5.2M+',
    totalCommunity: '7.8K',
    totalReachAndViewers: '3.8M+',
    avgEngagement: '5.7%',
    breakdownNote: '4.23M YouTube + 554.5K Instagram + 421.7K Twitter/X',
  },
  platforms: [
    {
      platform: 'YouTube',
      platformNumber: 'platform (01)',
      handle: '@Jigyasa3D',
      followers: '3.8K',
      followersLabel: 'Subscribers',
      views: '4.23M',
      viewsLabel: 'Total Views',
      reach: '3.1M+',
      reachLabel: 'Unique Viewers',
      engagement: '6.4%',
      engagementLabel: 'Avg. Retention & Engagement',
      contentFocus: 'Full CGI breakdowns, lighting masterclasses, and viral motion graphics.',
      themeColor: 'text-red-400',
      pillColor: 'bg-red-500/15 text-red-300 border-red-500/30',
      borderColor: 'border-red-500/20 hover:border-red-500/50',
      glowColor: 'from-red-500/10 via-orange-500/5 to-transparent',
      url: 'https://youtube.com',
    },
    {
      platform: 'Instagram',
      platformNumber: 'platform (02)',
      handle: '@jigyasa.3d',
      followers: '2.3K',
      followersLabel: 'Followers',
      views: '554.5K',
      viewsLabel: 'Reels & Video Views',
      reach: '381.8K',
      reachLabel: 'Unique Viewers',
      engagement: '5.8%',
      engagementLabel: 'Avg. Engagement Rate',
      contentFocus: 'Aesthetic 3D loops, founder stories, and high-energy visual campaigns.',
      themeColor: 'text-pink-400',
      pillColor: 'bg-pink-500/15 text-pink-300 border-pink-500/30',
      borderColor: 'border-pink-500/20 hover:border-pink-500/50',
      glowColor: 'from-pink-500/10 via-purple-500/5 to-transparent',
      url: 'https://instagram.com',
    },
    {
      platform: 'Twitter / X',
      platformNumber: 'platform (03)',
      handle: '@jigyasa_3d',
      followers: '1.7K',
      followersLabel: 'Followers',
      views: '421.7K',
      viewsLabel: 'Total Impressions',
      reach: '295K+',
      reachLabel: 'Organic Viewers',
      engagement: '4.9%',
      engagementLabel: 'Avg. Engagement Rate',
      contentFocus: 'Real-time Web3 thought leadership, design threads, and high-res render previews.',
      themeColor: 'text-sky-400',
      pillColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
      borderColor: 'border-sky-500/20 hover:border-sky-500/50',
      glowColor: 'from-sky-500/10 via-cyan-500/5 to-transparent',
      url: 'https://x.com',
    },
  ],
};
