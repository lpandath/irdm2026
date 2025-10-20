import { Building, Mail, MapPin } from "lucide-react";

import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Contact & Organization</h2>
            <p className="text-gray-700 leading-relaxed">
              The workshop is organized by the Library of TU Graz. For questions
              or more information, please get in touch.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Building className="w-6 h-6 text-[#c6093b] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-lg mb-1">
                    Library Technical University of Graz
                  </div>
                  <div className="text-gray-600">
                    Research Data Management Services
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#c6093b] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Address</div>
                  <div className="text-gray-700">
                    Inffeldgasse 13
                    <br />
                    8010 Graz
                    <br />
                    Austria
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#c6093b] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <a
                    href="mailto:rdm@tugraz.at"
                    className="text-[#c6093b] hover:underline"
                  >
                    rdm@tugraz.at
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                For questions about registration, the program, or local
                arrangements, please don't hesitate to contact us. We're happy
                to help!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
