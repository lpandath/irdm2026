"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

import React from "react";
import { Tabs } from "@/components/ui/tabs";

export const ScheduleSection: React.FC = () => {
  const mondayContent = (
    <div className="space-y-4">
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-gray-900">10:00</div>
              <div className="text-sm text-gray-500">11:30</div>
            </div>
            <div className="flex-1 border-l-2 border-gray-300 pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#c6093b]" />
                Campus Tour
                <span className="text-sm font-normal text-gray-500 ml-2">
                  (Optional)
                </span>
              </h4>
              <p className="text-gray-600 text-sm">
                Guided tour of TU Graz buildings at Inffeldgasse. Perfect for
                early arrivals who want to explore the campus.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-gray-900">12:00</div>
              <div className="text-sm text-gray-500">14:00</div>
            </div>
            <div className="flex-1 border-l-2 border-gray-300 pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Registration &amp; Check-in
              </h4>
              <p className="text-gray-600 text-sm">
                Participant registration and table assignment distribution.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-[#c6093b]">14:30</div>
              <div className="text-sm text-gray-500">15:30</div>
            </div>
            <div className="flex-1 border-l-2 border-[#c6093b] pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#c6093b]" />
                Instance Pitch Session 1
              </h4>
              <p className="text-gray-600 text-sm">
                1-minute pitches: Each partner presents their InvenioRDM
                instance with 1-2 slides, followed by room-based detailed
                presentations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow bg-amber-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-gray-900">15:30</div>
              <div className="text-sm text-gray-500">16:00</div>
            </div>
            <div className="flex-1 border-l-2 border-amber-400 pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Coffee Break
              </h4>
              <p className="text-gray-600 text-sm">
                Refreshments and networking.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-[#c6093b]">16:00</div>
              <div className="text-sm text-gray-500">17:30</div>
            </div>
            <div className="flex-1 border-l-2 border-[#c6093b] pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#c6093b]" />
                Instance Pitch Session 2
              </h4>
              <p className="text-gray-600 text-sm">
                Continued 1-minute pitches and room-based detailed presentations
                for remaining instances.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500 bg-green-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-green-700">14:00</div>
              <div className="text-sm text-gray-500">17:30</div>
            </div>
            <div className="flex-1 border-l-2 border-green-500 pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                Remote Participants Session
              </h4>
              <p className="text-gray-600 text-sm">
                Separate online sessions for remote attendees. All participants
                (in-person and remote) will join together for final workshop
                sessions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const tuesdayContent = (
    <div className="space-y-4">
      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-[#c6093b]">09:00</div>
              <div className="text-sm text-gray-500">12:00</div>
            </div>
            <div className="flex-1 border-l-2 border-[#c6093b] pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#c6093b]" />
                Instance Presentations - Day 2
              </h4>
              <p className="text-gray-600 text-sm">
                Room-based detailed presentations and Q&A sessions for all
                InvenioRDM instances.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow bg-amber-50">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-gray-900">12:00</div>
              <div className="text-sm text-gray-500">13:30</div>
            </div>
            <div className="flex-1 border-l-2 border-amber-400 pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Lunch Break
              </h4>
              <p className="text-gray-600 text-sm">
                Networking lunch and informal discussions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-right">
              <div className="text-sm font-semibold text-[#c6093b]">13:30</div>
              <div className="text-sm text-gray-500">17:00</div>
            </div>
            <div className="flex-1 border-l-2 border-[#c6093b] pl-4">
              <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#c6093b]" />
                Instance Deep Dives
              </h4>
              <p className="text-gray-600 text-sm">
                Extended Q&A sessions and hands-on exploration of selected
                instances.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const wednesdayContent = (
    <div className="space-y-4">
      <p className="text-gray-600 text-center py-8">Schedule coming soon</p>
    </div>
  );

  const weeklyTabs = [
    { id: "monday", label: "Monday", content: mondayContent },
    { id: "tuesday", label: "Tuesday", content: tuesdayContent },
    { id: "wednesday", label: "Wednesday", content: wednesdayContent },
  ];

  return (
    <section id="schedule" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <Tabs tabs={weeklyTabs} defaultTab="monday" />

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Table assignments will be based on Indico
            registrations to ensure balanced groups with one presenter per
            table. Assignments will be provided during registration.
          </p>
        </div>
      </div>
    </section>
  );
};
