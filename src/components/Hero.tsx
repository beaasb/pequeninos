import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
        
        {/* Logo + marca */}
        <div className="flex items-center gap-2">
          <Heart className="w-7 h-7 text-pink-500" />
          <span className="text-purple-600 font-bold text-lg">Pequeninos™</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Transforme distração em aprendizado <br /> 
          com diversão e fé!
        </h1>

        {/* Imagem */}
        <div className="w-full flex justify-center px-10">
          <img 
            src="https://i.imgur.com/FTgi443.png" 
            alt="Capa do livro Colorindo com Jesus"
            className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,1))' }}
          />
        </div>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Agora existe um jeito simples e divertido de aproximar os pequenos da Palavra de Deus:
          <strong> um Livro de Colorir Cristão em PDF</strong>, com entrega imediata para você imprimir quantas vezes quiser.{" "}
          <span style={{ color: "green",fontWeight: "bold" }}>Por apenas R$ 12,90</span>
        </p>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Atividades rápidas, criativas e cheias de significado que unem pais e filhos em momentos de fé — mesmo com a rotina corrida.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <a 
            href="#oferta-principal"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full"
          >
            QUERO ADQUIRIR AGORA
          </a>          
          <a 
            href="#conteudo-incluso"
            className="border-2 border-yellow-500 text-yellow-500 px-6 py-4 rounded-xl text-lg font-bold hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full"
          >
            O que vou receber?
          </a>
        </div>

        {/* Microconfiança */}
        <p className="text-sm text-gray-500 font-medium mt-2">
          ✅ Entrega imediata em PDF · ✅ Pagamento seguro via Pix e Cartão
        </p>
      </div>
    </section>
  );
};

export default Hero;
