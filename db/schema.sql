CREATE TABLE IF NOT EXISTS solicitudes (
 id SERIAL PRIMARY KEY,
 created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 nombre TEXT NOT NULL,
 empresa TEXT,
 cargo TEXT,
 email TEXT NOT NULL,
 telefono TEXT,
 servicio TEXT NOT NULL,
 tipo_activo TEXT,
 ubicacion TEXT,
 capacidad_mw NUMERIC,
 mensaje TEXT NOT NULL,
 estado TEXT NOT NULL DEFAULT 'nueva' CHECK (estado IN ('nueva','contactado','cotizado','cerrado')),
 ip TEXT,
 user_agent TEXT
);
CREATE INDEX IF NOT EXISTS idx_solicitudes_created_at ON solicitudes(created_at DESC);
