/**
 * Modulo per il Sistema di Localizzazione (I18n)
 * Implementato tramite una classe ES6 per l'incapsulamento dello stato.
 * Fornisce un'architettura client-side per la traduzione dinamica dell'interfaccia
 * senza ricaricare la pagina, basata su un dizionario JSON esterno.
 */
class LanguageSwitcher {
  constructor() {
    // Oggetto in-memory per memorizzare la mappatura delle chiavi di traduzione
    this.translations = {};
    // Recupera lo stato persistente della lingua; fallback su 'it' (italiano)
    this.currentLang = localStorage.getItem('preferred-language') || 'it';
    this.init();
  }

  /**
   * Bootstrap asincrono della classe.
   * Coordina il caricamento del file JSON, l'aggiornamento dell'UI e il binding degli eventi.
   */
  async init() {
    try {
      await this.loadTranslations();
      this.setupEventListeners();
      this.updateLanguageDisplay();
      this.translatePage();
    } catch (error) {
      // In produzione, gli errori di caricamento vengono ingnorati silenziosamente
      // per non bloccare l'esecuzione della pagina principale.
    }
  }

  /**
   * Effettua una richiesta asincrona (fetch) per recuperare il dizionario linguistico
   * dalla risorsa statica servita da Webpack (data/translations.json).
   */
  async loadTranslations() {
    try {
      const response = await fetch('data/translations.json');
      this.translations = await response.json();
    } catch (error) {
    }
  }

  /**
   * Collega i listener agli elementi di navigazione specifici per il cambio lingua.
   * Utilizza selettori distinti per i layout Desktop e Mobile.
   */
  setupEventListeners() {
    // Menu Desktop: intercetta i click sui link della tendina lingua
    const langMenuLinks = document.querySelectorAll('#langMenu a');
    langMenuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Previene la navigazione di default
        const href = link.getAttribute('href');
        // Identifica la lingua in base a query string rudimentale 'lang='
        const lang = href.includes('lang=en') ? 'en' : 'it';
        this.switchLanguage(lang);
      });
    });

    // Menu Mobile: medesimo approccio logico, applicato al layer off-canvas/mobile
    const langMenuMobileLinks = document.querySelectorAll('#langMenuMobile a');
    langMenuMobileLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const lang = href.includes('lang=en') ? 'en' : 'it';
        this.switchLanguage(lang);
      });
    });
  }

  /**
   * Orchestratore principale per l'aggiornamento dello stato dell'applicazione
   * a seguito di una scelta dell'utente.
   *
   * @param {string} lang - Il codice della lingua scelta (es. 'it', 'en')
   */
  switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('preferred-language', lang); // Aggiorna persistenza
    this.updateLanguageDisplay(); // Aggiorna label visiva del selettore
    this.translatePage();         // Esegue il parsing e la sostituzione dei testi nel DOM

    // Chiude i menu a tendina una volta selezionata l'opzione
    this.closeLanguageMenus();
  }

  /**
   * Funzione di utilità per nascondere i menu dropdown di selezione.
   * Opera aggiungendo dinamicamente la classe utility di Tailwind 'hidden'.
   */
  closeLanguageMenus() {
    const langMenu = document.getElementById('langMenu');
    const langMenuMobile = document.getElementById('langMenuMobile');

    if (langMenu) langMenu.classList.add('hidden');
    if (langMenuMobile) langMenuMobile.classList.add('hidden');
  }

  /**
   * Aggiorna le etichette visive dei pulsanti che innescano l'apertura dei menu.
   * Mantiene coerenza visiva indicando quale lingua è attualmente in uso.
   */
  updateLanguageDisplay() {
    const langButton = document.querySelector('#langMenuButton span');
    if (langButton) {
      langButton.textContent = this.currentLang.toUpperCase();
    }

    const langButtonMobile = document.querySelector('#langMenuButtonMobile span');
    if (langButtonMobile) {
      langButtonMobile.textContent = this.currentLang.toUpperCase();
    }
  }

  /**
   * Motore di rendering delle traduzioni.
   * Analizza il DOM alla ricerca di elementi marcati con l'attributo speciale 'data-translate',
   * e sostituisce il loro contenuto con il valore corrispondente dal dizionario JSON.
   */
  translatePage() {
    // Interrompe l'esecuzione se il dizionario per la lingua scelta non è stato caricato.
    if (!this.translations[this.currentLang]) return;

    const translations = this.translations[this.currentLang];

    // NodeList iteration: ogni nodo con l'attributo data-translate viene ispezionato
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');

      if (translations[key]) {
        // Gestione di edge-case: gli input di testo richiedono di tradurre il placeholder
        // piuttosto che il contenuto testuale (textContent).
        if (element.tagName === 'INPUT' && element.type === 'text') {
          element.placeholder = translations[key];
        } else {
          element.textContent = translations[key];
        }
      }
    });

    // Logica custom per la localizzazione del tag <title> del documento HTML
    // Mantiene una coerenza SEO-friendly dinamica.
    if (translations.site_title && document.title.includes('Run Society')) {
      const currentTitle = document.title;
      const parts = currentTitle.split('|');
      if (parts.length > 1) {
        document.title = parts[0].trim() + ' | ' + translations.site_title;
      } else {
        document.title = translations.site_title;
      }
    }
  }
}

// Inizializza il sistema di localizzazione solo a DOM pronto,
// in quanto la logica dipende pesantemente dalla manipolazione di nodi esistenti.
document.addEventListener('DOMContentLoaded', () => {
  new LanguageSwitcher();
});
