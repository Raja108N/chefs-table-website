import { motion, useReducedMotion } from 'motion/react';
import { Leaf } from '@phosphor-icons/react';

const INGREDIENTS = [
  {
    product: 'Honey Butter',
    weight: '250g',
    items: [
      'Pure creamy butter',
      '100% pure honey',
      'Honeycomb',
      'Cane sugar',
    ],
    accent: 'var(--gold)',
  },
  {
    product: 'Delicious Crumpets',
    weight: '500g',
    items: [
      'High-grade wheat flour',
      'Filtered water',
      'Active dry yeast',
      'Pure milk',
      'Baking soda',
    ],
    accent: 'var(--green)',
  },
];

export default function Ingredients() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-28 md:py-36 px-6"
      style={{ background: 'var(--brown)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl leading-tight mb-4"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--cream)' }}
          >
            Ingredients You Can{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>
              Feel Good About.
            </em>
          </h2>
          <p
            className="text-sm mt-4 flex items-center justify-center gap-2"
            style={{ color: 'var(--cream)', opacity: 0.5, fontFamily: 'var(--font-sans)' }}
          >
            <Leaf size={14} weight="light" />
            No added preservatives
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ border: '1px solid rgba(247,240,228,0.08)' }}>
          {INGREDIENTS.map((group, gi) => (
            <motion.div
              key={group.product}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: gi * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-10 md:p-14"
              style={{ background: 'rgba(247,240,228,0.04)' }}
            >
              {/* Product name + weight */}
              <div className="flex items-center justify-between mb-8 border-b pb-6" style={{ borderColor: 'rgba(247,240,228,0.12)' }}>
                <div>
                  <p
                    className="text-[10px] tracking-[0.22em] uppercase mb-1 font-semibold"
                    style={{ color: group.accent, fontFamily: 'var(--font-sans)' }}
                  >
                    {group.product}
                  </p>
                </div>
                <span
                  className="text-[11px] tracking-[0.15em] uppercase font-semibold px-3 py-1"
                  style={{ color: 'var(--brown)', background: group.accent, fontFamily: 'var(--font-sans)' }}
                >
                  {group.weight}
                </span>
              </div>

              {/* Ingredient list */}
              <ul className="space-y-0">
                {group.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                    className="flex items-center gap-4 py-4 border-b last:border-b-0"
                    style={{ borderColor: 'rgba(247,240,228,0.08)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: group.accent }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: 'var(--cream)', opacity: 0.8, fontFamily: 'var(--font-sans)' }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
