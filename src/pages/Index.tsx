
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Type, 
  Grid3X3, 
  ImageIcon, 
  Layers, 
  Tag, 
  Navigation,
  CheckSquare,
  Flag,
  MousePointer,
  FileText,
  BarChart3,
  Book
} from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "Design Tokens",
      description: "Core design elements and foundations",
      items: [
        {
          title: "Colors",
          description: "Color palette and tokens",
          icon: Palette,
          link: "/colors",
          badge: "Foundation"
        },
        {
          title: "Typography",
          description: "Text styles and font system",
          icon: Type,
          link: "/typography",
          badge: "Foundation"
        }
      ]
    },
    {
      title: "Components",
      description: "Interactive UI components",
      items: [
        {
          title: "Buttons",
          description: "Button components with variants",
          icon: MousePointer,
          link: "/buttons",
          badge: "Component"
        },
        {
          title: "Checkboxes",
          description: "Checkbox and radio button components",
          icon: CheckSquare,
          link: "/checkboxes",
          badge: "Component"
        },
        {
          title: "Input Field",
          description: "Form input components",
          icon: FileText,
          link: "/input-field",
          badge: "Component"
        },
        {
          title: "Navigation",
          description: "Navigation components and patterns",
          icon: Navigation,
          link: "/navigation",
          badge: "Component"
        },
        {
          title: "Banners",
          description: "Banner components for highlighting content",
          icon: Flag,
          link: "/banners",
          badge: "Component"
        },
        {
          title: "Progress Bar",
          description: "Progress indicator components",
          icon: BarChart3,
          link: "/progress-bar",
          badge: "Component"
        }
      ]
    },
    {
      title: "Layout & Structure",
      description: "Layout components and grid systems",
      items: [
        {
          title: "Grids",
          description: "Grid systems and layouts",
          icon: Grid3X3,
          link: "/grids",
          badge: "Layout"
        },
        {
          title: "Tags",
          description: "Tag and chip components",
          icon: Tag,
          link: "/tags",
          badge: "Component"
        }
      ]
    },
    {
      title: "Assets & Media",
      description: "Visual assets and media components",
      items: [
        {
          title: "Icons",
          description: "Icon library and usage",
          icon: ImageIcon,
          link: "/icons",
          badge: "Assets"
        },
        {
          title: "Illustrations",
          description: "Illustration components",
          icon: Layers,
          link: "/illustrations",
          badge: "Assets"
        },
        {
          title: "Background",
          description: "Background patterns and styles",
          icon: Palette,
          link: "/background",
          badge: "Assets"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#0c0f24] flex items-center justify-center mx-auto mb-6">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Design System</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive collection of reusable components, design tokens, and patterns 
              for building consistent, accessible user interfaces.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-8">
              <Link to="/docs">
                <Button size="lg" className="bg-[#0c0f24] hover:bg-[#0c0f24]/90">
                  <Book className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
              </Link>
              <Link to="/buttons">
                <Button variant="outline" size="lg">
                  View Components
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <Link key={itemIndex} to={item.link} className="group">
                    <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group-hover:border-[#0c0f24]/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-lg bg-[#0c0f24]/10 flex items-center justify-center group-hover:bg-[#0c0f24]/20 transition-colors">
                            <item.icon className="w-6 h-6 text-[#0c0f24]" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {item.badge}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl group-hover:text-[#0c0f24] transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Design System Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#0c0f24] mb-2">15+</div>
                <div className="text-sm text-gray-600">Components</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#0c0f24] mb-2">50+</div>
                <div className="text-sm text-gray-600">Design Tokens</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#0c0f24] mb-2">100%</div>
                <div className="text-sm text-gray-600">TypeScript</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-[#0c0f24] mb-2">A11Y</div>
                <div className="text-sm text-gray-600">Accessible</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
