import React from 'react';
import { BookOpen, Users, Heart, Home, GraduationCap, Calendar } from 'lucide-react';

const IdealFor = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-red-500" />,
      title: "Compreensão Profunda dos Salmos",
      description: "O leitor finalmente entenderá cada versículo dos salmos com explicações claras e práticas, tornando a leitura da Bíblia mais acessível e significativa."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Resolução de Dúvidas Bíblicas",
      description: "O leitor terá respostas para os versículos mais desafiadores ou mal interpretados, eliminando frustrações e incertezas em seu estudo da Bíblia."
    },
    {
      icon: <Heart className="w-12 h-12 text-purple-500" />,
      title: "Aprofundamento Espiritual",
      description: "Com uma visão mais clara dos salmos, o leitor sentirá um crescimento espiritual, maior proximidade com os ensinamentos de Jesus e renovação de sua fé."
    },
    {
      icon: <Home className="w-12 h-12 text-blue-500" />,
      title: "Aplicação Prática",
      description: "O estudo ajudará o leitor a traduzir os ensinamentos bíblicos para ações concretas em sua vida diária, fortalecendo sua fé e seus relacionamentos."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título da seção */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          <span className="text-red-500 font-extrabold">IDEAL PARA VOCÊ QUE DESEJA:</span>
        </h2>

        {/* Grid de features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-white rounded-full shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão CTA */}
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
