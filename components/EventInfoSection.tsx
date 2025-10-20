import { BookOpen, Calendar, Clock, Coffee, MapPin, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import React from "react";

export const EventInfoSection: React.FC = () => {
  return (
    <section id="event-info" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-[#c6093b] pl-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The InvenioRDM 2026 partner meeting and workshop will take place
              from February 23 to 27, 2026 at TU Graz in Austria, featuring the
              innovative Invenio-Instance-Showcase format.
            </p>

            <p className="text-gray-600 leading-relaxed">
              This format encourages active participation, knowledge sharing,
              and collaborative problem-solving among all InvenioRDM partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
