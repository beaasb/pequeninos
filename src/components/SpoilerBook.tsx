import React from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpoilerBook = () => {
  // Dados declarados dentro do componente
  const includes = [
    { image: "https://i.imgur.com/XDZXarY.png", alt: "Checklist de Progresso", title: "Checklist de Progresso" },
    { image: "https://i.imgur.com/dqKEHrA.png", alt: "Sessões Temáticas", title: "2 Sessões Temáticas" },
    { image: "https://i.imgur.com/mNUXXJo.png", alt: "Sessões Temáticas", title: "3 Sessões Temáticas" },
    { image: "https://i.imgur.com/D4SoMyJ.png", alt: "Atividades Criativas", title: "6 Atividades Criativas" },
    { image: "https://i.imgur.com/8ulITpE.png", alt: "Certificado de Conclusão", title: "Certificado de Conclusão" },
  ];

  const title = "VEJA UM DOS MATERIAIS QUE VOCÊ VAI RECEBER NA PRÁTICA!";
  const subtitle = "Um livro completo para o desenvolvimento espiritual e criativo do seu filho";
  const mockupImg = "https://i.imgur.com/GD6dHoU.png";
  const offerPrimary = "Quero Somente o Livro R$ 9,90";
  const offerKit = "Quero o Kit Completo R$ 19,90";

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 mx-auto">
            <BookOpen className="w-4 h-4 mr-2" /> Produto Digital em PDF – Imprima quantas vezes quiser
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 mb-1">{subtitle}</p>

          {/* Mockup do Livro */}
          <div className="mx-auto max-w-xs md:max-w-md lg:max-w-lg" style={{ filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,1))' }}>
            <img
              src={mockupImg}
              className="w-full transition-transform duration-500 hover:scale-105 hover:rotate-1"
              alt="Mockup Livro"
            />
          </div>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            speed={500}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
            className="elementor-image-carousel"
          >
            {includes.map((item, index) => (
              <SwiperSlide key={index}>
                <figure className="swiper-slide-inner flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-h-[700px] w-auto object-contain rounded-lg shadow-md"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </div>
          <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </div>

          <div className="custom-pagination mt-6 flex justify-center"></div>
        </div>

        {/* Botões */}
        <div className="flex flex-wrap gap-4 justify-center pt-12 mb-6">
          <a className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">{offerPrimary}</a>
          <a className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">{offerKit}</a>
        </div>

        <p className="text-center text-gray-600 font-medium">Kit completo inclui o livro + 3 bônus exclusivos por R$ 19,90</p>
      </div>
    </section>
  );
};

export default SpoilerBook;
