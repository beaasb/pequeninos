import React from 'react';

const Header = () => {
  return (
    <div className="bg-green-700 text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
        
        {/* 🚨 Alterado: mensagem clara e simples */}
        <span className="font-bold text-sm sm:text-base">
          📘 Produto Digital em PDF — Entrega Imediata
        </span>

        {/* 🚨 Alterado: urgência mais discreta e realista */}
        <span className="text-sm sm:text-base font-medium">
          ⚡ Oferta de lançamento disponível hoje ⚡
        </span>
      </div>
    </div>
  );
};

export default Header;
