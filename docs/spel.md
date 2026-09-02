# Spel — de uilen-quizspeurtocht

Het spel zit **in de website en in het gesproken fragment** verweven. Bij elke uil-stop hoort één
vraag met drie antwoorden. De voorleesstem leest het verhaal én de vraag met de drie keuzes voor;
je tikt je antwoord op het scherm. Het juiste antwoord levert een **letter** op. De letters worden
automatisch verzameld en op de **startpagina** samengevoegd tot een geheim **codewoord**.

## Hoe het werkt (voor de deelnemer)

1. Scan bij een stop de tag → de uilpagina opent.
2. Tik op **"Verhaal voorlezen"**: je hoort het verhaal, de vraag en de drie opties.
3. Tik op het antwoord dat je denkt dat goed is.
   - **Goed** → je verdient de letter van deze uil; de knoppen kleuren groen.
   - **Fout** → je krijgt een hint en mag opnieuw proberen.
4. Ga naar de volgende uil. Aan het eind kijk je op de **startpagina** onder *"Jouw codewoord"* welk
   woord je bij elkaar hebt gespeurd.

De voortgang wordt op je eigen telefoon bewaard (in de browser), dus je codewoord blijft staan terwijl
je van uil naar uil loopt. Op de startpagina staat ook een knop **"Opnieuw beginnen"** om te wissen —
handig voor de begeleider tussen groepjes door.

> **Techniek:** het spel draait volledig in de browser (geen account, geen internetdatabase). De
> voortgang staat in `localStorage`. In een enkele privé-/incognitomodus kan dat geblokkeerd zijn;
> dan werkt de vraag nog wel per pagina, maar wordt het codewoord niet onthouden.

---

## De vragen en antwoorden (voor de begeleider)

Het juiste antwoord staat met ✅ gemarkeerd, met de letter die het oplevert.

### Stop 1 — Steenuil → **S**
**Waarom beschermen wij de steenuil hier met nestkasten?**
- Omdat hij 's nachts te hard roept.
- Omdat hij te groot wordt voor het bos.
- ✅ Omdat het niet vanzelf goed met hem gaat; hij staat op de Rode Lijst.

### Stop 2 — Kerkuil → **N**
**Wat maakt de vlucht van de kerkuil zo bijzonder?**
- Hij vliegt razendsnel.
- ✅ Hij vliegt volkomen geluidloos.
- Hij vliegt alleen overdag.

### Stop 3 — Bosuil → **A**
**Welk geluid hoor je van de bosuil?**
- ✅ Het bekende 'hoe-hoe-hoehoe'.
- Een schril gekrijs.
- Een diep 'oe-hoe' (let op: dat is juist de oehoe!).

### Stop 4 — Velduil → **V**
**Waar en wanneer jaagt de velduil het liefst?**
- Hoog in dichte bossen, alleen 's nachts.
- ✅ Laag over open velden en duinen, vaak ook overdag.
- In schuren en kerken.

### Stop 5 — Ransuil → **E**
**Wat zijn de 'oortjes' van de ransuil eigenlijk?**
- Zijn echte oren.
- Antennes om beter te horen.
- ✅ Sierveren die helpen bij camouflage.

### Stop 6 — Oehoe → **L**
**Wat is waar over de oehoe?**
- De kleinste uil van Nederland.
- ✅ De grootste uil van Europa, sinds 1997 weer in Nederland.
- Een uil die alleen overdag jaagt.

---

## Antwoordsleutel

Juiste letters in stopvolgorde: **S · N · A · V · E · L**

### 👉 Codewoord: **SNAVEL**

> Toepasselijk: een snavel hoort bij elke uil. Sluit af met de vraag of iemand nog weet welke uil de
> grootste snavel heeft (de oehoe!).

---

## De vragen aanpassen

De vragen staan in de uilpagina's (`uilen/<soort>.html`) in een `.quiz-section`-blok:

- `data-owl` = de uil, `data-letter` = de letter die deze stop oplevert.
- Elke `.quiz-option` is een antwoord; het juiste heeft `data-correct="true"`.

Wil je een ander codewoord? Pas dan per pagina de `data-letter` aan (in stopvolgorde
steenuil → kerkuil → bosuil → velduil → ransuil → oehoe) en werk deze antwoordsleutel bij. De
voorleesstem en de homepage-onthulling werken automatisch mee, want die lezen dezelfde gegevens.

## Varianten

- **Makkelijker (kinderen)**: verklap dat het codewoord bij de uil hoort en 6 letters heeft.
- **Zonder telefoon**: kan de begeleider de vragen hardop stellen en de letters op een briefje laten
  verzamelen; de antwoordsleutel hierboven volstaat.
