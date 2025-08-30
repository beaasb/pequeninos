import React from "react";
import { PlayCircle } from "lucide-react";

const Steps = () => {
  const steps = [
    "Baixe o material no mesmo instante.",
    "Abra o Guia Rápido “Devocional em 5 Passos”.",
    "Escolha um versículo + atividade já sugerida.",
    "Em 10 minutos, seu devocional em família está feito.",
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Veja como é simples aplicar hoje mesmo
        </h2>
        <div className="grid gap-6 md:grid-cols-1">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow-md"
            >
              <PlayCircle className="text-indigo-600 w-6 h-6 flex-shrink-0" />
              <p className="text-left text-gray-800">{step}</p>
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

export default Steps;