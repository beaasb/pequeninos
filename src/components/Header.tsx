import React, { useState, useEffect } from 'react';
import { Clock, Flame, Box } from 'lucide-react';

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [stock, setStock] = useState(34); // Estado do estoque

  // Timer regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Reduz o estoque após 5 minutos
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStock(prev => Math.max(prev - 5, 1)); // Nunca menor que 1
    }, 5 * 60 * 1000); // 5 minutos

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-red-700 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
        {/* Oferta Limitada */}
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-yellow-300 animate-pulse" />
          <span className="font-bold text-sm sm:text-base text-center">
            OFERTA LIMITADA - ÚLTIMAS 24 HORAS!
          </span>
        </div>

        {/* Contador */}
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-yellow-300 animate-pulse" />
          <div className="flex items-center gap-1 text-sm font-mono">
            <span className="bg-red-900 px-2 py-1 rounded">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-red-900 px-2 py-1 rounded">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span>:</span>
            <span className="bg-red-900 px-2 py-1 rounded">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Estoque */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Box className="w-5 h-5 text-yellow-300 animate-pulse" />
          <span className="font-bold text-sm sm:text-base text-center">
            Restam apenas {stock} unidades
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
