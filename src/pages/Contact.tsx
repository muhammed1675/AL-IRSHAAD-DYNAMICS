import React, { lazy, memo, Component } from 'react';
import { PageHero } from '../components/sections/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { FAQ } from '../components/contact/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';
import { IMAGES, SITE } from '../lib/site';
export function Contact() {
  const mapQuery = encodeURIComponent(SITE.address);
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's start a conversation."
        description="Whether it's an event, a project, or a spiritual journey — reach out and our team will respond quickly with the care you deserve."
        image={IMAGES.hajj}
        crumbs={[
        {
          label: 'Home',
          to: '/'
        },
        {
          label: 'Contact'
        }]
        } />
      

      {/* Form + info */}
      <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
              <span className="h-px w-6 bg-brand-gold" aria-hidden="true" />{' '}
              Send a message
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-brand-navy sm:text-4xl">
              Tell us about your project
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/70">
              Fill out the form and we'll get back to you shortly. Prefer to
              chat instantly? Reach us on WhatsApp anytime.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="sr-only">Contact information</h2>
            <ContactInfo />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-content">
          <Reveal className="overflow-hidden rounded-4xl border border-line shadow-soft">
            <iframe
              title="Al-Irshaad Dynamics location"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[380px] w-full sm:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" />
            
          </Reveal>
        </div>
      </section>

      <FAQ />
      <FinalCTA
        title="Still have questions?"
        description="Our team is one message away. Start a WhatsApp conversation and let's handle your memories professionally." />
      
    </>);

}