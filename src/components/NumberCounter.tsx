import React, { useEffect, useState } from 'react';
import { useMotionValue, useSpring, motion, useTransform } from 'motion/react';

interface NumberCounterProps {
  value: number;
  duration?: number;
  precision?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const NumberCounter: React.FC<NumberCounterProps> = ({ 
  value, 
  precision = 0, 
  prefix = '', 
  suffix = '',
  className = ''
}) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
  });

  const [displayValue, setDisplayValue] = useState(prefix + (0).toFixed(precision) + suffix);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(prefix + latest.toFixed(precision) + suffix);
    });
  }, [springValue, precision, prefix, suffix]);

  return <motion.span className={className}>{displayValue}</motion.span>;
};
