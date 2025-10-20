"use client";

import * as React from "react";

import { ChevronDown } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string | null;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab = null }) => {
  const [activeTab, setActiveTab] = React.useState<string | null>(defaultTab);

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#remote-participants") {
        setActiveTab("monday");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  const activeContent = activeTab
    ? tabs.find((tab) => tab.id === activeTab)?.content
    : null;

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-6 py-3 font-semibold transition-colors relative flex items-center gap-1 ${
              activeTab === tab.id
                ? "text-[#c6093b] border-b-2 border-[#c6093b]"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                activeTab === tab.id ? "rotate-180" : ""
              }`}
            />
          </button>
        ))}
      </div>
      {activeContent && <div className="mt-6">{activeContent}</div>}
    </div>
  );
};
