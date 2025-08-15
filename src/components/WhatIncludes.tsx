import React from 'react';
import { BookOpen, Palette, Award, CheckSquare, Gift, Calendar, Star } from 'lucide-react';

const WhatIncludes = () => {
  const includes = [
    {
      image: "https://i.imgur.com/Ny8TuXk.png",
      alt: "Sessões Temáticas",
      title: "6 Sessões Temáticas",
      description: "Com versículos e desenhos"
    },
    {
      image: "https://i.imgur.com/qKSGCUd.png",
      title: "6 Atividades Criativas",
      description: "Jogos e brincadeiras bíblicas"
    },
    {
      image: "https://i.imgur.com/033kwqr.png",
      title: "Checklist de Progresso",
      description: "Acompanhe o desenvolvimento "
    },
    {
      image: "https://i.imgur.com/imPCbhF.png",
      title: "Certificado de Conclusão",
      description: "Para motivar a criança (brinde)"
    },
  ];

  return (
    <>
      <section id="conteudo-incluso" className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Veja o que você vai receber
            </h2>
            <p className="text-xl text-gray-600 mb-8"> 
              Um livro completo para o desenvolvimento espiritual e criativo do seu filho
            </p>         
          
          {/* Espaço para imagem 1 */}
          
          <div
                className="mx-auto max-w-xs md:max-w-md lg:max-w-lg"
                style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,1))' }}
              >
                <img
                  src="https://i.imgur.com/GD6dHoU.png"
                  className="w-full transition-transform duration-500 hover:scale-110 hover:rotate-2"
                  alt="Mochup Livro Colorindo com Jesus + Conteúdo"
                />
            </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {includes.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-5">
                  <div className="rounded-xl overflow-hidden shadow-md w-full h-full">
                    <img
                      src={item.image}
                      alt={item.alt || item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center">{item.description}</p>
              </div>
            ))}
          </div>

        

           {/* Botões de navegação */}
              <div className="flex flex-row flex-wrap gap-4 justify-center mb-6">
                <a 
                  href="#oferta-principal"
                  className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  Quero Somente o Livro
                </a>
                <a 
                  href="#oferta-kit"
                  className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  Quero o Kit Completo
                </a>
              </div>
            
            {/* Legenda */}
            <p className="text-center text-gray-600 font-medium">
              Kit completo inclui o livro + 3 bônus exclusivos por R$ 19,90
            </p>
          </div>
          </div>
      </section>
      
      {/* Nova seção Kit Completo */}
      <section
        id="kit-completo"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
              <Gift className="w-4 h-4 mr-2" />
              KIT COMPLETO - 4 PRODUTOS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Veja o Que Inclui o Kit Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 produtos exclusivos para transformar completamente os momentos especiais da sua família
            </p>
             
            {/* Espaço para imagem 2 */}
            <div
                className="mx-auto max-w-xs md:max-w-md lg:max-w-lg"
                style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,1))' }}
              >
                <img
                  src="https://i.imgur.com/sNSpDyB.png"
                  className="w-full transition-transform duration-500 hover:scale-110 hover:rotate-2"
                  alt="Mochup Kit + Bônus"
                />
              </div>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Produto Principal */}
              <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="text-center mb-3">
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Produto Principal
                  </div>
                </div>
                <div className="w-full max-w-xs aspect-square mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 mx-auto">
                  <img
                    alt="Colorindo com Jesus"
                    className="w-full h-full object-cover object-center"
                    src="https://i.imgur.com/R8rgJs9.png"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  Colorindo com Jesus
                </h3>
                <p className="text-xs text-gray-500">Produto Principal</p>
              </div>

              {/* Bônus 1 */}
              <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="text-center mb-3">
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Calendar className="w-3 h-3 mr-1" />
                    Bônus 1
                  </div>
                </div>
                <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    alt="Planner Devocional Infantil"
                    className="w-full h-full object-cover object-center"
                    src="https://i.imgur.com/AGIOmiE.png"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  Planner Devocional Infantil
                </h3>
                <p className="text-xs text-gray-500">Bônus Exclusivo</p>
              </div>

              {/* Bônus 2 */}
              <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="text-center mb-3">
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    <Gift className="w-3 h-3 mr-1" />
                    Bônus 2
                  </div>
                </div>
                <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    alt="Desafios Bíblicos"
                    className="w-full h-full object-cover object-center"
                    src="https://i.imgur.com/JyYOhmO.png"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  Desafios Bíblicos
                </h3>
                <p className="text-xs text-gray-500">Bônus Exclusivo</p>
              </div>

              {/* Bônus 3 */}
              <div className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                <div className="text-center mb-3">
                  <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <Star className="w-3 h-3 mr-1" />
                    Bônus 3
                  </div>
                </div>
                <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    alt="Devocional para Pais"
                    className="w-full h-full object-cover object-center"
                    src="https://i.imgur.com/Cso15H3.png"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  Devocional para Pais
                </h3>
                <p className="text-xs text-gray-500">Bônus Exclusivo</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="https://pay.cakto.com.br/ugodz3a_513354"
              target="_blank"
              rel="noopener noreferrer"
              href="#oferta-kit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 h-14 px-8 py-4 text-lg font-bold"
            >
              Quero o Kit Completo por R$ 19,90
            </a>
            <p className="text-sm text-gray-500 mt-4">⚡ Oferta limitada - Economia de R$ 46,00</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIncludes;
