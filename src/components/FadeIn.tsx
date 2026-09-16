import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className = '',
  style = {},
  ...rest
}) => {
  // Use motion.create if available, fallback to motion[tag] or motion.div
  const Component = typeof motion.create === 'function'
    ? motion.create(as as keyof React.JSX.IntrinsicElements)
    : ((motion as unknown as Record<string, unknown>)[as] || motion.div);

  const MotionTag = Component as React.ElementType;

  return (
    <MotionTag
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
