import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
import { whatsappLink, WHATSAPP_DEFAULT } from '../../lib/site';
// Floating WhatsApp CTA — the primary conversion path, visible on every page.
export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show &&
      <motion.a
        href={whatsappLink(WHATSAPP_DEFAULT)}
        target="_blank"
        rel="noopener noreferrer"
        initial={{
          opacity: 0,
          scale: 0.6,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        exit={{
          opacity: 0,
          scale: 0.6,
          y: 20
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-brand-green px-4 py-4 text-white shadow-green transition-all duration-300 hover:bg-brand-green-dark"
        aria-label="Chat with us on WhatsApp">
        
          <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-brand-green/40"
          aria-hidden="true" />
        
          <MessageCircleIcon className="h-6 w-6 shrink-0" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:ml-2 group-hover:max-w-[140px]">
            Chat with us
          </span>
        </motion.a>
      }
    </AnimatePresence>);

}