export interface DetailedPlatformStat {
  platform: 'YouTube' | 'Instagram' | 'Twitter / X';
  handle: string;
  followers: string;
  followersLabel: string;
  views: string;
  viewsLabel: string;
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
      handle: '@StoriesbyRaahi',
      followers: '3.8K',
      followersLabel: 'Subscribers',
      views: '4.23M',
      viewsLabel: 'Total Views',
      themeColor: 'text-red-400',
      pillColor: 'bg-red-500/15 text-red-300 border-red-500/30 hover:bg-red-500/25',
      borderColor: 'border-red-500/20 hover:border-red-500/50',
      glowColor: 'from-red-500/10 via-orange-500/5 to-transparent',
      url: 'https://www.youtube.com/@StoriesbyRaahi',
    },
    {
      platform: 'Instagram',
      handle: '@jigyasa_vaishnv_',
      followers: '2.3K',
      followersLabel: 'Followers',
      views: '554.5K',
      viewsLabel: 'Reels & Video Views',
      themeColor: 'text-pink-400',
      pillColor: 'bg-pink-500/15 text-pink-300 border-pink-500/30 hover:bg-pink-500/25',
      borderColor: 'border-pink-500/20 hover:border-pink-500/50',
      glowColor: 'from-pink-500/10 via-purple-500/5 to-transparent',
      url: 'https://www.instagram.com/jigyasa_vaishnv_',
    },
    {
      platform: 'Twitter / X',
      handle: '@jigyasa_0203',
      followers: '1.7K',
      followersLabel: 'Followers',
      views: '421.7K',
      viewsLabel: 'Total Impressions',
      themeColor: 'text-sky-400',
      pillColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30 hover:bg-sky-500/25',
      borderColor: 'border-sky-500/20 hover:border-sky-500/50',
      glowColor: 'from-sky-500/10 via-cyan-500/5 to-transparent',
      url: 'https://x.com/jigyasa_0203',
    },
  ],
};
