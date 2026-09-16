import { useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import SocialVideosSection from './components/sections/SocialVideosSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import BrandLogoWall from './components/sections/BrandLogoWall';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactModal from './components/ContactModal';
import VideoModal, { type SocialVideo } from './components/VideoModal';
import Footer from './components/Footer';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<SocialVideo | null>(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleSelectVideo = (video: SocialVideo) => {
    setActiveVideo(video);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <div
      className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased relative selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section (With Jigyasa photo and adjusted name sizing) */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* 2. Social Media Videos Showcase (Clickable video cards with modal player) */}
      <SocialVideosSection onSelectVideo={handleSelectVideo} />

      {/* 3. About Section */}
      <AboutSection onOpenContact={handleOpenContact} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Brand Logo Wall (After Services Section) */}
      <BrandLogoWall />

      {/* 6. Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />

      {/* Interactive Video Player Modal */}
      <VideoModal video={activeVideo} onClose={handleCloseVideo} />
    </div>
  );
}

export default App;
