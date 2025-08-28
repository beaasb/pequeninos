import React from "react";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 

const SpoilerBook = () => {
  const includes = [
    { image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/XDZXarY.webp", alt: "Checklist de Progresso", title: "Checklist de Progresso" },
    { image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/dqKEHrA.webp", alt: "Sessões Temáticas", title: "2 Sessões Temáticas" },
    { image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/mNUXXJo.webp", alt: "Sessões Temáticas", title: "3 Sessões Temáticas" },
    { image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/D4SoMyJ.webp", alt: "Atividades Criativas", title: "6 Atividades Criativas" },
    { image: "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/8ulITpE.webp?token=GHSAT0AAAAAADJFZD7AGVJ7E7PUQGL5MT7S2FQXTYQ", alt: "Certificado de Conclusão", title: "Certificado de Conclusão" },
  ];

  const title = "VEJA UM DOS MATERIAIS QUE VOCÊ VAI RECEBER NA PRÁTICA!";
  const subtitle = "Um livro completo para o desenvolvimento espiritual e criativo do seu filho";
  const mockupImg = "https://raw.githubusercontent.com/beaasb/pequeninos/refs/heads/main/images/GD6dHoU.webp?token=GHSAT0AAAAAADJFZD7BGAQQQDHWOB4MOMA22FQXUCA";

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 mx-auto"> 
            <BookOpen className="w-4 h-4 mr-2" /> Produto Digital em PDF – Imprima quantas vezes quiser
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>

          {/* Mockup do Livro */}
          <div className="mx-auto max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" style={{ filter: 'drop-shadow(0px 8px 12px rgba(0,0,0,0.3))' }}>
            <img
              src={mockupImg}
              className="w-full transition-transform duration-500 hover:scale-105 hover:rotate-1 rounded-xl"
              alt="Mockup Livro"
            />
          </div>
        </div>

        {/* Carrossel */}
        <div className="relative max-w-4xl mx-auto -mt-12">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            loop={true}
            speed={500}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
            pagination={{ clickable: true }}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
            className="elementor-image-carousel pb-12"
          >
            {includes.map((item, index) => (
              <SwiperSlide key={index}>
                <figure className="flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-h-[700px] w-auto object-contain rounded-lg shadow-md"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Setas */}
          <div className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </div>
          <div className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </div>

        </div>
      </div>

      {/* CSS adicional para a paginação */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 10px !important;
          text-align: center;
        }
        .swiper-pagination-bullet {
          background-color: #888;
          opacity: 1;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #333;
        }
      `}</style>
    </section>
  );
};

export default SpoilerBook;
