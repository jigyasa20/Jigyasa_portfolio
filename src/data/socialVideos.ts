import type { SocialVideo } from '../components/VideoModal';
import thumbHuddle from '../assets/videos/thumb_huddle.jpg';
import thumbEthmumbai from '../assets/videos/thumb_ethmumbai.jpg';
import thumbRemittance from '../assets/videos/thumb_remittance.jpg';
import thumbFhenix from '../assets/videos/thumb_fhenix.jpg';
import thumbEvents from '../assets/videos/thumb_events.jpg';
import thumbSeraProtocol from '../assets/videos/thumb_seraprotocol.jpg';
import thumbGoa from '../assets/videos/thumb_goa.jpg';
import thumbHeritage from '../assets/videos/thumb_heritage.jpg';

export interface VideoShowcaseItem extends SocialVideo {
  duration?: string;
}

export const SOCIAL_VIDEOS: VideoShowcaseItem[] = [
  {
    id: 'vid-1',
    title: '$6.6M Raised | 450K+ Community | Huddle01 DePIN',
    platform: 'Twitter / X',
    thumbnailUrl: thumbHuddle,
    videoUrl: 'https://video.twimg.com/amplify_video/2019281423266357248/vid/avc1/1920x1080/lzbkoujzXjQ_97sT.mp4',
    externalLink: 'https://x.com/jigyasa_0203/status/2019281702678589479?s=20',
    duration: '1:33',
    tags: ['web3', 'depin', 'huddle01'],
  },
  {
    id: 'vid-2',
    title: 'ETH Mumbai Conference Recap | My First Web3 Event',
    platform: 'Twitter / X',
    thumbnailUrl: thumbEthmumbai,
    videoUrl: 'https://video.twimg.com/amplify_video/2038542891577167872/vid/avc1/1430x820/TrwuvBeQEbzicYzZ.mp4',
    externalLink: 'https://x.com/jigyasa_0203/status/2038543014050812383?s=20',
    duration: '0:37',
    tags: ['ethmumbai', 'web3', 'recap'],
  },
  {
    id: 'vid-3',
    title: 'Indians Lose ₹15,000 Cr in Remittance Fees | Web3 Solutions',
    platform: 'Twitter / X',
    thumbnailUrl: thumbRemittance,
    videoUrl: 'https://video.twimg.com/amplify_video/2062899183313698817/vid/avc1/1920x1080/8U-R3x8iOwCIv6Na.mp4',
    externalLink: 'https://x.com/jigyasa_0203/status/2062899362687262878?s=20',
    duration: '1:28',
    tags: ['fintech', 'remittance', 'stellar'],
  },
  {
    id: 'vid-4',
    title: 'Scratch Card Reveal & Fhenix Event Highlights',
    platform: 'Twitter / X',
    thumbnailUrl: thumbFhenix,
    videoUrl: 'https://video.twimg.com/amplify_video/2076996066151677952/vid/avc1/1080x1920/z9qzhOf2STuQCk4T.mp4',
    externalLink: 'https://x.com/jigyasa_0203/status/2076996300000886900?s=20',
    duration: '1:20',
    tags: ['fhenix', 'events', 'sunscreen'],
  },
  {
    id: 'vid-5',
    title: 'Showing Up To IRL Events Has Rewards Now',
    platform: 'Twitter / X',
    thumbnailUrl: thumbEvents,
    videoUrl: 'https://video.twimg.com/amplify_video/2087090316562362368/vid/avc1/1278x720/xoc7rv51DaEHN8l3.mp4',
    externalLink: 'https://x.com/jigyasa_0203/status/2087090370937295162?s=20',
    duration: '0:30',
    tags: ['events', 'networking', 'rewards'],
  },
  {
    id: 'vid-6',
    title: 'Deep Dive into Sera Protocol | Content & Brand Story',
    platform: 'Twitter / X',
    thumbnailUrl: thumbSeraProtocol,
    videoUrl: 'https://video.twimg.com/amplify_video/2085731021539115008/vid/avc1/1920x1080/qCZWS8Sjkt-jd8dM.mp4',
    externalLink: 'https://x.com/jigyasa_0203/status/2085731373298725371?s=20',
    duration: '1:12',
    tags: ['seraprotocol', 'web3', 'storytelling'],
  },
  {
    id: 'vid-7',
    title: 'Solo Date in Goa | Finding Stories On The Road',
    platform: 'Instagram',
    thumbnailUrl: thumbGoa,
    videoUrl: 'https://www.instagram.com/reel/DUu7fgLDIJ3/',
    externalLink: 'https://www.instagram.com/reel/DUu7fgLDIJ3/?stkn=aWJ6dnJ1Z2Vqdncz',
    duration: '0:35',
    tags: ['travel', 'goa', 'solotravel'],
  },
  {
    id: 'vid-8',
    title: 'Exploring Historic Heritage & Cultural Landmarks',
    platform: 'Instagram',
    thumbnailUrl: thumbHeritage,
    videoUrl: 'https://www.instagram.com/reel/DYteA8wSRlW/',
    externalLink: 'https://www.instagram.com/reel/DYteA8wSRlW/?stkn=OTcwYTd1cDlucXZz',
    duration: '0:40',
    tags: ['travel', 'heritage', 'storiesbyraahi'],
  },
];
