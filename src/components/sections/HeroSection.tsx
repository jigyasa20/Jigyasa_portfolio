import React from 'react';
import FadeIn from '../FadeIn';
import Magnet from '../Magnet';
import ContactButton from '../ContactButton';
import jigyasaHero from '../../assets/jigyasa_hero.png';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'contact') {
      onOpenContact();
      return;
    }
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none"
    >
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} duration={0.8} className="w-full z-30">
        <nav className="w-full flex items-center justify-between px-6 md:px-12 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.35rem]">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            About
          </a>
          <a
            href="#videos"
            onClick={(e) => handleNavClick(e, 'videos')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Content
          </a>
          <a
            href="#brands"
            onClick={(e) => handleNavClick(e, 'brands')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#stats"
            onClick={(e) => handleNavClick(e, 'stats')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Impact
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* 2. Hero Heading */}
      <div className="w-full flex justify-center text-center z-10 pointer-events-none px-4 sm:px-6">
        <FadeIn delay={0.15} y={30} duration={0.9} className="w-full max-w-[100vw]">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center select-none mt-4 sm:mt-6 md:mt-8"
            style={{
              fontSize: 'clamp(2.4rem, 9.2vw, 9.6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Hi, i&apos;m jigyasa
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 pointer-events-auto">
        <FadeIn delay={0.5} y={30} duration={0.9}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] flex items-end justify-center"
          >
            <div className="absolute -inset-8 bg-gradient-to-t from-pink-600/25 via-purple-600/15 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />

            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]">
              <img
                src={jigyasaHero}
                alt="Jigyasa - 3D Creator"
                draggable={false}
                className="w-full h-auto max-h-[62vh] sm:max-h-[66vh] md:max-h-[72vh] object-contain object-bottom select-none filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-12 mt-auto z-30">
        <FadeIn delay={0.35} y={20} duration={0.8}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[220px] md:max-w-[280px]"
            style={{
              fontSize: 'clamp(0.75rem, 1.25vw, 1.3rem)',
            }}
          >
            3d creator obsessed with turning wild ideas into visuals you can&apos;t stop staring at.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} duration={0.8}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
