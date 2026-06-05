from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.endpoints import destinations, states, transport, trip_optimizer, updates
from app.core.config import settings
from app.core.database import close_db, connect_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_db()
    yield
    await close_db()


app = FastAPI(
    title="BharatTourismPortal API",
    version="0.1.0",
    description="Local-first API foundation for BharatTourismPortal.",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in settings.backend_cors_origins.split(",")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(states.router, prefix="/api/v1")
app.include_router(destinations.router, prefix="/api/v1")
app.include_router(trip_optimizer.router, prefix="/api/v1")
app.include_router(transport.router, prefix="/api/v1")
app.include_router(updates.router, prefix="/api/v1")


@app.get("/health")
async def health():
    return {"status": "ok"}

