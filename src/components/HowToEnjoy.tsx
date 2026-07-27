import { motion, useReducedMotion } from 'motion/react';

const SERVING = [
  {
    product: 'Honey Butter',
    steps: [
      { verb: 'Spread it.', desc: 'Over warm crumpets, toast or fresh bread.' },
      { verb: 'Pair it.', desc: 'With a cup of tea, coffee or fresh fruit.' },
      { verb: 'Share it.', desc: 'Bring it to the table and let everyone enjoy.' },
    ],
    accent: 'var(--gold)',
  },
  {
    product: 'Crumpets',
    steps: [
      { verb: 'Toast it.', desc: 'Lightly toast until the edges turn golden.' },
      { verb: 'Top it.', desc: 'Add Honey Butter, jam or a soft egg.' },
      { verb: 'Enjoy it.', desc: 'Best served warm, any time of day.' },
    ],
    accent: 'var(--green)',
  },
];

export default function HowToEnjoy() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative py-28 md:py-36 px-6 overflow-hidden"
      style={{ background: 'var(--cream)' }}
    >
      {/* Full-width lifestyle image */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden"
          style={{ borderRadius: '2px', maxHeight: '520px' }}
        >
          <img
            src="/lifestyle.jpg"
            alt="Breakfast spread with crumpets topped with honey butter, honey and morning tea"
            className="w-full object-cover"
            style={{ height: '520px', objectPosition: 'center 40%' }}
            loading="lazy"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top, rgba(42,27,18,0.3) 0%, transparent 50%)' }}
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--brown)' }}
          >
            How to{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>Enjoy.</em>
          </h2>
        </motion.div>

        {/* Two product serving suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {SERVING.map((group, gi) => (
            <div key={group.product}>
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[10px] tracking-[0.25em] uppercase mb-8 font-semibold"
                style={{ color: group.accent, fontFamily: 'var(--font-sans)' }}
              >
                {group.product}
              </motion.p>
              <div className="space-y-0">
                {group.steps.map((step, i) => (
                  <motion.div
                    key={step.verb}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: gi * 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex gap-6 py-6 border-b"
                    style={{ borderColor: 'rgba(183,122,34,0.15)' }}
                  >
                    <span
                      className="text-2xl md:text-3xl leading-tight min-w-[120px]"
                      style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--brown)' }}
                    >
                      {step.verb}
                    </span>
                    <p
                      className="text-sm leading-relaxed pt-1"
                      style={{ color: 'var(--brown)', opacity: 0.6, fontFamily: 'var(--font-sans)' }}
                    >
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
