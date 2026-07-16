import React from 'react';
import { Reveal } from './Reveal';
interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false
}: SectionHeadingProps) {
  const alignClasses =
  align === 'center' ?
  'items-center text-center mx-auto' :
  'items-start text-left';
  return (
    <Reveal
      className={`flex flex-col ${alignClasses} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
      
      {eyebrow &&
      <span className="flex items-center gap-2 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
          <span className="h-px w-6 bg-brand-gold" aria-hidden="true" />
          {eyebrow}
        </span>
      }
      <h2
        className={`font-display font-bold text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] text-balance ${light ? 'text-white' : 'text-brand-navy'}`}>
        
        {title}
      </h2>
      {description &&
      <p
        className={`mt-5 text-base sm:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink/70'}`}>
        
          {description}
        </p>
      }
    </Reveal>);

}