import React from 'react';
import FadeIn from '../FadeIn';
import Magnet from '../Magnet';
import ContactButton from '../ContactButton';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const portraitUrl =
    'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

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
      <FadeIn delay={0} y={-20} duration={0.8} className="w-full z-20">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
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
            Price
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

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden flex justify-center text-center z-10 pointer-events-none">
        <FadeIn delay={0.15} y={40} duration={0.9} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
            Hi, i&apos;m jigyasa
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Centered Absolutely) */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 z-10 pointer-events-auto">
        <FadeIn delay={0.6} y={30} duration={0.9}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] flex items-end justify-center"
          >
            <img
              src={portraitUrl}
              alt="Jigyasa - 3D Creator Portrait"
              draggable={false}
              className="w-full h-auto object-contain select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] filter contrast-105"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto z-20">
        {/* Left paragraph */}
        <FadeIn delay={0.35} y={20} duration={0.8}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{
              fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)',
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
