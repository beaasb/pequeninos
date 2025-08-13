import React from 'react';
import { Shield, FileText, Star, CreditCard, Heart } from 'lucide-react';

const Guarantee = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "PDF de Alta Qualidade",
      description: "Desenhos de alta qualidade, versículos cuidadosamente selecionados e conteúdo inspirador."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Garantia de 7 Dias",
      description: "Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem complicações."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />, 
      title: "Suporte 24/7",
      description: "Estamos aqui para ajudar sempre que precisar. Suporte completo para sua experiência."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: "Pagamento Confiável",
      description: "Pagamento processado pelo Cakto, plataforma segura e confiável para transações online."
    }
  ];

  return (
    <section id="comprar" className="py-16 px-4 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sua Segurança é Nossa Prioridade
          </h2>
          <p className="text-xl text-gray-600">
            Compra 100% segura com garantia total de satisfação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-gray-50 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
         <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-2">
              <div className="p-3 bg-gray-50 rounded-full">
              <Star className="w-7 h-7 text-yellow-400" />
            </div>
              </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sua Satisfação Garantida
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Milhares de famílias já transformaram seus momentos com o Colorindo com Jesus by Pequeninos™.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Shield className="w-6 h-6" />
              <span className="font-semibold">Garantia de Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;