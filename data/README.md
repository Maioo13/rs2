# Gestione Eventi Run Society

Questo file spiega come aggiungere, modificare o rimuovere eventi dal calendario del sito.

## File degli Eventi

Gli eventi sono memorizzati nel file `data/events.json`. Questo file contiene un array di oggetti evento con la seguente struttura:

```json
{
  "events": [
    {
      "day": 28,
      "month": 9,
      "year": 2024,
      "title": "Weekly Easy Run",
      "description": "Join us for a relaxed run through the city center. All paces welcome!",
      "time": "Meeting: 6:30 PM, Start: 7:00 PM"
    }
  ]
}
```

## Campi degli Eventi

- **day**: Giorno del mese (1-31)
- **month**: Mese (1-12, dove 1=Gennaio, 2=Febbraio, ..., 12=Dicembre)
- **year**: Anno (es. 2024, 2025)
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
  "day": 18,
  "month": 8,
  "year": 2025,
  "title": "Weekly Easy Run",
  "description": "Join us for a relaxed run through the city center. All paces welcome!",
  "time": "Meeting: 6:30 PM, Start: 7:00 PM"
}
```

### Evento Speciale
```json
{
  "day": 15,
  "month": 9,
  "year": 2025,
  "title": "Run & Aperitivo",
  "description": "Corsa serale seguita da aperitivo al porto",
  "time": "Ritrovo: 19:00, Partenza: 19:30"
}
```

## Mesi - Numerazione Normale

Ora puoi usare la numerazione normale per i mesi:
- Gennaio = 1
- Febbraio = 2
- Marzo = 3
- ...
- Settembre = 9
- Ottobre = 10
- Novembre = 11
- Dicembre = 12

Il sistema converte automaticamente per JavaScript!