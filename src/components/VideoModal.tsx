import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Play, Sparkles } from 'lucide-react';

export interface SocialVideo {
  id: string;
  title: string;
  platform: 'Instagram' | 'TikTok' | 'YouTube' | 'Reels' | 'Twitter / X';
  thumbnailUrl: string;
  videoUrl: string;
  externalLink?: string;
  tags?: string[];
}

interface VideoModalProps {
  video: SocialVideo | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (video) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  if (!video) return null;

  // Determine if video URL is a direct video file or embed
  const isDirectVideo = video.videoUrl.match(/\.(mp4|webm|mov)(\?.*)?$/i) || video.videoUrl.startsWith('blob:');
  const isYouTube = video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be');

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`
      : url;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-4xl bg-[#111114] border border-zinc-800 rounded-[32px] overflow-hidden shadow-2xl z-10 text-[#D7E2EA] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-950/60">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 text-xs uppercase font-medium tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {video.platform}
              </span>
              <h3 className="font-bold text-white text-sm sm:text-base truncate max-w-[200px] sm:max-w-md">
                {video.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {video.externalLink && (
                <a
                  href={video.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs text-white transition-colors"
                >
                  <span>Open Post</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Video Player Box */}
          <div className="relative w-full bg-black flex items-center justify-center aspect-video max-h-[70vh]">
            {isDirectVideo ? (
              <video
                src={video.videoUrl}
                poster={video.thumbnailUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : isYouTube ? (
              <iframe
                src={getYouTubeEmbedUrl(video.videoUrl)}
                title={video.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              // Fallback / web player with poster preview and direct open action
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover filter blur-sm opacity-40"
                />
                <div className="relative z-10 max-w-md bg-zinc-900/90 border border-zinc-800 p-6 rounded-2xl shadow-2xl flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-fuchsia-600/30 text-fuchsia-400 border border-fuchsia-500/40 flex items-center justify-center mb-4">
                    <Play className="w-8 h-8 ml-1 fill-current" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{video.title}</h4>
                  <p className="text-xs text-zinc-400 mb-4">
                    Click below to open and watch this video on {video.platform}.
                  </p>
                  <a
                    href={video.externalLink || video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium uppercase tracking-wider text-xs shadow-lg transition-all hover:brightness-110"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    }}
                  >
                    <span>Watch on {video.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Footer Info */}
          {video.tags && video.tags.length > 0 && (
            <div className="px-6 py-3 flex items-center gap-2 flex-wrap bg-zinc-950/80 text-xs text-zinc-500">
              {video.tags.map((tag, idx) => (
                <span key={idx} className="font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VideoModal;
