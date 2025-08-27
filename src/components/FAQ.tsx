import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual é a forma de pagamento?",
      answer: "Você pode fazer o pagamento pelo pix ou cartão de crédito.",
    },
    {
      question: "O pagamento é seguro?",
      answer:
        "Sim, o pagamento é 100% seguro, utilizamos uma das maiores plataformas de vendas do mundo, a Cakto.",
    },
    {
      question: "Tem garantia?",
      answer:
        "Sim, são 7 dias de garantia incondicional. Caso você não goste, devolvemos o seu investimento sem burocracia.",
    },
    {
      question: "Como vou ter acesso ao Material?",
      answer:
        "Assim que o seu pagamento for concluído, enviaremos o link para download diretamente no seu e-mail para você acessar o material e baixar.",
    },
    {
      question: "Para qual faixa etária o livro é indicado?",
      answer:
        "Ideal para crianças de 5 a 9 anos, mas pode ser usado com outras idades.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Perguntas Frequentes
        </h2>

        {/* Accordion */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-left transition-colors ${
                  openIndex === index
                    ? "bg-gray-100 border-l-4 border-gray-400"
                    : "bg-white hover:bg-gray-50"
                }`}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
