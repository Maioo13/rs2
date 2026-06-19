/**
 * Gestione del Cookie Consent Banner
 *
 * Questo modulo isola la logica per richiedere e memorizzare il consenso
 * dell'utente riguardo ai cookie, garantendo l'accessibilità e la conformità.
 * La scelta viene salvata persistemente nel Local Storage del browser.
 */
document.addEventListener('DOMContentLoaded', () => {
  // Query selettiva degli elementi chiave dell'interfaccia cookie
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  const rejectBtn = document.getElementById('cookie-reject');

  // Fail-fast: interrompe l'esecuzione se gli elementi non sono nel DOM
  // (es. in pagine dove il banner è stato rimosso o è assente)
  if (!banner || !acceptBtn || !rejectBtn) {
    return;
  }

  // Interroga il LocalStorage per verificare l'esistenza di una scelta pregressa.
  // Chiave utilizzata: 'cookie_consent' (valori attesi: 'accepted' | 'rejected')
  const consentValue = localStorage.getItem('cookie_consent');

  // Logica di visibilità: se la chiave non esiste, presentiamo il banner.
  if (!consentValue) {
    // Utilizza setTimeout per separare l'animazione dal rendering iniziale (DOMContentLoaded),
    // triggerando la transizione CSS Tailwind 'translate-y' per uno scorrimento fluido.
    setTimeout(() => {
      banner.classList.remove('translate-y-[200%]');
    }, 500);
  }

  /**
   * Gestisce l'interazione dell'utente con i pulsanti di scelta.
   * Salva il valore nel LocalStorage e nasconde il banner visivamente.
   *
   * @param {string} consentChoice - Il valore esplicito della scelta ('accepted' o 'rejected')
   */
  const handleConsent = (consentChoice) => {
    localStorage.setItem('cookie_consent', consentChoice);
    // Nasconde il banner riattivando la classe Tailwind per la transizione off-screen
    banner.classList.add('translate-y-[200%]');

    // Estensibilità futura: l'attivazione asincrona di script di tracciamento
    // andrebbe posizionata in questo blocco, subordinata al valore 'accepted'.
    // if (consentChoice === 'accepted') {
    //   loadAnalytics();
    // }
  };

  // Binding degli eventi di click sui rispettivi pulsanti
  acceptBtn.addEventListener('click', () => handleConsent('accepted'));
  rejectBtn.addEventListener('click', () => handleConsent('rejected'));
});
