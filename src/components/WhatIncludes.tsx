import React, { useState } from "react";
import {
  BookOpen,
  Gift,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const WhatIncludes = () => {
  const includes = [
    {
      image: "https://i.imgur.com/Ny8TuXk.png",
      alt: "Sessões Temáticas",
      title: "6 Sessões Temáticas",
      description: "Com versículos e desenhos",
    },
    {
      image: "https://i.imgur.com/qKSGCUd.png",
      alt: "Atividades Criativas",
      title: "6 Atividades Criativas",
      description: "Jogos e brincadeiras bíblicas",
    },
    {
      image: "https://i.imgur.com/033kwqr.png",
      alt: "Checklist de Progresso",
      title: "Checklist de Progresso",
      description: "Acompanhe o desenvolvimento",
    },
    {
      image: "https://i.imgur.com/imPCbhF.png",
      alt: "Certificado de Conclusão",
      title: "Certificado de Conclusão",
      description: "Para motivar a criança (brinde)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === includes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? includes.length - 1 : prev - 1));
  };

  return (
    <>
      <section
        id="conteudo-incluso"
        className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 mx-auto">
              <BookOpen className="w-4 h-4 mr-2" /> Produto Digital em PDF –
              Imprima quantas vezes quiser
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Veja o que você vai receber
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Um livro completo para o desenvolvimento espiritual e criativo do
              seu filho
            </p>

            {/* Mockup do Livro */}
            <div className="mx-auto mb-8">
              <img
                src="https://i.imgur.com/GD6dHoU.png"
                className="w-full transition-transform duration-500 hover:scale-105 hover:rotate-1"
                alt="Mockup Livro Colorindo com Jesus + Conteúdo"
              />
            </div>
          </div>

          {/* Carrossel com setas e bolinhas */}
          <div className="relative max-w-md mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-3">
              {includes[currentIndex].title}
            </h3>

            <div className="relative">
              {/* Botão esquerda */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>

              {/* Imagem */}
              <img
                src={includes[currentIndex].image}
                alt={includes[currentIndex].alt}
                className="w-64 md:w-80 mx-auto rounded-xl"
              />

              {/* Botão direita */}
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>

            {/* Descrição */}
            <p className="text-gray-600 text-sm mt-4">
              {includes[currentIndex].description}
            </p>

            {/* Bolinhas de navegação */}
            <div className="flex justify-center mt-6 gap-2">
              {includes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-blue-600 w-4"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Botões de compra */}
          <div className="flex flex-wrap gap-4 justify-center pt-12 mb-6">
            <a
              href="#oferta-principal"
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              Quero Somente o Livro R$ 9,90
            </a>
            <a
              href="#oferta-kit"
              className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              Quero o Kit Completo R$ 19,90
            </a>
          </div>

          <p className="text-center text-gray-600 font-medium">
            Kit completo inclui o livro + 3 bônus exclusivos por R$ 19,90
          </p>
        </div>
      </section>

      {/* Seção Kit Completo (mantida igual ao seu código) */}
      {/* ... resto do seu código aqui ... */}
    </>
  );
};

export default WhatIncludes;
