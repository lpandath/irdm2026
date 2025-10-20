import { Calendar, MapPin, Users } from "lucide-react";

import { Button } from "./ui/button";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 text-[#c6093b] text-sm font-medium">
            February 23-27, 2026
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            InvenioRDM 2026 Partner Meeting
          </h1>

          {/* <div className="mb-4">
            <span className="inline-block bg-[#c6093b] text-white px-3 py-1 rounded-full text-sm font-medium">
              Invenio-Instance-Showcase
            </span>
          </div> */}

          <p className="text-lg text-gray-600 mb-8">
            he InvenioRDM 2026 Partner Meeting and Workshop will be held at Graz
            University of Technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button
              className="bg-[#c6093b] text-white hover:bg-[#a00730]"
              asChild
            >
              <a href="#registration">Register Now</a>
            </Button>

            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
              asChild
            >
              <a href="#location">Location</a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#c6093b]" />
              <span>TU Graz, Inffeldgasse 13, Graz</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#c6093b]" />
              <span>09:00 - 17:00 daily</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
