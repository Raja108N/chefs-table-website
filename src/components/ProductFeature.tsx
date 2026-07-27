import { motion, useReducedMotion } from 'motion/react';

interface ProductFeatureProps {
  variant: 'honey' | 'crumpets';
  onOrderClick: () => void;
}

export default function ProductFeature({ variant, onOrderClick }: ProductFeatureProps) {
  const reduce = useReducedMotion();
  const isHoney = variant === 'honey';

  const content = isHoney
    ? {
        label: 'Premium Honey Comb Butter',
        headline: ['Pure Honey. Creamy Butter.', 'Naturally Delicious.'],
        body: 'A rich combination of creamy butter, pure honey and natural honeycomb, carefully prepared for a deliciously smooth and naturally sweet experience.',
        weight: '250g',
        cta: 'Order Honey Comb Butter',
        image: '/honey-butter.jpg',
        imageAlt: 'Premium Honey Comb Butter in a glass jar with honeycomb and a honey dipper',
        bg: 'var(--cream-dark)',
        pattern: 'honeycomb-bg',
      }
    : {
        label: 'Delicious Crumpets',
        headline: ['Soft. Fluffy.', 'Perfectly Made.'],
        body: 'Made with quality ingredients and carefully prepared for a soft, airy texture. Enjoy them warm with butter, honey or your favourite topping.',
        weight: '500g',
        cta: 'Order Crumpets',
        image: '/crumpets.jpg',
        imageAlt: 'Stack of golden crumpets with butter melting in, wheat stalks beside them',
        bg: 'var(--cream)',
        pattern: 'wheat-bg',
      };

  return (
    <section
      className={`relative overflow-hidden py-24 md:py-0 px-6 ${content.pattern}`}
      style={{ background: content.bg }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[600px] items-stretch ${
            isHoney ? '' : 'md:[direction:rtl]'
          }`}
        >
          {/* Image */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: isHoney ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden md:min-h-[600px]"
            style={{ direction: 'ltr' }}
          >
            <img
              src={content.image}
              alt={content.imageAlt}
              className="w-full h-full object-cover"
              style={{ minHeight: '360px' }}
              loading="lazy"
            />
            {/* Overlay tint */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isHoney
                  ? 'linear-gradient(135deg, rgba(183,122,34,0.08) 0%, transparent 60%)'
                  : 'linear-gradient(225deg, rgba(76,122,42,0.08) 0%, transparent 60%)',
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: isHoney ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20"
            style={{ direction: 'ltr' }}
          >
            <p
              className="text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
              style={{ color: isHoney ? 'var(--gold)' : 'var(--green)', fontFamily: 'var(--font-sans)' }}
            >
              {content.label}
            </p>

            <h2
              className="text-4xl md:text-5xl leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--brown)' }}
            >
              {content.headline[0]}
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>{content.headline[1]}</em>
            </h2>

            <div
              className="divider-gold mb-7"
              style={{ background: isHoney ? 'var(--gold)' : 'var(--green)' }}
            />

            <p
              className="text-base leading-relaxed mb-8 max-w-[42ch]"
              style={{ color: 'var(--brown)', opacity: 0.7, fontFamily: 'var(--font-sans)' }}
            >
              {content.body}
            </p>

            {/* Weight tag */}
            <div className="flex items-center gap-4 mb-10">
              <span
                className="text-[11px] tracking-[0.2em] uppercase font-semibold px-4 py-2 border"
                style={{
                  color: 'var(--cream)',
                  background: 'var(--brown)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                Net {content.weight}
              </span>
              <span
                className="text-[10px] tracking-[0.15em] uppercase"
                style={{ color: 'var(--brown)', opacity: 0.5, fontFamily: 'var(--font-sans)' }}
              >
                No added preservatives
              </span>
            </div>

            {/* CTA */}
            <button
              onClick={onOrderClick}
              className="self-start inline-flex items-center px-8 py-3.5 text-[12px] tracking-[0.12em] uppercase font-semibold transition-all duration-300"
              style={{
                color: 'var(--cream)',
                background: isHoney ? 'var(--gold)' : 'var(--green)',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = 'var(--brown)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = isHoney
                  ? 'var(--gold)'
                  : 'var(--green)';
              }}
            >
              {content.cta}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
