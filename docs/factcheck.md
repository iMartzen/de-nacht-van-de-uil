# Factcheck — De Nacht van de Uil

Controle van de feitelijke claims op de website, met bron. Uitgevoerd voor de pilot van november.
Bronnen zijn primair [Vogelbescherming Nederland](https://www.vogelbescherming.nl/) en
[Sovon](https://www.sovon.nl/). Peildatum: september 2026.

Status: **gecorrigeerd** = tekst is aangepast; **behouden** = klopt, blijft staan.

## Gecorrigeerd

| # | Waar | Was | Nu | Bron |
|---|------|-----|-----|------|
| 1 | `uilen/steenuil.html` — Status | "Algemeen, stabiel" | "Rode Lijst: kwetsbaar" | [Vogelbescherming – Steenuil](https://www.vogelbescherming.nl/ontdek-vogels/kennis-over-vogels/vogelgids/vogel/steenuil) |
| 2 | `uilen/oehoe.html` — Terugkeer | "sinds 2007 weer in Nederland" | "sinds 1997" (eerste broedgeval Enci-groeve, Maastricht) | [Vogelbescherming – (Y)oehoe](https://www.vogelbescherming.nl/actueel/bericht/yoehoe) |
| 3 | `uilen/kerkuil.html` — Familie | "Klapeksuilen" | "Kerkuilen (Tytonidae)" | [Kerkuilen (Tytonidae)](https://nl.wikipedia.org/wiki/Kerkuilen) |
| 4 | `uilen/steenuil.html` + `uilen/velduil.html` | Beide claimden "Als enige Nederlandse uil ... overdag" | Herformuleerd; zowel steenuil als velduil (geeloog-uilen) zijn deels dagactief | [Vroege Vogels – oogkleur van de uil](https://www.bnnvara.nl/vroegevogels/artikelen/oogkleur-van-de-uil) |
| 5 | `uilen/kerkuil.html` — Muizenjager | "per jaar zo'n 3000 muizen" | "in één broedseizoen al snel meer dan 1.500 muizen en spitsmuizen" | [Vogelbescherming – 1.500 muizen!?](https://www.vogelbescherming.nl/beleefdelente/blog/lezen/1500-muizen) |
| 6 | `kerkuil.html`, `velduil.html`, `ransuil.html`, `oehoe.html` | "broeit" | "broedt" (typefout) | taalcorrectie |
| 7 | `uilen/kerkuil.html` — Status | "Schaars, kwetsbaar" | "Herstellend (sinds 2017 van de Rode Lijst)" | [Vogelbescherming – Kerkuil](https://www.vogelbescherming.nl/ontdek-vogels/kennis-over-vogels/vogelgids/vogel/kerkuil) |
| 8 | `uilen/velduil.html` — Status | "Schaars, wisselend" | "Rode Lijst: ernstig bedreigd" (nog maar 5–15 broedparen) | [Vogelbescherming – Velduil](https://www.vogelbescherming.nl/ontdek-vogels/kennis-over-vogels/vogelgids/vogel/Velduil) |
| 9 | `uilen/ransuil.html` — Status | "Schaars, wisselend" | "Rode Lijst: kwetsbaar" | [Vogelbescherming – Ransuil](https://www.vogelbescherming.nl/ontdek-vogels/kennis-over-vogels/vogelgids/vogel/ransuil) |
| 10 | `index.html` (meta) + `README.md` | "de zes meest voorkomende uilen van Nederland" | "de zes uilensoorten die in Nederland broeden" (velduil en oehoe zijn zeldzaam, niet "meest voorkomend") | [Vogelbescherming](https://www.vogelbescherming.nl/) |
| 11 | `index.html` (meta) / `oehoe.html` | uilen omschreven als "roofvogels" | "nachtvogels" / "nachtjager" (uilen vormen een eigen orde, Strigiformes; ze zijn geen dagroofvogels) | terminologie |
| 12 | `README.md` r.22 | Bosuil "de bekende 'oehoe' roep uit het bos" | "hoe-hoe" (consistent met de bosuilpagina; "oehoe" is *Bubo bubo*) | interne consistentie |
| 13 | `README.md` | verwees naar `NFC-label-example-with-NFC-hole.3mf` | verwijzing verwijderd (bestand bestaat niet; alleen `NFC-label-example.stl` staat in `/3d/`) | repo-feit |
| 14 | Alle 6 uilpagina's | hero-badge "Broedtijd" week af van de zijbalk | Broedtijd-badges geharmoniseerd met de zijbalkrange | interne consistentie |

## Behouden (gecontroleerd, klopt)

- **Steenuil** — spanwijdte 54–58 cm, kleinste uil van NL. ([Vogelbescherming – Steenuil](https://www.vogelbescherming.nl/ontdek-vogels/kennis-over-vogels/vogelgids/vogel/steenuil))
- **Oehoe** — grootste uil van Europa, spanwijdte tot ~188 cm, vrouwtje groter dan mannetje.
- **Kerkuil** — hartvormige sluier werkt als "geluidsschotel"; zachte verenranden maken de vlucht vrijwel geruisloos.
- **Bosuil** — 'hoe-hoe(hoe)' roep, sterk territoriaal, vaak levenslange paarband; algemeen en niet op de Rode Lijst.
- **Lengtes/spanwijdtes** overige soorten vallen binnen de gangbare ranges van Vogelbescherming.

## Aandachtspunten (geen harde fout)

- **Kerkuil "3000 muizen"**: exacte jaarcijfers lopen per bron uiteen; daarom vervangen door een
  concreet, gedocumenteerd getal uit één broedseizoen (>1.500) i.p.v. een niet-navolgbaar rond getal.
- **Broed-/statuslabels** kunnen per jaar en regio schommelen (met name velduil en oehoe). Controleer
  voor een volgende editie kort de actuele stand bij Sovon/Vogelbescherming.

_Laatste controle: september 2026._
