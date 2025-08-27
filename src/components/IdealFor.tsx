import React from "react";
import { BookOpen } from "lucide-react";

const IdealFor = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          IDEAL PARA VOCÊ QUE DESEJA:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <BookOpen className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Compreensão Profunda</h3>
            <p className="text-gray-600">
              O leitor finalmente entenderá cada versículo com explicações claras.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Aplicação Prática</h3>
            <p className="text-gray-600">
              Traduz os ensinamentos para ações concretas no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealFor;
