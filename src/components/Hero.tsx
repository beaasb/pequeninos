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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          Seu Devocional Infantil pronto em  <br /> 
          <b>10 minutos!</b>
        </h1>

        {/* Imagem */}
        <div className="w-full flex justify-center px-4">
          <img                         src="https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/L4zF5sA.webp" 
            alt="Plano Completo - Colorindo com Jesus"
            loading="lazy"
            className="mx-auto w-full max-w1x1"
            style={{ filter: 'drop-shadow(0px 8px 12px rgba(0,0,0,0.3))' }}
          />
        </div>

        {/* Subhead */}
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 leading-relaxed">
          Agora existe um jeito simples e divertido de aproximar os pequenos da Palavra de Deus:{" "}
          o livro da <strong>Pequeninos - Colorindo com Jesus</strong>, em PDF com entrega imediata para você imprimir quantas vezes quiser.<br />
          <span style={{ color: "green", fontWeight: "bold" }}>Por apenas R$ 12,90</span>
        </p>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
          Enquanto atividades comuns cansam rápido, o <strong>Colorindo com Jesus</strong> foi criado
    para manter as crianças envolvidas <em>do começo ao fim</em> — unindo diversão e Palavra de Deus.
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-4 w-full sm:w-auto">
          <a 
            href="#plano-basico"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl text-lg sm:text-xl font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full"
          >
            QUERO COMEÇAR MEU DEVOCIONAL HOJE
          </a>          
          <a 
            href="#conteudo-incluso"
            className="border-2 border-yellow-500 text-yellow-500 px-6 py-4 rounded-xl text-lg sm:text-xl font-bold hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full"
          >
            O que vou receber?
          </a>
        </div>

        {/* Microconfiança */}
        <p className="text-base sm:text-lg text-gray-500 font-medium mt-2">
          ✅ Entrega imediata em PDF · ✅ Pagamento seguro via Pix e Cartão na Cakto
        </p>
      </div>
    </section>
  );
};

export default Hero;
