import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Lucio Alves",
    photo: "https://i.imgur.com/wZAaM8g.png",
    message: "Meu filho adorou colorir as histórias da Bíblia! Muito divertido e educativo."
  },
  {
    name: "Mariana Costa",
    photo: "https://i.imgur.com/UNqvWuB.png",
    message: "Finalmente conseguimos momentos de aprendizado em família com o Pequeninos™."
  },
  {
    name: "Maria Fátima Cruz",
    photo: "https://i.imgur.com/3YntEON.png",
    message: "O livro digital é ótimo! Posso imprimir várias vezes e as crianças sempre se envolvem."
  },
  {
    name: "Lurdes Moraes",
    photo: "https://i.imgur.com/on1LtFX.png",
    message: "Amei o conteúdo! As histórias da Bíblia ficam mais vivas e divertidas para os pequenos."
  },
  {
    name: "Lucas Souza",
    photo: "https://i.imgur.com/EnCDRsb.png",
    message: "Um material educativo que realmente aproxima as crianças da Palavra de Deus."
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 6000); // troca a cada 6 segundos
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Veja Feedbacks e Agradecimentos!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Famílias compartilhando sua experiência com o livro de colorir cristão da Pequeninos™
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Botões de navegação */}
          <button
            onClick={prevSlide}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Card do depoimento */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200 text-left transition-all duration-500">
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentIndex].photo}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
            </div>
            <p className="text-gray-700 text-base">{testimonials[currentIndex].message}</p>
          </div>
        </div>

        {/* Indicadores do carrossel */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-xl text-gray-700 mb-6">
            <span className="font-bold text-green-800">Junte-se a essas famílias satisfeitas!</span> Veja como o livro está transformando momentos especiais
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
