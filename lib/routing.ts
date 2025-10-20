function decodePolyline(encoded: string): [number, number][] {
  const coordinates: [number, number][] = [];
  let index = 0;
  let lat = 0;
  let lng = 0;

  while (index < encoded.length) {
    let b;
    let shift = 0;
    let result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlat = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lat += dlat;

    shift = 0;
    result = 0;
    do {
      b = encoded.charCodeAt(index++) - 63;
      result |= (b & 0x1f) << shift;
      shift += 5;
    } while (b >= 0x20);
    const dlng = (result & 1) !== 0 ? ~(result >> 1) : result >> 1;
    lng += dlng;

    coordinates.push([lat / 1e5, lng / 1e5]);
  }

  return coordinates;
}

export interface RouteCoordinate {
  latitude: number;
  longitude: number;
}

export interface RouteResponse {
  coordinates: [number, number][];
  distance: number; // in meters
  duration: number; // in seconds
}

export async function getRoute(
  start: [number, number],
  end: [number, number],
  profile:
    | "cycling-regular"
    | "foot-walking"
    | "driving-car" = "cycling-regular",
): Promise<RouteResponse | null> {
  const apiKey = process.env.NEXT_PUBLIC_OPENROUTE_API_KEY;

  console.log("API Key check:", {
    exists: !!apiKey,
    length: apiKey?.length,
    firstChars: apiKey?.substring(0, 20) + "...",
  });

  if (!apiKey || apiKey === "your_api_key_here") {
    console.error("OpenRouteService API key not configured!");
    console.error(
      "Please create .env.local with: NEXT_PUBLIC_OPENROUTE_API_KEY=your_key",
    );
    return null;
  }

  try {
    console.log(`Fetching ${profile} route from OpenRouteService...`);
    console.log("📍 Route:", `[${start}] → [${end}]`);

    const requestBody = {
      coordinates: [
        [start[1], start[0]], // OpenRouteService uses [lng, lat]
        [end[1], end[0]],
      ],
    };
    console.log("Request body:", requestBody);

    const response = await fetch(
      `https://api.openrouteservice.org/v2/directions/${profile}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: apiKey,
        },
        body: JSON.stringify(requestBody),
      },
    );

    console.log("📥 Response status:", response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `OpenRouteService API error: ${response.status}`,
        errorText,
      );

      try {
        const errorJson = JSON.parse(errorText);
        console.error("Error details:", errorJson);
      } catch (e) {}

      throw new Error(`OpenRouteService API error: ${response.status}`);
    }

    const data = await response.json();
    console.log("API response received");
    console.log("Full response:", data);

    if (!data.routes || data.routes.length === 0) {
      console.error("No routes in response");
      return null;
    }

    const route = data.routes[0];
    console.log("📍 Route object keys:", Object.keys(route));
    console.log("📍 Geometry type:", typeof route.geometry);

    let coordinates: [number, number][] = [];

    if (typeof route.geometry === "string") {
      console.log("Decoding polyline string...");
      try {
        const decoded = decodePolyline(route.geometry);
        console.log(
          `Decoded ${decoded.length} coordinate points from polyline`,
        );
        coordinates = decoded;
      } catch (e) {
        console.error("Could not decode polyline:", e);
        return null;
      }
    } else if (
      route.geometry?.coordinates &&
      Array.isArray(route.geometry.coordinates)
    ) {
      console.log("Using GeoJSON coordinates...");
      const coords = route.geometry.coordinates;
      console.log(`Found ${coords.length} coordinate points from GeoJSON`);
      coordinates = coords.map((coord: number[]) => [coord[1], coord[0]]);
    } else {
      console.error("Unknown geometry format:", route.geometry);
      return null;
    }

    return {
      coordinates,
      distance: route.summary?.distance || 0,
      duration: route.summary?.duration || 0,
    };
  } catch (error) {
    console.error("Error fetching bike route:", error);
    return null;
  }
}

export async function getBikeRoute(
  start: [number, number],
  end: [number, number],
): Promise<RouteResponse | null> {
  return getRoute(start, end, "cycling-regular");
}

export async function getWalkingRoute(
  start: [number, number],
  end: [number, number],
): Promise<RouteResponse | null> {
  return getRoute(start, end, "foot-walking");
}

export function formatDistance(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)}m`;
  }
  return `${(meters / 1000).toFixed(1)}km`;
}

export function formatDuration(seconds: number): string {
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) {
    return `${minutes}min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}min`;
}
