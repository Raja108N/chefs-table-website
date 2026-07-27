import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, MapPin, WhatsappLogo } from '@phosphor-icons/react';

type FormData = {
  name: string;
  phone: string;
  product: string;
  quantity: string;
  message: string;
};

const PRODUCTS_OPTIONS = ['Honey Comb Butter 250g', 'Crumpets 500g'];

export default function Contact() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppUrl = (data: FormData) => {
    const lines = [
      `Hi Chef's Table! I'd like to place an order.`,
      ``,
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Product: ${data.product}`,
      `Quantity: ${data.quantity}`,
      ...(data.message.trim() ? [`Note: ${data.message.trim()}`] : []),
    ];
    const text = encodeURIComponent(lines.join('\n'));
    return `https://api.whatsapp.com/send?phone=9779817257422&text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = buildWhatsAppUrl(form);
  };

  const INPUT_BASE = {
    background: 'rgba(247,240,228,0.05)',
    border: '1px solid rgba(247,240,228,0.18)',
    color: 'var(--cream)',
    fontFamily: 'var(--font-sans)',
    borderRadius: '0',
    outline: 'none',
    width: '100%',
    padding: '14px 16px',
    fontSize: '14px',
  } as React.CSSProperties;

  const LABEL_STYLE = {
    color: 'var(--cream)',
    opacity: 0.6,
    fontFamily: 'var(--font-sans)',
    fontSize: '11px',
    letterSpacing: '0.16em',
    textTransform: 'uppercase' as const,
    display: 'block',
    marginBottom: '8px',
    fontWeight: 500,
  };

  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-6"
      style={{ background: 'var(--brown-mid)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: CTA Text */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-4xl md:text-5xl leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, color: 'var(--cream)' }}
            >
              Bring Chef's Table{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>
                To Your Table.
              </em>
            </h2>

            <div
              className="divider-gold mb-8"
              style={{ background: 'var(--gold)' }}
            />

            <p
              className="text-base leading-relaxed mb-12"
              style={{ color: 'var(--cream)', opacity: 0.65, fontFamily: 'var(--font-sans)', maxWidth: '42ch' }}
            >
              Ready to order? Get in touch with us for availability and orders.
              We prepare everything fresh, so reach out and we'll take care of the rest.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="https://wa.me/9779817257422"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border transition-colors duration-300 group-hover:bg-[#25D366] group-hover:border-[#25D366]"
                  style={{ borderColor: 'rgba(247,240,228,0.2)', color: 'var(--gold)' }}
                >
                  <WhatsappLogo size={18} weight="light" />
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-0.5"
                    style={{ color: 'var(--cream)', opacity: 0.45, fontFamily: 'var(--font-sans)' }}
                  >
                    WhatsApp / Call
                  </p>
                  <p
                    className="text-base"
                    style={{ color: 'var(--cream)', fontFamily: 'var(--font-sans)' }}
                  >
                    9817257422
                  </p>
                </div>
              </a>

              <a
                href="tel:9817257422"
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border"
                  style={{ borderColor: 'rgba(247,240,228,0.2)', color: 'var(--gold)' }}
                >
                  <Phone size={18} weight="light" />
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-0.5"
                    style={{ color: 'var(--cream)', opacity: 0.45, fontFamily: 'var(--font-sans)' }}
                  >
                    Phone
                  </p>
                  <p
                    className="text-base"
                    style={{ color: 'var(--cream)', fontFamily: 'var(--font-sans)' }}
                  >
                    9817257422
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center border"
                  style={{ borderColor: 'rgba(247,240,228,0.2)', color: 'var(--gold)' }}
                >
                  <MapPin size={18} weight="light" />
                </div>
                <div>
                  <p
                    className="text-[10px] tracking-[0.18em] uppercase mb-0.5"
                    style={{ color: 'var(--cream)', opacity: 0.45, fontFamily: 'var(--font-sans)' }}
                  >
                    Location
                  </p>
                  <p
                    className="text-base"
                    style={{ color: 'var(--cream)', fontFamily: 'var(--font-sans)' }}
                  >
                    Budhanilkantha-8, Mahankal
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://api.whatsapp.com/send?phone=9779817257422&text=${encodeURIComponent("Hi Chef's Table! I'd like to place an order. Could you let me know about availability?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 px-8 py-4 text-[12px] tracking-[0.12em] uppercase font-semibold transition-all duration-300"
              style={{
                color: 'var(--brown)',
                background: 'var(--gold)',
                fontFamily: 'var(--font-sans)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = '#25D366';
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--gold)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--brown)';
              }}
            >
              <WhatsappLogo size={16} weight="fill" />
              Order on WhatsApp
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="ct-name" style={LABEL_STYLE}>Name</label>
                  <input
                    id="ct-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    style={{
                      ...INPUT_BASE,
                      '::placeholder': { color: 'rgba(247,240,228,0.3)' },
                    } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label htmlFor="ct-phone" style={LABEL_STYLE}>Phone</label>
                  <input
                    id="ct-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    style={INPUT_BASE}
                  />
                </div>
                <div>
                  <label htmlFor="ct-product" style={LABEL_STYLE}>Product</label>
                  <select
                    id="ct-product"
                    name="product"
                    required
                    value={form.product}
                    onChange={handleChange}
                    style={INPUT_BASE}
                  >
                    <option value="" disabled>Select a product</option>
                    {PRODUCTS_OPTIONS.map((p) => (
                      <option key={p} value={p} style={{ background: 'var(--brown)', color: 'var(--cream)' }}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="ct-quantity" style={LABEL_STYLE}>Quantity</label>
                  <input
                    id="ct-quantity"
                    name="quantity"
                    type="text"
                    required
                    placeholder="e.g. 2 jars"
                    value={form.quantity}
                    onChange={handleChange}
                    style={INPUT_BASE}
                  />
                </div>
                <div>
                  <label htmlFor="ct-message" style={LABEL_STYLE}>Message</label>
                  <textarea
                    id="ct-message"
                    name="message"
                    rows={4}
                    placeholder="Any special requests or delivery notes"
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...INPUT_BASE, resize: 'none' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-[12px] tracking-[0.15em] uppercase font-semibold transition-all duration-300"
                  style={{
                    color: 'var(--brown)',
                    background: 'var(--gold)',
                    fontFamily: 'var(--font-sans)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--caramel)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'var(--gold)';
                  }}
                >
                  Submit Order
                </button>
              </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
