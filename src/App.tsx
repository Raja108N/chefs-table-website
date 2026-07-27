import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandIntro from './components/BrandIntro';
import Products from './components/Products';
import ProductFeature from './components/ProductFeature';
import Ingredients from './components/Ingredients';
import Story from './components/Story';
import HowToEnjoy from './components/HowToEnjoy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <Products onOrderClick={scrollToContact} />
        <ProductFeature variant="honey" onOrderClick={scrollToContact} />
        <ProductFeature variant="crumpets" onOrderClick={scrollToContact} />
        <Ingredients />
        <Story />
        <HowToEnjoy />
        <Contact />
      </main>
      <Footer />

      {/* Sticky mobile order button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <button
          onClick={scrollToContact}
          className="w-full py-4 text-[13px] tracking-[0.15em] uppercase font-semibold"
          style={{
            color: 'var(--cream)',
            background: 'var(--brown)',
            fontFamily: 'var(--font-sans)',
          }}
        >
          Order Now
        </button>
      </div>
    </>
  );
}

export default App;
