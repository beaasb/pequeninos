import React from 'react';
import { Heart, BookOpen, Palette, Gift, Package } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Heart className="w-7 h-7 text-pink-500" />
              <span className="text-purple-600 font-bold text-lg">Pequeninos™</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-blue-600">Colorindo</span>
              <br />
              <span className="text-pink-500">com Jesus</span>
            </h1>
            
            <p className="text-xl text-gray-600 font-bold mb-4 leading-relaxed">
              Seu filho se agita, você está sem tempo, e ensinar sobre Deus parece difícil?!
            </p>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
Colorindo com Jesus é um livro de colorir cristão com versículos e atividades que unem pais e filhos em momentos de fé, amor e conexão — mesmo com rotinas agitadas. Em apenas 15 minutos por dia, vocês constroem memórias e fé juntos!
            </p>
            
            <div className="flex flex-col items-center gap-4 md:gap-6">
              {/* Linha com dois botões lado a lado no desktop */}
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center">
                <a 
                  href="#oferta-principal"
                  className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full md:w-auto"
                >
                  Comece a Colorir Agora
                </a>
                <a 
                  href="#oferta-kit"
                  className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full md:w-auto"
                >
                  Quero o Kit Completo
                </a>
              </div>
            
              <div className="w-full flex justify-center">
                  <a 
                    href="#conteudo-incluso"
                    className="border-2 border-yellow-500 text-yellow-500 px-6 py-4 rounded-xl text-lg font-bold hover:bg-yellow-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full md:w-auto" 
                  >
                    O que vou receber?
                  </a>
                </div>

            </div>


          </div>
            <div className="flex justify-center px-4">
              <div className="relative">
                  <div className="p-3 md:p-4 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center text-xl md:text-2xl animate-bounce shadow-lg">
                  ⭐
                </div>
                    <img 
                      src="https://i.imgur.com/R8rgJs9.png" 
                      alt="Capa do livro Colorindo com Jesus"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>                     
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;