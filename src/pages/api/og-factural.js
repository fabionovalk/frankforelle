import { ImageResponse } from "next/og";

export const config = { runtime: "edge" };

// Photo: "1989 Porsche 911 Carrera" by Jeremy from Sydney, Australia, CC BY 2.0
// https://commons.wikimedia.org/wiki/File:1989_Porsche_911_Carrera_(16485353527).jpg
const PHOTO_PATH = "/images/porsche-911-carrera-1989.jpg";

export default function handler(req) {
  const photoUrl = new URL(PHOTO_PATH, req.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#000",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 780,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 56px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", width: 10, height: 40, background: "#dc2626", marginRight: 20 }} />
            <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 4, color: "#f87171" }}>BUYER NOTICE</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1 }}>1989 Porsche 911 Carrera</div>
            <div style={{ fontSize: 32, fontWeight: 600, color: "#e5e7eb", marginTop: 12 }}>
              Coupe · 25th Anniversary Edition
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, color: "#d1d5db" }}>VIN WP0AB091XKS121085</div>
            <div style={{ fontSize: 22, color: "#9ca3af", marginTop: 10 }}>
              Seller backed out of an agreed Bring a Trailer sale
            </div>
          </div>
        </div>

        <div
          style={{
            width: 420,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: 56,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src={photoUrl}
            width={364}
            height={364}
            style={{ width: 364, height: 364, objectFit: "cover", objectPosition: "60% 50%", borderRadius: 8 }}
          />
          <div style={{ display: "flex", fontSize: 14, color: "#9ca3af", marginTop: 10 }}>
            Photo: Jeremy from Sydney (CC BY 2.0)
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
