import React from 'react';
import { Reveal } from '../ui/Reveal';
import { CLIENTS } from '../../lib/content';
export function ClientsBand() {
  return (
    <section className="border-y border-line bg-white px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-content">
        <Reveal className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-ink/40">
          Trusted by
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          
          {CLIENTS.map((c) =>
          <span
            key={c}
            className="font-display text-sm font-semibold text-ink/50 sm:text-base">
            
              {c}
            </span>
          )}
        </Reveal>
      </div>
    </section>);

}