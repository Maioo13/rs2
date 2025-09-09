document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  if (!banner || !acceptBtn || !rejectBtn) {
    return; // Non fare nulla se gli elementi non esistono
  }

  // Controlla se una scelta è già stata salvata
  const consentValue = localStorage.getItem('cookie_consent');

  // Se non c'è una scelta, mostra il banner
  if (!consentValue) {
    // Mostra il banner con un leggero ritardo per un effetto più fluido
    setTimeout(() => {
      banner.classList.remove('translate-y-[200%]');
    }, 500);
  }

  // Funzione per gestire la scelta dell'utente
  const handleConsent = (consentChoice) => {
    localStorage.setItem('cookie_consent', consentChoice);
    banner.classList.add('translate-y-[200%]');

    // Qui potresti attivare script basati sul consenso
    // if (consentChoice === 'accepted') {
    //   loadAnalytics();
    // }
  };

  // Associa le azioni ai pulsanti
  acceptBtn.addEventListener('click', () => handleConsent('accepted'));
  rejectBtn.addEventListener('click', () => handleConsent('rejected'));
});
