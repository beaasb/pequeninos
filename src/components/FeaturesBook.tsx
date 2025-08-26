import { Clock, CheckCircle, BookOpen, HandHeart } from "lucide-react";

export default function FeaturesBook() {
  return (
    <> 
      {/* Primeira seção */}
      <section className="w-full py-5 bg-gradient-to-br from-purple-100 to-pink-100 text-gray-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Título */}
          <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
            Você receberá um material único{" "}
            <u>totalmente ilustrado e organizado</u> para facilitar a sua
            compreensão bíblica
          </h2>
 
          {/* Lista de benefícios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 text-center">
            <div className="inline-flex items-center justify-center px-4 py-4 rounded-full bg-white/50 text-gray-700 text-base font-medium backdrop-blur-sm shadow-sm">
              ⏰ Aprendizado Rápido
            </div>

            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/50 text-gray-700 text-base font-medium backdrop-blur-sm shadow-sm">
              ✅ Fácil de colorir
            </div>

            <div className="inline-flex items-center justify-center px-4 py-4 rounded-full bg-white/50 text-gray-700 text-base font-medium backdrop-blur-sm shadow-sm">
              📖 100% Fiel à Bíblia
            </div>

            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/50 text-gray-700 text-base font-medium backdrop-blur-sm shadow-sm">
              🙏🏻 Proximidade de Deus
            </div>
          </div>
        </div>
      </section>

      {/* Segunda seção */}
      <section className="w-full py-12 bg-gradient-to-br from-purple-100 to-pink-100 text-gray-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-mediun leading-snug">
            Nosso material irá transformar o aprendizado e leitura bíblica do seu filho! {" "}
            <strong>Simples, Prático e Divertido.</strong>
          </h2>
        </div>
      </section>
    </>
  );
}
