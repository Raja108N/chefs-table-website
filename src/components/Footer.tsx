import { Phone, MapPin } from '@phosphor-icons/react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--brown)', color: 'var(--cream)' }}>
      {/* Top */}
      <div
        className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b"
        style={{ borderColor: 'rgba(247,240,228,0.08)' }}
      >
        {/* Brand */}
        <div>
          <div className="mb-5">
            <p
              className="text-2xl tracking-[0.04em] mb-1"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              Chef's Table
            </p>
            <p
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)', opacity: 0.9 }}
            >
              Crafted by Chefs. Packed for You.
            </p>
          </div>
          <p
            className="text-sm leading-relaxed max-w-[32ch]"
            style={{ opacity: 0.5, fontFamily: 'var(--font-sans)' }}
          >
            Premium small-batch food products made with quality ingredients and a chef's care.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-6 font-semibold"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
          >
            Navigate
          </p>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-sm transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)', opacity: 0.55 }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.55')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p
            className="text-[10px] tracking-[0.22em] uppercase mb-6 font-semibold"
            style={{ color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}
          >
            Contact
          </p>
          <div className="space-y-4">
            <a
              href="tel:9817257422"
              className="flex items-center gap-3 text-sm"
              style={{ fontFamily: 'var(--font-sans)', opacity: 0.6 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            >
              <Phone size={14} weight="light" style={{ color: 'var(--gold)', flexShrink: 0 }} />
              9817257422
            </a>
            <div
              className="flex items-start gap-3 text-sm"
              style={{ fontFamily: 'var(--font-sans)', opacity: 0.6 }}
            >
              <MapPin size={14} weight="light" style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
              Budhanilkantha-8, Mahankal
            </div>
          </div>

          {/* Script accent */}
          <p
            className="mt-8 text-2xl"
            style={{ fontFamily: 'var(--font-script)', color: 'var(--gold)', opacity: 0.7 }}
          >
            Made with love
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p
          className="text-[11px] tracking-[0.1em]"
          style={{ opacity: 0.35, fontFamily: 'var(--font-sans)' }}
        >
          &copy; Chef's Table. All rights reserved.
        </p>
        <p
          className="text-[11px] tracking-[0.1em]"
          style={{ opacity: 0.25, fontFamily: 'var(--font-sans)' }}
        >
          Budhanilkantha, Nepal
        </p>
      </div>
    </footer>
  );
}
