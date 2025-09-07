# Gestione Eventi Run Society

Questo file spiega come aggiungere, modificare o rimuovere eventi dal calendario del sito.

## File degli Eventi

Gli eventi sono memorizzati nel file `data/events.json`. Questo file contiene un array di oggetti evento con la seguente struttura:

```json
{
  "events": [
    {
      "date": "28/09/2024",
      "title": "Weekly Easy Run",
      "description": "Join us for a relaxed run through the city center. All paces welcome!",
      "time": "Meeting: 6:30 PM, Start: 7:00 PM"
    }
  ]
}
```

## Campi degli Eventi

- **date**: Data nel formato dd/mm/aaaa (es. "15/09/2024" per il 15 settembre 2024)
- **title**: Titolo dell'evento
- **description**: Descrizione dell'evento
- **time**: Orario di ritrovo e partenza

## Come Aggiungere un Nuovo Evento

1. Apri il file `data/events.json`
2. Aggiungi un nuovo oggetto evento all'array seguendo la struttura sopra
3. Salva il file
4. Il sito si aggiornerà automaticamente

## Esempi di Eventi

### Corsa Settimanale
```json
{
  "date": "18/08/2025",
  "title": "Weekly Easy Run",
  "description": "Join us for a relaxed run through the city center. All paces welcome!",
  "time": "Meeting: 6:30 PM, Start: 7:00 PM"
}
```

### Evento Speciale
```json
{
  "date": "15/09/2025",
  "title": "Run & Aperitivo",
  "description": "Corsa serale seguita da aperitivo al porto",
  "time": "Ritrovo: 19:00, Partenza: 19:30"
}
```

## Formato Data dd/mm/aaaa

Ora è semplicissimo! Usa il formato normale delle date italiane:
- "08/09/2025" = 8 settembre 2025
- "15/10/2024" = 15 ottobre 2024  
- "01/01/2025" = 1 gennaio 2025

Il sistema converte automaticamente tutto!