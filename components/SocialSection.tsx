import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

import React from "react";

export const SocialSection: React.FC = () => {
  return (
    <section id="social" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Social Events</h2>
            <p className="text-gray-700 leading-relaxed">
              Connect with fellow participants and enjoy the best of Graz
              cuisine and culture.
            </p>
          </div>

          <Card className="border-l-4 border-[#c6093b]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-50 rounded-lg">
                  <Users className="w-6 h-6 text-[#c6093b]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    Workshop Dinner
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join us for dinner to continue discussions in a relaxed
                    atmosphere and get to know your fellow participants better.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pl-16">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-semibold">Date</div>
                    <div className="text-sm">Tuesday 24 February</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-semibold">Time</div>
                    <div className="text-sm">from 18:30</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-semibold">Location</div>
                    <div className="text-sm">Graz — Mehlplatz 1, 8010 Graz</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-sm font-semibold">Cost</div>
                    <div className="text-sm">Self-pay</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pl-16 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-sm mb-2">Restaurant</h4>
                <p className="text-sm text-gray-700 font-medium">
                  <a
                    href="https://losteria.net/at/restaurants/restaurant/graz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c6093b] hover:underline"
                  >
                    Zur L'Osteria
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
