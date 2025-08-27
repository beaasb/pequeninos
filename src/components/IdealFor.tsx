import React from 'react';
import { BookOpen, Heart, Users } from 'lucide-react';

const IdealFor = () => {
  const useCases = [
    {
      icon: <BookOpen className="w-12 h-12 text-red-500" />,
      title: "Compreensão Profunda dos Salmos",
      description: "O leitor entenderá cada versículo com explicações claras e práticas."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Resolução de Dúvidas Bíblicas",
      description: "Respostas para versículos desafiadores, eliminando incertezas no estudo."
    },
    {
      icon: <Heart className="w-12 h-12 text-purple-500" />,
      title: "Aprofundamento Espiritual",
      description: "Crescimento espiritual e proximidade com os ensinamentos de Jesus."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: "Aplicação Prática",
      description: "Traduz ensinamentos bíblicos em ações concretas no dia a dia."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-red-500 font-extrabold">IDEAL PARA VOCÊ QUE DESEJA:</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white rounded-full shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#SALMOS"
            className="inline-block bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            QUERO ADQUIRIR O MEU
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdealFor;
