import React from "react";
import {
  BookOpen,
  Gift,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhatIncludes = () => {
  const includes = [
    {
      title: "6 Sessões Temáticas",
      image: "https://i.imgur.com/Ny8TuXk.png",
      alt: "Sessões Temáticas",
    },
    {
      image: "https://i.imgur.com/qKSGCUd.png",
      alt: "Atividades Criativas",
      title: "6 Atividades Criativas",
    },
    {
      image: "https://i.imgur.com/033kwqr.png",
      alt: "Checklist de Progresso",
      title: "Checklist de Progresso",
    },
    {
      image: "https://i.imgur.com/imPCbhF.png",
      alt: "Certificado de Conclusão",
      title: "Certificado de Conclusão",
    },
  ];

  const products = [
    {
      title: "Colorindo com Jesus",
      label: "Produto Principal",
      icon: BookOpen,
      img: "https://i.imgur.com/R8rgJs9.png",
      color: "blue",
    },
    {
      title: "Planner Devocional Infantil",
      label: "Bônus 1",
      icon: Calendar,
      img: "https://i.imgur.com/AGIOmiE.png",
      color: "green",
    },
    {
      title: "Desafios Bíblicos",
      label: "Bônus 2",
      icon: Gift,
      img: "https://i.imgur.com/JyYOhmO.png",
      color: "purple",
    },
    {
      title: "Devocional para Pais",
      label: "Bônus 3",
      icon: Star,
      img: "https://i.imgur.com/Cso15H3.png",
      color: "yellow",
    },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-800";
      case "green":
        return "bg-green-100 text-green-800";
      case "purple":
        return "bg-purple-100 text-purple-800";
      case "yellow":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      {/* Seção Conteúdo Incluso */}
      <section
        id="conteudo-incluso"
        className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 mx-auto">
              <BookOpen className="w-4 h-4 mr-2" /> Produto Digital em PDF – Imprima
              quantas vezes quiser
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Veja o que você vai receber
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Um livro completo para o desenvolvimento espiritual e criativo do seu filho
            </p>

            {/* Mockup do Livro */}
            <div className="mx-auto mb-8">
              <img
                src="https://i.imgur.com/GD6dHoU.png"
                className="w-full transition-transform duration-500 hover:scale-105 hover:rotate-1"
                alt="Mockup Livro Colorindo com Jesus + Conteúdo"
              />
            </div>
          </div>

          {/* Carrossel */}
          <div className="relative max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              loop={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              pagination={{ clickable: true }}
              className="rounded-xl"
            >
              {includes.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-64 md:w-72 rounded-xl shadow-md"
                  />
                  <h3 className="text-lg font-bold text-gray-800 mt-2">{item.title}</h3>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Botões do Swiper */}
            <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10">
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Botões de compra */}
          <div className="flex flex-wrap gap-4 justify-center pt-12 mb-6">
            <a
              href="#oferta-principal"
              className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              Quero Somente o Livro R$ 9,90
            </a>
            <a
              href="#oferta-kit"
              className="bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:brightness-110 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              Quero o Kit Completo R$ 19,90
            </a>
          </div>

          <p className="text-center text-gray-600 font-medium">
            Kit completo inclui o livro + 3 bônus exclusivos por R$ 19,90
          </p>
        </div>
      </section>

      {/* Seção Kit Completo */}
      <section
        id="kit-completo"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4 mx-auto">
              <Gift className="w-4 h-4 mr-2" /> KIT COMPLETO - 4 PRODUTOS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Veja o Que Inclui o Kit Completo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              4 produtos exclusivos para transformar completamente os momentos
              especiais da sua família
            </p>

            <div className="mx-auto mb-8">
              <img
                src="https://i.imgur.com/sNSpDyB.png"
                className="w-full transition-transform duration-500 hover:scale-105 hover:rotate-1"
                alt="Mockup Kit + Bônus"
              />
            </div>
          </div>

          {/* Grid de produtos */}
          <div className="max-w-6xl mx-auto mb-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200"
                >
                  <div className="text-center mb-3">
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(item.color)}`}>
                      <Icon className="w-3 h-3 mr-1" /> {item.label}
                    </div>
                  </div>
                  <div className="w-full aspect-square mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                      src={item.img}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500">
                    {item.label === "Produto Principal" ? "Produto Principal" : "Bônus Exclusivo"}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="#oferta-kit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 h-14 px-8 py-4 text-lg font-bold"
            >
              Quero o Kit Completo por R$ 19,90
            </a>
            <p className="text-sm text-gray-500 mt-4">
              ⚡ Oferta limitada - Economia de R$ 46,00
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatIncludes;
