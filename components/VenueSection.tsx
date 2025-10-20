import { Bike, Building2, MapPin, Plane, Train } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import React from "react";

export const VenueSection: React.FC = () => {
  const travelOptions = [
    {
      icon: Plane,
      title: "By Plane",
      description:
        "Graz Airport (GRZ) or Vienna Airport with train connection (2.5h)",
    },
    {
      icon: Train,
      title: "By Train/Tram",
      description: "Graz Hauptbahnhof, then tram lines 1, 4, or 7 to TU Graz",
    },
    {
      icon: Bike,
      title: "By Bike",
      description:
        'Bike-friendly city with dedicated lanes. "nextbike" rental system available',
    },
  ];

  return (
    <section id="venue" className="pt-12 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#c6093b]" />
                TU Graz
              </h3>
              <p className="text-gray-700 mb-4">
                Graz University of Technology (TU Graz) is one of Austria’s
                leading universities for science and engineering, combining
                cutting-edge research, innovative teaching, and strong
                international collaboration.
              </p>
            </div>

            <div>
              <h3 className="font-normal text-gray-600 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400" />
                Getting to the Workshop
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <span className="font-medium text-[#c6093b]">By Train: </span>
                  Graz Airport (GRZ) or Vienna Airport (VIE) with train
                  connection to Graz.
                </div>
                <div>
                  <span className="font-medium text-[#c6093b]">
                    Local Transport:{" "}
                  </span>
                  S-Bahn, trams (lines 1, 4, or 7), and buses to "Schulzentrum
                  St.Peter" stop.
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  <a
                    href="https://routenplaner.holding-graz.at/de/trip?lng=de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:underline"
                  >
                    Graz Route Planner
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
