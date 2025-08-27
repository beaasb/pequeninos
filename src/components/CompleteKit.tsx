import React, { useState, useEffect } from "react";
import { Gift, Star, Check, Shield, Clock, BookOpen, ChevronDown } from "lucide-react";

const CompleteKit = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const handleLivroClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      const eventId = "ic_" + Date.now() + "_" + Math.floor(Math.random() * 100000);
      window.fbq("track", "InitiateCheckout", {
        content_name: "Colorindo com Jesus - Livro",
        content_ids: ["SKU_COLORINDO_001"],
        value: 9.9,
        currency: "BRL",
        event_id: eventId,
      });
      localStorage.setItem("lastInitiateCheckoutEventId", eventId);
      window.fbq("track", "AddToCart", {
        content_name: "Colorindo com Jesus - Livro",
        content_ids: ["SKU_COLORINDO_001"],
        value: 9.9,
        currency: "BRL",
      });
    }
  };

  const handleKitClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      const eventId = "ic_" + Date.now() + "_" + Math.floor(Math.random() * 100000);
      window.fbq("track", "InitiateCheckout", {
        content_name: "Kit Completo - Colorindo com Jesus",
        content_ids: ["SKU_KIT_001"],
        value: 19.9,
        currency: "BRL",
        event_id: eventId,
      });
      localStorage.setItem("lastInitiateCheckoutEventId", eventId);
      window.fbq("track", "AddToCart", {
        content_name: "Kit Completo - Colorindo com Jesus",
        content_ids: ["SKU_KIT_001"],
        value: 19.9,
        currency: "BRL",
      });
    }
  };

  return (
    <section
      id="oferta"
      className="py-20 bg-gradient-to-r from-orange-400 to-indigo-300 text-primary-foreground offer-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm shadow-sm mb-4">
            <Star className="w-4 h-4 mr-2 fill-current" stroke="none" />
            ⚡ OFERTA ÚNICA - ÚLTIMAS 24H! ⚡
          </div>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Produto Digital em PDF – Imprima quantas vezes quiser
          </div>
          <h2 className="text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-4">
            ESCOLHA SUA OFERTA
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Duas opções incríveis para transformar seus momentos especiais
          </p>
        </div>

        {/* ChevronDown antes das ofertas */}
        <div className="flex flex-col items-center justify-center my-8 animate-bounce">
          <ChevronDown className="w-20 h-20 text-red-600" />
          <ChevronDown className="w-20 h-20 text-red-600 -mt-12" />
        </div>

        {/* Ofertas */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Livro */}
          <div
            id="oferta-principal"
            className="bg-white rounded-2xl p-6 md:p-8 text-card-foreground shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-indigo-100 rounded-full translate-y-10 -translate-x-10"></div>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">OFERTA PRINCIPAL</h3>
                <p className="text-muted-foreground text-gray-500">Livro Colorindo com Jesus do Pequeninos™</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-5xl md:text-8xl font-bold text-amber-600">R$ 12,90</span>
                </div>
                <p className="text-sm text-muted-foreground">ou 2x de R$7,22 no cartão</p>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mb-6 text-left max-w-md mx-auto">
                {[
                  "Livro com 20 páginas de versículos e desenhos mais atividades",
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
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 h-14 px-8 py-4 text-lg font-bold"
                >
                  Quero o Livro
                </a>
              </div>

              <div className="flex justify-center items-center gap-4 pt-4 border-t border-border">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Shield className="w-4 h-4 text-green-500 mr-1" /> Compra 100% segura
                </div>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary mr-1" /> Download Imediato
                </div>
              </div>
            </div>
          </div>

          {/* Kit Completo */}
          <div
            id="oferta-kit"
            className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 -translate-x-10"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-2 mx-auto max-w-max">
                <Gift className="w-3 h-3 mr-1" /> KIT COMPLETO - 4 PRODUTOS
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">OFERTA ESPECIAL</h3>
              <p className="text-green-100 mb-6">
                Produto Principal (livro Colorindo com Jesus) + 3 Bônus Exclusivos
              </p>

              <div className="flex flex-col items-center justify-center gap-3 mb-2">
                <div className="text-2xl md:text-3xl font-bold text-green-200">
                  <span className="text-white"> de </span>
                  <span className="line-through text-red-400">R$ 95,90</span>
                  <span className="text-white"> por</span>
                </div>
                <span className="text-5xl md:text-8xl font-bold text-white">
                  R$ 24,90
                </span>
              </div>

              <p className="text-sm text-green-100 mb-6">ou 5x de R$ 5,85 no cartão</p>

              <div className="grid md:grid-cols-2 gap-3 mb-6 text-left max-w-md mx-auto">
                {[
                  "Livro Colorindo com Jesus + Bônus Inclusos no livro acima",
                  "Planner Devocional Infantil (com mais de 100 páginas)",
                  "Livro de Desafios Biblicos (várias atividades para seu filho aprender e se divertir)",
                  "Devocional para os Pais (devocioal de 7 dias para ajudar na readaptação do seu filho longe das telas)",
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
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 h-14 px-8 py-4 text-lg font-bold"
                >
                  Quero o Kit Completo
                </a>
              </div>

              <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-center text-sm max-w-xs mx-auto">
                <p className="font-bold">🔥 Oferta limitada - Kit Completo!</p>
              </div>

              {/* Imagem de meios de pagamento */}
              <div className="mt-3 flex justify-center">
                <img
                  src="https://i.imgur.com/jVZGSxr.png"
                  alt="Meios de pagamento"
                  className="max-w-full h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteKit;
