'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib';

export default function Fade({
  children,
  className,
  As,
  delay = 0,
  toward = 'Y',
  x,
  y = 7,
  duration = 0.7,
  initialScale,
  finalScale,
  initialOpacity = 0,
  finalOpacity = 1,
}) {
  const Component = As ? motion[As] : motion.div;

  if (toward === 'X') {
    return (
      <Component
        className={cn(className)}
        initial={{ opacity: initialOpacity, translateX: `${x}rem` }}
        whileInView={{ opacity: 1, translateX: '0px' }}
        transition={{ duration, delay }}
        viewport={{ once: true }}
      >
        {children}
      </Component>
    );
  }

  if (toward === 'S') {
    return (
      <Component
        className={cn(className)}
        initial={{ opacity: initialOpacity, scale: initialScale }}
        whileInView={{ opacity: finalOpacity, scale: finalScale }}
        transition={{ duration, delay }}
        viewport={{ once: true }}
      >
        {children}
      </Component>
    );
  }
  return (
    <Component
      className={cn(className)}
      initial={{ opacity: initialOpacity, translateY: `${y}rem` }}
      whileInView={{ opacity: finalOpacity, translateY: '0px' }}
      transition={{ duration, delay: delay, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </Component>
  );
}
