import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { FAQS } from '../../lib/content';
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-mist px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently asked questions"
          description="Everything you need to know before reaching out. Still curious? Send us a message anytime." />
        

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-brand-green/30">
                
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}>
                  
                  <span className="font-display text-base font-semibold text-brand-navy sm:text-lg">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? 'bg-brand-green text-white' : 'bg-mist text-brand-green'}`}>
                    
                    <PlusIcon className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1]
                    }}>
                    
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink/70">
                        {faq.a}
                      </p>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}