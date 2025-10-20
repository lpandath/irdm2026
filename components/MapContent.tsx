"use client";

import {
  Circle,
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import React, { useEffect, useState } from "react";
import { getBikeRoute, getWalkingRoute } from "@/lib/routing";

import L from "leaflet";

// Fix for default marker icons in Next.js
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

export type RouteType =
  | "none"
  | "bike-venue-station"
  | "bike-venue-oldtown"
  | "bike-venue-airport"
  | "walk-venue-station"
  | "walk-venue-oldtown"
  | "walk-venue-airport"
  | "transit-venue-station"
  | "all";

interface MapContentProps {
  locations: Location[];
  selectedRoute: RouteType;
}

// Component to handle map zoom/pan based on selected route
const MapController: React.FC<{
  selectedRoute: RouteType;
  bikeRoutes: {
    "venue-station": [number, number][] | null;
    "venue-oldtown": [number, number][] | null;
    "venue-airport": [number, number][] | null;
  };
  walkRoutes: {
    "venue-station": [number, number][] | null;
    "venue-oldtown": [number, number][] | null;
    "venue-airport": [number, number][] | null;
  };
}> = ({ selectedRoute, bikeRoutes, walkRoutes }) => {
  const map = useMap();

  useEffect(() => {
    console.log("🎯 MapController: selectedRoute changed to:", selectedRoute);

    // Determine which route data to use for zooming
    let routeToZoom: [number, number][] | null = null;

    if (selectedRoute === "bike-venue-station") {
      routeToZoom = bikeRoutes["venue-station"];
    } else if (selectedRoute === "bike-venue-oldtown") {
      routeToZoom = bikeRoutes["venue-oldtown"];
    } else if (selectedRoute === "bike-venue-airport") {
      routeToZoom = bikeRoutes["venue-airport"];
    } else if (selectedRoute === "walk-venue-station") {
      routeToZoom = walkRoutes["venue-station"];
    } else if (selectedRoute === "walk-venue-oldtown") {
      routeToZoom = walkRoutes["venue-oldtown"];
    } else if (selectedRoute === "walk-venue-airport") {
      routeToZoom = walkRoutes["venue-airport"];
    } else if (selectedRoute === "transit-venue-station") {
      routeToZoom = [
        [47.0581, 15.4503],
        [47.0708, 15.4177],
      ];
    }

    if (routeToZoom) {
      console.log(`🔍 Zooming to route with ${routeToZoom.length} points`);
      map.fitBounds(routeToZoom, { padding: [50, 50] });
    } else if (selectedRoute === "all" || selectedRoute === "none") {
      console.log("🔍 Zooming to: Default view");
      map.setView([47.06, 15.445], 13);
    }
  }, [selectedRoute, bikeRoutes, map]);

  return null;
};

const MapContent: React.FC<MapContentProps> = ({
  locations,
  selectedRoute,
}) => {
  const [bikeRoutes, setBikeRoutes] = useState<{
    "venue-station": [number, number][] | null;
    "venue-oldtown": [number, number][] | null;
    "venue-airport": [number, number][] | null;
  }>({
    "venue-station": null,
    "venue-oldtown": null,
    "venue-airport": null,
  });

  const [walkRoutes, setWalkRoutes] = useState<{
    "venue-station": [number, number][] | null;
    "venue-oldtown": [number, number][] | null;
    "venue-airport": [number, number][] | null;
  }>({
    "venue-station": null,
    "venue-oldtown": null,
    "venue-airport": null,
  });

  const [transitRoute, setTransitRoute] = useState<[number, number][] | null>(
    null,
  );

  const [routeLoading, setRouteLoading] = useState(false);

  // Create custom icons for different categories
  const createCustomIcon = (color: string) => {
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div style="
          background-color: ${color};
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        "></div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
    });
  };

  // Fetch real bike routes from OpenRouteService
  useEffect(() => {
    const fetchAllBikeRoutes = async () => {
      console.log("🚴 Starting to fetch bike routes...");
      setRouteLoading(true);

      // Fallback routes (simple approximations)
      const fallbackVenueToStation: [number, number][] = [
        [47.0581, 15.4503], // Venue
        [47.06, 15.445],
        [47.063, 15.438],
        [47.066, 15.431],
        [47.068, 15.425],
        [47.0708, 15.4177], // Station
      ];

      const fallbackVenueToOldtown: [number, number][] = [
        [47.0581, 15.4503], // Venue
        [47.06, 15.448],
        [47.063, 15.445],
        [47.066, 15.442],
        [47.0707, 15.4395], // Old Town
      ];

      const fallbackVenueToAirport: [number, number][] = [
        [47.0581, 15.4503], // Venue
        [47.05, 15.445],
        [47.04, 15.442],
        [47.02, 15.44],
        [47.005, 15.438],
        [46.995, 15.439],
        [46.9911, 15.4396], // Airport (note: may not be bikeable all the way)
      ];

      try {
        const venueCoords: [number, number] = [47.0581, 15.4503];
        const stationCoords: [number, number] = [47.0708, 15.4177];
        const oldTownCoords: [number, number] = [47.0707, 15.4395];
        const airportCoords: [number, number] = [46.9911, 15.4396];

        console.log("📍 Coordinates:", {
          venue: venueCoords,
          station: stationCoords,
          oldTown: oldTownCoords,
          airport: airportCoords,
        });

        // Try to fetch bike AND walking routes with timeout
        console.log(
          "⏳ Fetching bike and walking routes from API (with 10s timeout)...",
        );
        const timeout = new Promise<null>((resolve) => {
          setTimeout(() => {
            console.warn("⏱️ API timeout - using fallback routes");
            resolve(null);
          }, 10000);
        });

        const apiCalls = Promise.all([
          // Bike routes
          getBikeRoute(venueCoords, stationCoords),
          getBikeRoute(venueCoords, oldTownCoords),
          getBikeRoute(venueCoords, airportCoords),
          // Walking routes
          getWalkingRoute(venueCoords, stationCoords),
          getWalkingRoute(venueCoords, oldTownCoords),
          getWalkingRoute(venueCoords, airportCoords),
        ]);

        const result = await Promise.race([apiCalls, timeout]);

        if (result === null) {
          // Timeout - use fallback
          console.log("📦 Using fallback routes (API timeout or error)");
          setBikeRoutes({
            "venue-station": fallbackVenueToStation,
            "venue-oldtown": fallbackVenueToOldtown,
            "venue-airport": fallbackVenueToAirport,
          });
          setWalkRoutes({
            "venue-station": fallbackVenueToStation,
            "venue-oldtown": fallbackVenueToOldtown,
            "venue-airport": fallbackVenueToAirport,
          });
          console.log("✅ Fallback routes loaded!");
        } else {
          // API succeeded
          const [
            bikeToStation,
            bikeToOldtown,
            bikeToAirport,
            walkToStation,
            walkToOldtown,
            walkToAirport,
          ] = result;

          console.log("📦 Raw API responses:", {
            bike: {
              station: bikeToStation,
              oldtown: bikeToOldtown,
              airport: bikeToAirport,
            },
            walk: {
              station: walkToStation,
              oldtown: walkToOldtown,
              airport: walkToAirport,
            },
          });

          setBikeRoutes({
            "venue-station":
              bikeToStation?.coordinates || fallbackVenueToStation,
            "venue-oldtown":
              bikeToOldtown?.coordinates || fallbackVenueToOldtown,
            "venue-airport":
              bikeToAirport?.coordinates || fallbackVenueToAirport,
          });

          setWalkRoutes({
            "venue-station":
              walkToStation?.coordinates || fallbackVenueToStation,
            "venue-oldtown":
              walkToOldtown?.coordinates || fallbackVenueToOldtown,
            "venue-airport":
              walkToAirport?.coordinates || fallbackVenueToAirport,
          });

          console.log("✅ Routes loaded!");
          console.log("🚴 BIKE ROUTES:");
          if (bikeToStation) {
            console.log(
              `  → Station: ${(bikeToStation.distance / 1000).toFixed(1)}km, ${Math.round(bikeToStation.duration / 60)}min`,
            );
          } else {
            console.log("  → Station: Using fallback");
          }
          if (bikeToOldtown) {
            console.log(
              `  → Old Town: ${(bikeToOldtown.distance / 1000).toFixed(1)}km, ${Math.round(bikeToOldtown.duration / 60)}min`,
            );
          } else {
            console.log("  → Old Town: Using fallback");
          }

          console.log("🚶 WALKING ROUTES:");
          if (walkToStation) {
            console.log(
              `  → Station: ${(walkToStation.distance / 1000).toFixed(1)}km, ${Math.round(walkToStation.duration / 60)}min`,
            );
          } else {
            console.log("  → Station: Using fallback");
          }
          if (walkToOldtown) {
            console.log(
              `  → Old Town: ${(walkToOldtown.distance / 1000).toFixed(1)}km, ${Math.round(walkToOldtown.duration / 60)}min`,
            );
          } else {
            console.log("  → Old Town: Using fallback");
          }
        }
      } catch (error) {
        console.error("❌ Error fetching routes:", error);
        // Use fallback on error
        setBikeRoutes({
          "venue-station": fallbackVenueToStation,
          "venue-oldtown": fallbackVenueToOldtown,
          "venue-airport": fallbackVenueToAirport,
        });
        setWalkRoutes({
          "venue-station": fallbackVenueToStation,
          "venue-oldtown": fallbackVenueToOldtown,
          "venue-airport": fallbackVenueToAirport,
        });
        console.log("✅ Fallback routes loaded after error");
      } finally {
        setRouteLoading(false);
      }
    };

    fetchAllBikeRoutes();
  }, []);

  return (
    <MapContainer
      center={[47.06, 15.445]}
      zoom={13}
      style={{ height: "600px", width: "100%" }}
      scrollWheelZoom={true}
      className="grayscale-map"
    >
      {/* Map controller for zooming */}
      <MapController
        selectedRoute={selectedRoute}
        bikeRoutes={bikeRoutes}
        walkRoutes={walkRoutes}
      />
      {/* Black and white tile layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {/* Route lines showing transport connections */}

      {/* Bike Routes - Show based on selection */}
      {selectedRoute === "bike-venue-station" &&
        bikeRoutes["venue-station"] && (
          <Polyline
            positions={bikeRoutes["venue-station"]}
            pathOptions={{
              color: "#22c55e",
              weight: 5,
              opacity: 0.9,
              dashArray: "10, 5",
              lineCap: "round",
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>🚴 Bike Route</strong>
                <br />
                Venue ↔ Train Station
              </div>
            </Popup>
          </Polyline>
        )}

      {selectedRoute === "bike-venue-oldtown" &&
        bikeRoutes["venue-oldtown"] && (
          <Polyline
            positions={bikeRoutes["venue-oldtown"]}
            pathOptions={{
              color: "#22c55e",
              weight: 5,
              opacity: 0.9,
              dashArray: "10, 5",
              lineCap: "round",
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>🚴 Bike Route</strong>
                <br />
                Venue ↔ Old Town
              </div>
            </Popup>
          </Polyline>
        )}

      {selectedRoute === "bike-venue-airport" &&
        bikeRoutes["venue-airport"] && (
          <Polyline
            positions={bikeRoutes["venue-airport"]}
            pathOptions={{
              color: "#22c55e",
              weight: 5,
              opacity: 0.9,
              dashArray: "10, 5",
              lineCap: "round",
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>🚴 Bike Route</strong>
                <br />
                Venue ↔ Airport
              </div>
            </Popup>
          </Polyline>
        )}

      {/* Walking Routes - Show based on selection (now using real walking data) */}
      {selectedRoute === "walk-venue-station" &&
        walkRoutes["venue-station"] && (
          <Polyline
            positions={walkRoutes["venue-station"]}
            pathOptions={{
              color: "#3b82f6",
              weight: 5,
              opacity: 0.9,
              dashArray: "5, 5",
              lineCap: "round",
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>🚶 Walking Route</strong>
                <br />
                Venue ↔ Train Station
              </div>
            </Popup>
          </Polyline>
        )}

      {selectedRoute === "walk-venue-oldtown" &&
        walkRoutes["venue-oldtown"] && (
          <Polyline
            positions={walkRoutes["venue-oldtown"]}
            pathOptions={{
              color: "#3b82f6",
              weight: 5,
              opacity: 0.9,
              dashArray: "5, 5",
              lineCap: "round",
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>🚶 Walking Route</strong>
                <br />
                Venue ↔ Old Town
              </div>
            </Popup>
          </Polyline>
        )}

      {selectedRoute === "walk-venue-airport" &&
        walkRoutes["venue-airport"] && (
          <Polyline
            positions={walkRoutes["venue-airport"]}
            pathOptions={{
              color: "#3b82f6",
              weight: 5,
              opacity: 0.9,
              dashArray: "5, 5",
              lineCap: "round",
            }}
          >
            <Popup>
              <div className="text-sm">
                <strong>🚶 Walking Route</strong>
                <br />
                Venue ↔ Airport
              </div>
            </Popup>
          </Polyline>
        )}

      {/* Transit Route - Simple connection line */}
      {selectedRoute === "transit-venue-station" && (
        <Polyline
          positions={[
            [47.0581, 15.4503], // Venue
            [47.0708, 15.4177], // Station
          ]}
          pathOptions={{
            color: "#ef4444",
            weight: 6,
            opacity: 0.9,
            lineCap: "round",
          }}
        >
          <Popup>
            <div className="text-sm">
              <strong>🚊 Public Transport</strong>
              <br />
              Tram lines 1, 4, 7 available
              <br />
              <span className="text-xs text-gray-600">~15 minutes</span>
            </div>
          </Popup>
        </Polyline>
      )}

      {/* Show all bike routes when 'all' is selected */}
      {selectedRoute === "all" && (
        <>
          {bikeRoutes["venue-station"] && (
            <Polyline
              positions={bikeRoutes["venue-station"]}
              pathOptions={{
                color: "#22c55e",
                weight: 4,
                opacity: 0.6,
                dashArray: "10, 5",
                lineCap: "round",
              }}
            />
          )}
          {bikeRoutes["venue-oldtown"] && (
            <Polyline
              positions={bikeRoutes["venue-oldtown"]}
              pathOptions={{
                color: "#22c55e",
                weight: 4,
                opacity: 0.6,
                dashArray: "10, 5",
                lineCap: "round",
              }}
            />
          )}
        </>
      )}

      {/* Status indicator */}
      <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded shadow-lg text-xs z-[1000]">
        <div className="font-semibold mb-1">
          Mode:{" "}
          {selectedRoute.startsWith("bike")
            ? "🚴 Bike"
            : selectedRoute.startsWith("walk")
              ? "🚶 Walk"
              : selectedRoute.startsWith("transit")
                ? "🚊 Transit"
                : "🗺️ All"}
        </div>
        <div className="text-gray-600 text-xs">
          Routes: {bikeRoutes["venue-station"] ? "✅" : "⏳"}
        </div>
      </div>

      {/* Loading indicator */}
      {routeLoading && (
        <div className="absolute top-20 right-4 bg-white px-3 py-2 rounded shadow-lg text-sm z-[1000]">
          🔄 Loading routes...
        </div>
      )}

      {locations.map((location) => (
        <React.Fragment key={location.id}>
          {/* Marker */}
          <Marker
            position={location.position}
            icon={createCustomIcon(location.color)}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-base mb-1">{location.name}</h3>
                <p className="text-sm text-gray-700 mb-1">
                  {location.description}
                </p>
                <p className="text-xs text-gray-600">{location.details}</p>
              </div>
            </Popup>
          </Marker>

          {/* Subtle circle area for venue */}
          {location.category === "venue" && (
            <Circle
              center={location.position}
              radius={200}
              pathOptions={{
                color: location.color,
                fillColor: location.color,
                fillOpacity: 0.1,
                weight: 2,
                opacity: 0.4,
              }}
            />
          )}
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default MapContent;
