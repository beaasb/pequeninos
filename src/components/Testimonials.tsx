import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const names = [
    "Ronie Alves", 
    "João Pedro Oliveira", 
    "Mariana Costa", 
    "Lucas Fernandes", 
    "Camila Ribeiro", 
    "Matheus Lima", 
    "Larissa Rocha", 
    "Gustavo Almeida", 
    "Isabela Martins", 
    "Tiago Moreira", 
    "Juliana Cardoso", 
    "Bruno Silva", 
    "Rafaela Mendes", 
    "Eduardo Barros", 
    "Fernanda Pires"
  ];

  const testimonialImages = [
    "https://i.imgur.com/6Jf2TsX.png",
    "https://i.imgur.com/utbDpkP.png",
    "https://i.imgur.com/dk2hnXd.png",
    "https://i.imgur.com/Wf629TN.png",
    "https://i.imgur.com/HyQcBFL.png",
    "https://i.imgur.com/GgEHYMP.png",
    "https://i.imgur.com/Awjk2CN.png",
    "https://i.imgur.com/L9FvOew.png",
    "https://i.imgur.com/Gg5iEzu.png",
    "https://i.imgur.com/SXeAlcH.png",
    "https://i.imgur.com/ZGxUJN7.png"
  ];

  const hours = [2, 5, 8, 12, 15, 18];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? testimonialImages.length - 1 : prevIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonialImages.length);
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n.charAt(0)).join('');
  };

  const getHoursAgo = (index) => {
    return hours[index % hours.length];
  };

  return (
    <section id="compras-recentes" className="py-16 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Cabeçalho */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-4 h-4 mr-2" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
              </svg>
              Provas Sociais Reais
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja Feedbacks e Agradecimentos!
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Famílias compartilhando sua experiência com o livro de colorir cristão da Pequeninos™
            </p>
          </div>

          {/* Carrossel */}
          <div className="relative max-w-4xl mx-auto mb-12">
            {/* Botões */}
            <button
              onClick={prevSlide}
              aria-label="Depoimento anterior"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              id="prev-button"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Próximo depoimento"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              id="next-button"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>

            {/* Container branco */}
            <div className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">

              {/* Bloco “Conversa Real do WhatsApp” */}
              <div className="text-center mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mx-auto max-w-max">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-4 h-4 mr-2" aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  Conversa Real do WhatsApp
                </div>
              </div>

              {/* Imagem */}
              <div className="relative">
                <img
                  src={testimonialImages[currentIndex]}
                  alt={`Prova social ${currentIndex + 1}`}
                  className="w-full max-h-80 object-cover rounded-lg shadow-lg border border-gray-200 cursor-zoom-in hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zoom-in w-4 h-4" aria-hidden="true" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>

                {/* Badge com nome e horas */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center text-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                      {getInitials(names[currentIndex])}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{names[currentIndex]}</div>
                      <div className="text-gray-600 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-3 h-3 mr-1" aria-hidden="true" viewBox="0 0 24 24">
                          <path d="M12 6v6l4 2"></path>
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        {getHoursAgo(currentIndex)} horas atrás
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-3 mb-6">
            {testimonialImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-green-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-xl text-gray-700 mb-6">
              <span className="font-bold text-green-800">Junte-se a essas famílias satisfeitas!</span> Veja como o livro está transformando momentos especiais
            </p>
            <a 
              href="#oferta-principal"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Quero o Livro Agora
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
