import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, MapPin } from "lucide-react";

import React from "react";
import { Tabs } from "@/components/ui/tabs";

export const TopicsSection: React.FC = () => {
  const mondayContent = (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm font-semibold">
        <div className="text-[#c6093b]">In-Person (local timezone)</div>
        <div className="text-gray-600">Remote (UTC)</div>
      </div>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            10:00 - 11:30
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#c6093b]" />
            Campus Tour
            <span className="text-xs font-normal text-gray-500">
              (Optional)
            </span>
          </h4>
          <p className="text-gray-600 text-xs">
            Guided tour of TU Graz buildings at Inffeldgasse.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            12:00 - 14:00
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1">
            Registration & Check-in
          </h4>
          <p className="text-gray-600 text-xs">
            Participant registration and table assignment distribution.
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                14:00 - 15:30
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#c6093b]" />
                Presentation Session 1
              </h4>
              <p className="text-gray-600 text-xs">
                Interactive presentations at assigned tables with group
                discussions.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-amber-50">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                15:30 - 16:00
              </div>
              <h4 className="font-semibold text-base text-gray-900">
                Coffee Break
              </h4>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                16:00 - 17:30
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1 flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#c6093b]" />
                Presentation Session 2
              </h4>
              <p className="text-gray-600 text-xs">
                Interactive presentations at assigned tables with group
                discussions.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-400">
          <CardContent id="remote-participants" className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              1:00pm - 4:30pm
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Afternoon Session
            </h4>
            <p className="text-gray-600 text-xs">
              Open Space discussions and presentations for online participants
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const tuesdayContent = (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm font-semibold">
        <div className="text-[#c6093b]">In-Person (local timezone)</div>
        <div className="text-gray-600">Remote (UTC)</div>
      </div>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            09:00 - 10:00
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1 flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#c6093b]" />
            Presentation Session 1
          </h4>
          <p className="text-gray-600 text-xs">
            Interactive presentations at assigned tables with group discussions.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow bg-amber-50">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            10:00 - 10:30
          </div>
          <h4 className="font-semibold text-base text-gray-900">
            Coffee Break
          </h4>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            10:30 - 12:00
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1 flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#c6093b]" />
            Presentation Session 2
          </h4>
          <p className="text-gray-600 text-xs">
            Interactive presentations at assigned tables with group discussions.
          </p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow bg-amber-50">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            12:00 - 13:30
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1">Lunch</h4>
          <p className="text-xs text-gray-600">
            <a
              href="https://www.mensen.at/standort/mensa-m-cafe-inffeldgasse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:underline"
            >
              Mensa at Inffeldgasse
            </a>{" "}
            on campus
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-600">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                13:30 - 15:00
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                v14 Discussion
              </h4>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-amber-50">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                15:00 - 15:30
              </div>
              <h4 className="font-semibold text-base text-gray-900">
                Coffee Break
              </h4>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-[#c6093b]">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                15:30 - 17:00
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                Presentations
              </h4>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-400">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              12:30pm - 4:00pm
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Afternoon Sessions
            </h4>
            <p className="text-gray-600 text-xs">
              v14 Discussion and presentations available for remote participants
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const wednesdayContent = (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm font-semibold">
        <div className="text-[#c6093b]">In-Person (local timezone)</div>
        <div className="text-gray-600">Remote (UTC)</div>
      </div>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            09:00 - 10:00
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1">
            Whole Group Session
          </h4>
          <p className="text-gray-600 text-xs">Wednesday Topics</p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            10:00 - 12:00
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1">
            Open Space Session
          </h4>
          <p className="text-gray-600 text-xs">Morning Session</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        <Card className="hover:shadow-lg transition-shadow bg-amber-50">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              12:00 - 13:00
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Lunch Break
            </h4>
            <p className="text-xs text-gray-600">
              <a
                href="https://www.mensen.at/standort/mensa-m-cafe-inffeldgasse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline"
              >
                Mensa at Inffeldgasse
              </a>{" "}
              on campus
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                13:00 - 14:30
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                Open Space Session
              </h4>
              <p className="text-gray-600 text-xs">Afternoon Session</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-amber-50">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                14:30 - 15:00
              </div>
              <h4 className="font-semibold text-base text-gray-900">
                Coffee Break
              </h4>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                15:00 - 16:30
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                Open Space Session
              </h4>
              <p className="text-gray-600 text-xs">Afternoon Session</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                16:30 - 17:30
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                Wrap up: Results
              </h4>
              <p className="text-gray-600 text-xs">
                Wednesday Wrap up: Results
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-400">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              12:00pm - 4:30pm
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Open Space Sessions
            </h4>
            <p className="text-gray-600 text-xs">
              Afternoon sessions available for remote participants
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const thursdayContent = (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm font-semibold">
        <div className="text-[#c6093b]">In-Person (local timezone)</div>
        <div className="text-gray-600">Remote (UTC)</div>
      </div>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            09:00 - 10:00
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1">
            Whole Group Session
          </h4>
          <p className="text-gray-600 text-xs">Thursday Topics</p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            10:00 - 12:00
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1">
            Open Space Session
          </h4>
          <p className="text-gray-600 text-xs">Morning Session</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        <Card className="hover:shadow-lg transition-shadow bg-amber-50">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              12:00 - 13:00
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Lunch Break
            </h4>
            <p className="text-xs text-gray-600">
              <a
                href="https://www.mensen.at/standort/mensa-m-cafe-inffeldgasse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline"
              >
                Mensa at Inffeldgasse
              </a>{" "}
              on campus
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                13:00 - 14:30
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                Open Space Session
              </h4>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow bg-amber-50">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                14:30 - 15:00
              </div>
              <h4 className="font-semibold text-base text-gray-900">
                Coffee Break
              </h4>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                15:00 - 16:30
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                Open Space Session
              </h4>
              <p className="text-gray-600 text-xs">Afternoon Session</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
            <CardContent className="p-4">
              <div className="text-sm font-semibold text-gray-900 mb-1">
                16:30 - 17:30
              </div>
              <h4 className="font-semibold text-base text-gray-900 mb-1">
                Wrap up: Results
              </h4>
            </CardContent>
          </Card>
        </div>

        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-400">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              12:00pm - 4:30pm
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Open Space Sessions
            </h4>
            <p className="text-gray-600 text-xs">
              Afternoon sessions available for remote participants
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const fridayContent = (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm font-semibold">
        <div className="text-[#c6093b]">In-Person (local timezone)</div>
        <div className="text-gray-600">Remote (UTC)</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              09:00 - 09:30
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Whole Group Session
            </h4>
            <p className="text-gray-600 text-xs">Friday Topics</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-400">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              09:00 - 09:30
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Whole Group Session
            </h4>
            <p className="text-gray-600 text-xs">Friday Topics</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            09:30 - 11:00
          </div>
          <h4 className="font-semibold text-base text-gray-900 mb-1">
            Open Space Session
          </h4>
          <p className="text-gray-600 text-xs">Morning Session</p>
        </CardContent>
      </Card>

      <Card className="hover:shadow-lg transition-shadow bg-amber-50">
        <CardContent className="p-4">
          <div className="text-sm font-semibold text-gray-900 mb-1">
            11:00 - 11:30
          </div>
          <h4 className="font-semibold text-base text-gray-900">
            Coffee Break
          </h4>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-purple-600">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              11:30 - 12:30
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Whole Group Session
            </h4>
            <p className="text-gray-600 text-xs">
              Results Presentation, Outlook and Farewell
            </p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-400">
          <CardContent className="p-4">
            <div className="text-sm font-semibold text-gray-900 mb-1">
              11:30 - 12:30
            </div>
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              Whole Group Session
            </h4>
            <p className="text-gray-600 text-xs">
              Results Presentation, Outlook and Farewell
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const weeklyTabs = [
    { id: "monday", label: "Monday", content: mondayContent },
    { id: "tuesday", label: "Tuesday", content: tuesdayContent },
    { id: "wednesday", label: "Wednesday", content: wednesdayContent },
    { id: "thursday", label: "Thursday", content: thursdayContent },
    { id: "friday", label: "Friday", content: fridayContent },
  ];

  return (
    <section id="topics" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            {/* <h2 className="text-3xl font-bold mb-4"> */}
            <h3 className="text-2xl font-semibold mb-4">
              Topics & Interactive Format
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The workshop will cover all aspects of the InvenioRDM project -
              from development and future roadmap to deployment, maintenance,
              dissemination, onboarding, and governance - offering plenty of
              opportunities for discussion and exchange.
            </p>
            {/* <p className="text-gray-600 leading-relaxed">
              The rest of the schedule will be determined as an{" "}
              <strong>open space event</strong>, where participants will decide
              on the topics to be discussed. Please suggest topics that you want
              to discuss in the Open Space sessions or present on the first
              afternoon in advance.
            </p> */}
          </div>

          <div className="mb-6 bg-white border border-gray-200 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Open Space Sessions</h3>
            <p className="text-sm text-gray-700 mb-3">
              Most of the workshop will follow the Open Space format, where
              participants propose and lead discussions on topics they're
              passionate about. This creates a dynamic, participant-driven
              agenda.
            </p>
            <p id="topic-suggestions-survey" className="text-sm text-gray-600">
              Want to suggest a topic? Please add your ideas to the{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1juqrLaQeI6Olks8x7jisx65G0M-1XhjZmpz4Z4FaLdU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 hover:underline font-medium cursor-pointer transition-colors border border-[#c6093b] hover:border-[#c6093b] rounded px-1 py-0.5"
              >
                planning document
              </a>{" "}
              before the event.
            </p>
          </div>

          <Card id="invenio-showcase" className="border-l-4 border-[#c6093b]">
            <CardHeader>
              <CardTitle className="text-xl">
                Invenio-Instance-Showcase
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h3 className=" text-gray-700 font-light mb-2">
                  Instance Presentations (Monday)
                </h3>
                <p className="text-gray-700 font-light text-sm mb-3">
                  Each partner will present their InvenioRDM instance with a
                  short 1-2 slide pitch (1 minute), followed by room-based
                  presentations where participants can ask questions and explore
                  each instance in detail.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Tabs tabs={weeklyTabs} />
          </div>
        </div>
      </div>
    </section>
  );
};
