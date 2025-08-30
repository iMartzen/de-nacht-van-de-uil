# 🦉 De Nacht van de Uil

Een **eenvoudige** versie van de Nederlandse uilen educatie webapp.

## ✨ Features van Simple Version

- **Mobiel vriendelijk**: Responsive design met Bootstrap 5
- **Een JavaScript bestand**: Alle functionaliteit in `/js/script.js`
- **Herbruikbare componenten**: Header en footer worden dynamisch geladen

## 📁 Structuur Simple Version

```
/
├── index.html         # Hoofdpagina
├── /uilen/
│   └── steenuil.html  # Uilen pagina's
|   └── ..   
├── /js/
│   └── script.js      # Centrale JavaScript
├── /assets/
│   └── css/
│       └── style.css  # Vereenvoudigde CSS
└── README.md          # Deze documentatie
```

## 🛠 Technische Details

### JavaScript Architectuur

```javascript
const UilenApp = {
    init(),                    // Initialiseer app
    loadHeader(),              // Laad herbruikbare header
    loadFooter(),              // Laad herbruikbare footer
    initPageSpecific(),        // Pagina-specifieke functionaliteit
    initAudioPlayer(),         // Audio controls
    initEventListeners()       // Global event handling
}
```

### CSS Structuur

- Bootstrap 5 via CDN
- Custom CSS variabelen voor theming
- Mobile-first responsive design
- Dark theme met groene accenten

### Geen Caching

- Bestanden worden altijd vers geladen
- Geen service worker registratie
- Browser cache wordt uitgeschakeld waar mogelijk

## 📱 Mobile Friendly

- Touch-friendly interface
- Responsive navigation
- Optimized for small screens
- Fast loading without cache complexity

## 🎨 Design System

Dezelfde visuele identiteit als origineel:

- **Background**: `#0b1110` (Donkergroen-zwart)
- **Accent**: `#1fdf8f` (Helder groen)
- **Cards**: `#0f1614` (Donkere kaarten)
- **Typography**: System UI font stack

## 🧪 Development

Voor de simple version is alleen een basic HTTP server nodig:

```bash
# Python (aanbevolen)
python3 -m http.server 8000

# Of Node.js
npx serve . -p 8000

# Of PHP
php -S localhost:8000
```

Voor vragen: Open een issue in de repository.
