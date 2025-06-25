
import { Tag } from "lucide-react";

export const TagsFooter = () => {
  return (
    <div className="bg-[#0C0F24] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Tag className="h-6 w-6 text-[#1B489B]" />
            <span className="text-sm">Transaction Calculator Tags Component Guide</span>
          </div>
          <div className="text-sm text-gray-400">
            Consistent labeling and categorization
          </div>
        </div>
      </div>
    </div>
  );
};
