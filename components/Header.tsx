import React from "react";

export const Header: React.FC = () => {
  const basePath = process.env.NODE_ENV === "production" ? "/irdm2026" : "";

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <img
              src={`${basePath}/Bibliothek-Archiv-Icon.jpg`}
              alt="Library and Archives"
              className="h-8 w-8"
            />
            <div className="text-left text-[10px] font-light text-gray-600 leading-tight">
              <div>LIBRARY</div>
              <div>AND</div>
              <div>ARCHIVES</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right text-[10px] text-gray-600 leading-tight">
              <div>SCIENCE</div>
              <div>PASSION</div>
              <div>TECHNOLOGY</div>
            </div>
            <img
              src={`${basePath}/logo-RGB.png`}
              alt="TU Graz Logo"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
