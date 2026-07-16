import React, { memo } from 'react';
import { MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { IMAGES, SITE, whatsappLink, WHATSAPP_DEFAULT } from '../../lib/site';
interface FinalCTAProps {
  title?: string;
  description?: string;
}
export function FinalCTA({
  title = "Let's handle your memories professionally.",
  description = "Tell us about your event, project, or journey. Our team responds fast on WhatsApp — let's create something unforgettable together."
}: FinalCTAProps) {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-content">
        <Reveal className="relative overflow-hidden rounded-4xl">
          <img
            src={IMAGES.cta}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true" />
          
          <div
            className="absolute inset-0 bg-brand-navy/85"
            aria-hidden="true" />
          
          <div
            className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-green/30 blur-3xl"
            aria-hidden="true" />
          
          <div className="relative flex flex-col items-center px-6 py-16 text-center sm:px-12 sm:py-24">
            <span className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold-soft">
              <span className="h-px w-6 bg-brand-gold" aria-hidden="true" />{' '}
              Ready when you are
            </span>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-white text-balance sm:text-5xl">
              {title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                as="a"
                href={whatsappLink(WHATSAPP_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                size="lg">
                
                <MessageCircleIcon className="h-5 w-5" /> Chat on WhatsApp
              </Button>
              <Button
                as="a"
                href={`tel:+${SITE.phoneRaw}`}
                variant="ghost"
                size="lg">
                
                <PhoneIcon className="h-5 w-5" /> Call {SITE.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}