# 🦉 De Nacht van de Uil

Een **interactieve NFC-gestuurde website** voor een educatieve nachtelijke uilenwandeling. Deze website is ontworpen om bezoekers kennis te laten maken met de zes meest voorkomende uilen van Nederland door middel van NFC-technologie en glow-in-the-dark 3D-geprinte tags.

## 🎯 Over de Activiteit

De Nacht van de Uil is een unieke, educatieve wandeling die speciaal is ontwikkeld om de fascinerende wereld van Nederlandse uilen te ontdekken zonder geluidsoverlast of fel licht. De activiteit maakt gebruik van:

- **NFC-gestuurde informatie**: Bezoekers scannen glow-in-the-dark 3D-geprinte tags met hun smartphone
- **Educatie**: Korte, informatieve webpagina met audio-opnames (circa 30 seconden) per uilensoort
- **Toegankelijk design**: Geen externe speakers nodig - alles via oortjes op de eigen telefoon
- **Duurzame materialen**: 3D-geprinte NFC-tags van glow-in-the-dark PLA filament

### Uilensoorten in de Wandeling

De website bevat informatie over zes Nederlandse uilensoorten:

1. **Steenuil** - Klein maar stoer, vaak overdag actief
2. **Kerkuil** - De witte spookachtige verschijning
3. **Bosuil** - De bekende "oehoe" roep uit het bos
4. **Velduil** - De open veld bewoner
5. **Ransuil** - Met opvallende "oren"
6. **Oehoe** - De grootste uil van Nederland

## 📂 Website Structuur

```text
/
├── index.html              # Hoofdpagina met introductie
├── /uilen/                 # Uilensoort pagina's
│   ├── steenuil.html      
│   ├── kerkuil.html       
│   ├── bosuil.html        
│   ├── velduil.html       
│   ├── ransuil.html       
│   └── oehoe.html         
├── /js/
│   └── script.js          # Centrale JavaScript functionaliteit
├── /css/
│   └── style.css          # Aangepaste styling
├── /assets/
│   ├── /audio/            # Vogelgeluiden per soort
│   └── /img/              # Illustraties en afbeeldingen
├── /partials/
│   ├── header.html        # Herbruikbare header
│   └── footer.html        # Herbruikbare footer
├── /3d/                   # 3D-bestanden voor NFC-tags
```

## 🛠 Technische Details

### Technologie Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.2 voor responsive design
- **Icons**: Bootstrap Icons 1.11.1
- **Audio**: Xeno-Canto vogelgeluiden onder Creative Commons licenties
- **NFC**: Web NFC API voor tag-interactie
- **3D**: STL en 3MF bestanden voor glow-in-the-dark PLA printing

### Design Principes

- **Toegankelijk**: WCAG-vriendelijk, mobile-first ontwerp
- **Duurzaam**: Geen externe analytics, cookies of tracking
- **Offline-ready**: Minimale afhankelijkheden, statische bestanden
- **Dark theme**: Donkergroen (`#0b1110`) met helder groene accenten (`#1fdf8f`)

## 🎪 Activiteit Organiseren

Wil je deze activiteit zelf organiseren? Alle benodigde materialen en instructies zijn beschikbaar:

### Vereisten voor Organisatoren

- **Locatie**: Stille, donkere paden (circa 1 kilometer lus)
- **Groepsgrootte**: 6-8 personen per tijdvak om stilte te waarborgen
- **Infopunt**: Start/finish locatie met opwarmingsmogelijkheden
- **Educatief materiaal**: Opgezette uilen en uilenballen voor hands-on ervaring

### 3D-Bestanden en NFC-Tags

In de [`3d/`](./3d/) directory vind je:

- `NFC-label-example.stl` - Basis 3D-model voor NFC-tags
- `NFC-label-example-with-NFC-hole.3mf` - Model met NFC-chip ruimte

**Benodigde materialen:**

- 1 kg glow-in-the-dark PLA filament (1.75mm)
- 12+ NTAG213 NFC-stickers
- Montage materiaal (RVS-schroeven, tie-wraps of magneten)

### Technische Setup

Voor lokale ontwikkeling van de website:

```bash
# Python HTTP server (aanbevolen)
python3 -m http.server 8000

# Node.js alternatief
npx serve . -p 8000

# PHP alternatief
php -S localhost:8000
```

Bezoek dan `http://localhost:8000` om de website te bekijken.

### NFC-Programmering

1. Download een NFC-app zoals "NFC Tools"
2. Programmeer elke tag met de corresponderende URL:
   - `[jouw-domein]/uilen/steenuil.html`
   - `[jouw-domein]/uilen/kerkuil.html`
   - Etc. voor alle 6 uilensoorten
3. Test op zowel Android als iPhone
4. Vergrendel tags met wachtwoord als backup

## 📄 Licenties en Credits

### Bronvermelding

Volledige credits zijn beschikbaar in [`credits.txt`](./credits.txt), inclusief:

- **Audio**: Xeno-Canto gemeenschap (<https://www.xeno-canto.org>)
- **Technologie**: Bootstrap, Bootstrap Icons, Google Fonts
- **Ontwikkeling**: iMartzen
- **Organisatie**: IVN Son en Breugel

### Licentie

Dit project is beschikbaar onder de MIT License. Zie [`LICENSE`](./LICENSE) voor volledige voorwaarden.

**Belangrijk**: Audio-bestanden van Xeno-Canto hebben individuele Creative Commons licenties. Controleer [`credits.txt`](./credits.txt) voor specifieke attributie-vereisten per audiobestand.

---

**Contact**: Voor vragen over het organiseren van deze activiteit of technische ondersteuning, open een issue in deze repository.
