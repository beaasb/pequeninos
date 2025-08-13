import React, { useEffect, useState } from 'react';

const PurchaseNotification = () => {
  const names = [
  "Ana Beatriz Souza", "João Pedro Oliveira", "Mariana Costa", "Lucas Fernandes", "Camila Ribeiro", "Matheus Lima", "Larissa Rocha", "Gustavo Almeida", "Isabela Martins", "Tiago Moreira", "Juliana Cardoso", "Bruno Silva", "Rafaela Mendes", "Eduardo Barros", "Fernanda Pires"
];

  const [currentNameIndex, setCurrentNameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 4000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 transition-all duration-500 ease-in-out">
      <span role="img" aria-label="carrinho">🛒</span>
      <span className="animate-pulse">{names[currentNameIndex]} acabou de comprar</span>
    </div>
  );
};

const SocialProofBar = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 text-center text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <PurchaseNotification />
        <div className="flex items-center gap-2">
          <span role="img" aria-label="estrela">⭐</span>
          <span>Mais de 1.254 famílias já transformaram suas vidas</span>
        </div>
      </div>
    </div>
  );
};

export default SocialProofBar;
