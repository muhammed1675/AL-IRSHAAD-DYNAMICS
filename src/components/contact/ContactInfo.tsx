import React from 'react';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  ClockIcon } from
'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SITE, whatsappLink, WHATSAPP_DEFAULT } from '../../lib/site';
export function ContactInfo() {
  const methods = [
  {
    icon: MessageCircleIcon,
    label: 'WhatsApp',
    value: 'Chat with us instantly',
    href: whatsappLink(WHATSAPP_DEFAULT),
    external: true,
    accent: true
  },
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: SITE.phoneDisplay,
    href: `tel:+${SITE.phoneRaw}`
  },
  {
    icon: MailIcon,
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`
  }];

  return (
    <div className="space-y-4">
      {methods.map((m, i) => {
        const Icon = m.icon;
        return (
          <Reveal key={m.label} delay={i * 0.08}>
            <a
              href={m.href}
              target={m.external ? '_blank' : undefined}
              rel={m.external ? 'noopener noreferrer' : undefined}
              className={`group flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft ${m.accent ? 'border-brand-green/30 bg-brand-green/5 hover:border-brand-green' : 'border-line bg-white hover:border-brand-green/30'}`}>
              
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors ${m.accent ? 'bg-brand-green text-white' : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white'}`}>
                
                <Icon className="h-6 w-6" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">
                  {m.label}
                </p>
                <p className="mt-0.5 font-display text-base font-semibold text-brand-navy">
                  {m.value}
                </p>
              </div>
            </a>
          </Reveal>);

      })}

      <Reveal
        delay={0.24}
        className="rounded-2xl border border-line bg-white p-5">
        
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gold/15 text-brand-gold">
            <MapPinIcon className="h-5 w-5" />
          </span>
          <p className="font-display text-sm font-semibold text-brand-navy">
            Visit our studio
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-ink/60">
          {SITE.address}
        </p>
      </Reveal>

      <Reveal
        delay={0.3}
        className="rounded-2xl border border-line bg-white p-5">
        
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gold/15 text-brand-gold">
            <ClockIcon className="h-5 w-5" />
          </span>
          <p className="font-display text-sm font-semibold text-brand-navy">
            Business hours
          </p>
        </div>
        <ul className="mt-3 space-y-2">
          {SITE.hours.map((h) =>
          <li key={h.day} className="flex justify-between text-sm">
              <span className="text-ink/60">{h.day}</span>
              <span className="font-medium text-brand-navy">{h.time}</span>
            </li>
          )}
        </ul>
      </Reveal>
    </div>);

}