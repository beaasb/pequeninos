import React, { useState, useEffect } from 'react';
import { X, Clock, Star, Gift, Shield, BookOpen, Calendar } from 'lucide-react';

interface SpecialOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const options = [
  {
    id: "livros",
    title: "Livro",
    subtitle: "Versículos bíblicos",
    oldPrice: "R$ 27,00",
    price: "R$ 9,90",
    borderColor: "border-blue-500",
    bgColor: "bg-blue-50",
    priceColor: "text-blue-600",
    benefits: [
      { icon: <BookOpen className="w-4 h-4 text-yellow-500 mr-2" />, text: "Livro de colorir cristão com atividades e certificado" },
      { icon: <Gift className="w-4 h-4 text-blue-500 mr-2" />, text: "Download imediato em PDF" },
      { icon: <Shield className="w-4 h-4 text-green-500 mr-2" />, text: "Garantia de 7 dias" },
    ],
  },
  {
    id: "kit",
    title: "Kit Completo",
    subtitle: "Livro + 3 Bônus",
    oldPrice: "R$ 33,60",
    price: "R$ 19,90",
    borderColor: "border-green-500",
    bgColor: "bg-green-50",
    priceColor: "text-green-600",
    benefits: [
      { icon: <BookOpen className="w-4 h-4 text-blue-500 mr-2" />, text: "Livro de colorir cristão com atividades e certificado" },
      { icon: <Calendar className="w-4 h-4 text-green-500 mr-2" />, text: "Planner Devocional Infantil" },
      { icon: <Gift className="w-4 h-4 text-purple-500 mr-2" />, text: "Livro com Desafios Bíblicos" },
      { icon: <Star className="w-4 h-4 text-yellow-400 mr-2" />, text: "Devocional para Pais" },
    ],
  },
];

const SpecialOfferModal: React.FC<SpecialOfferModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 4,
    seconds: 33,
  });

  const [stock, setStock] = useState(34);
  const [selectedOption, setSelectedOption] = useState("livros");

  // Timer regressivo
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  // Reduz o estoque gradualmente
  useEffect(() => {
    if (!isOpen) return;

    const stockTimer = setInterval(() => {
      setStock((prev) => Math.max(prev - 1, 1));
    }, 30000); // Reduz 1 a cada 30 segundos

    return () => clearInterval(stockTimer);
  }, [isOpen]);

  // Handler para tracking InitiateCheckout
  const handlePurchaseClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      const eventId = 'ic_' + Date.now() + '_' + Math.floor(Math.random() * 100000);
      
      if (selectedOption === "livros") {
        window.fbq('track', 'InitiateCheckout', {
          content_name: 'Colorindo com Jesus - Livro',
          content_ids: ['SKU_COLORINDO_001'],
          value: 9.90,
          currency: 'BRL',
          event_id: eventId
        });
      } else {
        window.fbq('track', 'InitiateCheckout', {
          content_name: 'Kit Completo - Colorindo com Jesus',
          content_ids: ['SKU_KIT_001'],
          value: 29.90,
          currency: 'BRL',
          event_id: eventId
        });
      }
      
      // Armazena o eventId no localStorage para deduplicação CAPI
      localStorage.setItem('lastInitiateCheckoutEventId', eventId);
    }
  };
  if (!isOpen) return null;

  const currentOption = options.find((opt) => opt.id === selectedOption)!;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="p-6">
          <div className="text-center mb-4"> 
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-bold animate-pulse">
              <Clock className="w-4 h-4 mr-2" />
              ⚡ OFERTA ESPECIAL!
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Não Perca Esta Oportunidade!
          </h2>
          <p className="text-gray-600 text-center mb-4">Escolha sua oferta ideal:</p>

          <div className="text-center bg-gradient-to-r from-red-600 to-orange-500 rounded-xl mb-5 py-3">
            <p className="text-sm text-white mb-2"> ⏰ Oferta expira em:</p>
            <div className="text-2xl font-bold text-white">
              {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              return (
                <div
                  key={opt.id} 
                  onClick={() => setSelectedOption(opt.id)}
                  className={`p-3 rounded-lg border-2 cursor-pointer transition-all flex items-center justify-between
                    ${
                      isSelected ? `${opt.borderColor} ${opt.bgColor}` : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <div className="flex items-center">
                    <div
                        className={`w-4 h-4 rounded-full mr-2 flex items-center justify-center ${
                          isSelected
                            ? `border-[5px] ${opt.borderColor} ${opt.bgColor}`
                            : "border-2 border-gray-300"
                        }`}
                      >
                        {isSelected && <div className="w-full h-full rounded-full bg-white scale-50"></div>}
                      </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{opt.title}</h3>
                      <p className="text-xs text-gray-600">{opt.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-gray-400 line-through">{opt.oldPrice}</div>
                    <div className={`text-sm font-bold ${opt.priceColor}`}>{opt.price}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lista de benefícios dinâmica */}
          <div className="mb-6 space-y-2">
            {currentOption.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center text-gray-700 text-sm">
                {benefit.icon}
                <span>{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Botão principal dinâmico */}
          <div className="mb-4">
            <a
              href={selectedOption === "livros" ? "https://pay.cakto.com.br/37vfpfn_513204" : "https://pay.cakto.com.br/ugodz3a_513354"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePurchaseClick}
              className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-all hover:scale-105 ${selectedOption === "livros"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                  : "bg-gradient-to-r from-green-600 to-green-700 text-white"
              } flex items-center justify-center`}
            >
              {selectedOption === "livros" ? "Quero o Livro Agora" : "Quero o Kit Completo"}
            </a>
          </div>

          <div className="mb-4">
            <button
              onClick={onClose}
              className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors"
            >
              Continuar navegando
            </button>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-center">
            <p className="text-red-700 font-bold text-sm">🔥 Últimas {stock} unidades!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferModal;
