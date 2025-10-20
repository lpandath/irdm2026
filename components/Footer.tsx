import { Building, Mail, MapPin } from "lucide-react";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Building className="w-5 h-5 text-[#c6093b]" />
                <div className="font-semibold text-white">Organized by</div>
              </div>
              <div className="text-sm">
                <a
                  href="https://www.tugraz.at/en/sites/library-and-archives/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline block"
                >
                  Library and Archiv
                </a>
                <a
                  href="https://www.tugraz.at/sites/rdm/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:underline block"
                >
                  Research Data Management RDM
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#c6093b]" />
                <div className="font-semibold text-white">Address</div>
              </div>
              <div className="text-sm text-gray-400">
                Technikerstraße 4<br />
                8010 Graz
                <br />
                Austria
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-[#c6093b]" />
                <div className="font-semibold text-white">Contact Persons</div>
              </div>
              <div className="text-sm space-y-1">
                <a
                  href="mailto:christoph.ladurner@tugraz.at"
                  className="block text-gray-300 hover:underline"
                >
                  christoph.ladurner@tugraz.at
                </a>
                <a
                  href="mailto:lthaci@tugraz.at"
                  className="block text-gray-300 hover:underline"
                >
                  lthaci@tugraz.at
                </a>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Questions about registration or the program? Get in touch!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            © 2026 TU Graz - InvenioRDM Workshop
          </div>
        </div>
      </div>
    </footer>
  );
};
