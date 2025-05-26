
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
      { name: "Primary 50", hex: "#eff6ff", rgb: "239, 246, 255" },
      { name: "Primary 100", hex: "#dbeafe", rgb: "219, 234, 254" },
      { name: "Primary 500", hex: "#3b82f6", rgb: "59, 130, 246" },
      { name: "Primary 600", hex: "#2563eb", rgb: "37, 99, 235" },
      { name: "Primary 900", hex: "#1e3a8a", rgb: "30, 58, 138" }
    ],
    secondary: [
      { name: "Secondary 50", hex: "#f0fdf4", rgb: "240, 253, 244" },
      { name: "Secondary 100", hex: "#dcfce7", rgb: "220, 252, 231" },
      { name: "Secondary 500", hex: "#22c55e", rgb: "34, 197, 94" },
      { name: "Secondary 600", hex: "#16a34a", rgb: "22, 163, 74" },
      { name: "Secondary 900", hex: "#14532d", rgb: "20, 83, 45" }
    ],
    accent: [
      { name: "Accent 50", hex: "#fdf4ff", rgb: "253, 244, 255" },
      { name: "Accent 100", hex: "#fae8ff", rgb: "250, 232, 255" },
      { name: "Accent 500", hex: "#a855f7", rgb: "168, 85, 247" },
      { name: "Accent 600", hex: "#9333ea", rgb: "147, 51, 234" },
      { name: "Accent 900", hex: "#581c87", rgb: "88, 28, 135" }
    ],
    neutral: [
      { name: "Gray 50", hex: "#f9fafb", rgb: "249, 250, 251" },
      { name: "Gray 100", hex: "#f3f4f6", rgb: "243, 244, 246" },
      { name: "Gray 500", hex: "#6b7280", rgb: "107, 114, 128" },
      { name: "Gray 700", hex: "#374151", rgb: "55, 65, 81" },
      { name: "Gray 900", hex: "#111827", rgb: "17, 24, 39" }
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
        {/* Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Color Principles</CardTitle>
            <CardDescription>
              Our color palette defines the core colors used across the product interface, ensuring consistency and accessibility.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-sm text-gray-600">All color combinations meet WCAG 2.1 AA standards for contrast ratios.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">Colors maintain consistent meaning and hierarchy across all interfaces.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Flexibility</h4>
                <p className="text-sm text-gray-600">Color scales provide options for different emphasis levels and states.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palettes */}
        <div className="space-y-12">
          {Object.entries(colorPalette).map(([category, colors]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                {category} Colors
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {colors.map((color) => (
                  <ColorSwatch key={color.name} color={color} />
                ))}
              </div>
            </div>
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
                <h4 className="font-semibold text-gray-900 mb-2">Primary Colors</h4>
                <p className="text-sm text-gray-600">Use for primary actions, links, and key interactive elements. Primary 500 is the main brand color.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Secondary Colors</h4>
                <p className="text-sm text-gray-600">Use for secondary actions, success states, and positive feedback.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accent Colors</h4>
                <p className="text-sm text-gray-600">Use sparingly for special emphasis, highlights, and premium features.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Neutral Colors</h4>
                <p className="text-sm text-gray-600">Use for text, borders, backgrounds, and subtle interface elements.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Colors;
