import { motion, useReducedMotion } from 'motion/react';

export default function Story() {
  const reduce = useReducedMotion();

  return (
    <section
      id="story"
      className="relative py-28 md:py-36 px-6 overflow-hidden"
      style={{ background: 'var(--cream-dark)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: '2px', boxShadow: '0 20px 48px rgba(42,27,18,0.12)' }}
            >
              <img
                src="/kitchen-story.jpg"
                alt="Chef hands crafting food in a warm natural kitchen setting"
                className="w-full object-cover"
                style={{ aspectRatio: '4/3', display: 'block' }}
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ border: '1px solid rgba(183,122,34,0.15)' }}
              />
            </div>

            {/* Quote overlay card */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-6 -right-6 p-6 max-w-[220px] hidden md:block"
              style={{ background: 'var(--brown)' }}
            >
              <p
                className="text-xl leading-snug mb-2"
                style={{ fontFamily: 'var(--font-script)', color: 'var(--gold)' }}
              >
                Made with love
              </p>
              <p
                className="text-[10px] tracking-[0.18em] uppercase"
                style={{ color: 'var(--cream)', opacity: 0.5, fontFamily: 'var(--font-sans)' }}
              >
                - Chef's Table
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--brown)' }}
            >
              From Our Kitchen{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>To Your Table.</em>
            </h2>

            <div className="divider-gold mb-8" />

            <p
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: 'var(--brown)', opacity: 0.72, fontFamily: 'var(--font-sans)' }}
            >
              Chef's Table was created with a simple idea: food made with care
              tastes better. We bring together quality ingredients, thoughtful
              preparation and a chef's approach to create products that feel
              special while still belonging at your everyday table.
            </p>

            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--brown)', opacity: 0.6, fontFamily: 'var(--font-sans)' }}
            >
              Based in Budhanilkantha, Mahankal, we prepare each product
              in small batches so every jar and every pack reaches you fresh,
              full of flavour and made the right way.
            </p>

            {/* Brand pillars row */}
            <div
              className="mt-12 pt-10 border-t flex flex-wrap gap-10"
              style={{ borderColor: 'rgba(183,122,34,0.18)' }}
            >
              {['Small Batch', 'Fresh Always', 'Chef Prepared'].map((pill) => (
                <div key={pill} className="flex items-center gap-3">
                  <span
                    className="w-5 h-px"
                    style={{ background: 'var(--gold)' }}
                  />
                  <span
                    className="text-[11px] tracking-[0.2em] uppercase font-semibold"
                    style={{ color: 'var(--brown)', opacity: 0.6, fontFamily: 'var(--font-sans)' }}
                  >
                    {pill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
