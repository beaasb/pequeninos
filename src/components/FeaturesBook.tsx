import { Clock, CheckCircle, BookOpen, HandHeart } from "lucide-react";

export default function FeaturesBook() {
  return (
    <section className="w-full py-12 bg-gradient-to-br from-purple-100 to-pink-100 text-gray-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
          Você receberá um material único{" "}
          <u>totalmente ilustrado e organizado</u> para facilitar a sua
          compreensão bíblica
        </h2>

        {/* Lista de benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/20 text-gray-700 text-base font-medium backdrop-blur-sm shadow-sm">
            <Clock className="w-5 h-5 mr-2 text-yellow-300" />
            Leitura Rápida
          </div>

          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 text-white text-base font-medium backdrop-blur-sm shadow-sm">
            <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
            Fácil de entender
          </div>

          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 text-white text-base font-medium backdrop-blur-sm shadow-sm">
            <BookOpen className="w-5 h-5 mr-2 text-pink-300" />
            100% Fiel à Bíblia
          </div>

          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/10 text-white text-base font-medium backdrop-blur-sm shadow-sm">
            <HandHeart className="w-5 h-5 mr-2 text-purple-300" />
            Proximidade de Deus
          </div>
        </div>
      </div>
    </section>
  );
}
