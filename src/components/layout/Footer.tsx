import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  MessageCircleIcon } from
'lucide-react';
import { Logo } from './Logo';
import { SITE, whatsappLink, WHATSAPP_DEFAULT } from '../../lib/site';
import { SERVICES } from '../../lib/content';
const QUICK_LINKS = [
{
  label: 'Home',
  to: '/'
},
{
  label: 'About',
  to: '/about'
},
{
  label: 'Services',
  to: '/services'
},
{
  label: 'Contact',
  to: '/contact'
}];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl"
        aria-hidden="true" />
      
      <div className="relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.slogan} We craft cinematic memories and seamless spiritual
              journeys with a standard of care that lasts a lifetime.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SITE.socials
                .filter((s) => s.href && s.href !== '#')
                .map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE.name} on ${s.label}`}
                    className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-colors hover:border-brand-gold hover:text-brand-gold focus:border-brand-gold"
                  >
                    {s.label}
                  </a>
                ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold-soft">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((l) =>
              <li key={l.to}>
                  <Link
                  to={l.to}
                  className="text-sm text-white/60 transition-colors hover:text-white">
                  
                    {l.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold-soft">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 6).map((s) =>
              <li key={s.slug}>
                  <Link
                  to="/services"
                  className="text-sm text-white/60 transition-colors hover:text-white">
                  
                    {s.title}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-brand-gold-soft">
              Get In Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPinIcon className="h-5 w-5 shrink-0 text-brand-green-light" />
                <span>{SITE.address}</span>
              </li>
              <li>
                <a
                  href={`tel:+${SITE.phoneRaw}`}
                  className="flex gap-3 transition-colors hover:text-white">
                  
                  <PhoneIcon className="h-5 w-5 shrink-0 text-brand-green-light" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex gap-3 transition-colors hover:text-white">
                  
                  <MailIcon className="h-5 w-5 shrink-0 text-brand-green-light" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(WHATSAPP_DEFAULT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 transition-colors hover:text-white">
                  
                  <MessageCircleIcon className="h-5 w-5 shrink-0 text-brand-green-light" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
            }
            className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition-colors hover:border-brand-gold hover:text-brand-gold">
            
            Back to top
            <ArrowUpIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>);

}