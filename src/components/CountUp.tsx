import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  formatCommas?: boolean;
  className?: string;
  once?: boolean;
}

export const CountUp: React.FC<CountUpProps> = ({
  to,
  from = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  formatCommas = true,
  className = '',
  once = false,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      setCount(from);
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier easeOut
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  const formattedValue = formatCommas ? count.toLocaleString('en-US') : count;

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedValue}{suffix}
    </span>
  );
};
