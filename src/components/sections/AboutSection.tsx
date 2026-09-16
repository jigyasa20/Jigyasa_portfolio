import React from 'react';
import FadeIn from '../FadeIn';
import ContactButton from '../ContactButton';
import jigyasaPhoto from '../../assets/jigyasa_photo.png';
import { Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-32 md:py-36 bg-[#0C0C0C] overflow-hidden"
    >


      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="w-full text-center mb-12 sm:mb-16 md:mb-20">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(2.8rem, 9vw, 120px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* 2-Column Creative Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Polaroid photo with Hello Name Tag & Stars (cols 1-5) */}
          <div className="lg:col-span-5 flex justify-center">
            <FadeIn delay={0.15} y={30} className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Silver Metallic Binder Clip at top center */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 pointer-events-none drop-shadow-lg">
                <svg width="48" height="52" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 6C14 2.5 17.5 1 22 1C26.5 1 30 2.5 30 6V18H14V6Z" stroke="#E5E7EB" strokeWidth="2.5" fill="none" />
                  <path d="M11 18H33L36 32H8L11 18Z" fill="url(#silverGradient)" stroke="#9CA3AF" strokeWidth="1.5" />
                  <ellipse cx="22" cy="25" rx="4.5" ry="2.5" fill="#374151" />
                  <defs>
                    <linearGradient id="silverGradient" x1="8" y1="18" x2="36" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F3F4F6" />
                      <stop offset="0.4" stopColor="#9CA3AF" />
                      <stop offset="0.7" stopColor="#D1D5DB" />
                      <stop offset="1" stopColor="#6B7280" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* White Polaroid Frame */}
              <div className="bg-white p-3.5 pb-12 sm:p-4 sm:pb-16 rounded-sm shadow-[0_25px_60px_rgba(0,0,0,0.9)] transform -rotate-2 hover:rotate-0 transition-transform duration-500 relative">
                {/* Photo Image inside Polaroid */}
                <div className="w-full aspect-[4/5] bg-zinc-900 overflow-hidden relative shadow-inner">
                  <img
                    src={jigyasaPhoto}
                    alt="Jigyasa"
                    className="w-full h-full object-cover object-top contrast-[1.03]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                {/* "Hello! my name is Jigyasa" Sticker Badge */}
                <div className="absolute -bottom-6 -right-3 sm:-right-6 z-20 w-[190px] sm:w-[220px] rounded-2xl overflow-hidden shadow-[0_15px_35px_rgba(182,0,168,0.35)] border border-pink-500/40 transform rotate-3 hover:rotate-1 transition-transform bg-[#0C0C0C]">
                  {/* Top Bar with site's signature gradient */}
                  <div
                    className="text-white py-2 px-3 text-center"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    }}
                  >
                    <span className="block font-black text-lg sm:text-xl tracking-wider uppercase leading-tight font-sans text-white">
                      Hello!
                    </span>
                    <span className="block text-[10px] sm:text-[11px] text-pink-100 font-mono tracking-wider lowercase">
                      my name is
                    </span>
                  </div>
                  {/* Bottom Dark Luxury Card Area with Shimmering Name */}
                  <div className="bg-[#121216] py-2.5 px-4 text-center border-t border-white/10">
                    <span
                      className="font-serif italic text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight block text-white"
                      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                    >
                      Jigyasa
                    </span>
                  </div>
                </div>

                {/* Floating Metallic Silver Stars */}
                <div className="absolute -top-3 -left-3 text-2xl text-zinc-200 filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] pointer-events-none animate-pulse">
                  ✦
                </div>
                <div className="absolute top-1/2 -right-4 text-xl text-zinc-300 filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] pointer-events-none">
                  ★
                </div>
                <div className="absolute -bottom-3 -left-2 text-2xl text-zinc-300 filter drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)] pointer-events-none">
                  ✦
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Editorial Hook Quote & Storytelling Copy (cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <FadeIn delay={0.2} y={30}>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono uppercase tracking-widest text-[#FFA0C5] mb-5 self-start">
                <Sparkles className="w-3.5 h-3.5 text-[#FFA0C5]" />
                <span>Content, Growth &amp; Storytelling</span>
              </div>

              {/* Bold Hook Quote (written above the bio) */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-black text-white tracking-tight leading-[1.25] mb-6 sm:mb-8 font-sans">
                &ldquo;I&apos;m the person you call when your project needs more than another pretty post on the timeline.&rdquo;
              </h3>

              {/* Story Narrative Paragraphs */}
              <div className="space-y-5 text-zinc-300 font-light text-sm sm:text-base md:text-lg leading-relaxed">
                <p>
                  I make videos people actually want to watch, write tweets that make people stop scrolling, and help projects reach a wider CT audience. I’ve worked across content, growth, community, partnerships, events and BD, so I know how to get a project in front of the right people and give them a reason to care.
                </p>
                <p>
                  Then there’s the travel part. I’m always somewhere, meeting new people, going to events, discovering new places and finding stories along the way. If your brand needs someone who can take it from the internet to the real world and back again, I’m your person.
                </p>
              </div>

              {/* Contact Button */}
              <div className="mt-8 sm:mt-10">
                <ContactButton onClick={onOpenContact} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
