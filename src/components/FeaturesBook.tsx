import React, { useEffect, useState } from 'react';

const FeaturesBook: React.FC = () => {
  const [status, setStatus] = useState<'loading' | 'ready'>('loading');

  useEffect(() => {
    // Simula carregamento (ex: se no futuro puxar dados de API)
    const timer = setTimeout(() => {
      setStatus('ready');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (status === 'loading') {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-300 rounded-lg p-3 shadow-lg">
        <span className="text-sm">Carregando benefícios...</span>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-sm">
      <h2 className="text-base font-bold text-gray-800 mb-3">
        Você receberá um material único <u>totalmente ilustrado e organizado</u> para facilitar a sua compreensão bíblica
      </h2>

      <ul className="space-y-2 text-sm text-gray-700">
        <li className="flex items-center gap-2">
          <span className="text-lg">⏰</span> Leitura Rápida
        </li>
        <li className="flex items-center gap-2">
          <span className="text-lg">✅</span> Fácil de entender
        </li>
        <li className="flex items-center gap-2">
          <span className="text-lg">📖</span> 100% Fiel à Bíblia
        </li>
        <li className="flex items-center gap-2">
          <span className="text-lg">🙏🏻</span> Proximidade de Deus
        </li>
      </ul>
    </div>
  );
};

export default FeaturesBook;
