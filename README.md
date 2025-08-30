# De Nacht van de Uil - Simple Version 🦉

Een **eenvoudige, cache-vrije** versie van de Nederlandse uilen educatie webapp.

## ✨ Features van Simple Version

- **Modulaire opbouw**: Header en footer worden geladen via JavaScript
- **Cache-vrij**: Geen service worker, geen PWA caching
- **Mobiel vriendelijk**: Responsive design met Bootstrap 5
- **Een JavaScript bestand**: Alle functionaliteit in `/js/script.js`
- **Herbruikbare componenten**: Header en footer worden dynamisch geladen

## 📁 Structuur Simple Version

```
/
├── index-simple.html          # Hoofdpagina (simpele versie)
├── /uilen/
│   └── steenuil-simple.html  # Template voor uilen pagina's
├── /js/
│   └── script.js             # Centrale JavaScript (NIEUW)
├── /assets/
│   └── css/
│       └── style-simple.css  # Vereenvoudigde CSS
├── start-simple.sh           # Development server zonder cache
└── README-simple.md          # Deze documentatie
```

## 🚀 Quick Start

1. **Start development server**:

   ```bash
   ./start-simple.sh
   ```

2. **Open browser**:

   ```
   http://localhost:8000/index-simple.html
   ```

## 💡 Verschillen met Origineel

### ✅ Toegevoegd in Simple Version

- Modulaire header/footer via JavaScript
- Centrale `script.js` voor alle functionaliteit
- Cache-vrije implementatie
- Vereenvoudigde bestandsstructuur

### ❌ Weggelaten uit Simple Version

- Service Worker
- PWA manifest
- Progress tracking
- localStorage functionaliteit
- Badge systeem
- Complexe security headers
- Cache strategieën

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

## 📝 Template Usage

De `steenuil-simple.html` dient als template voor andere uilen pagina's.

### Voor nieuwe uil toevoegen

1. Kopieer `steenuil-simple.html`
2. Pas content aan (titel, beschrijving, audio)
3. Update navigation in `script.js`
4. Test met development server

## ⚡ Performance

- Geen JavaScript frameworks
- Minimale CSS
- Geoptimaliseerde SVG afbeeldingen
- Lazy loading voor afbeeldingen
- Preload=none voor audio

## 🔒 Security

Basis security zonder complexe headers:

- Geen external scripts (behalve Bootstrap CDN)
- SRI integrity voor CDN resources
- Geen localStorage usage
- Geen tracking

---

**Simple. Fast. Cache-free. Mobile-friendly.**

Voor vragen: Open een issue in de repository.
