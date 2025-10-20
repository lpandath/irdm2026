"use client";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import React, { useEffect, useRef, useState } from "react";

import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface Location {
  id: string;
  name: string;
  category: string;
  position: [number, number];
  description: string;
  details: string;
  color: string;
}

interface MapContentProps {
  locations: Location[];
}

const MapController: React.FC<{
  locations: Location[];
  highlightedMarkerId: string | null;
  markerRefs: React.MutableRefObject<{ [key: string]: L.Marker | null }>;
}> = ({ locations, highlightedMarkerId, markerRefs }) => {
  const map = useMap();

  useEffect(() => {
    if (highlightedMarkerId) {
      const location = locations.find((loc) => loc.id === highlightedMarkerId);
      if (location) {
        map.setView(location.position, 15, { animate: true });
        setTimeout(() => {
          const marker = markerRefs.current[highlightedMarkerId];
          if (marker) {
            marker.openPopup();
          }
        }, 500);
      }
    }
  }, [highlightedMarkerId, locations, map, markerRefs]);

  return null;
};

const MapContent: React.FC<MapContentProps> = ({ locations }) => {
  const [highlightedMarkerId, setHighlightedMarkerId] = useState<string | null>(
    null,
  );
  const markerRefs = useRef<{ [key: string]: L.Marker | null }>({});

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.split("?")[1] || "");
      const markerId = params.get("marker");
      if (markerId) {
        setHighlightedMarkerId(markerId);
      } else {
        setHighlightedMarkerId(null);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const createCustomIcon = (color: string, isHighlighted: boolean) => {
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div style="
          background-color: ${isHighlighted ? "#c6093b" : "white"};
          width: ${isHighlighted ? "36px" : "28px"};
          height: ${isHighlighted ? "36px" : "28px"};
          border-radius: 50%;
          border: 3px solid ${isHighlighted ? "white" : "#9ca3af"};
          box-shadow: 0 2px ${isHighlighted ? "12px" : "8px"} rgba(0,0,0,${isHighlighted ? "0.4" : "0.3"});
          transition: all 0.3s ease;
        "></div>
      `,
      iconSize: [isHighlighted ? 36 : 28, isHighlighted ? 36 : 28],
      iconAnchor: [isHighlighted ? 18 : 14, isHighlighted ? 18 : 14],
      popupAnchor: [0, isHighlighted ? -18 : -14],
    });
  };

  return (
    <MapContainer
      center={[47.06, 15.445]}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={true}
      className="grayscale-map"
      attributionControl={false}
    >
      <TileLayer
        attribution=""
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      <MapController
        locations={locations}
        highlightedMarkerId={highlightedMarkerId}
        markerRefs={markerRefs}
      />

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          icon={createCustomIcon(
            location.color,
            highlightedMarkerId === location.id,
          )}
          ref={(ref: L.Marker | null) => {
            if (ref) {
              markerRefs.current[location.id] = ref;
            }
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-base mb-2">{location.name}</h3>
              <p className="text-sm text-gray-700 mb-1">
                {location.description}
              </p>
              <div className="text-xs text-gray-600">
                {location.details.includes("Visit:") ? (
                  <>
                    {location.details.split("Visit:")[0]}
                    <br />
                    <a
                      href={location.details.split("Visit:")[1].trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit website
                    </a>
                  </>
                ) : (
                  location.details
                )}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapContent;
