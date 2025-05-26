
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Typography = () => {
  const typographyScales = {
    web: [
      { name: "Heading 01", size: "72px", weight: "Regular", lineHeight: "88px", example: "Large Display" },
      { name: "Heading 02", size: "60px", weight: "Regular", lineHeight: "72px", example: "Page Headers" },
      { name: "Heading 03", size: "48px", weight: "Regular", lineHeight: "56px", example: "Section Titles" },
      { name: "Heading 04", size: "36px", weight: "Regular", lineHeight: "44px", example: "Component Titles" },
      { name: "Heading 05", size: "24px", weight: "Semi-Bold", lineHeight: "32px", example: "Card Headers" },
      { name: "Body", size: "16px", weight: "Regular", lineHeight: "24px", example: "Body text and paragraphs" },
      { name: "Caption/Meta", size: "14px", weight: "Regular", lineHeight: "20px", example: "Captions and metadata" },
      { name: "Label", size: "12px", weight: "Regular", lineHeight: "16px", example: "Labels and small text" }
    ],
    mobile: [
      { name: "Heading 01", size: "48px", weight: "Regular", lineHeight: "56px", example: "Large Display" },
      { name: "Heading 02", size: "36px", weight: "Regular", lineHeight: "44px", example: "Page Headers" },
      { name: "Heading 03", size: "28px", weight: "Regular", lineHeight: "36px", example: "Section Titles" },
      { name: "Heading 04", size: "24px", weight: "Regular", lineHeight: "32px", example: "Component Titles" },
      { name: "Body 01", size: "16px", weight: "Regular", lineHeight: "24px", example: "Primary body text" },
      { name: "Body 02", size: "14px", weight: "Regular", lineHeight: "20px", example: "Secondary body text" },
      { name: "Caption/Meta", size: "12px", weight: "Regular", lineHeight: "16px", example: "Captions and metadata" },
      { name: "Label", size: "10px", weight: "Regular", lineHeight: "14px", example: "Labels and small text" }
    ]
  };

  const TypeScale = ({ scale, title }: { scale: any[], title: string }) => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      {scale.map((type) => (
        <div key={type.name} className="border rounded-lg p-6 bg-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <div className="mb-2 lg:mb-0">
              <h4 className="font-semibold text-gray-900">{type.name}</h4>
              <p className="text-sm text-gray-600">
                {type.size} • {type.weight} • {type.lineHeight} line height
              </p>
            </div>
          </div>
          <div 
            className="text-gray-900"
            style={{ 
              fontSize: type.size, 
              fontWeight: type.weight === 'Semi-Bold' ? '600' : '400',
              lineHeight: type.lineHeight 
            }}
          >
            {type.example}
          </div>
        </div>
      ))}
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
              <h1 className="text-3xl font-bold text-gray-900">Typography</h1>
              <p className="text-gray-600">Font hierarchy and sizing standards</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Typography Principles</CardTitle>
            <CardDescription>
              Typography plays a key role in establishing a clear visual hierarchy, ensuring readability, and maintaining consistency across the platform.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hierarchy</h4>
                <p className="text-sm text-gray-600">Clear type scales establish visual hierarchy and guide user attention through content.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Readability</h4>
                <p className="text-sm text-gray-600">Optimal line heights, spacing, and contrast ensure comfortable reading experiences.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">Standardized type styles maintain visual coherence across all platforms and devices.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Type Scales */}
        <div className="space-y-12">
          <TypeScale scale={typographyScales.web} title="Web Typography" />
          <TypeScale scale={typographyScales.mobile} title="Mobile Typography" />
        </div>

        {/* Usage Guidelines */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Usage Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Headings</h4>
                <p className="text-sm text-gray-600">Use heading hierarchy to create clear information structure. H1 for page titles, H2 for major sections, etc.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Body Text</h4>
                <p className="text-sm text-gray-600">16px minimum for body text on web, 14px on mobile. Maintain adequate line spacing for readability.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Line Length</h4>
                <p className="text-sm text-gray-600">Optimal reading line length is 45-75 characters. Use responsive typography for different screen sizes.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Typography;
