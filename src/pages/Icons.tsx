
import { Link } from "react-router-dom";
import { ArrowLeft, Search, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import * as LucideIcons from "lucide-react";

const Icons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Comprehensive icon categories based on the documentation
  const iconCategories = {
    "Action Icons": ["Plus", "Minus", "Edit", "Trash2", "Save", "Download", "Upload", "Copy", "Share", "MoreHorizontal", "Settings"],
    "Navigation Icons": ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "ChevronLeft", "ChevronRight", "Home", "Menu", "X", "ExternalLink"],
    "Status & Notification Icons": ["Check", "X", "AlertCircle", "Info", "HelpCircle", "CheckCircle", "XCircle", "AlertTriangle", "Bell", "BellOff"],
    "Communication": ["Mail", "Phone", "MessageCircle", "Send", "Reply", "Forward", "Users", "User"],
    "Media & Files": ["Play", "Pause", "Stop", "Volume2", "VolumeX", "Camera", "Image", "Video", "File", "FileText", "Folder", "FolderOpen"],
    "Interface Elements": ["Grid", "List", "Calendar", "Clock", "Eye", "EyeOff", "Filter", "Search", "Bookmark", "Star", "Heart"],
    "Social & Actions": ["ThumbsUp", "ThumbsDown", "Share2", "Link", "Globe", "MapPin", "Target"]
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
              <p className="text-gray-600">Visual representation of actions, features, and objects</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon System Overview</CardTitle>
            <CardDescription>
              Icons are a visual representation of actions, features, or objects, aiding in navigation and communication within the user interface. They provide users with visual cues that enhance usability and brand recognition.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Platforms Supported</h4>
                <p className="text-sm text-gray-600">Web, Mobile</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Components Covered</h4>
                <p className="text-sm text-gray-600">Action Icons, Navigation Icons, Status and Notification Icons</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Simplicity</h4>
                <p className="text-sm text-gray-600">Icons should be clear and recognizable, avoiding unnecessary complexity. They should convey meaning quickly and efficiently.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">Maintain consistent visual style, stroke weight, size, and visual language to ensure uniformity across the platform.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Scalability</h4>
                <p className="text-sm text-gray-600">Icons should scale well across different screen sizes and resolutions, ensuring clarity in both small and large formats.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">Ensure icons are distinguishable for all users, including those with visual impairments, by providing alternative text when necessary.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Anatomy */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Anatomy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Size</h4>
                <p className="text-sm text-gray-600">Icons should fit within a consistent grid (16px, 24px, or 32px) to ensure uniform sizing and alignment.</p>
                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center justify-center w-4 h-4 border border-gray-300 rounded">
                    <Home className="w-3 h-3" />
                  </div>
                  <span className="text-xs text-gray-500">16px</span>
                  <div className="flex items-center justify-center w-6 h-6 border border-gray-300 rounded">
                    <Home className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-gray-500">24px</span>
                  <div className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded">
                    <Home className="w-7 h-7" />
                  </div>
                  <span className="text-xs text-gray-500">32px</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Stroke Weight</h4>
                <p className="text-sm text-gray-600">Maintain uniform stroke weight across all icons, typically between 1px to 2px depending on design aesthetic.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Padding</h4>
                <p className="text-sm text-gray-600">Icons should have sufficient padding to prevent crowding and ensure easy tapping on mobile devices.</p>
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
        <div className="space-y-8 mb-12">
          {Object.entries(filteredCategories).map(([category, icons]) => (
            <IconGrid key={category} icons={icons} categoryName={category} />
          ))}
        </div>

        {/* Usage Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Action Icons</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Located near buttons or interactive elements</li>
                  <li>• Provide visual feedback on interaction</li>
                  <li>• Change appearance on hover/press states</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Navigation Icons</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Used in navigation bars and menus</li>
                  <li>• Directional icons should convey clear intent</li>
                  <li>• Adapt direction based on context</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Status Icons</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Always clearly visible with labels/colors</li>
                  <li>• Use semantic colors (red for error, green for success)</li>
                  <li>• Dynamic behavior for notifications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Variations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Icon Variations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Filled vs. Outlined</h4>
                <p className="text-sm text-gray-600 mb-3">Icons may have both versions to indicate active or inactive states.</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5" />
                    <span className="text-sm text-gray-600">Outlined (inactive)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="text-sm text-gray-600">Filled (active)</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Color Usage</h4>
                <p className="text-sm text-gray-600 mb-3">Icons can use color for different states but should function in monochrome for accessibility.</p>
                <div className="flex items-center space-x-4">
                  <Trash2 className="w-5 h-5 text-red-500" />
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Do's</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Keep icons simple and recognizable</li>
                <li>• Ensure consistency across all icons</li>
                <li>• Provide visual feedback for interactive elements</li>
                <li>• Use icons to enhance clarity, not complicate</li>
                <li>• Design for accessibility with proper contrast</li>
                <li>• Test across different devices and resolutions</li>
                <li>• Use vector formats (SVG) for scalability</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-700">Don'ts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-600">
                <li>• Avoid overly complex or detailed icons</li>
                <li>• Don't mix different icon styles</li>
                <li>• Avoid ambiguous or unclear meanings</li>
                <li>• Don't overload the interface with too many icons</li>
                <li>• Avoid static icons without feedback states</li>
                <li>• Don't ignore touch target guidelines on mobile</li>
                <li>• Avoid using icons without labels for complex actions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Icons;
