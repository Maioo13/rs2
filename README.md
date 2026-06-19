# Run Society Trieste

## Obiettivo della Repository
Questa repository ospita il codice sorgente del sito web statico per **Run Society Trieste**. L'architettura è stata progettata per essere leggera, performante e facilmente manutenibile, utilizzando un approccio di sviluppo basato su componenti e moduli ES6, orchestrato da Webpack 5.

---

## Architettura Tecnica

Il progetto è strutturato come una Single/Multi Page Application statica, servita tramite file HTML standard arricchiti da logica JavaScript client-side e stili generati da Tailwind CSS.

### Stack Tecnologico Principale
- **HTML5**: Markup semantico per le pagine statiche (`index.html`, `calendario.html`, `chiSiamo.html`, etc.).
- **JavaScript (ES6 Modules)**: Moduli funzionali incapsulati per la gestione dell'interattività.
- **Tailwind CSS (v3.4)**: Framework CSS utility-first per lo styling rapido e responsivo.
- **Webpack 5**: Bundler principale per la compilazione, minificazione ed estrazione degli asset.
- **PostCSS**: Tool per la post-elaborazione CSS (integrazione Tailwind e Autoprefixer).

---

## Struttura della Codebase

### Configurazione Build (Webpack)
La pipeline di build è divisa in tre file per gestire separatamente logiche condivise e configurazioni d'ambiente:
- `webpack.common.js`: Configurazione di base. Definisce l'entry point (`js/app.js`), le regole per il processamento del CSS (tramite `css-loader`, `postcss-loader` e `MiniCssExtractPlugin`) e l'iniezione automatica dei bundle nei file HTML tramite istanze multiple di `HtmlWebpackPlugin`.
- `webpack.config.dev.js`: Ottimizzazione per l'ambiente di sviluppo locale. Abilita l'Hot Module Replacement (HMR), le source maps inline e configura il DevServer.
- `webpack.config.prod.js`: Ottimizzazione per la produzione. Attiva le minificazioni di default e utilizza `CopyPlugin` per trasferire asset statici crudi (immagini, dati JSON e manifesti) direttamente nella directory di build `dist/`.

### Configurazione Stili (Tailwind & PostCSS)
- `tailwind.config.js`: Definisce i path di scansione per l'engine JIT (HTML, JS e JSON) e carica i plugin ufficiali `@tailwindcss/forms` e `@tailwindcss/container-queries`.
- `postcss.config.js`: Configura l'integrazione di Tailwind e Autoprefixer nella pipeline di build.

### File Statici e Dati
- `data/`: Contiene dizionari JSON, in particolare `translations.json` utilizzato per il sistema di internazionalizzazione.
- I root file `robots.txt`, `site.webmanifest` e icone (se presenti) vengono gestiti per la SEO e il PWA ready config.

---

## Moduli JavaScript (Funzionalità Client-Side)

Il punto d'ingresso principale è `js/app.js`, che agisce da orchestratore importando il foglio di stile globale e i moduli funzionali isolati:

### 1. Sistema di Consenso Cookie (`js/cookie-consent.js`)
Gestisce l'apparizione e l'interazione con il banner di consenso per i cookie.
- **Meccanismo**: Controlla l'esistenza della chiave `cookie_consent` nel `localStorage`. Se assente, mostra il banner con un'animazione CSS.
- **Interazione**: Salva la scelta dell'utente ('accepted' o 'rejected') nel `localStorage` per una persistenza lato client.

### 2. Internazionalizzazione (I18n) (`js/language-switcher.js`)
Un sistema class-based per la traduzione dinamica dell'interfaccia senza ricaricare la pagina.
- **Stato**: Lo stato della lingua ('it' o 'en') è preservato nel `localStorage` (chiave `preferred-language`).
- **Funzionamento**: In fase di inizializzazione carica asincronamente tramite `fetch()` il dizionario `data/translations.json`. Modifica dinamicamente il contenuto del DOM degli elementi che presentano l'attributo `data-translate` (inclusi i placeholder degli input e il title del documento).

### 3. Gestione Modale Mappa (`js/popup.js`)
Un modulo dedicato alla visualizzazione di una finestra modale contenente un iframe (es. per Google Maps).
- **Integrazione**: Esponde la funzione `openMapModal` direttamente sull'oggetto globale `window` per consentire chiamate da eventi inline nell'HTML (es. `onclick`).
- **Risoluzione URL**: Supporta fallback e risoluzione da un oggetto globale `window.locations` configurabile pre-inizializzazione.

---

## Setup & Sviluppo

### Installazione delle Dipendenze
Assicurati di avere Node.js installato, quindi esegui:
```bash
npm install
```

### Ambiente di Sviluppo
Per avviare il server di sviluppo con Hot Module Replacement:
```bash
npm start
```
Il server sarà esposto sulla porta configurata (`5000` di default).

### Build di Produzione
Per generare la versione compilata, minificata e ottimizzata del sito nella cartella `dist/`:
```bash
npm run build
```
Questo processo processerà il JS, estrarrà il CSS, minifierà l'HTML e copierà le risorse statiche essenziali.
