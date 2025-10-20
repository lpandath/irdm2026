"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Euro, Hotel, Info, MapPin, Star } from "lucide-react";

import React from "react";

export const AccommodationSection: React.FC = () => {
  const handleViewOnMap = (mapId: string) => {
    const mapSection = document.getElementById("location");
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.location.hash = `location?marker=${mapId}`;
      }, 300);
    }
  };

  const accommodationOptions = [
    {
      area: "ibis Styles Graz Messe",
      description:
        "Budget design hotel near Messe/Stadthalle. Tram 6 to center.",
      distance: "~1.2km from venue",
      highlight: false,
      mapId: "ibis-styles",
      link: "https://all.accor.com/hotel/B9U3/index.de.shtml?utm_campaign=seo+maps&utm_medium=seo+maps&utm_source=google+Maps",
    },
    {
      area: "Best Western Plus Plaza Hotel Graz",
      description:
        "Opposite Messe/Stadthalle, easy access to TU Graz and city center.",
      distance: "~1.0km from venue",
      highlight: false,
      mapId: "plaza-graz",
      link: "https://plazahotels.de/hotel-graz/?utm_source=Google&utm_medium=mb_button&utm_campaign=graz",
    },
  ];

  const exploreOptions = [
    {
      name: "UNESCO World Heritage Old Town",
      description: "Historic center with beautiful architecture",
      mapId: "altstadt",
    },
    {
      name: "Schlossberg (Castle Hill)",
      description: "Panoramic city views from the historic fortress",
      mapId: "schlossberg",
    },
    {
      name: "Murinsel (Island in the Mur)",
      description: "Unique modern architecture in the river",
      mapId: "murinsel",
    },
    {
      name: "Kunsthaus",
      description: 'Museum of Modern Art - the "Friendly Alien"',
      mapId: "kunsthaus",
    },
  ];

  return (
    <section id="accommodation" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-semibold">Where to Stay</h3>
              <div className="relative group">
                <Info className="w-4 h-4 text-[#c6093b] cursor-help" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                  Less recommended: Griesplatz, Volksgarten in the evening
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Graz is a very walkable city with excellent public transport.
              Hotels in and around the city center offer good value and
              convenient access to the workshop venue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {accommodationOptions.map((option, index) => (
              <Card
                key={index}
                className="hover:shadow-lg hover:border-2 hover:border-[#c6093b] transition-all"
              >
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-[#c6093b]" />
                    <CardTitle className="text-lg">{option.area}</CardTitle>
                  </div>
                  {option.highlight && (
                    <div className="text-xs text-[#c6093b] font-semibold">
                      Workshop Dinner Location
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-700">{option.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{option.distance}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    {option.mapId && (
                      <button
                        onClick={() => handleViewOnMap(option.mapId!)}
                        className="inline-flex items-center gap-1 text-sm text-[#c6093b] hover:underline font-medium cursor-pointer"
                      >
                        <MapPin className="w-4 h-4" />
                        View on map
                      </button>
                    )}
                    {option.link && (
                      <a
                        href={option.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-600 hover:underline"
                      >
                        Book
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Explore Graz</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Graz offers plenty to discover during your free time. Explore
              traditional Styrian cuisine and wine taverns (
              <a
                href="https://www.steiermark.com/de/Region-Graz/Genuss/Kulinarik/Buschenschank"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gray-400 hover:decoration-gray-600"
              >
                Buschenschank
              </a>
              ) throughout the city.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {exploreOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#c6093b] hover:shadow-md transition-all"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">
                      {option.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {option.description}
                    </p>
                    <button
                      onClick={() => handleViewOnMap(option.mapId)}
                      className="inline-flex items-center gap-1 text-sm text-[#c6093b] hover:underline font-medium"
                    >
                      <MapPin className="w-4 h-4" />
                      View on map
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
