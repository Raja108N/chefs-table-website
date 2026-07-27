'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { List, X } from '@phosphor-icons/react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: '-40px 0px 0px 0px', threshold: 0 }
    );
    const hero = document.getElementById('home');
    if (hero) obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F0E4]/95 backdrop-blur-md shadow-[0_1px_0_rgba(183,122,34,0.15)]'
            : 'bg-transparent'
        }`}
        style={{ height: '72px' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex flex-col leading-none group"
          >
            <span
              className="text-[11px] tracking-[0.22em] uppercase"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}
            >
              CHEF'S TABLE
            </span>
            <span
              className="text-[9px] tracking-[0.18em] uppercase"
              style={{ color: 'var(--brown)', fontFamily: 'var(--font-sans)', opacity: 0.6 }}
            >
              Crafted by Chefs. Packed for You.
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-[13px] tracking-[0.08em] transition-colors duration-200"
                style={{
                  color: 'var(--brown)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  opacity: 0.75,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="hidden md:inline-flex items-center px-5 py-2 text-[12px] tracking-[0.12em] uppercase font-semibold transition-all duration-300 border"
              style={{
                color: 'var(--cream)',
                background: 'var(--brown)',
                borderColor: 'var(--brown)',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'var(--gold)';
                el.style.borderColor = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'var(--brown)';
                el.style.borderColor = 'var(--brown)';
              }}
            >
              Order Now
            </a>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ color: 'var(--brown)' }}
            >
              {mobileOpen ? <X size={22} weight="light" /> : <List size={22} weight="light" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-10"
            style={{ background: 'var(--cream)' }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-3xl border-b pb-4"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 400,
                    color: 'var(--brown)',
                    borderColor: 'rgba(183,122,34,0.2)',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
              className="mt-8 inline-flex items-center justify-center px-8 py-4 text-[13px] tracking-[0.15em] uppercase font-semibold"
              style={{
                color: 'var(--cream)',
                background: 'var(--brown)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
