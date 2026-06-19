/**
 * Modulo di Gestione Modal Mappa
 *
 * Implementa un pattern UI a modale per la visualizzazione di mappe incorporate (iframe).
 * Esponendo esplicitamente il metodo principale sull'oggetto globale `window`,
 * permette di invocare l'apertura del modale direttamente dai markup HTML inline (es. onclick).
 */
document.addEventListener('DOMContentLoaded', () => {
  // Riferimenti statici agli elementi costitutivi del modale
  const modal = document.getElementById('map-modal');
  const modalTitle = document.getElementById('map-modal-title');
  const modalCloseBtn = document.getElementById('map-modal-close');
  const mapIframe = document.getElementById('map-iframe');

  /**
   * API globale per il controllo del modale.
   * Viene agganciata a `window` per bypassare l'incapsulamento del modulo ES6
   * generato da Webpack, permettendo l'invocazione da attributi HTML.
   *
   * @param {string} locationKey - Identificativo della location predefinita (se esiste `window.locations`)
   * @param {string|null} customUrl - URL specifico dell'iframe da renderizzare (es. Google Maps embed URL)
   * @param {string|null} customName - Titolo testuale da mostrare nell'header del modale
   */
  window.openMapModal = function(locationKey, customUrl = null, customName = null) {
    // Fail-fast se l'architettura DOM richiesta non è presente
    if (!modal || !modalTitle || !mapIframe) return;

    let locationName = "Mappa";
    let mapUrl = customUrl;

    // Logica di risoluzione dell'URL:
    // 1. Tenta di risolvere da un dizionario globale predefinito `window.locations`
    if (!customUrl && window.locations && window.locations[locationKey]) {
      const locationData = window.locations[locationKey];
      locationName = locationData.name;
      mapUrl = locationData.url;
    }
    // 2. Se viene fornito un URL custom affiancato ad un nome, utilizza quest'ultimo.
    else if (customUrl && customName) {
      locationName = customName;
    }
    // 3. Fallback di sicurezza se è presente solo l'URL.
    else if (customUrl) {
      locationName = "Luogo dell'evento";
    }

    // Se la risoluzione dell'URL ha avuto successo, aggiorna il DOM e innesca l'apertura.
    if (mapUrl) {
      modalTitle.textContent = locationName; // Aggiorna il titolo
      mapIframe.src = mapUrl;                // Carica la mappa nell'iframe
      modal.classList.add('is-open');        // Triggera la transizione CSS di apertura
    }
  }

  // Binding degli eventi di chiusura del modale

  // 1. Chiusura tramite click sul pulsante "X" (close button)
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => modal.classList.remove('is-open'));
  }

  // 2. Chiusura tramite click al di fuori del contenuto modale (backdrop click)
  if (modal) {
    modal.addEventListener('click', (e) => {
      // Controlla che il target sia esattamente il container overlay, non i suoi figli
      if (e.target === modal) {
        modal.classList.remove('is-open');
      }
    });
  }
});
