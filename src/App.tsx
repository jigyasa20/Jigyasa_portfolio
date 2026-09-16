import { useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import SocialVideosSection from './components/sections/SocialVideosSection';
import SocialAnalyticsSection from './components/sections/SocialAnalyticsSection';
import AboutSection from './components/sections/AboutSection';
import BrandLogoWall from './components/sections/BrandLogoWall';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div
      className="w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased relative selection:bg-[#B600A8] selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section (Transparent cutout photo & balanced name size) */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* 2. Social Media Videos Showcase (Direct links to posts with silent video loop) */}
      <SocialVideosSection />

      {/* 3. Brand Logo Wall ("Brands I have worked with") */}
      <BrandLogoWall />

      {/* 4. Social Media Analytics (Direct platform links & metrics) */}
      <SocialAnalyticsSection />

      {/* 5. About Section (Natural, conversational storytelling) */}
      <AboutSection onOpenContact={handleOpenContact} />

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}

export default App;
