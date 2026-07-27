import { motion, useReducedMotion } from 'motion/react';

interface ProductCardProps {
  image: string;
  label: string;
  name: string;
  weight: string;
  description: string;
  ingredients: string[];
  buttonLabel: string;
  onOrderClick: () => void;
  reverse?: boolean;
}

export default function ProductCard({
  image,
  label,
  name,
  weight,
  description,
  ingredients,
  buttonLabel,
  onOrderClick,
}: ProductCardProps) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden hover-lift"
      style={{
        background: 'var(--cream)',
        border: '1px solid rgba(183,122,34,0.18)',
      }}
    >
      {/* Image */}
      <div className="overflow-hidden" style={{ aspectRatio: '3/2' }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover img-scale"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        {/* Label */}
        <p
          className="text-[10px] tracking-[0.25em] uppercase mb-3"
          style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}
        >
          {label}
        </p>

        {/* Name + Weight */}
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <h3
            className="text-2xl md:text-3xl leading-tight"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--brown)' }}
          >
            {name}
          </h3>
          <span
            className="text-[11px] tracking-[0.15em] uppercase shrink-0"
            style={{
              color: 'var(--cream)',
              background: 'var(--brown)',
              padding: '4px 10px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
            }}
          >
            {weight}
          </span>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-5" />

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: 'var(--brown)', opacity: 0.7, fontFamily: 'var(--font-sans)' }}
        >
          {description}
        </p>

        {/* Ingredients */}
        <div className="mb-8">
          <p
            className="text-[10px] tracking-[0.2em] uppercase mb-3 font-semibold"
            style={{ color: 'var(--green)', fontFamily: 'var(--font-sans)' }}
          >
            Ingredients
          </p>
          <ul className="flex flex-wrap gap-2">
            {ingredients.map((ing) => (
              <li
                key={ing}
                className="text-[11px] px-3 py-1 border"
                style={{
                  color: 'var(--brown)',
                  borderColor: 'rgba(76,122,42,0.25)',
                  fontFamily: 'var(--font-sans)',
                  opacity: 0.8,
                }}
              >
                {ing}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={onOrderClick}
          className="w-full py-3.5 text-[12px] tracking-[0.12em] uppercase font-semibold border transition-all duration-300"
          style={{
            color: 'var(--brown)',
            borderColor: 'var(--gold)',
            fontFamily: 'var(--font-sans)',
            background: 'transparent',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = 'var(--brown)';
            el.style.color = 'var(--cream)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.background = 'transparent';
            el.style.color = 'var(--brown)';
          }}
        >
          {buttonLabel}
        </button>
      </div>
    </motion.article>
  );
}
