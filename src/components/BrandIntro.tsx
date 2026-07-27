import { motion, useReducedMotion } from 'motion/react';
import { MagnifyingGlass, Leaf, Heart } from '@phosphor-icons/react';

const PRINCIPLES = [
  {
    Icon: MagnifyingGlass,
    title: 'Crafted by Chefs',
    desc: 'Thoughtfully prepared with care and attention.',
  },
  {
    Icon: Leaf,
    title: 'Quality Ingredients',
    desc: 'Carefully selected ingredients for better flavour.',
  },
  {
    Icon: Heart,
    title: 'Made with Care',
    desc: 'Small-batch preparation with freshness in mind.',
  },
];

export default function BrandIntro() {
  const reduce = useReducedMotion();

  return (
    <section
      className="py-28 md:py-36 px-6"
      style={{ background: 'var(--cream-dark)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.28em] uppercase mb-5"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}
          >
            The Chef's Table
          </motion.p>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              color: 'var(--brown)',
            }}
          >
            Simple Ingredients.<br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Thoughtful Craft.</em>
          </motion.h2>

          <motion.div
            className="divider-gold mb-8"
            initial={reduce ? false : { scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg leading-relaxed max-w-[55ch]"
            style={{ color: 'var(--brown)', opacity: 0.7, fontFamily: 'var(--font-sans)' }}
          >
            At Chef's Table, we believe good food starts with good ingredients.
            Every product is thoughtfully prepared to bring together familiar
            flavours, quality ingredients and the care of a chef.
          </motion.p>
        </div>

        {/* Principles - horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px mt-20 border" style={{ borderColor: 'rgba(183,122,34,0.15)' }}>
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 p-10"
              style={{ background: 'var(--cream)' }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center border"
                style={{ borderColor: 'rgba(183,122,34,0.3)', color: 'var(--gold)' }}
              >
                <p.Icon size={18} weight="light" />
              </div>
              <h3
                className="text-[11px] tracking-[0.2em] uppercase font-semibold"
                style={{ color: 'var(--brown)', fontFamily: 'var(--font-sans)' }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--brown)', opacity: 0.65, fontFamily: 'var(--font-sans)' }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
