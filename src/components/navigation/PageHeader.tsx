
import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, description, badge }) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Home className="w-5 h-5" />
            <span className="text-sm">Home</span>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
            <p className="text-lg text-gray-600 mt-2">{description}</p>
          </div>
          {badge && (
            <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
              {badge}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
