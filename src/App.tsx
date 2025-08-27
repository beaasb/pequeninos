import React from 'react';
import Hero from './components/Hero';
import SpoilerBook from './components/SpoilerBook';
import FeaturesBook from './components/FeaturesBook';
import Comparison from './components/Comparison';
import WhatIncludes from './components/WhatIncludes';
import IdealFor from './components/IdealFor';
import CompleteKit from './components/CompleteKit';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

// Declaração global do fbq para TypeScript
declare global {
  interface Window {
    fbq: any; 
  }
}

function App() {
  const [showModal, setShowModal] = React.useState(false);

  // Dispara ViewContent para o livro ao carregar a página
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'Livro Colorindo com Jesus',
        content_ids: ['SKU_LIVRO_001'],
        content_type: 'product',
        value: 9.90,
        currency: 'BRL'
      });
    }
  }, []);

  return (
    <div className="min-h-screen"> 
      <Hero />
      <SpoilerBook />
      <FeaturesBook />
      <Comparison/>                  
      <IdealFor />
      <WhatIncludes />
      <Testimonials />
      <CompleteKit />
      <FAQ />
      <Guarantee />

      {/* Novo componente Footer */}
      <Footer />

    </div>
  );
}

export default App;

