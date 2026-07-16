import React from 'react';
import { Link } from 'react-router-dom';
interface LogoProps {
  light?: boolean;
  className?: string;
}
export function Logo({ light = false, className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`group flex items-center gap-3 ${className}`}
      aria-label="Al-Irshaad Dynamics home">
      
      <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand-green shadow-green transition-transform duration-300 group-hover:scale-105">
        <span
          className="absolute inset-[3px] rounded-lg border border-brand-gold/60"
          aria-hidden="true" />
        
        <span className="font-display text-lg font-bold text-white">
          A<span className="text-brand-gold">D</span>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[15px] font-bold tracking-tight ${light ? 'text-white' : 'text-brand-navy'}`}>
          
          AL-IRSHAAD
        </span>
        <span
          className={`font-display text-[10px] font-medium tracking-[0.28em] ${light ? 'text-brand-gold-soft' : 'text-brand-green'}`}>
          
          DYNAMICS
        </span>
      </span>
    </Link>);

}