import React from "react";

const ProductFeatures = () => {
  const items = [
    {
      title: "ITEM 01",
      subtitle: "Todos Os 150 Salmos Bíblicos Explicados",
      description: "Versículo por Versículo",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-5-min.png",
      details: [
        "150 Salmos Explicado Versículo por Versículo",
        "Ideia Central do Texto",
        "Data e Autoria",
        "Categoria do Salmo",
        "Contexto Histórico, Cultural e Teológico",
        "Como Aplicar os Ensinamentos do Salmo no Dia a Dia",
        "Curiosidade sobre o Salmo",
        "Ilustrações no Material",
        "Espaço para Anotações"
      ]
    }
  ];

  const bonuses = [
    {
      title: "#1 - BÔNUS HOJE!",
      subtitle: "31 Provérbios Explicados",
      description: "Versículo por Versículo",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-7-min.png",
      details: "Entenda 31 provérbios explicados versículo por versículo com clareza e profundidade."
    },
    {
      title: "#2 - BÔNUS HOJE!",
      subtitle: "Evangelho de Matheus Explicado",
      description: "Versículo por Versículo",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-9-min.png",
      details: "Desvende o Evangelho de Mateus com explicações detalhadas, fáceis de entender."
    },
    {
      title: "#3 - BÔNUS HOJE!",
      subtitle: "Evangelho de Marcos Explicado",
      description: "Versículo por Versículo",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-10-min.png",
      details: "Desvende o Evangelho de Marcos com explicações detalhadas, fáceis de entender."
    },
    {
      title: "#4 - BÔNUS HOJE!",
      subtitle: "Evangelho de Lucas Explicado",
      description: "Versículo por Versículo",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-11-min.png",
      details: "Desvende o Evangelho de Lucas com explicações detalhadas, fáceis de entender."
    },
    {
      title: "#5 - BÔNUS HOJE!",
      subtitle: "Evangelho de João Explicado",
      description: "Versículo por Versículo",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-12-min.png",
      details: "Desvende o Evangelho de João com explicações detalhadas, fáceis de entender."
    },
    {
      title: "#6 - BÔNUS HOJE!",
      subtitle: "100 Versículos do Antigo Testamento",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-13-min.png",
      details: "Receba os 100 versículos mais impactantes e reveladores do antigo testamento explicado."
    },
    {
      title: "#7 - BÔNUS HOJE!",
      subtitle: "100 Versículos do Novo Testamento",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-14-min.png",
      details: "Receba os 100 versículos mais impactantes e reveladores do novo testamento explicado."
    },
    {
      title: "#8 - BÔNUS HOJE!",
      subtitle: "Coleção Ouro - Os 200 Versículos Mais Reveladores da Bíblia",
      image: "https://eubiblia.com/wp-content/uploads/2025/01/150-salmos-15-min.png",
      details: "Separamos 200 versículos que 99% dos leitores não conhecem, com explicações simples e reveladoras."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          VOCÊ VAI RECEBER AO ADQUIRIR SEU PRODUTO
        </h2>

        {/* Itens principais */}
        {items.map((item, index) => (
          <div key={index} className="mb-16 bg-white p-6 rounded-2xl shadow-lg">
            <img src={item.image} alt={item.title} className="mx-auto mb-6 rounded-xl" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <h4 className="text-xl text-gray-600 mb-4">{item.subtitle}</h4>
            <p className="text-gray-500 mb-4">{item.description}</p>
            <ul className="text-left list-disc list-inside text-gray-700 space-y-1">
              {item.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Bônus */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          E NÃO PARA POR AÍ... TEM MAIS!
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus, index) => (
            <div key={index} className="group bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              <img src={bonus.image} alt={bonus.title} className="mx-auto mb-4 rounded-xl" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{bonus.title}</h3>
              <h4 className="text-md font-semibold text-gray-600 mb-2">{bonus.subtitle}</h4>
              <p className="text-gray-500 mb-2">{bonus.description}</p>
              <p className="text-gray-700">{bonus.details}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#oferta-principal"
            className="inline-block bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-lg hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            QUERO ADQUIRIR AGORA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
