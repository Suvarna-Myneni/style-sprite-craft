
import { Link } from "react-router-dom";
import { ArrowLeft, Brush, Palette, Monitor, Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Background = () => {
  const lightThemeBackgrounds = [
    {
      id: 1,
      name: "Subtle White Polygon",
      image: "/lovable-uploads/250e4544-0f5d-4b95-a33a-1459fed2ffa6.png",
      description: "Clean white geometric pattern with subtle depth"
    },
    {
      id: 2,
      name: "Light Gray Crystals",
      image: "/lovable-uploads/8522b5f5-7c24-4d57-b810-0b1c20879a0d.png",
      description: "Soft gray crystalline structure for minimal designs"
    },
    {
      id: 3,
      name: "Bright White Facets",
      image: "/lovable-uploads/4d8908c0-422f-41f1-9f6f-34ab1325a771.png",
      description: "Angular white pattern with elegant shadows"
    },
    {
      id: 4,
      name: "Pearl White Geometry",
      image: "/lovable-uploads/d2366db6-61e3-45d5-bb8f-d84cc9510970.png",
      description: "Sophisticated white geometric background"
    },
    {
      id: 5,
      name: "Clean Polygon Grid",
      image: "/lovable-uploads/f3cb0a2c-8da0-46d4-95b1-331d3a9bb575.png",
      description: "Minimalist white polygon pattern"
    },
    {
      id: 6,
      name: "Textured White",
      image: "/lovable-uploads/16029093-e8d3-4394-b8ed-0ae0f81269fa.png",
      description: "Subtle textured white background with depth"
    },
    {
      id: 7,
      name: "Crystal White",
      image: "/lovable-uploads/fb03f147-54d2-4ed8-8558-54da092682b8.png",
      description: "Crystal-like white pattern for elegant banners"
    },
    {
      id: 8,
      name: "Pristine Angles",
      image: "/lovable-uploads/eda1ed63-7a18-4ff7-b53b-3501b04e6768.png",
      description: "Pure white angular design"
    },
    {
      id: 9,
      name: "Soft Gray Mesh",
      image: "/lovable-uploads/b65d8431-cdc7-4748-91e3-106ec376470b.png",
      description: "Gentle gray geometric mesh pattern"
    },
    {
      id: 10,
      name: "Light Crystalline",
      image: "/lovable-uploads/1193bad3-6568-4fb2-8fbf-f6aabee9b26d.png",
      description: "Light crystalline structure for modern interfaces"
    }
  ];

  const darkThemeBackgrounds = [
    {
      id: 1,
      name: "Dark Polygon Matrix",
      image: "/lovable-uploads/e16210e5-e9b7-498c-9977-53a0487e5491.png",
      description: "Bold dark geometric pattern with dramatic shadows"
    },
    {
      id: 2,
      name: "Deep Blue Crystals",
      image: "/lovable-uploads/62ace3ac-01aa-4173-8145-63dee27c9bd2.png",
      description: "Rich blue crystalline background for premium designs"
    }
  ];

  const usageGuidelines = [
    {
      title: "Banner Headers",
      description: "Use these patterns as background overlays for hero sections and banner headers to add visual depth without overwhelming content.",
      context: "Hero sections, landing page headers, feature announcements"
    },
    {
      title: "Card Backgrounds",
      description: "Apply subtle patterns to card components to create visual hierarchy and enhance the overall design aesthetic.",
      context: "Product cards, feature highlights, testimonial sections"
    },
    {
      title: "Section Dividers",
      description: "Implement as background elements to naturally separate content sections while maintaining visual continuity.",
      context: "Page sections, content blocks, layout divisions"
    },
    {
      title: "Overlay Elements",
      description: "Use with reduced opacity as overlay patterns behind text content to add texture without compromising readability.",
      context: "Text overlays, call-to-action sections, content backgrounds"
    }
  ];

  const principles = [
    {
      title: "Visual Hierarchy",
      description: "Background patterns should enhance, not compete with foreground content. Maintain proper contrast ratios for accessibility.",
      icon: Palette
    },
    {
      title: "Performance",
      description: "Optimize pattern images for web delivery. Consider using CSS patterns or SVG for better performance when possible.",
      icon: Monitor
    },
    {
      title: "Responsive Design",
      description: "Ensure patterns scale appropriately across different screen sizes and maintain visual quality on all devices.",
      icon: Smartphone
    },
    {
      title: "Theme Consistency",
      description: "Light and dark theme variants should maintain the same geometric structure while adapting to the color scheme.",
      icon: Brush
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Design System</span>
                </Button>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#3D3F50] flex items-center justify-center">
                  <Brush className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Banner Backgrounds</h1>
                  <p className="text-gray-600">Geometric patterns and textures for banners and backgrounds</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline">Web</Badge>
              <Badge variant="outline">Mobile</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Purpose and Info */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#3D3F50]">Purpose & Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Purpose:</strong> Banner backgrounds provide visual foundation elements that enhance the aesthetic appeal of banners, headers, and content sections. These geometric patterns add depth and sophistication while maintaining readability and brand consistency across light and dark themes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Platforms Supported</h4>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Web</Badge>
                    <Badge variant="secondary">Mobile</Badge>
                    <Badge variant="secondary">Desktop</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pattern Types</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Geometric Polygons</li>
                    <li>• Crystalline Structures</li>
                    <li>• Angular Patterns</li>
                    <li>• Textured Surfaces</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <Card key={principle.title}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-[#3D3F50] flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-white" />
                      </div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Background Library */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Background Library</h2>
          <Tabs defaultValue="light" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="light">Light Theme</TabsTrigger>
              <TabsTrigger value="dark">Dark Theme</TabsTrigger>
            </TabsList>
            
            <TabsContent value="light" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {lightThemeBackgrounds.map((bg) => (
                  <Card key={bg.id} className="overflow-hidden">
                    <div className="h-32 bg-cover bg-center relative" style={{ backgroundImage: `url(${bg.image})` }}>
                      <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{bg.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {bg.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="dark" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {darkThemeBackgrounds.map((bg) => (
                  <Card key={bg.id} className="overflow-hidden">
                    <div className="h-32 bg-cover bg-center relative" style={{ backgroundImage: `url(${bg.image})` }}>
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{bg.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {bg.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usageGuidelines.map((guideline) => (
              <Card key={guideline.title}>
                <CardHeader>
                  <CardTitle className="text-lg text-[#3D3F50]">{guideline.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{guideline.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Best Used For:</h4>
                    <p className="text-sm text-gray-600">{guideline.context}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Examples</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">CSS Background Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm">
                  <div className="text-green-400">/* Light theme banner */</div>
                  <div>.banner-light &#123;</div>
                  <div className="ml-4">background-image: url('/path/to/light-pattern.png');</div>
                  <div className="ml-4">background-size: cover;</div>
                  <div className="ml-4">background-position: center;</div>
                  <div>&#125;</div>
                  <br />
                  <div className="text-green-400">/* Dark theme banner */</div>
                  <div>.banner-dark &#123;</div>
                  <div className="ml-4">background-image: url('/path/to/dark-pattern.png');</div>
                  <div className="ml-4">background-size: cover;</div>
                  <div className="ml-4">background-position: center;</div>
                  <div>&#125;</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Do</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Maintain sufficient contrast between background and text</li>
                  <li>• Use appropriate opacity levels for overlay patterns</li>
                  <li>• Test patterns across different screen sizes</li>
                  <li>• Consider loading performance when selecting patterns</li>
                  <li>• Ensure patterns align with brand aesthetics</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Don't</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Use busy patterns that compete with content</li>
                  <li>• Apply high-contrast patterns behind text</li>
                  <li>• Mix multiple pattern types in the same design</li>
                  <li>• Ignore accessibility contrast requirements</li>
                  <li>• Use patterns that don't scale well on mobile</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
