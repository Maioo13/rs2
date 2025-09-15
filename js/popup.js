// Non serve più il "DOMContentLoaded", perché l'attributo "defer" nel tag <script>
// garantisce già che il DOM sia pronto quando questo codice viene eseguito.

const modal = document.getElementById('map-modal');
const modalTitle = document.getElementById('map-modal-title');
const modalCloseBtn = document.getElementById('map-modal-close');
const mapIframe = document.getElementById('map-iframe');

// La funzione viene definita e assegnata a 'window' immediatamente,
// rendendola subito disponibile per i bottoni 'onclick'.
window.openMapModal = function(locationKey, customUrl = null) {
  if (!modal || !modalTitle || !mapIframe) return;

  let locationName = "Mappa";
  let mapUrl = customUrl;

  if (!customUrl && window.locations && window.locations[locationKey]) {
    const locationData = window.locations[locationKey];
    locationName = locationData.name;
    mapUrl = locationData.url;
  } else if (customUrl) {
    locationName = "Luogo dell'evento";
  }

  if (mapUrl) {
    modalTitle.textContent = locationName;
    mapIframe.src = mapUrl;
    modal.classList.add('is-open');
  }
}

// Gli event listener per chiudere il modal vengono aggiunti subito
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => modal.classList.remove('is-open'));
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('is-open');
    }
  });
}
