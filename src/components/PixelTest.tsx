import React, { useEffect, useState } from 'react';
import { testPixel } from '../utils/pixelEvents';

const PixelTest: React.FC = () => {
  const [pixelStatus, setPixelStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    // Testa o pixel após um pequeno delay para garantir que carregou
    const timer = setTimeout(() => {
      const isWorking = testPixel();
      setPixelStatus(isWorking ? 'success' : 'error');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Só mostra em desenvolvimento
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-300 rounded-lg p-3 shadow-lg max-w-xs">
      <div className="flex items-center gap-2">
        <div className={`w-3 h-3 rounded-full ${
          pixelStatus === 'loading' ? 'bg-yellow-400 animate-pulse' :
          pixelStatus === 'success' ? 'bg-green-400' : 'bg-red-400'
        }`} />
        <span className="text-sm font-medium">
          Meta Pixel: {
            pixelStatus === 'loading' ? 'Carregando...' :
            pixelStatus === 'success' ? 'Funcionando' : 'Erro'
          }
        </span>
      </div>
      {pixelStatus === 'success' && (
        <p className="text-xs text-gray-600 mt-1">
          ID: 1529495121549649
        </p>
      )}
    </div>
  );
};

export default PixelTest;