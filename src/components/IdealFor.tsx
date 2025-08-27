import React from 'react';
import { BookOpen, Users, Heart, Home } from 'lucide-react';

const IdealFor = () => {
  const features = [
    {
      icon: <BookOpen className="w-12 h-12 text-red-500" />,
      title: "Aprendizado Divertido",
      description: "As crianças aprendem histórias e valores bíblicos enquanto se divertem colorindo páginas temáticas do livro."
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Fácil de Colorir",
      description: "Atividades simples e cativantes que mantêm a atenção dos pequenos, mesmo com rotinas agitadas."
    },
    {
      icon: <Heart className="w-12 h-12 text-purple-500" />,
      title: "Aproximação de Deus",
      description: "Promove momentos de conexão com a Palavra de Deus, fortalecendo a fé de maneira lúdica e envolvente."
    },
    {
      icon: <Home className="w-12 h-12 text-blue-500" />,
      title: "Pais e Filhos Juntos",
      description: "Atividades que incentivam interação familiar, criando momentos de aprendizado e diversão em conjunto."
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
            href="#plano-basico"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl text-lg sm:text-xl font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full" 
          >
            QUERO ADQUIRIR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default IdealFor;
