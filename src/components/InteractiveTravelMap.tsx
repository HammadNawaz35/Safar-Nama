import { useEffect, useRef, useState, forwardRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { DESTINATIONS } from "@/data/destinations";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PAKISTAN_CENTER: [number, number] = [30.5, 69.5];
const PAKISTAN_ZOOM = 6;

const createRedMarkerIcon = () =>
  L.divIcon({
    html: `
      <div class="map-marker-wrapper">
        <div class="map-pulse-ring"></div>
        <div class="map-pulse-ring map-pulse-delay"></div>
        <div class="map-marker-pin-red">
          <div class="map-marker-dot"></div>
        </div>
        <div class="map-marker-shadow"></div>
      </div>`,
    className: "custom-red-marker",
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50],
  });


interface HoveredDest {
  id: number;
  name: string;
  rating: number;
  img: string;
  x: number;
  y: number;
}

const InteractiveTravelMap = forwardRef<HTMLDivElement>(function InteractiveTravelMap(_, _ref) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const [hovered, setHovered] = useState<HoveredDest | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      scrollWheelZoom: true,
      dragging: true,
      attributionControl: false,
      zoomSnap: 0.5,
    }).setView(PAKISTAN_CENTER, PAKISTAN_ZOOM);

    mapRef.current = map;

    L.control.zoom({ position: "topright" }).addTo(map);

    // Google Maps style tiles
    L.tileLayer(
      "https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      { maxZoom: 19, subdomains: ["mt0", "mt1", "mt2", "mt3"] }
    ).addTo(map);

    DESTINATIONS.forEach((dest) => {
      const icon = createRedMarkerIcon();
      const marker = L.marker([dest.lat, dest.lng], { icon }).addTo(map);

      marker.on("mouseover", (e: L.LeafletMouseEvent) => {
        const pt = map.latLngToContainerPoint(e.latlng);
        setHovered({ id: dest.id, name: dest.name, rating: dest.rating, img: dest.img, x: pt.x, y: pt.y });
      });
      marker.on("mouseout", () => setHovered(null));

      marker.bindPopup(
        `<div class="pk-popup">
          <img src="${dest.img}" alt="${dest.name}" />
          <div class="pk-popup-body">
            <h4>${dest.name}</h4>
            <p class="pk-popup-province">${dest.province}</p>
            <div class="pk-popup-meta">
              <span class="pk-popup-rating">★ ${dest.rating}</span>
              <span class="pk-popup-tag">${dest.tag}</span>
            </div>
            <p class="pk-popup-desc">${dest.highlight}</p>
            <a href="/booking?dest=${encodeURIComponent(dest.name)}" class="pk-popup-btn">Book Now →</a>
          </div>
        </div>`,
        { className: "pk-popup-container", maxWidth: 280, minWidth: 240 }
      );
    });

    // Fly-in animation
    map.setView(PAKISTAN_CENTER, 4, { animate: false });
    setTimeout(() => {
      map.flyTo(PAKISTAN_CENTER, PAKISTAN_ZOOM, { duration: 2.5, easeLinearity: 0.25 });
    }, 300);

    const onResize = () => map.invalidateSize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="w-full h-[550px] md:h-[600px] lg:h-[650px] rounded-xl overflow-hidden border border-border shadow-lg relative bg-background">
      <div ref={mapContainerRef} className="travel-map w-full h-full" />

      {/* Hover tooltip with rating */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key={hovered.id}
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute z-[1100] pointer-events-none bg-card/95 backdrop-blur-md border border-destructive/30 rounded-xl px-3 py-2.5 shadow-xl flex items-center gap-3"
            style={{ left: hovered.x + 20, top: hovered.y - 40 }}
          >
            <img src={hovered.img} alt={hovered.name} className="w-10 h-10 rounded-full object-cover border-2 border-destructive/50" />
            <div>
              <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                {hovered.name}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <Star className="w-3 h-3 fill-destructive text-destructive" />
                <span className="text-xs font-medium text-destructive">{hovered.rating}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edge gradients */}
      <div className="absolute inset-0 pointer-events-none rounded-xl">
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-background/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/40 to-transparent" />
      </div>

      {/* Legend */}
      <div className="absolute bottom-5 left-5 z-[1000] bg-card/90 backdrop-blur-md border border-border rounded-lg px-4 py-3 pointer-events-none">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-destructive font-semibold">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive animate-pulse" />
          {DESTINATIONS.length} Pakistan Destinations
        </div>
      </div>
    </div>
  );
});

export default InteractiveTravelMap;
