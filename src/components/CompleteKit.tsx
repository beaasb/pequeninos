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
      localStorage.setItem("lastInitiateCheckoutEventId", eventId); // só se a Cakto usar
    }
    window.location.href = "https://pay.cakto.com.br/37vfpfn_513204";
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
      localStorage.setItem("lastInitiateCheckoutEventId", eventId); // só se a Cakto usar
    }
    window.location.href = "https://pay.cakto.com.br/ugodz3a_513354";
  };


  return (
    <section className="py-20 bg-gradient-to-r from-orange-400 to-indigo-300 text-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Chevrons no topo */}
        <div className="flex flex-col items-center justify-center mb-5 animate-bounce -mt-5">
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
              
              <li className="flex items-center text-xl mb-10"><Check className="w-8 h-8 mr-2 text-green-500" /> Livro Pequeninos - Colorindo com Jesus (em PDF)</li>
            </ul>
            <h4 className="text-6xl font-bold mb-2 text-center text-green-600">R$ 12,90</h4>
            <p className="text-center font-semibold text-lg text-gray-500 mb-12">ou 2x de R$7,22 no cartão</p>
            <div className="text-center">
              <a
                href="https://pay.cakto.com.br/37vfpfn_513204"
                onClick={handleLivroClick}
                className="inline-block bg-green-600 text-white font-bold px-10 py-5 rounded-xl text-lg rounded-md hover:bg-green-700 transition mb-8 -mt-10" 
              >               
                QUERO SOMENTE O BÁSICO
              </a>
              <h2 class="text-xl font-semibold mb-2 text-center text-red-600">
                <b>ATENÇÃO:</b> Temos uma oferta <span class="underline">ainda mais VANTAJOSA</span> para você! Veja logo abaixo
              </h2>

              <div className="flex flex-col items-center justify-center mb-5 animate-bounce mt-12">
                <ChevronDown className="w-20 h-20 text-red-600" />
                <ChevronDown className="w-20 h-20 text-red-600 -mt-12" />
              </div>
            </div>
          </div>

          {/* Plano Completo */}
          <div className="flex-1 bg-white text-black rounded-2xl shadow-xl p-6 md:p-8 order-2 md:order-2">
            <h3 class="text-5xl font-bold mb-4 text-center"><span class="bg-yellow-400 py-3 px-12 rounded block w-full md:max-w-3xl mx-auto text-center">Plano Completo</span>
            </h3>
            <h4 class="text-xl font-bold mb-4 text-center">✅ TODOS OS BÔNUS INCLUSOS</h4>
            <img
              src="https://i.imgur.com/DONTeQ5.png"
              alt="Plano Completo"
              className="w-full h-auto mb-4 rounded-xl"
            />
            <h4 class="text-xl font-bold mb-4 text-center">Todos Materiais na Versão PDF (Receba Imediato)</h4>
            
            <hr class="border-t border-gray-300 mb-4 w-full"/>
            
            <ul className="mb-4 space-y-4">
              {/* Livro principal */}
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                <span>
                  <b>Livro Digital “Colorindo com Jesus”</b> — 20 páginas para colorir com versículos,
                  ilustrações divertidas e atividades que unem fé e criatividade.
                </span>
              </li>
              <hr className="border-t border-gray-300 w-5/6 mx-auto" />

               {/* Extras */}
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                <span>
                  <b>Checklist de Progresso</b> — acompanhe cada página concluída e motive seu filho
                  na jornada.
                </span>
              </li>
              <hr className="border-t border-gray-300 w-5/6 mx-auto" />
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                <span>
                  <b>Certificado de Conclusão</b> — uma forma especial de celebrar a dedicação e o
                  aprendizado.
                </span>
              </li>

              <hr className="border-t border-gray-300 w-5/6 mx-auto" />
              
              {/* Planner */}
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                <span>
                  <b>Planner Devocional Infantil</b> — 31 dias de devocionais, espaço para anotações e
                  organização espiritual da criança.
                </span>
              </li>
              <hr className="border-t border-gray-300 w-5/6 mx-auto" />
            
              {/* Desafios bíblicos */}
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                <span>
                  <b>Desafios Bíblicos</b> — jogos, quiz e atividades criativas para fixar os versículos
                  de forma divertida.
                </span>
              </li>
              <hr className="border-t border-gray-300 w-5/6 mx-auto" />
            
              {/* Devocional pais */}
              <li className="flex items-start">
                <Check className="w-6 h-6 mr-3 text-green-500 flex-shrink-0" />
                <span>
                  <b>Devocional para os Pais</b> — reflexões rápidas e práticas para guiar os momentos
                  devocionais da família.
                </span>
              </li>
            <hr class="border-t border-gray-300 mb-4 w-full"/>             
            </ul>

            <h3 class="text-xl font-bold mb-2 text-center text-black">
              <span class="text-black"> de </span>
              <span class="line-through decoration-gray-500 text-red-500">R$ 95,90</span>
              <span class="text-black"> por</span>
            </h3>
            
            <h4 class="text-6xl font-bold mb-2 text-center text-green-600">R$ 24,90</h4>
            <p class="text-center font-semibold text-lg text-gray-500 mb-8">ou 5x de R$ 5,85 no cartão</p>
            <hr class="bborder-t border-gray-300 mb-4 w-full"/>
            
            <div className="text-center">

              <h1 class="text-xl mb-2 text-center text-black mt-5">✅ Você economiza <b>R$71,00</b>
              </h1>
              
              <a
                href="https://pay.cakto.com.br/ugodz3a_513354"
                onClick={handleKitClick}
                className="inline-block bg-green-600 text-white font-bold px-10 py-5 rounded-xl text-lg rounded-md hover:bg-green-700 transition mb-8 mt-8"
              >
                QUERO O PLANO COMPLETO
              </a>

              <h1 class="text-1xl mb-2 text-center text-black mt-5 mb-5">
                <b>APROVEITE AGORA: </b> 
                Você não vai encontrar esse preço depois!
              </h1>
              <div class="mt-3 flex justify-center">
                <img 
                  loading="lazy" 
                  decoding="async" 
                  width="500" 
                  height="60" 
                  src="https://i.imgur.com/iDMIGos.png" 
                  alt="Meios de pagamento" 
                  class="w-full max-w-xs h-12 object-cover"/>
                </div>              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompleteKit;
