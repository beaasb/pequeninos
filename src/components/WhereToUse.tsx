import React from 'react';
import { Church, Users, Home, GraduationCap, Calendar, User } from 'lucide-react';

const WhereToUse = () => {
  const useCases = [
    {
      icon: <Church className="w-12 h-12 text-blue-500" />,
      title: "Escola Dominical",
      description: "Perfeito para aulas bíblicas infantis"
    },
    {
      icon: <Home className="w-12 h-12 text-green-500" />,
      title: "Devocional em Família",
      description: "Momentos especiais com os filhos"
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Grupos de Célula",
      description: "Atividades para célula infantil"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-orange-500" />,
      title: "Aulas Cristãs",
      description: "Material didático para professores"
    },
    {
      icon: <Calendar className="w-12 h-12 text-pink-500" />,
      title: "Eventos Infantis",
      description: "Atividades para festas da igreja"
    },
    {
      icon: <User className="w-12 h-12 text-indigo-500" />,
      title: "Atividades Individuais",
      description: "Momentos pessoais de fé"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Onde Usar o Livro?
          </h2>
          <p className="text-xl text-gray-600">
            Versátil para diversos momentos de aprendizado cristão
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
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
      </div>
    </section>
  );
};

export default WhereToUse;
