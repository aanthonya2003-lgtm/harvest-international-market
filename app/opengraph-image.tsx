import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Harvest International Market — El Cajon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1A1208",
          backgroundImage:
            "radial-gradient(80% 60% at 50% 40%, rgba(200,147,10,0.18), transparent 60%), radial-gradient(60% 50% at 80% 80%, rgba(176,58,46,0.22), transparent 70%)",
          padding: "70px",
          fontFamily: "serif",
          color: "#FAF6EF",
        }}
      >
        {/* Top: Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: 999,
              border: "1.5px solid #C8930A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: "#C8930A",
                display: "flex",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              Harvest
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 11,
                letterSpacing: "0.22em",
                color: "#C8930A",
                textTransform: "uppercase",
              }}
            >
              International Market
            </div>
          </div>
        </div>

        {/* Middle: Headline block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 13,
              letterSpacing: "0.22em",
              color: "#C8930A",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 48,
                height: 1,
                backgroundColor: "#C8930A",
              }}
            />
            <div style={{ display: "flex" }}>El Cajon, California</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 100,
              lineHeight: 1.02,
              letterSpacing: "-0.015em",
              maxWidth: 1000,
              flexWrap: "wrap",
            }}
          >
            We Shop the World&nbsp;
            <span style={{ fontStyle: "italic", color: "#C8930A" }}>
              for you&nbsp;
            </span>
            Every Day.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#d8cfbe",
              maxWidth: 900,
            }}
          >
            Authentic Middle Eastern groceries, halal butcher, brick-oven breads
            and a full Mediterranean kitchen.
          </div>
        </div>

        {/* Bottom: meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid #3a2a14",
            paddingTop: 24,
            fontSize: 16,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: 4 }}
          >
            <div
              style={{
                display: "flex",
                color: "#9c917e",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Visit
            </div>
            <div style={{ display: "flex" }}>
              733 E Main St, El Cajon, CA 92020
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#9c917e",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Call
            </div>
            <div style={{ display: "flex", color: "#C8930A" }}>
              (619) 442-0413
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
