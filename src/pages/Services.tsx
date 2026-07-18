import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, MessageCircleIcon, ArrowUpRightIcon } from 'lucide-react';
import { PageHero } from '../components/sections/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal, staggerContainer, staggerItem } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { FinalCTA } from '../components/sections/FinalCTA';
import { IMAGES, whatsappLink } from '../lib/site';
import { SERVICES } from '../lib/content';
import { Seo } from '../components/seo/Seo';
export function Services() {
  return (
    <>
      <Seo title="Services — Photography, Film, Live Coverage & Hajj Travel | Al-Irshaad Dynamics" description="Explore our services: professional photography, cinematic videography, live event coverage & streaming, event branding, business promotion, Hajj & Umrah travel, content-creation training, and news coverage." path="/services" />
      <PageHero
        eyebrow="Our services"
        title="Everything you need, under one trusted roof."
        description="From cinematic photography and film to live coverage, branding, promotion, training, and Hajj & Umrah journeys — explore how we bring your vision to life."
        image={IMAGES.event}
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Services'
        }]
        } />
      

      {/* Service grid overview */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-content">
          <SectionHeading
            eyebrow="Overview"
            title="A full spectrum of media & travel services"
            description="Jump to any service below, or scroll to explore each one in detail." />
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: '-60px'
            }}
            className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <motion.a
                  key={s.slug}
                  href={`#${s.slug}`}
                  variants={staggerItem}
                  className="group flex flex-col rounded-3xl border border-line bg-mist/40 p-6 transition-all duration-400 hover:-translate-y-1 hover:border-brand-green/30 hover:bg-white hover:shadow-soft">
                  
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-green/10 text-brand-green transition-colors group-hover:bg-brand-green group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-brand-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">
                    {s.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-green">
                    View details <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </motion.a>);

            })}
          </motion.div>
        </div>
      </section>

      {/* Individual detailed sections */}
      {SERVICES.map((s, i) => {
        const Icon = s.icon;
        const reversed = i % 2 === 1;
        return (
          <section
            key={s.slug}
            id={s.slug}
            className={`scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 ${i % 2 === 0 ? 'bg-mist' : 'bg-white'}`}>
            
            <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={reversed ? 'lg:order-2' : ''}>
                <div className="overflow-hidden rounded-4xl shadow-soft-lg">
                  <img
                    src={s.image}
                    alt={`${s.title} by Al-Irshaad Dynamics`}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy" />
                  
                </div>
              </Reveal>

              <Reveal className={reversed ? 'lg:order-1' : ''}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-green text-white shadow-green">
                  <Icon className="h-7 w-7" strokeWidth={1.6} />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold leading-tight text-brand-navy sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  {s.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.features.map((f) =>
                  <li key={f} className="flex items-center gap-2.5">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-green/10">
                        <CheckIcon className="h-3 w-3 text-brand-green" />
                      </span>
                      <span className="text-sm font-medium text-ink/75">
                        {f}
                      </span>
                    </li>
                  )}
                </ul>

                <div className="mt-6 rounded-2xl border border-brand-gold/30 bg-brand-gold/5 px-5 py-4">
                  <p className="text-sm font-medium text-brand-navy">
                    <span className="font-semibold text-brand-green">
                      Why it matters:{' '}
                    </span>
                    {s.benefit}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    as="a"
                    href={whatsappLink(
                      `Assalamu alaikum, I'm interested in your ${s.title} service.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer">
                    
                    <MessageCircleIcon className="h-5 w-5" /> Enquire on
                    WhatsApp
                  </Button>
                  <Button as="link" to="/contact" variant="secondary">
                    Request a Quote
                  </Button>
                </div>
              </Reveal>
            </div>
          </section>);

      })}

      <FinalCTA />
    </>);

}