
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import * as LucideIcons from "lucide-react";

const Icons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Common icon categories with their respective icons
  const iconCategories = {
    "Navigation": ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "ChevronLeft", "ChevronRight", "Home", "Menu", "X"],
    "Actions": ["Plus", "Minus", "Edit", "Trash2", "Save", "Download", "Upload", "Copy", "Share"],
    "Communication": ["Mail", "Phone", "MessageCircle", "Bell", "Send", "Reply", "Forward"],
    "Media": ["Play", "Pause", "Stop", "Volume2", "VolumeX", "Camera", "Image", "Video"],
    "Files": ["File", "FileText", "Folder", "FolderOpen", "Download", "Upload", "Paperclip"],
    "Interface": ["Settings", "Search", "Filter", "Grid", "List", "Calendar", "Clock", "Eye", "EyeOff"],
    "Status": ["Check", "X", "AlertCircle", "Info", "HelpCircle", "Loader", "CheckCircle", "XCircle"],
    "Social": ["Heart", "Star", "ThumbsUp", "ThumbsDown", "Share2", "Bookmark", "Users"]
  };

  const allIcons = Object.values(iconCategories).flat();
  
  const filteredCategories = Object.entries(iconCategories).reduce((acc, [category, icons]) => {
    const filtered = icons.filter(icon => 
      icon.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {} as Record<string, string[]>);

  const IconGrid = ({ icons, categoryName }: { icons: string[], categoryName: string }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">{categoryName}</h3>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {icons.map((iconName) => {
          const IconComponent = (LucideIcons as any)[iconName];
          if (!IconComponent) return null;
          
          return (
            <div 
              key={iconName}
              className="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
              onClick={() => navigator.clipboard.writeText(iconName)}
            >
              <IconComponent className="w-6 h-6 text-gray-700 mb-2" />
              <span className="text-xs text-gray-600 text-center leading-tight">{iconName}</span>
              <Copy className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Design System
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Icons</h1>
              <p className="text-gray-600">Consistent iconography system</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Principles</CardTitle>
            <CardDescription>
              Icons are visual representations of actions, features, or objects, aiding in navigation and communication.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Simplicity</h4>
                <p className="text-sm text-gray-600">Icons should be clear and recognizable, avoiding unnecessary complexity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">Maintain consistent visual style, stroke weight, and visual language.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">Ensure icons are distinguishable and provide alternative text when necessary.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search icons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Icon Categories */}
        <div className="space-y-8">
          {Object.entries(filteredCategories).map(([category, icons]) => (
            <IconGrid key={category} icons={icons} categoryName={category} />
          ))}
        </div>

        {/* Usage Guidelines */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Sizing</h4>
                <p className="text-sm text-gray-600">Standard sizes: 16px, 20px, 24px. Use 16px for inline text, 20px for buttons, 24px for larger interfaces.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Color</h4>
                <p className="text-sm text-gray-600">Icons inherit text color by default. Use semantic colors (success, warning, error) when appropriate.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Spacing</h4>
                <p className="text-sm text-gray-600">Maintain consistent spacing between icons and text. Use 8px minimum for comfortable touch targets.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Icons;
