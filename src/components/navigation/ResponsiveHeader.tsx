
import React from "react";
import { MobileNav } from "./MobileNav";

export const ResponsiveHeader = () => {
  return (
    <header className="lg:hidden bg-white shadow-sm border-b px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-[#0c0f24] flex items-center justify-center">
            <span className="text-white text-sm font-bold">eXp</span>
          </div>
          <h1 className="text-lg font-semibold text-gray-900">Navigation</h1>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};
