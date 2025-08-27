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
        value: 12.9,
        currency: "BRL",
        event_id: eventId,
      });
      localStorage.setItem("lastInitiateCheckoutEventId", eventId);
      window.fbq("track", "AddToCart", {
        content_name: "Colorindo com Jesus - Livro",
        content_ids: ["SKU_COLORINDO_001"],
        value: 12.9,
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
        value: 24.9,
        currency: "BRL",
        event_id: eventId,
      });
      localStorage.setItem("lastInitiateCheckoutEventId", eventId);
      window.fbq("track", "AddToCart", {
        content_name: "Kit Completo - Colorindo com Jesus",
        content_ids: ["SKU_KIT_001"],
        value: 24.9,
        currency: "BRL",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-400 to-indigo-300 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Chevrons no topo */}
        <div className="flex flex-col items-center justify-center mb-8 animate-bounce -mt-5">
          <ChevronDown className="w-20 h-20 text-white" />
          <ChevronDown className="w-20 h-20 text-white -mt-12" />
        </div>

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-6xl lg:text-5xl font-bold mb-2">ESCOLHA SUA OFERTA</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Duas opções incríveis para transformar seus momentos especiais
          </p>
        </div>

        {/* Cards lado a lado no desktop */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* Plano Básico */}
          <div
            id="plano-basico"
            className="flex-1 bg-white text-black rounded-2xl shadow-xl p-6 md:p-8 order-1 md:order-1">
            <h3 className="text-5xl font-bold mb-4 text-center mt-3">Plano Básico</h3>
            <img
              src="https://i.imgur.com/iKu3fMM.png"
              alt="Plano Básico"
              className="w-full h-auto mb-4 rounded-xl"
            /> 
            <hr className="border-t border-gray-300 mb-4 w-25 mx-auto md:mx-0" />
            <ul className="mb-4 space-y-2"> 
              
              <li className="flex items-center text-xl mb-10"><Check className="w-5 h-5 mr-2 text-green-500" /> Livro Pequeninos - Colorindo com Jesus (em PDF)</li>
            </ul>
            <h4 className="text-6xl font-bold mb-2 text-center text-green-600">R$ 12,90</h4>
            <p className="text-center font-semibold text-lg text-gray-500 mb-8">ou 2x de R$7,22 no cartão</p>
            <div className="text-center">
              <a
                href="https://pay.cakto.com.br/37vfpfn_513204"
                onClick={handleLivroClick}
                className="nline-block bg-green-600 text-white font-bold px-10 py-5 rounded-xl text-lg rounded-md hover:bg-green-700 transition mb-8"
              >               
                QUERO SOMENTE O BÁSICO
              </a>

              <h2 class="text-xl font-semibold mb-2 text-center text-red-600">
                <b>ATENÇÃO:</b> Temos uma oferta <span class="underline">ainda mais VANTAJOSA</span> para você! Veja logo abaixo
              </h2>
              
            </div>
          </div>

          {/* Plano Completo */}
          <div className="flex-1 bg-white text-black rounded-2xl shadow-xl p-6 md:p-8 order-2 md:order-2">
            <h3 className="text-2xl font-bold mb-4 text-center">Plano Completo</h3>
            <img
              src="https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-4-min.png"
              alt="Plano Completo"
              className="w-full h-auto mb-4 rounded-xl"
            />
            <ul className="mb-4 space-y-2">
              <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> Todos Materiais na Versão PDF (Receba Imediato)</li>
              <li className="flex items-center"><Check className="w-5 h-5 mr-2 text-green-500" /> 150 Salmos + 31 Provérbios + Evangelhos + 200 Versículos Explicados</li>
            </ul>
            <h4 className="text-xl font-bold mb-2 text-center">R$ 27,90</h4>
            <p className="text-center text-gray-700 mb-4">ou 6x de R$5,18 no cartão</p>
            <div className="text-center">
              <a
                href="#"
                onClick={handleKitClick}
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                QUERO O PLANO COMPLETO
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompleteKit;
