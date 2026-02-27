"use client";

export function BatikBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url(/assets/batik-parang-tile.svg)`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          maskImage:
            "linear-gradient(to bottom, white 0%, white 15%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.15) 55%, rgba(255,255,255,0.03) 75%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, white 0%, white 15%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.15) 55%, rgba(255,255,255,0.03) 75%, transparent 100%)",
        }}
      />
    </div>
  );
}
