
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Type, 
  Grid3X3, 
  Image as ImageIcon, 
  Layout, 
  Layers,
  FileText,
  Brush
} from "lucide-react";

const Index = () => {
  const sections = [
    {
      title: "Colors",
      description: "Primary, secondary, and neutral color palettes with accessibility guidelines",
      icon: Palette,
      path: "/colors",
      color: "bg-blue-500"
    },
    {
      title: "Typography",
      description: "Font families, sizes, weights, and hierarchy for web and mobile",
      icon: Type,
      path: "/typography", 
      color: "bg-green-500"
    },
    {
      title: "Icons",
      description: "Consistent iconography with sizing and usage guidelines",
      icon: Layers,
      path: "/icons",
      color: "bg-purple-500"
    },
    {
      title: "Grids",
      description: "Responsive grid systems and layout foundations",
      icon: Grid3X3,
      path: "/grids",
      color: "bg-orange-500"
    },
    {
      title: "Illustrations",
      description: "Custom illustrations and visual storytelling elements",
      icon: ImageIcon,
      path: "/illustrations",
      color: "bg-pink-500"
    },
    {
      title: "Background",
      description: "Patterns, textures, and background elements",
      icon: Brush,
      path: "/background",
      color: "bg-teal-500"
    },
    {
      title: "Layouts",
      description: "Page templates and component arrangements",
      icon: Layout,
      path: "/layouts",
      color: "bg-indigo-500"
    },
    {
      title: "Documentation",
      description: "Usage guidelines and best practices",
      icon: FileText,
      path: "/docs",
      color: "bg-gray-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">My Design System</h1>
              <p className="text-lg text-gray-600 mt-2">EXP 2.1 - Foundation</p>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Version 2.1
            </Badge>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Atoms (Foundation)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive design system built for scalability, consistency, and accessibility. 
            These foundational elements ensure coherent user experiences across all platforms.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Link key={section.title} to={section.path}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {section.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-600">Color Variants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">8</div>
            <div className="text-sm text-gray-600">Typography Scales</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">200+</div>
            <div className="text-sm text-gray-600">Icons Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">100%</div>
            <div className="text-sm text-gray-600">Accessibility</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <span className="text-sm">Design System EXP 2.1</span>
            </div>
            <div className="text-sm text-gray-400">
              Built with modern design principles
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
