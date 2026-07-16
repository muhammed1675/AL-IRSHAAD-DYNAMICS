import React, { useEffect, useState } from 'react';
import { CalendarIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { IMAGES } from '../../lib/site';
// Target date ~45 days out from render for a live-feeling countdown.
const EVENT_DATE = new Date(Date.now() + 45 * 24 * 60 * 60 * 1000);
function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff / 3600000 % 24),
      minutes: Math.floor(diff / 60000 % 60),
      seconds: Math.floor(diff / 1000 % 60)
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
export function FeaturedEvent() {
  const t = useCountdown(EVENT_DATE);
  const units = [
  {
    label: 'Days',
    value: t.days
  },
  {
    label: 'Hours',
    value: t.hours
  },
  {
    label: 'Minutes',
    value: t.minutes
  },
  {
    label: 'Seconds',
    value: t.seconds
  }];

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-content">
        <Reveal className="grid overflow-hidden rounded-4xl border border-line shadow-soft lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-full">
            <img
              src={IMAGES.event}
              alt="An upcoming featured live event covered by Al-Irshaad Dynamics"
              className="absolute inset-0 h-full w-full object-cover" />
            
            <div
              className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent lg:bg-gradient-to-r"
              aria-hidden="true" />
            
            <span className="absolute left-6 top-6 rounded-full bg-brand-gold px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Upcoming Event
            </span>
          </div>

          <div className="flex flex-col justify-center bg-brand-navy p-8 text-white sm:p-12">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold-soft">
              <span className="h-px w-6 bg-brand-gold" aria-hidden="true" />{' '}
              Featured coverage
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-3xl">
              Northern Media & Culture Summit 2026
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Join us as we deliver full multi-camera live coverage and
              streaming for the region's premier gathering of creatives,
              organizations, and community leaders.
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4 text-brand-green-light" />
                {EVENT_DATE.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-brand-green-light" />{' '}
                International Conference Centre, Abuja
              </span>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-3">
              {units.map((u) =>
              <div
                key={u.label}
                className="rounded-2xl border border-white/10 bg-white/5 py-3 text-center">
                
                  <span className="block font-display text-2xl font-bold tabular-nums text-white sm:text-3xl">
                    {String(u.value).padStart(2, '0')}
                  </span>
                  <span className="mt-1 block text-[10px] uppercase tracking-widest text-white/50">
                    {u.label}
                  </span>
                </div>
              )}
            </div>

            <div className="mt-8">
              <Button as="link" to="/contact" variant="gold" size="lg">
                Learn More <ArrowRightIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}