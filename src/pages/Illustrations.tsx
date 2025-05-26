
import { Link } from "react-router-dom";
import { ArrowLeft, Image as ImageIcon, Shield, MapPin, Download, FileText, Camera, Building, Mail, Clock, Microscope, Search, Lightbulb, BarChart3, Database, Eye, AlertTriangle, ThumbsUp, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Illustrations = () => {
  const illustrationCategories = [
    {
      title: "Security and Status",
      description: "Visual feedback for system states and security-related actions",
      icons: [Shield, CheckCircle, AlertTriangle, ShieldCheck],
      examples: ["Security", "Success", "Warning", "Verified"]
    },
    {
      title: "Object Illustrations",
      description: "Concrete objects and actions for interface elements",
      icons: [MapPin, Download, Mail, FileText],
      examples: ["Location", "Download", "Mail", "Reports"]
    },
    {
      title: "Iconographic Illustrations",
      description: "Abstract concepts and task-based visual elements",
      icons: [Search, Lightbulb, BarChart3, Eye],
      examples: ["Search", "Ideas", "Analytics", "Unable to Display"]
    }
  ];

  const principles = [
    {
      title: "Clarity",
      description: "Illustrations should communicate ideas clearly and simply, without overwhelming the user. They should be easily recognizable and relevant to their context.",
      icon: Eye
    },
    {
      title: "Consistency",
      description: "Maintain a unified visual style across all illustrations, including line weight, color palette, and level of detail. This ensures a cohesive visual language throughout the platform.",
      icon: Shield
    },
    {
      title: "Engagement",
      description: "Illustrations should engage users by adding personality to the interface, making the experience more enjoyable while staying functional.",
      icon: ThumbsUp
    },
    {
      title: "Accessibility",
      description: "Illustrations should be designed with enough contrast and clear shapes to ensure they are visible and comprehensible for all users.",
      icon: CheckCircle
    }
  ];

  const usageGuidelines = [
    {
      category: "Status Illustrations",
      context: "Used in feedback messages, modals, and alerts to indicate system status or user actions (e.g., success or error states).",
      placement: "Positioned alongside messages or notifications to offer users immediate visual confirmation of an action or process.",
      examples: ["Success checkmarks", "Error indicators", "Warning symbols", "Verification badges"]
    },
    {
      category: "Object and Action Illustrations",
      context: "Found in cards, banners, or feature sections of the UI to support content and provide clearer context (e.g., mail icons for messaging sections, download icons for file downloads).",
      placement: "Ensure consistent scaling across the interface, typically matching the size of the text or content they accompany without overwhelming the space.",
      examples: ["Mail envelopes", "Download arrows", "Location pins", "Document icons"]
    },
    {
      category: "Concept Illustrations",
      context: "Typically used in empty states, onboarding screens, or educational sections to explain or guide users. For instance, 'No Search Results' or 'Warning' illustrations can help inform users when certain actions cannot be completed.",
      placement: "Centered in empty states or prominently displayed in educational content to guide user understanding.",
      examples: ["No search results", "No internet connection", "Empty data states", "Onboarding guides"]
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
                <div className="w-10 h-10 rounded-lg bg-[#93A3CB] flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Illustrations</h1>
                  <p className="text-gray-600">Custom illustrations and visual storytelling elements</p>
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
              <CardTitle className="text-xl text-[#93A3CB]">Purpose & Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Purpose:</strong> Illustrations provide visual storytelling elements that enhance the user experience by offering a more engaging and relatable context. They are used to complement content, simplify complex ideas, and provide visual cues throughout the interface.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Platforms Supported</h4>
                  <div className="flex space-x-2">
                    <Badge variant="secondary">Web</Badge>
                    <Badge variant="secondary">Mobile</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Components Covered</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Security and Status Illustrations</li>
                    <li>• Object Illustrations (Location, Download, Mail)</li>
                    <li>• Iconographic Illustrations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Illustration Family */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Illustration Family</h2>
          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-8">
                  Follow these principles to create legible and visually balanced illustrations. Use in conjunction with color and space tokens in product experiences.
                </p>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <img 
                    src="/lovable-uploads/5d529859-2eca-4a03-a67a-e62779409524.png" 
                    alt="Illustration Family showing various icons including Security, Location, Download, Text, Camera, Buildings, Mail, Clock, Microscope, Search, Reports, and status indicators"
                    className="w-full max-w-4xl mx-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <Card key={principle.title}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded bg-[#93A3CB] flex items-center justify-center">
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

        {/* Meeples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Meeples</h2>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <img 
                    src="/lovable-uploads/93a6da6b-8447-4b21-b7e8-854f9d648fb0.png" 
                    alt="Meeple avatar example showing CP initials and user profile representation"
                    className="w-32 h-auto"
                  />
                </div>
              </div>
              <p className="text-gray-600 text-center">
                Follow these principles to create legible and visually balanced avatar representations. Use in conjunction with color and space tokens in product experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Anatomy */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Anatomy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Illustration Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Style</h4>
                  <p className="text-sm text-gray-600">Flat or semi-flat illustration style with soft, neutral tones to create a clean and modern look. Subtle gradients or shadows provide depth without being distracting.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color Palette</h4>
                  <p className="text-sm text-gray-600">Limited use of colors, focusing on brand colors (blues, grays) combined with accent colors for important elements.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Shape and Stroke</h4>
                  <p className="text-sm text-gray-600">Consistent use of strokes and shapes to create uniformity. Line weight remains consistent, and elements like shadows follow the same pattern.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Illustration Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {illustrationCategories.map((category) => (
                  <div key={category.title}>
                    <h4 className="font-semibold text-gray-900 mb-1">{category.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                    <div className="flex space-x-1">
                      {category.examples.map((example, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage</h2>
          <div className="space-y-6">
            {usageGuidelines.map((guideline) => (
              <Card key={guideline.category}>
                <CardHeader>
                  <CardTitle className="text-lg text-[#93A3CB]">{guideline.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{guideline.context}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Placement</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{guideline.placement}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples</h4>
                    <div className="flex flex-wrap gap-2">
                      {guideline.examples.map((example, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Responsive Behavior */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Responsive Behavior</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scaling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Illustrations should scale proportionally based on the screen size, ensuring that they remain clear and visually balanced across devices (desktop, tablet, mobile).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Touch Targets (Mobile)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ensure that any interactive elements associated with illustrations, such as status icons, are easy to tap and align with mobile-friendly design practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
