"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Building2 } from "lucide-react";
import { Button } from "./ui/button";
import React from "react";

export const FloorPlanSection: React.FC = () => {
  return (
    <section id="floor-plan" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Floor Plan</h2>
              <p className="text-sm text-gray-600">
                View the building layout for Inffeldgasse 13
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  View Floor Plan
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle>
                    Ground Floor Layout - Inffeldgasse 13
                  </DialogTitle>
                  <div className="mt-2 mb-2">
                    <div className="text-xs font-semibold text-gray-700 mb-1">
                      AAT: Floor Plan
                    </div>
                    <ul className="text-xs list-disc pl-4 space-y-1">
                      <li>
                        <a
                          href="https://online.tugraz.at/tug_online/wbraum.editRaum?pMaskAction=R&pRaumNr=16583&chksum=12"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:underline"
                        >
                          Room 16583
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://online.tugraz.at/tug_online/wbraum.editRaum?pMaskAction=R&pRaumNr=16581&chksum=12"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400  hover:underline"
                        >
                          Room 16581
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://online.tugraz.at/tug_online/wbraum.editRaum?pMaskAction=R&pRaumNr=16578&chksum=36"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400  hover:underline"
                        >
                          Room 16578
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://online.tugraz.at/tug_online/wbraum.editRaum?pMaskAction=R&pRaumNr=16579&chksum=72"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400  hover:underline"
                        >
                          Room 16579
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <DialogDescription>
                    TU Graz building floor plan with lecture halls, facilities,
                    and amenities
                  </DialogDescription> */}
                </DialogHeader>
                {/* <div className="mt-4 bg-white">
                  <img
                    src={`${process.env.NODE_ENV === "production" ? "/irdm2026" : ""}/PZ2EG.png`}
                    alt="Floor plan of TU Graz building at Inffeldgasse 13"
                    className="w-full h-auto"
                    style={{ imageRendering: "crisp-edges" }}
                  />
                </div> */}
              </DialogContent>
            </Dialog>
          </div>

          <div className="text-sm text-gray-600">
            Facilities include lecture halls, WiFi (eduroam), coffee points, and
            accessible elevators.
          </div>
        </div>
      </div>
    </section>
  );
};
