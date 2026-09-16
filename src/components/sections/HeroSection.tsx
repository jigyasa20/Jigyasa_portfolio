import React from 'react';
import FadeIn from '../FadeIn';
import Magnet from '../Magnet';
import ContactButton from '../ContactButton';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  // Use Jigyasa's photo from Logo folder
  const portraitUrl = '/jigyasa.png';

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
            href="#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, 'projects')}
            className="transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Projects
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

      {/* 2. Hero Heading - resized to fit completely without any cutoff */}
      <div className="w-full flex justify-center text-center z-10 pointer-events-none px-2 sm:px-6">
        <FadeIn delay={0.15} y={30} duration={0.9} className="w-full max-w-[100vw]">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center select-none mt-4 sm:mt-6 md:mt-8"
            style={{
              fontSize: 'clamp(2.5rem, 9.4vw, 9.8rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Hi, i&apos;m jigyasa
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Jigyasa's Photo with Magnetic Effect) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20 pointer-events-auto">
        <FadeIn delay={0.5} y={30} duration={0.9}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[470px] flex items-end justify-center"
          >
            {/* Subtle glow behind portrait */}
            <div className="absolute -inset-4 bg-gradient-to-t from-pink-500/15 via-purple-600/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />

            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]">
              <img
                src={portraitUrl}
                alt="Jigyasa - 3D Creator"
                draggable={false}
                className="w-full h-auto max-h-[62vh] sm:max-h-[66vh] md:max-h-[70vh] object-contain object-bottom select-none filter contrast-[1.03] drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-12 mt-auto z-30">
        {/* Left paragraph */}
        <FadeIn delay={0.35} y={20} duration={0.8}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[270px]"
            style={{
              fontSize: 'clamp(0.75rem, 1.3vw, 1.35rem)',
            }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20} duration={0.8}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
