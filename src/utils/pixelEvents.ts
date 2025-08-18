// Utilitários para eventos do Meta Pixel
declare global {
  interface Window {
    fbq: any;
  }
}

// Função para disparar evento de Purchase (para usar em páginas de sucesso)
export const trackPurchase = (transactionId: string, value: number, productName: string, productId: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    const eventId = 'purchase_' + Date.now() + '_' + Math.floor(Math.random() * 100000);
    
    window.fbq('track', 'Purchase', {
      content_name: productName,
      content_ids: [productId],
      value: value,
      currency: 'BRL',
      transaction_id: transactionId,
      event_id: eventId
    });
    
    // Salva o eventId para possível uso com CAPI
    localStorage.setItem('lastPurchaseEventId', eventId);
    localStorage.setItem('lastTransactionId', transactionId);
    
    return eventId;
  }
};

// Função para disparar evento de Lead (para formulários)
export const trackLead = (contentName: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: contentName
    });
  }
};

// Função para disparar evento customizado
export const trackCustomEvent = (eventName: string, parameters: any = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Função para testar se o Pixel está funcionando
export const testPixel = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log('✅ Meta Pixel está carregado e funcionando!');
    
    // Dispara um evento de teste
    window.fbq('trackCustom', 'PixelTest', {
      test_time: new Date().toISOString(),
      page_url: window.location.href
    });
    
    return true;
  } else {
    console.log('❌ Meta Pixel não está carregado');
    return false;
  }
};