import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como recebo o livro após a compra?",
      answer: "Você recebe o link para download diretamente no seu e-mail assim que o pagamento for confirmado. Tudo digital e instantâneo!"
    },
    {
      question: "O livro é físico ou digital?",
      answer: "É um livro digital em PDF. Você pode imprimir quantas cópias quiser!"
    },
    {
      question: "Para qual faixa etária o livro é indicado?",
      answer: "Ideal para crianças de 4 a 9 anos, mas pode ser usado com outras idades."
    },
    {
      question: "As ilustrações são prontas para colorir?",
      answer: "Sim! Todas são em preto e branco com traços grossos, feitas para colorir com facilidade."
    },
    {
      question: "O pagamento é seguro?",
      answer: "100% seguro. Usamos plataformas confiáveis e protegidas."
    },
    {
      question: "E se eu não gostar do conteúdo?",
      answer: "Você tem 7 dias de garantia. Se não gostar, devolvemos seu dinheiro sem complicações."
    },
    {
      question: "Posso imprimir em casa ou em gráfica?",
      answer: "Sim! Imprima em casa ou leve o PDF à gráfica."
    },
    {
      question: "Posso usar em sala de aula ou célula?",
      answer: "Claro! O conteúdo é ideal para professores e líderes usarem com grupos."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire todas as suas dúvidas sobre a compra e o livro
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-bold text-gray-800 text-lg pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-blue-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;