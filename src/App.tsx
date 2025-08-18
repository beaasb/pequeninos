import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhereToUse from './components/WhereToUse';
import WhatIncludes from './components/WhatIncludes';
import CompleteKit from './components/CompleteKit';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import SocialProofBar from './components/SocialProofBar';
import SpecialOfferModal from './components/SpecialOfferModal';
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
  // Mostra o modal após 8 segundos
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen"> 
      <Header />
      <SocialProofBar />
      <Hero />
      <WhereToUse />
      <WhatIncludes />      
      <Testimonials />
      <CompleteKit />
      <FAQ />
      <Guarantee />

      {/* Novo componente Footer */}
      <Footer />

      {/* Modal de oferta especial */}
      <SpecialOfferModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
}

export default App;

