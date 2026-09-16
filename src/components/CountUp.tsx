import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  // A display value such as "5.2M+", "554.5K" or "5.7%"
  value: string;
  duration?: number;
  className?: string;
}

const parseValue = (value: string) => {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    target: parseFloat(match[2]),
    decimals: match[2].split('.')[1]?.length ?? 0,
    suffix: match[3],
  };
};

// Counts from 0 up to the number inside `value` the first time it scrolls into view,
// keeping the value's prefix, suffix and decimal places.
export const CountUp: React.FC<CountUpProps> = ({ value, duration = 1.8, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const parsed = parseValue(value);
  const target = parsed?.target ?? 0;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setCurrent,
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target, duration]);

  if (!parsed) return <span className={className}>{value}</span>;

  const shown = reduceMotion ? target : current;

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="tabular-nums">
        {parsed.prefix}
        {shown.toFixed(parsed.decimals)}
        {parsed.suffix}
      </span>
    </span>
  );
};

export default CountUp;
