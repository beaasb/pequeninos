import { Clock, CheckCircle, BookOpen, HandsPraying } from "lucide-react";
 
export default function FeaturesBook() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
          Você receberá um material único{" "}
          <u>totalmente ilustrado e organizado</u> para facilitar a sua
          compreensão bíblica
        </h2>

        {/* Lista de benefícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 text-left">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-semibold">Leitura Rápida</span>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-300" />
            <span className="text-lg font-semibold">Fácil de entender</span>
          </div>

          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-pink-300" />
            <span className="text-lg font-semibold">100% Fiel à Bíblia</span>
          </div>

          <div className="flex items-center gap-3">
            <HandsPraying className="w-6 h-6 text-purple-300" />
            <span className="text-lg font-semibold">Proximidade de Deus</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBook;