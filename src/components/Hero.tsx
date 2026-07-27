import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown } from '@phosphor-icons/react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  const reduce = useReducedMotion();

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      {/* Subtle paper texture diagonal */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(197,138,50,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100dvh-5rem)]">

          {/* LEFT: Copy */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.p
              {...(reduce ? {} : fadeUp(0.1))}
              className="text-[10px] tracking-[0.28em] uppercase mb-8"
              style={{
                color: 'var(--gold)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
              }}
            >
              Chef-Crafted · Small Batch · Made with Care
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...(reduce ? {} : fadeUp(0.2))}
              className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 500,
                color: 'var(--brown)',
                letterSpacing: '-0.01em',
              }}
            >
              Good Food,<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Crafted</em> With Care.
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...(reduce ? {} : fadeUp(0.3))}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-[46ch]"
              style={{
                color: 'var(--brown)',
                opacity: 0.7,
                fontFamily: 'var(--font-sans)',
                fontWeight: 400,
              }}
            >
              Premium handmade favourites created with quality ingredients,
              thoughtful preparation and a chef's touch.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...(reduce ? {} : fadeUp(0.4))}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center px-8 py-3.5 text-[13px] tracking-[0.1em] uppercase font-semibold transition-all duration-300"
                style={{
                  color: 'var(--cream)',
                  background: 'var(--brown)',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--gold)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--brown)'; }}
              >
                Explore Our Products
              </button>
              <button
                onClick={scrollToStory}
                className="inline-flex items-center px-8 py-3.5 text-[13px] tracking-[0.1em] uppercase font-semibold border transition-all duration-300"
                style={{
                  color: 'var(--brown)',
                  background: 'transparent',
                  borderColor: 'var(--brown)',
                  fontFamily: 'var(--font-sans)',
                  opacity: 0.75,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.opacity = '1';
                  el.style.borderColor = 'var(--gold)';
                  el.style.color = 'var(--gold)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.opacity = '0.75';
                  el.style.borderColor = 'var(--brown)';
                  el.style.color = 'var(--brown)';
                }}
              >
                Our Story
              </button>
            </motion.div>

            {/* Script accent */}
            <motion.p
              {...(reduce ? {} : fadeUp(0.5))}
              className="text-2xl"
              style={{
                fontFamily: 'var(--font-script)',
                color: 'var(--gold)',
                opacity: 0.8,
              }}
            >
              Made fresh. Made with love.
            </motion.p>
          </div>

          {/* RIGHT: Hero image */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center order-first lg:order-last"
          >
            {/* Gold ring accent */}
            <div
              className="absolute -inset-6 rounded-full opacity-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
              }}
            />
            <div
              className="relative overflow-hidden w-full max-w-lg mx-auto"
              style={{
                borderRadius: '2px',
                boxShadow: '0 24px 60px rgba(42,27,18,0.14)',
              }}
            >
              <img
                src="/hero.jpg"
                alt="Chef's Table premium Honey Comb Butter and Crumpets arranged on a wooden board"
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '4/3', display: 'block' }}
                loading="eager"
              />
              {/* Gold border overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: '1px solid rgba(183,122,34,0.2)', borderRadius: '2px' }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-4 left-4 px-4 py-3"
              style={{
                background: 'var(--brown)',
                color: 'var(--cream)',
              }}
            >
              <p className="text-[9px] tracking-[0.2em] uppercase mb-0.5" style={{ fontFamily: 'var(--font-sans)', opacity: 0.6 }}>No Added</p>
              <p className="text-[11px] tracking-[0.15em] uppercase font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>Preservatives</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Down arrow hint */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ color: 'var(--gold)', opacity: 0.5 }}
      >
        <ArrowDown size={18} weight="light" />
      </motion.div>
    </section>
  );
}
