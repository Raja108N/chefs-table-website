import ProductCard from './ProductCard';
import { motion, useReducedMotion } from 'motion/react';

const PRODUCTS = [
  {
    image: '/honey-butter.jpg',
    label: 'Premium',
    name: 'Honey Comb Butter',
    weight: '250g',
    description:
      'Creamy butter blended with pure honey and honeycomb for a rich, naturally sweet spread.',
    ingredients: ['Pure creamy butter', '100% pure honey', 'Honeycomb', 'Pure cane sugar'],
    buttonLabel: 'Discover Honey Comb Butter',
  },
  {
    image: '/crumpets.jpg',
    label: 'Delicious',
    name: 'Crumpets',
    weight: '500g',
    description:
      'Soft, fluffy and perfectly made crumpets with a classic texture, created for breakfast, tea time and everything in between.',
    ingredients: [
      'High-grade wheat flour',
      'Filtered water',
      'Active dry yeast',
      'Pure milk',
      'Baking soda',
    ],
    buttonLabel: 'Discover Crumpets',
  },
];

export default function Products({ onOrderClick }: { onOrderClick: () => void }) {
  const reduce = useReducedMotion();

  return (
    <section id="products" className="py-28 md:py-36 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl mb-5"
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              color: 'var(--brown)',
            }}
          >
            Made For Your Table
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm tracking-[0.06em]"
            style={{ color: 'var(--brown)', opacity: 0.6, fontFamily: 'var(--font-sans)' }}
          >
            Two favourites. One commitment to quality.
          </motion.p>
          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 divider-gold"
          />
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.name}
              {...product}
              reverse={i % 2 !== 0}
              onOrderClick={onOrderClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
