import React from 'react';
import FadeIn from '../FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: '01',
    name: '3D Modeling & Characters',
    description:
      'From expressive digital characters and futuristic fashion wear to detailed environments. If you can imagine it, I can build it in 3D.',
  },
  {
    id: '02',
    name: 'Lighting & Photoreal Renders',
    description:
      'Cranking up the realism with custom shaders, tactile materials, and ray-traced lighting that makes your product look tangible and expensive.',
  },
  {
    id: '03',
    name: 'Motion Design & Social Loops',
    description:
      'Hypnotic 3D loops, kinetic typography, and physics simulations specifically crafted to stop people mid-scroll and spark organic shares.',
  },
  {
    id: '04',
    name: 'Brand Worlds & 3D Identity',
    description:
      'Logos that actually move, custom spatial brand kits, and visual identities that give your project an unforgettable futuristic flex.',
  },
  {
    id: '05',
    name: 'Creative Web & Spatial Design',
    description:
      'Buttery-smooth websites and interactive portfolio experiences built around strong typography, 3D assets, and zero fluff.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-4 max-w-lg mx-auto font-light">
            How I can help bring your visual universe to life — from quick social assets to full creative direction.
          </p>
        </FadeIn>

        {/* 5 Service items in vertical list */}
        <div className="w-full divide-y divide-[rgba(12,12,12,0.15)] border-t border-b border-[rgba(12,12,12,0.15)]">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              className="w-full"
            >
              <div className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 group transition-colors duration-300 hover:bg-black/[0.02] px-2 sm:px-4 rounded-xl">
                {/* Number on the left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none shrink-0 select-none tracking-tight transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </div>

                {/* Name + Description stacked vertically on the right */}
                <div className="flex flex-col justify-center max-w-2xl grow md:pl-6">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide mb-2 transition-colors duration-300 group-hover:text-black"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] opacity-60 text-base"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
