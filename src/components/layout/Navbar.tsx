import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from '../ui/Button';
import { whatsappLink, WHATSAPP_DEFAULT } from '../../lib/site';
const NAV = [
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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  // Only the home hero is dark enough for a transparent (light) navbar at top.
  const overHero = pathname === '/';
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  const solid = scrolled || !overHero;
  const light = overHero && !scrolled;
  return (
    <>
      <motion.header
        initial={{
          y: -80
        }}
        animate={{
          y: 0
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${solid ? 'bg-white/85 backdrop-blur-xl border-b border-line/70 shadow-soft' : 'bg-transparent'}`}>
        
        <nav
          className="mx-auto flex h-[72px] max-w-content items-center justify-between px-5 sm:px-8"
          aria-label="Primary">
          
          <Logo light={light} />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) =>
            <li key={item.to}>
                <NavLink
                to={item.to}
                className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${light ? 'text-white/90 hover:text-white' : isActive ? 'text-brand-green' : 'text-ink/70 hover:text-brand-navy'}`
                }>
                
                  {({ isActive }) =>
                <span className="relative">
                      {item.label}
                      {isActive &&
                  <motion.span
                    layoutId="nav-active"
                    className={`absolute -bottom-1.5 left-0 right-0 mx-auto h-[3px] w-5 rounded-full ${light ? 'bg-brand-gold' : 'bg-brand-green'}`} />

                  }
                    </span>
                }
                </NavLink>
              </li>
            )}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Button
              as="a"
              href={whatsappLink(WHATSAPP_DEFAULT)}
              target="_blank"
              rel="noopener noreferrer"
              variant={light ? 'ghost' : 'primary'}
              size="md">
              
              Book Now
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`grid h-11 w-11 place-items-center rounded-xl transition-colors lg:hidden ${light ? 'text-white hover:bg-white/10' : 'text-brand-navy hover:bg-mist'}`}
            aria-label="Open menu">
            
            <MenuIcon className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open &&
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}>
          
            <div
            className="absolute inset-0 bg-brand-navy/40 backdrop-blur-sm"
            onClick={() => setOpen(false)} />
          
            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white p-6 shadow-soft-lg">
            
              <div className="flex items-center justify-between">
                <Logo />
                <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-xl text-brand-navy hover:bg-mist"
                aria-label="Close menu">
                
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              <ul className="mt-8 flex flex-col gap-1">
                {NAV.map((item, i) =>
              <motion.li
                key={item.to}
                initial={{
                  opacity: 0,
                  x: 20
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: 0.1 + i * 0.06
                }}>
                
                    <Link
                  to={item.to}
                  className="block rounded-xl px-4 py-3.5 font-display text-lg font-semibold text-brand-navy transition-colors hover:bg-mist">
                  
                      {item.label}
                    </Link>
                  </motion.li>
              )}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button
                as="a"
                href={whatsappLink(WHATSAPP_DEFAULT)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="w-full">
                
                  Book Now
                </Button>
                <Button
                as="link"
                to="/contact"
                variant="secondary"
                size="lg"
                className="w-full">
                
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}