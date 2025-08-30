import React from "react";
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    <>
      <span className="font-bold">Devocional em família pronto hoje</span> <br/>
      sem precisar preparar nada.
    </>,
    <>
      <span className="font-bold">Atividades bíblicas simples e divertidas</span> <br/>
      para manter a atenção dos pequenos.
    </>,
    <>
      <span className="font-bold">Organização prática para os pais</span> <br/>
      com planner, checklist e roteiro semanal já pronto.
    </>,
    <>
      <span className="font-bold">Microvitórias imediatas</span> <br/>
      em 10 minutos você já terá vivido um momento devocional com seu filho.
    </>,
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Por que esse material é diferente de <span className="font-bold">TUDO</span> que você já tentou?
        </h2>

        {/* Imagem logo abaixo do título */}
        <div className="w-full h-64 md:h-80 bg-gray-100 rounded-2xl flex items-center justify-center shadow-inner mb-10">
        </div>

        {/* Lista de benefícios */}
        <div className="space-y-5 text-left">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-100 p-5 rounded-2xl shadow-xl max-w-2xl mx-auto"
            >
              <Check className="text-green-600 w-7 h-7 flex-shrink-0" />
              <p className="text-gray-800 text-lg md:text-xl leading-snug">
                {benefit}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
