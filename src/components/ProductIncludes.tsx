// src/components/ProductFeatures.tsx
import React from "react";
import { CheckCircle, ChevronDown } from "lucide-react";

// Tipagem para itens e bônus
interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  loading?: "lazy" | "eager";
  details: string[];
}

interface BonusItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  loading?: "lazy" | "eager";
  details: string | string[];
}

const ProductFeatures: React.FC = () => {
  const items: FeatureItem[] = [
    {
      title: "ITEM 01",
      subtitle: "Livro Colorindo com Jesus",
      description: "Imagens + Versículos = Diversão com Deus",
      image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/w4Qx60t.webp", 
      loading: "lazy",
      details: [
        "20 Páginas para Colorir com Versículos Bíblicos Selecionados;",
        "Textos Curtos e Fáceis de Entender para Crianças;",
        "Cada Página com um Ensinamento Simples da Bíblia;",
        "Ilustrações Grandes e Divertidas para Facilitar a Pintura;",
        "Versículos Destacados para Decorar e Memorizar;",
        "Espaço para Desenhos Livres;",
        "Checklist de Progresso para Acompanhar Cada Página Concluída;",
        "Certificado de Conclusão;",
        "Momentos de Reflexão para Pais e Filhos Juntos;"
      ]
    }
  ];

  const bonuses: BonusItem[] = [
    {
      title: "#1 - BÔNUS HOJE!",
      subtitle: "Planner Devocional Infantil",
      description: "Organize a Fé dos Pequenos Dia após Dia",
      image: "https://i.imgur.com/FWVw83Z.png",
      loading: "lazy",
      details: "Planejamento devocional lúdico com 365 dias de atividades e reflexões."
    },
    {
      title: "#2 - BÔNUS HOJE!",
      subtitle: "Desafios Bíblicos",
      description: "Aprender a Bíblia Brincando",
      image: "https://i.imgur.com/tDLvnSu.png",
      loading: "lazy",
      details: "Atividades e jogos divertidos que fixam os versículos na memória das crianças."
    },
    {
      title: "#3 - BÔNUS HOJE!",
      subtitle: "Devocional para os Pais",
      description: "Fortaleça sua Fé em Família",
      image: "https://i.imgur.com/RdXtDBx.png",
      loading: "lazy",
      details: "Reflexões práticas e rápidas para inspirar os pais no dia a dia com Deus."
    },    
    {
      title: "#4 - BÔNUS HOJE!",
      subtitle: "Mini-Livro de Orações Infantil",
      description: "Conversando com Deus todos os dias",
      image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/bonus4.webp",
      loading: "lazy",
      details: "Orações prontas, simples e curtas, para usar no devocional ou em qualquer momento do dia, reforçando a conexão da criança com Deus."
    },
    {
      title: "#5 - BÔNUS HOJE!",
      subtitle: "Guia Prático: Devocional Hoje em 5 Passos,
      description: "Guia para o Kit Devocional",
      image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/bonus5.webp",
      loading: "lazy",
      details: "Ajuda pais a conduzirem o kit devocional de forma simples e rápida"
    },
    {
      title: "#6 - BÔNUS HOJE!",
      subtitle: "Roteiro Pronto: 7 Dias em Família",
      description: "Cheklist para se organizar junto do Guia",
      image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/bonus6.webp",
      loading: "lazy",
      details: "Checklist para organizar a semana com o Kit Devocional junto do Guia"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div id="conteudo-incluso" className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-black mb-12">
          <span className="bg-yellow-400 py-3 px-12 rounded inline-block">
            VOCÊ VAI RECEBER AO ADQUIRIR SEU PRODUTO
          </span>
        </h2>

        {/* Itens principais */}
        {items.map((item, index) => (
          <div
            key={index}
            className="mb-16 flex flex-col md:flex-row items-center gap-5 relative"
          >
            {/* Imagem fora do card no desktop */}
            <div className="hidden md:block flex-shrink-0 w-full md:w-1/2 lg:w-1/2 z-10">
              <img
                src={item.image}
                alt={item.title}
                loading={item.loading}
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Card branco com informações */}
            <div className="bg-white rounded-2xl shadow-lg p-5 w-full md:w-5/12">
              {/* Imagem dentro do card apenas no mobile */}
              <div className="md:hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  loading={item.loading}
                  className="w-full h-auto object-contain drop-shadow-xl rounded-xl"
                />
              </div>

              {/* Texto */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 bg-yellow-400">
                  {item.title}
                </h3>
                <h4 className="text-4xl font-bold text-black font-serif mb-2">
                  {item.subtitle}
                </h4>
                <h5 className="text-lg font-bold text-pink-400 mb-4">
                  {item.description}
                </h5>

                <hr className="border-t border-gray-700 mb-4 w-30 mx-auto md:mx-0" />

                <ul className="text-lg font-semibold text-left text-green-800 divide-y divide-gray-200">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 py-3">
                      <CheckCircle className="w-5 h-5 text-green-500 relative top-1 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="text-center text-xl font-bold text-gray-800 mt-6">
                  E muito mais...
                </h4>
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center justify-center my-8 animate-bounce">
          <ChevronDown className="w-20 h-20 text-red-600" />
          <ChevronDown className="w-20 h-20 text-red-600 -mt-12" />
        </div>

        {/* Bônus */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          E NÃO PARA POR AÍ... <span className="block mt-7">TEM MAIS!</span>
        </h2>

        <h3 className="text-3xl md:text-3xl font-bold text-green-700 mb-10">
          Você e seu filho também vão receber...
        </h3>

        <h4 className="text-3xl md:text-3xl font-bold text-black mb-12">
          <span className="bg-yellow-400 py-3 px-12 rounded block w-full md:max-w-3xl mx-auto text-center">
            6 Bônus Exclusivos
          </span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 w-full md:w-80 lg:w-96"
            >
              <img
                src={bonus.image}
                alt={bonus.title}
                loading={bonus.loading} // ✅ corrigido
                className="mx-auto mb-4 rounded-xl"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-5 bg-yellow-400">
                {bonus.title}
              </h3>
              <h4 className="text-2xl font-bold text-black mb-3 font-serif">
                {bonus.subtitle}
              </h4>
              <p className="text-blue-500 mb-5 font-semibold">{bonus.description}</p>
              <p className="text-gray-700 text-xl">
                {Array.isArray(bonus.details) ? bonus.details.join(" ") : bonus.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
