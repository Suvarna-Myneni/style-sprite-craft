
import { Link } from "react-router-dom";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Colors = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colorPalette = {
    primary: [
      { 
        name: "Primary 500", 
        hex: "#1B489B", 
        rgb: "27, 72, 155",
        description: "Use for all the primary Call to Action items like buttons and links mostly that communicate the brand"
      },
      { 
        name: "Primary 400", 
        hex: "#496DAF", 
        rgb: "73, 109, 175",
        description: "Use for all the primary Call to Action items like buttons and links mostly that communicate the brand"
      },
      { 
        name: "Primary 300", 
        hex: "#93A3CB", 
        rgb: "147, 163, 203",
        description: "Use for all the disabled CTAs, background for cards"
      },
      { 
        name: "Primary 200", 
        hex: "#D4DAEA", 
        rgb: "212, 218, 234",
        description: "Light background color for subtle emphasis"
      },
      { 
        name: "Primary 100", 
        hex: "#E9ECF4", 
        rgb: "233, 236, 244",
        description: "Very light background color for minimal emphasis"
      }
    ],
    secondary: [
      { 
        name: "Secondary 500", 
        hex: "#0C0F24", 
        rgb: "12, 15, 36",
        description: "Use for all types of texts, can be used for cards too"
      },
      { 
        name: "Secondary 400", 
        hex: "#3D3F50", 
        rgb: "61, 63, 80",
        description: "Use for all the Headlines, body text, can be used for cards too"
      },
      { 
        name: "Secondary 300", 
        hex: "#858791", 
        rgb: "133, 135, 145",
        description: "Use for all the Headlines, body text, can be used for cards too"
      },
      { 
        name: "Secondary 200", 
        hex: "#CECFD3", 
        rgb: "206, 207, 211",
        description: "Light secondary color for subtle text elements"
      },
      { 
        name: "Secondary 100", 
        hex: "#E7E7E9", 
        rgb: "231, 231, 233",
        description: "Very light secondary color for backgrounds"
      }
    ],
    status: [
      { 
        name: "Success", 
        hex: "#1E774A", 
        rgb: "30, 119, 74",
        description: "Use for all the success states, messages, tags or pop up illustrations showing success"
      },
      { 
        name: "Success Light", 
        hex: "#CCF2DB", 
        rgb: "204, 242, 219",
        description: "Use for all the success states, messages, tags or pop up illustrations showing success"
      },
      { 
        name: "Warning", 
        hex: "#895D0B", 
        rgb: "137, 93, 11",
        description: "Use for all the warning and error states, messages, tags or pop up illustrations"
      },
      { 
        name: "Warning Light", 
        hex: "#FFE1A4", 
        rgb: "255, 225, 164",
        description: "Use for all the warning and error states, messages, tags or pop up illustrations"
      }
    ],
    base: [
      { 
        name: "Base White", 
        hex: "#FFFFFF", 
        rgb: "255, 255, 255",
        description: "A neutral background color used for card backgrounds or areas where content needs to stand out in contrast with the rest of the interface"
      },
      { 
        name: "Base Black", 
        hex: "#303030", 
        rgb: "48, 48, 48",
        description: "A darker base color for text and essential elements requiring contrast with lighter backgrounds, ensuring clarity and readability"
      },
      { 
        name: "Disabled", 
        hex: "#858791", 
        rgb: "133, 135, 145",
        description: "Use for disabled states and inactive elements"
      },
      { 
        name: "Hover State", 
        hex: "#496DAF", 
        rgb: "73, 109, 175",
        description: "Whenever hovered over the primary filled button, CTA should change to this hover state"
      }
    ]
  };

  const ColorSwatch = ({ color }: { color: any }) => (
    <div 
      className="group cursor-pointer"
      onClick={() => copyToClipboard(color.hex)}
    >
      <div 
        className="w-full h-24 rounded-lg shadow-sm border group-hover:shadow-md transition-shadow"
        style={{ backgroundColor: color.hex }}
      />
      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">{color.name}</span>
          {copiedColor === color.hex ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
        </div>
        <div className="text-xs text-gray-600">{color.hex}</div>
        <div className="text-xs text-gray-500">RGB: {color.rgb}</div>
        <div className="text-xs text-gray-600 mt-2 leading-relaxed">{color.description}</div>
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
              <h1 className="text-3xl font-bold text-gray-900">Colors</h1>
              <p className="text-gray-600">Color palette with accessibility guidelines</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Info Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color System Information</CardTitle>
            <CardDescription>
              The color palette defines the core colors used across the product's interface, providing a consistent and accessible visual identity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Platforms Supported</h4>
                <p className="text-sm text-gray-600">Web, Mobile</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Components Covered</h4>
                <p className="text-sm text-gray-600">Primary Colors, Secondary Colors, Status Colors (Success, Warning, Disabled), Base Colors, Gradients</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">Colors must be applied uniformly across all components to strengthen brand recognition and create a seamless visual experience.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Simplicity</h4>
                <p className="text-sm text-gray-600">Focus on a limited set of colors to maintain a clean, professional interface without overwhelming users.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">Color contrast should be sufficient to ensure readability, especially for key elements such as text, buttons, and alerts.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hierarchy</h4>
                <p className="text-sm text-gray-600">Colors should support a clear visual hierarchy, guiding users toward important actions and making it easy to differentiate between elements.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Usage Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color Roles</CardTitle>
            <CardDescription>
              Color is used to reinforce the branding, theme of the brand and define content hierarchy. Color roles describe the intention behind the color.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Color roles are applied to buttons to differentiate between primary, secondary, warning, or dangerous actions. 
              Each color serves a specific purpose to ensure clarity, readability, and alignment with the brand's visual language.
            </p>
          </CardContent>
        </Card>

        {/* Color Palettes */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Primary Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorPalette.primary.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Secondary Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colorPalette.secondary.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Status Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colorPalette.status.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Base & Utility Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colorPalette.base.map((color) => (
                <ColorSwatch key={color.name} color={color} />
              ))}
            </div>
          </div>
        </div>

        {/* Design Guidelines */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Design Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Contrast & Readability</h4>
                <p className="text-sm text-gray-600">Ensure sufficient contrast between text and background colors to enhance readability, especially for important content or call-to-action buttons.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">Use the colors consistently across all elements and pages, reinforcing the brand identity and helping users easily recognize actions or elements across different parts of the product.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">Consider accessibility when choosing color combinations, ensuring the interface is usable for individuals with visual impairments. This includes maintaining high contrast between background and text or interactive elements.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Colors;
