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

  // Segment the text into paragraphs and bold sections
  const paragraphs = useMemo(() => {
    return [
      {
        isBold: false,
        text: "I’ve spent the last two years somewhere between Web3, marketing, events, content, fashion, travel, and way too many conversations with interesting people. I love making ideas look good, feel human, and stand out from the noise.",
      },
      {
        isBold: true,
        text: "Let’s make something people remember.",
      },
    ];
  }, []);

  // Calculate total characters count for progress calculation
  const totalChars = useMemo(() => {
    return paragraphs.reduce((acc, p) => acc + p.text.length, 0);
  }, [paragraphs]);

  // Keep track of running character index
  let charCounter = 0;

  return (
    <div
      ref={containerRef}
      className={`text-center font-medium leading-relaxed max-w-[560px] mx-auto text-[#D7E2EA] ${className}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
      }}
    >
      {paragraphs.map((p, pIdx) => {
        // Split text into words to prevent unnatural mid-word breaks across lines
        const words = p.text.split(' ');

        return (
          <p
            key={pIdx}
            className={`${pIdx > 0 ? 'mt-4 sm:mt-6' : ''} ${p.isBold ? 'font-bold text-white tracking-wide' : ''}`}
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

              // Add space character after word if not the last word
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
