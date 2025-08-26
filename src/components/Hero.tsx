import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Texto */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Heart className="w-7 h-7 text-pink-500" />
              <span className="text-purple-600 font-bold text-lg">Pequeninos™</span>
            </div>

            {/* 🚨 Headline com gancho do anúncio */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Quantas vezes você já tentou ensinar a Bíblia <br /> 
              para as crianças e percebeu que elas se distraem?
            </h1>

            {/* Imagem */}
          <div className="flex justify-center px-4">
            <div className="relative">
              
                <img 
                  src="https://i.imgur.com/FTgi443.png" 
                  alt="Capa do livro Colorindo com Jesus"
                  className="mx-auto max-w-xs md:max-w-md lg:max-w-lg" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,1))' }}
                />                   
            </div>
          </div>

            {/* 🚨 Subhead com clareza do formato */}
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Agora existe um jeito simples e divertido de aproximar os pequenos da Palavra de Deus:
              <strong> um Livro de Colorir Cristão em PDF</strong>, com entrega imediata para você imprimir quantas vezes quiser.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Atividades rápidas, criativas e cheias de significado que unem pais e filhos em momentos de fé — mesmo com a rotina corrida.
            </p>

            {/* 🚨 CTAs + botão "O que vou receber?" mantido */}
            <div className="flex flex-col items-center gap-4 md:gap-6">
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
                <a 
                  href="#oferta-principal"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full md:w-auto"
                >
                  📘 Baixar PDF Agora
                </a>
                <a 
                  href="#oferta-kit"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full md:w-auto"
                >
                  🎁 Quero o Kit Completo (PDF)
                </a>
              </div>

              {/* 🔹 Mantido e ajustado: botão secundário */}
              <div className="w-full flex justify-center">
                <a 
                  href="#conteudo-incluso"
                  className="border-2 border-yellow-500 text-yellow-500 px-6 py-4 rounded-xl text-lg font-bold hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full md:w-auto" 
                >
                  📦 O que vou receber?
                </a>
              </div>

              {/* 🚨 Microconfiança logo abaixo */}
              <p className="text-sm text-gray-500 font-medium mt-2 text-center">
                ✅ Entrega imediata em PDF · ✅ Pagamento seguro via Pix e Cartão
              </p>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
};

export default Hero;
