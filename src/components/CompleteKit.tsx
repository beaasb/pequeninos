import React, { useState, useEffect } from "react";
import { Gift, Star, Zap, Check, Shield, Clock } from "lucide-react";

const CompleteKit = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  // Handlers para tracking InitiateCheckout
  const handleLivroClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      const eventId = 'ic_' + Date.now() + '_' + Math.floor(Math.random() * 100000);
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Colorindo com Jesus - Livro',
        content_ids: ['SKU_COLORINDO_001'],
        value: 9.90,
        currency: 'BRL',
        event_id: eventId
      });
      localStorage.setItem('lastInitiateCheckoutEventId', eventId);
      
      // Também dispara AddToCart para melhor rastreamento
      window.fbq('track', 'AddToCart', {
        content_name: 'Colorindo com Jesus - Livro',
        content_ids: ['SKU_COLORINDO_001'],
        value: 9.90,
        currency: 'BRL'
      });
    }
  };

  const handleKitClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      const eventId = 'ic_' + Date.now() + '_' + Math.floor(Math.random() * 100000);
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'Kit Completo - Colorindo com Jesus',
        content_ids: ['SKU_KIT_001'],
        value: 19.90,
        currency: 'BRL',
        event_id: eventId
      });
      localStorage.setItem('lastInitiateCheckoutEventId', eventId);
      
      // Também dispara AddToCart para melhor rastreamento
      window.fbq('track', 'AddToCart', {
        content_name: 'Kit Completo - Colorindo com Jesus',
        content_ids: ['SKU_KIT_001'],
        value: 19.90,
        currency: 'BRL'
      });
    }
  };
  return (
    <section
      id="oferta"
      className="py-20 bg-gradient-to-r from-orange-400 to-indigo-300 from-primary to-chart-3 text-primary-foreground offer-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm shadow-sm mb-4">
            <Star
              className="w-4 h-4 mr-2 fill-current"
              aria-hidden="true"
              stroke="none"
            />
            ⚡ OFERTA ÚNICA - ÚLTIMAS 24H! ⚡
          </div>
          <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-4">
            ESCOLHA SUA OFERTA
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Duas opções incríveis para transformar seus momentos especiais
          </p>
        </div>

        {/* Ofertas empilhadas */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Oferta Principal */}
          <div id="oferta-principal" className="scroll-mt-24"></div>
          <div className="bg-white rounded-2xl p-6 md:p-8 text-card-foreground shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-indigo-100 rounded-full translate-y-10 -translate-x-10"></div>


            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  OFERTA PRINCIPAL
                </h3>
                <p className="text-muted-foreground text-gray-500">
                  Livro de Colorir Cristão do Pequeninos™ 
                </p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl text-gray-500 md:text-3xl font-bold text-muted-foreground line-through">
                    R$ 27,90
                  </span>
                  <span className="text-3xl text-amber-600 md:text-4xl font-bold text-primary">
                    R$ 9,90
                  </span>
                </div>
                <p className="text-sm text-muted-foreground text-gray-500">Economia de R$ 18,00</p>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mb-6 text-left max-w-md mx-auto">
                {[
                  "Livro com versículos e atividades",
                  "Certificado incluso",
                  "Imprima quantas vezes quiser",
                  "Para todas as idades",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0 text-orange-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-4">
                <a
                  href="https://pay.cakto.com.br/37vfpfn_513204"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLivroClick}
                  className="aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 h-14 px-8 py-4 text-lg font-bold animate-bounce"
                  id="btn-oferta-principal"
                >
                  Quero o Livro
                </a>
                <p className="text-sm text-gray-600 mt-2">
                  Oferta termina em:{" "}
                  <span className="font-bold text-red-600">
                    {formatTime(timeLeft)}
                  </span>
                </p>
              </div>

              <div className="flex justify-center items-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Shield className="w-4 h-4 text-chart-1 mr-1" />
                  Garantia 7 dias
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary mr-1" />
                  Download Imediato
                </div>
              </div>
            </div>
          </div>
                  
          {/* Oferta Kit Completo */}       
          <div id="oferta-kit" className="scroll-mt-24"></div>
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">            
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-2 mx-auto max-w-max">                
                <Gift className="w-3 h-3 mr-1" />
                KIT COMPLETO - 4 PRODUTOS
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">OFERTA ESPECIAL</h3>
              <p className="text-green-100 mb-6">Produto Principal + 3 Bônus Exclusivos</p>

              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-green-200 line-through">
                  R$ 65,90
                </span>
                <span className="text-3xl md:text-4xl font-bold text-white">
                  R$ 19,90
                </span>
              </div>
              <p className="text-sm text-green-100 mb-6">
                Economia de R$ 46,00 - Kit Completo
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-6 text-left max-w-md mx-auto">
                {[
                  "35 Livros de Colorir Cristãos",
                  "Planner Devocional Infantil",
                  "Livro de Atividades Cristãs Extra",
                  "Desafio Bíblico de 7 Dias",
                ].map((item) => (
                  <div key={item} className="flex items-center text-green-300">
                    <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <a
                  href="https://pay.cakto.com.br/ugodz3a_513354"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleKitClick}
                  className="aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 h-14 px-8 py-4 text-lg font-bold animate-bounce mx-auto"
                  id="btn-kit-completo"
                >
                  Quero o Kit Completo
                </a>
                <p className="text-sm text-gray-300 mt-2">
                  Oferta termina em:{" "}
                  <span className="font-bold text-red-400">
                    {formatTime(timeLeft)}
                  </span>
                </p>
              </div>

              <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-center text-sm max-w-xs mx-auto">
                <p className="font-bold">🔥 Oferta limitada - Kit Completo!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteKit;
