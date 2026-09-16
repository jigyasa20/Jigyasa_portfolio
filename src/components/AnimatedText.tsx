import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
  isBold?: boolean;
}

const Character: React.FC<CharacterProps> = ({ char, progress, range, isBold = false }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === ' ') {
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className={`relative inline-block ${isBold ? 'font-bold' : ''}`}>
      <span className="invisible select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none"
      >
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Jigyasa's exact copy (strictly zero em dashes)
  const paragraphs = useMemo(() => {
    return [
      {
        isBold: true,
        text: "I'm the person you call when your project needs more than another pretty post on the timeline.",
      },
      {
        isBold: false,
        text: "I make video content that hits, write tweets that make people stop scrolling, take projects to a wider CT audience, and turn real-world experiences into content people actually want to watch.",
      },
      {
        isBold: false,
        text: "I've worked across content, growth marketing, community, partnerships, events and business development - which basically means I know how to get a project in front of the right people and give them a reason to care.",
      },
      {
        isBold: true,
        text: "And then there's the travel part.",
      },
      {
        isBold: false,
        text: "I’m constantly moving, meeting new people, going to events, discovering new places and finding stories along the way. So if your brand needs someone who can take it from the internet to the real world - and back again - that's where I come in.",
      },
      {
        isBold: false,
        text: "From turning your product into scroll-stopping videos, covering your event on the ground, building conversations around your brand, running campaigns, or opening doors to the right people. I make noise, create visibility, and turn attention into something useful.",
      },
    ];
  }, []);

  const totalChars = useMemo(() => {
    return paragraphs.reduce((acc, p) => acc + p.text.length, 0);
  }, [paragraphs]);

  let charCounter = 0;

  return (
    <div
      ref={containerRef}
      className={`text-center font-normal leading-relaxed max-w-[760px] mx-auto text-[#D7E2EA] ${className}`}
      style={{
        fontSize: 'clamp(1.05rem, 2.1vw, 1.4rem)',
        lineHeight: 1.75,
      }}
    >
      {paragraphs.map((p, pIdx) => {
        const words = p.text.split(' ');

        return (
          <p
            key={pIdx}
            className={`${pIdx > 0 ? 'mt-6 sm:mt-8 md:mt-10' : ''} ${
              p.isBold ? 'font-bold text-white tracking-wide text-lg sm:text-xl md:text-2xl' : 'text-[#D7E2EA]/90'
            }`}
          >
            {words.map((word, wIdx) => {
              const wordChars = word.split('');
              const elements = wordChars.map((char) => {
                const index = charCounter++;
                const start = Math.max(0, index / totalChars);
                const step = 1 / totalChars;
                const end = Math.min(1, start + step * 2);

                return (
                  <Character
                    key={index}
                    char={char}
                    progress={scrollYProgress}
                    range={[start, end]}
                    isBold={p.isBold}
                  />
                );
              });

              if (wIdx < words.length - 1) {
                const spaceIndex = charCounter++;
                const spaceStart = Math.max(0, spaceIndex / totalChars);
                const spaceStep = 1 / totalChars;
                const spaceEnd = Math.min(1, spaceStart + spaceStep * 2);

                elements.push(
                  <Character
                    key={`space-${spaceIndex}`}
                    char=" "
                    progress={scrollYProgress}
                    range={[spaceStart, spaceEnd]}
                    isBold={p.isBold}
                  />
                );
              }

              return (
                <span key={wIdx} className="inline-block whitespace-nowrap">
                  {elements}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
};

export default AnimatedText;
