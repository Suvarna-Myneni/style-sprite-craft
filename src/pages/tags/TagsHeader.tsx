
import { Link } from "react-router-dom";
import { ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TagsHeader = () => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Tags</h1>
              <p className="text-lg text-gray-600 mt-2">Categorize and label content with contextual information</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Tag className="h-8 w-8 text-[#1B489B]" />
          </div>
        </div>
      </div>
    </div>
  );
};
