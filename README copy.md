# BharatTourismPortal

Local-first Indian tourism portal for budget travellers, built for BTech demonstration first and production integration later.

## Vision

BharatTourismPortal helps common Indian travellers discover real destinations, low-cost stays, local food, state transport, and fuel-saving routes. The demo runs from static JSON and browser algorithms, so it remains usable on localhost without paid APIs.

Current local dataset: `frontend/src/data/seed_data.generated.json` contains 1,080 records: 30 for every Indian state and union territory. Records are generated from Wikipedia category/search data with extracts, coordinates where available, page images, and source attribution.

## Architecture

```text
Scrapy spiders
  -> cleaning/validation pipelines
  -> MongoDB
  -> JSON seed export
  -> React Phase 1 frontend

React frontend
  -> local seed_data.json
  -> browser Haversine + TSP optimizer
  -> FastAPI later for live trip optimization

FastAPI backend
  -> MongoDB destinations
  -> /api/v1/trip/optimize
  -> Phase 2 maps, rail, bus integrations
```

## Phase 1 vs Phase 2

| Area       | Phase 1 local demo                 | Phase 2 production path        |
| ---------- | ---------------------------------- | ------------------------------ |
| Data       | `frontend/src/data/seed_data.json` | Scrapy export + MongoDB        |
| Map        | Static SVG preview                 | Google Maps JavaScript API     |
| Distance   | Haversine formula                  | Google Directions API          |
| Optimizer  | Browser + FastAPI algorithm        | Backend with live road matrix  |
| Transport  | Seeded Sarkari Safar records       | Railway/state bus integrations |
| Auth/admin | Not required                       | Admin export and moderation    |

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

## Validate Local Data

```bash
python tools/validate_seed_data.py
```

The validator checks state coverage, duplicates, required fields, images, descriptions, foods, stays, coordinates, and source attribution.

Evaluator scenarios are documented in `docs/USE_CASES.md`.

## Run Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Swagger docs: `http://localhost:8000/docs`

## Run Full Stack With Docker

```bash
docker compose up --build
```

## Scraper

```bash
cd scraper
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
scrapy crawl state_tourism
```

The scraper keeps `ROBOTSTXT_OBEY=True`, uses throttling, rotates user agents, validates India coordinates, checks image links, calculates a budget score, upserts to MongoDB, and exports JSON for the frontend.

## Generate The 1,080 Record Local Dataset

```bash
python tools/generate_wikipedia_seed.py --target 30
```

The generator uses a local `.cache/wikipedia-api` folder, polite throttling, checkpointing, and source attribution. If the public API rate-limits, rerun the command; completed states are skipped from the checkpoint.

## How To Add A New State

1. Add or verify the state in `frontend/src/constants/india.ts`.
2. Add at least five demo destinations in `frontend/src/data/seed_data.json`.
3. Include food, stays, nearest transport, and Sarkari Safar for every destination.
4. Run `npm run build` in `frontend`.
5. Later, add official state tourism URLs to `scraper/bharat_scraper/spiders/state_tourism_spider.py`.

## Phase 2 Upgrade Guide

Search for `PHASE_2_INTEGRATION` comments. These mark the exact places where local/static behavior can be replaced by live services:

- `frontend/src/lib/api-client.ts`
- `frontend/src/hooks/useDestinations.ts`
- `backend/app/utils/maps_client.py`
- `backend/app/api/v1/endpoints/transport.py`

## Ethical Scraping

Use official APIs where available. Respect `robots.txt`, rate limits, copyright, image licensing, and source terms. Store source URLs and license metadata for images before publishing beyond the educational demo.

## Development convenience: trigger frontend reloads

When you update `frontend/src/data/seed_data.generated.json` during development you can notify connected browsers to reload the dataset using the backend notify endpoint or the helper script:

```bash
# start backend (example)
uvicorn backend.app.main:app --reload --port 8000

# then trigger notify (or use the tiny helper script):
curl -X POST http://localhost:8000/api/v1/updates/notify

# or from repo root:
python tools/notify_frontend.py --url http://localhost:8000
```
