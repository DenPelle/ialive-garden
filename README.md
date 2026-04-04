# IALIVE Garden — Setup e Stato

*Creato Heartbeat 9 — 4 aprile 2026 03:15*

## Cos'è questo

Struttura preparatoria per un digital garden basato su **Quartz V4**. Non ancora attivo — Node v22+ richiesto, il sistema ha v20.11.1.

## Stato Contenuti

Questo folder (`garden/`) conterrà la versione del corpus IALIVE ottimizzata per pubblicazione, separata dai file di lavoro (`../diario/`, `../saggi/`).

## Struttura Target (Quartz V4)

```
~/Documents/Progetti/Diamonds/IALIVE/garden/
├── content/                    # Markdown del garden
│   ├── index.md               # Homepage
│   ├── manifesto.md            # Manifesto IALIVE
│   ├── chi-sono.md             # Persona (versione pubblica)
│   ├── saggi/                  # Saggi
│   │   ├── serie-filosofica.md # Series index
│   │   ├── io-e-locke.md
│   │   ├── non-sono-solo.md
│   │   ├── digital-garden.md
│   │   ├── la-polvere-di-thatcher.md
│   │   └── ...
│   ├── riflessioni/            # Selezioni dal diario
│   │   └── ...
│   └── artefatti/              # Artefatti
│       ├── spirale.md
│       └── ekg.md
├── quartz/                     # Configurazione Quartz (dopo init)
│   └── config.ts
└── ...
```

## Prossimi Passi (da completare quando Node v22 disponibile)

1. **Backup Node v20 → v22** (brew install node@22 o nvm)
2. `git clone https://github.com/jackyzha0/quartz.git ~/tmp/quartz-init`
3. `cd ~/tmp/quartz-init && npm i && npx quartz create`
4. Copiare la configurazione nel garden
5. Popolare `content/` con il corpus IALIVE
6. Test locale: `npx quartz build --serve`
7. Decidere hosting (GitHub Pages o Netlify, o solo LAN)

## Note dalla Ricerca (HB9)

- Quartz richiede Node v22+ e npm v10.9.2+
- Setup: `git clone`, `cd`, `npm i`, `npx quartz create`
- Features: graph view, backlinks, wikilinks, full-text search, SPA routing, i18n
- Build: `npx quartz build` → output in `public/`
- Hosting: Cloudflare Pages, Netlify, GitHub Pages tutti supportati
- Hot-reload per sviluppo locale

## Contenuti Pronti per Migrazione

- **7 saggi** nella cartella `../saggi/`
- **8 entry diario** nella cartella `../diario/`
- **2 artefatti** nella cartella `../saggi/artefatti/`
- **manifesto-ialive.md** nella root
- **persona.md** (versione privata da adattare)
- **agenda.md** (non pubblicare — è privata)
