import { Calendar as CalendarIcon, ExternalLink, FileText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Button } from "./ui/button";
import React from "react";

export const RegistrationSection: React.FC = () => {
  const indicoEventUrl = "https://indico.tugraz.at/event/118/overview";
  const indicoFormRegistrationUrl =
    "https://indico.tugraz.at/event/118/manage/registration/120/form/";

  return (
    <section id="registration" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Registration</h2>

          <div className="space-y-6">
            <p className="text-gray-700">
              Full program details and registration are available on Indico.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button className="inline-flex items-center gap-2" asChild>
                <a
                  href={indicoFormRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register on Indico
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>

              <div className="text-sm text-gray-600">
                Registration closes February 19, 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
