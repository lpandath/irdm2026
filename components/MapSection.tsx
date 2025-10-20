"use client";

import React from "react";
import dynamic from "next/dynamic";

const locations = [
  {
    id: "venue",
    name: "Workshop Venue",
    category: "venue",
    position: [47.059296, 15.463373] as [number, number],
    description: "TU Graz, Inffeldgasse 13",
    details: "Main workshop location with lecture halls, WiFi, and facilities",
    color: "#c6093b",
  },
  {
    id: "hauptbahnhof",
    name: "Graz Hauptbahnhof",
    category: "transport",
    position: [47.0708, 15.4177] as [number, number],
    description: "Main Train Station",
    details: "Take tram 1, 4, or 7 to TU Graz (15 min)",
    color: "#0066cc",
  },
  {
    id: "ibis-styles",
    name: "ibis Styles Graz Messe",
    category: "accommodation",
    position: [47.062947, 15.45821] as [number, number],
    description: "Budget design hotel near Messe/Stadthalle",
    details: "Waltendorfer Gürtel 8, 8010 Graz",
    color: "#22c55e",
  },
  {
    id: "workshop-dinner",
    name: "Zur L'Osteria",
    category: "restaurant",
    position: [47.0703, 15.4392] as [number, number],
    description: "Workshop Dinner Location",
    details: "Mehlplatz 1, 8010 Graz",
    color: "#22c55e",
  },
  {
    id: "plaza-graz",
    name: "Best Western Plus Plaza Hotel Graz",
    category: "accommodation",
    position: [47.05862, 15.445245] as [number, number],
    description: "Opposite Messe/Stadthalle near TU Graz",
    details: "Conrad-von-Hötzendorf-Straße 60, 8010 Graz",
    color: "#22c55e",
  },
  {
    id: "altstadt",
    name: "Graz Old Town",
    category: "poi",
    position: [47.071734, 15.436352] as [number, number],
    description: "UNESCO World Heritage Site",
    details:
      "Historic center with hotels, restaurants, and architecture. Visit: https://whc.unesco.org/en/list/931/",
    color: "#f59e0b",
  },
  {
    id: "schlossberg",
    name: "Schlossberg",
    category: "poi",
    position: [47.076261, 15.438067] as [number, number],
    description: "Castle Hill",
    details:
      "Panoramic city views, clock tower, historic fortifications. Visit: https://www.graztourismus.at/en/sightseeing-culture/sights/sights-around-the-schlossberg",
    color: "#f59e0b",
  },
  {
    id: "murinsel",
    name: "Murinsel",
    category: "poi",
    position: [47.073139, 15.434557] as [number, number],
    description: "Island in the Mur",
    details:
      "Unique modern architecture, cafe, events space. Visit: https://www.graztourismus.at/en/sightseeing-culture/sights/island-in-the-mur_shg_1470",
    color: "#f59e0b",
  },
  {
    id: "kunsthaus",
    name: "Kunsthaus Graz",
    category: "poi",
    position: [47.07935, 15.431424] as [number, number],
    description: "Museum of Modern Art",
    details:
      'The "Friendly Alien" - contemporary art exhibitions. Visit: https://www.museum-joanneum.at/kunsthaus-graz',
    color: "#f59e0b",
  },
  {
    id: "airport",
    name: "Graz Airport",
    category: "transport",
    position: [46.9911, 15.4396] as [number, number],
    description: "Graz Airport (GRZ)",
    details: "Bus connection to city center",
    color: "#0066cc",
  },
];

const MapContent = dynamic(() => import("./MapContentSimple"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full bg-gray-100 flex items-center justify-center">
      <div className="text-gray-500">Loading map...</div>
    </div>
  ),
});

export const MapSection: React.FC = () => {
  return (
    <section id="location" className="w-full relative">
      <MapContent locations={locations} />
    </section>
  );
};
