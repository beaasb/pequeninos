import React from "react";
import { ChevronDown } from "lucide-react";

const StepsSection = () => {
  const steps = [
    { text: "Baixe o material no mesmo instante", img: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/1.webp" },
    { text: "Abra o Guia Prático: “Devocional em 5 Passos”", img: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/2.webp" },
    { text: "Escolha um versículo + atividade sugerida", img: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/3.webp" },
    { text: "Em 10 minutos, seu devocional em família está feito!", img: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/4.webp" },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center"> 
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Veja como é simples aplicar hoje mesmo
        </h2>

        <div className="flex flex-col items-center gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center gap-4 bg-white p-5 rounded-2xl shadow-md w-full md:w-3/4">
                <img src={step.img} alt={`Passo ${index + 1}`} className="w-64 h-64 object-contain" />
                <p className="text-2xl md:text-xl text-center font-bold text-gray-800">{step.text}</p>
              </div>

              {index < steps.length - 1 && (
                <ChevronDown className="w-24 h-24 text-green-600" />
              )}
            </React.Fragment>
          ))}
        </div>

        <a 
            href="#plano-basico"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl text-lg sm:text-xl font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full -mt-12"
          >
            LIBERAR MEU DEVOCIONAL EM FAMÍLIA AGORA
          </a>  
      </div>
    </section>
  );
};

export default StepsSection;
