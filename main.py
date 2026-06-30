import os
import sys

# Add current dir to path for imports
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from materials_db_web import MATERIALS
from pydantic import BaseModel
from typing import Optional
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

# --- FastAPI ---

app = FastAPI(title="ЭКО — API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Models ---

class LayerIn(BaseModel):
    materialId: str
    thickness: int
    density: Optional[float] = None

class CalculateIn(BaseModel):
    layers: list[LayerIn]
    rebarType: str = "none"
    rebarMass: float = 0
    gsop: float = 4378
    wallAreaS: float = 620
    wallLength: float = 6
    wallHeight: float = 3
    doorCount: int = 0
    doorWidth: float = 0
    doorHeight: float = 0
    windowCount: int = 0
    windowWidth: float = 0
    windowHeight: float = 0
    waste: float = 5

class LayerOut(BaseModel):
    idx: int
    name: str
    rho: float
    delta: float
    mass: float
    carbon: float
    energy: float
    dOverLam: float

class RebarOut(BaseModel):
    name: str
    mass: float
    carbon: float
    energy: float

class CalculateOut(BaseModel):
    layers: list[LayerOut]
    rebar: Optional[RebarOut] = None
    totalMass: float
    totalCarbon: float
    totalEnergy: float
    sumDL: float
    r0: float
    qPerM2: float
    qTotal: float
    v1: float
    vTotal: float
    netArea: float

REBAR_MAP = {
    "steel": {"id": "rebar-steel", "name": "Металлическая кладочная сетка"},
    "fiberglass": {"id": "basalt-rebar", "name": "Стеклопластиковая арматура"},
    "basalt": {"id": "basalt-rebar", "name": "Базальтопластиковая арматура"},
    "carbon": {"id": "carbon-rebar", "name": "Углепластиковая арматура"},
}

# --- API ---

@app.post("/api/calculate")
def calculate(data: CalculateIn):
    results = []
    total_mass = 0.0
    total_carbon = 0.0
    total_energy = 0.0
    total_dl = 0.0

    for i, layer in enumerate(data.layers):
        mat = MATERIALS.get(layer.materialId)
        if not mat:
            continue
        rho = layer.density if layer.density is not None else mat["ρ"]
        delta = layer.thickness / 1000.0
        mass = rho * delta
        carbon = mass * mat["F"]
        energy = mass * mat["e"]
        d_over_lam = delta / mat["λ"]

        total_mass += mass
        total_carbon += carbon
        total_energy += energy
        total_dl += d_over_lam

        results.append(LayerOut(
            idx=i + 1, name=mat["name"], rho=rho, delta=delta,
            mass=mass, carbon=carbon, energy=energy, dOverLam=d_over_lam
        ))

    rebar_out = None
    if data.rebarType != "none" and data.rebarMass > 0:
        rb = REBAR_MAP.get(data.rebarType)
        if rb:
            rmat = MATERIALS.get(rb["id"])
            if rmat:
                rc = data.rebarMass * rmat["F"]
                re = data.rebarMass * rmat["e"]
                total_mass += data.rebarMass
                total_carbon += rc
                total_energy += re
                rebar_out = RebarOut(name=rb["name"], mass=data.rebarMass, carbon=rc, energy=re)

    r0 = 0.15841 + total_dl

    net_area = max(0, data.wallLength * data.wallHeight
                   - (data.doorCount * data.doorWidth * data.doorHeight)
                   - (data.windowCount * data.windowWidth * data.windowHeight))
    total_wall_area = data.wallAreaS if net_area > 0 else 0

    q_per_m2 = (0.024 * data.gsop * 1) / r0 if data.gsop > 0 and r0 > 0 else 0
    q_total = q_per_m2 * total_wall_area
    v1 = q_per_m2 / (9.3 * 0.9) if q_per_m2 > 0 else 0
    v_total = v1 * total_wall_area

    return CalculateOut(
        layers=results,
        rebar=rebar_out,
        totalMass=total_mass,
        totalCarbon=total_carbon,
        totalEnergy=total_energy,
        sumDL=total_dl,
        r0=r0,
        qPerM2=round(q_per_m2, 2),
        qTotal=round(q_total, 1),
        v1=round(v1, 3),
        vTotal=round(v_total, 1),
        netArea=round(net_area, 2)
    )

@app.get("/api/materials")
def list_materials():
    return {mid: {"name": m["name"], "ρ": m["ρ"], "λ": m["λ"], "F": m["F"], "e": m["e"]}
            for mid, m in MATERIALS.items()}

# --- Static files ---

static_dir = os.path.dirname(os.path.abspath(__file__))
app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")
