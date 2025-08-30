import React from "react";

const StepsSection = () => {
  const steps = [
    { text: "Baixe o material no mesmo instante.", img: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/1.webp" },
    { text: "Abra o Guia Rápido “Devocional em 5 Passos”.", img: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/2.webp" },
    { text: "Escolha um versículo + atividade já sugerida.", img: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/3.webp" },
    { text: "Em 10 minutos, seu devocional em família está feito.", img: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/4.webp" },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center"> 
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Veja como é simples aplicar hoje mesmo
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4 bg-white p-5 rounded-2xl shadow-md">
              <img src={step.img} alt={`Passo ${index + 1}`} className="w-16 h-16 object-contain" />
              <p className="text-2xl md:text-4sm text-center font-bold text-gray-800">{step.text}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg transition">
          Liberar meu devocional em família agora
        </button>
      </div>
    </section>
  );
};

export default StepsSection;
