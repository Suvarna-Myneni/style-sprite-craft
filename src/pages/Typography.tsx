
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Typography = () => {
  const typographyScales = {
    web: [
      { 
        name: "Heading 01", 
        size: "48px", 
        sizeRem: "3rem",
        weight: "Regular", 
        lineHeight: "52px",
        lineHeightRatio: "1.083",
        letterSpacing: "0",
        example: "Main Page Title" 
      },
      { 
        name: "Heading 01 (Alt)", 
        size: "40px", 
        sizeRem: "2.5rem",
        weight: "Regular", 
        lineHeight: "48px",
        lineHeightRatio: "1.200",
        letterSpacing: "0",
        example: "Alternative Main Title" 
      },
      { 
        name: "Heading 01 (Bold)", 
        size: "32px", 
        sizeRem: "2rem",
        weight: "Semi Bold", 
        lineHeight: "38px",
        lineHeightRatio: "1.188",
        letterSpacing: "0",
        example: "Bold Main Title" 
      },
      { 
        name: "Heading 02", 
        size: "28px", 
        sizeRem: "1.75rem",
        weight: "Regular", 
        lineHeight: "34px",
        lineHeightRatio: "1.750",
        letterSpacing: "0",
        example: "Section Headers" 
      },
      { 
        name: "Heading 03", 
        size: "24px", 
        sizeRem: "1.5rem",
        weight: "Regular", 
        lineHeight: "30px",
        lineHeightRatio: "1.25",
        letterSpacing: "0",
        example: "Subsection Titles" 
      },
      { 
        name: "Heading 04", 
        size: "20px", 
        sizeRem: "1.25rem",
        weight: "Regular", 
        lineHeight: "24px",
        lineHeightRatio: "1.2",
        letterSpacing: "0",
        example: "Component Titles" 
      },
      { 
        name: "Heading 04 (Alt)", 
        size: "18px", 
        sizeRem: "1.125rem",
        weight: "Regular", 
        lineHeight: "24px",
        lineHeightRatio: "1.33",
        letterSpacing: "0",
        example: "Small Component Titles" 
      },
      { 
        name: "Body 01", 
        size: "16px", 
        sizeRem: "1rem",
        weight: "Regular", 
        lineHeight: "24px",
        lineHeightRatio: "1.5",
        letterSpacing: "0",
        example: "Primary body text and paragraphs" 
      },
      { 
        name: "Caption/Note", 
        size: "14px", 
        sizeRem: "0.875rem",
        weight: "Regular", 
        lineHeight: "20px",
        lineHeightRatio: "1.43",
        letterSpacing: "0",
        example: "Captions and notes" 
      },
      { 
        name: "Label/Info", 
        size: "12px", 
        sizeRem: "0.75rem",
        weight: "Regular", 
        lineHeight: "16px",
        lineHeightRatio: "1.33",
        letterSpacing: "0",
        example: "Labels and information text" 
      }
    ],
    mobile: [
      { 
        name: "Heading 01", 
        size: "28px", 
        sizeRem: "1.75rem",
        weight: "Regular", 
        lineHeight: "34px",
        lineHeightRatio: "1.750",
        letterSpacing: "0",
        example: "Main Mobile Title" 
      },
      { 
        name: "Heading 02", 
        size: "24px", 
        sizeRem: "1.5rem",
        weight: "Regular", 
        lineHeight: "30px",
        lineHeightRatio: "1.25",
        letterSpacing: "0",
        example: "Mobile Section Headers" 
      },
      { 
        name: "Heading 03", 
        size: "20px", 
        sizeRem: "1.25rem",
        weight: "Regular", 
        lineHeight: "24px",
        lineHeightRatio: "1.2",
        letterSpacing: "0",
        example: "Mobile Subsection Titles" 
      },
      { 
        name: "Heading 04", 
        size: "18px", 
        sizeRem: "1.125rem",
        weight: "Regular", 
        lineHeight: "24px",
        lineHeightRatio: "1.33",
        letterSpacing: "0",
        example: "Mobile Component Titles" 
      },
      { 
        name: "Body 01", 
        size: "16px", 
        sizeRem: "1rem",
        weight: "Regular", 
        lineHeight: "24px",
        lineHeightRatio: "1.5",
        letterSpacing: "0",
        example: "Primary mobile body text" 
      },
      { 
        name: "Body 02", 
        size: "14px", 
        sizeRem: "0.875rem",
        weight: "Regular", 
        lineHeight: "20px",
        lineHeightRatio: "1.43",
        letterSpacing: "0",
        example: "Secondary mobile body text" 
      },
      { 
        name: "Caption/Note/Tags", 
        size: "12px", 
        sizeRem: "0.75rem",
        weight: "Regular", 
        lineHeight: "16px",
        lineHeightRatio: "1.33",
        letterSpacing: "0",
        example: "Mobile captions and tags" 
      },
      { 
        name: "Label", 
        size: "10px", 
        sizeRem: "0.625rem",
        weight: "Regular", 
        lineHeight: "14px",
        lineHeightRatio: "1.4",
        letterSpacing: "0",
        example: "Mobile labels" 
      }
    ]
  };

  const TypeScale = ({ scale, title }: { scale: any[], title: string }) => (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      {scale.map((type) => (
        <div key={type.name} className="border rounded-lg p-6 bg-white">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
            <div className="mb-4 lg:mb-0 lg:w-1/3">
              <h4 className="font-semibold text-gray-900 mb-2">{type.name}</h4>
              <div className="text-sm text-gray-600 space-y-1">
                <p><span className="font-medium">Size:</span> {type.size} ({type.sizeRem})</p>
                <p><span className="font-medium">Weight:</span> {type.weight}</p>
                <p><span className="font-medium">Line Height:</span> {type.lineHeight} ({type.lineHeightRatio})</p>
                <p><span className="font-medium">Letter Spacing:</span> {type.letterSpacing}</p>
              </div>
            </div>
            <div className="lg:w-2/3">
              <div 
                className="text-gray-900"
                style={{ 
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: type.size, 
                  fontWeight: type.weight === 'Semi Bold' ? '600' : '400',
                  lineHeight: type.lineHeight,
                  letterSpacing: type.letterSpacing
                }}
              >
                {type.example}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" style={{ fontFamily: 'Roboto, sans-serif' }}>
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
              <p className="text-gray-600">Font: Roboto</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Info Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Typography Information</CardTitle>
            <CardDescription>
              Typography plays a key role in establishing a clear visual hierarchy, ensuring readability, and maintaining consistency across the product.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Font Family</h4>
                <p className="text-sm text-gray-600">Roboto</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Platforms Supported</h4>
                <p className="text-sm text-gray-600">Web, Mobile</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Components Covered</h4>
                <p className="text-sm text-gray-600">Headings, Body Text, Labels & Captions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Typography Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Legibility</h4>
                <p className="text-sm text-gray-600">Ensure that text is easy to read at all sizes, across devices and screen resolutions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Hierarchy</h4>
                <p className="text-sm text-gray-600">Establish a clear visual hierarchy by using different font sizes, weights, and spacing.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                <p className="text-sm text-gray-600">Use consistent typography styles across all platforms, maintaining uniformity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Scalability</h4>
                <p className="text-sm text-gray-600">Typography should scale fluidly across different screen sizes.</p>
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
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Web Typography</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Headings:</strong> Use larger font sizes for headings to create a strong hierarchy. Heading 01 is ideal for main titles, Heading 02 for section titles, and Heading 03 or Heading 04 for subheadings.</p>
                  <p><strong>Body Text:</strong> Body text should remain legible and appropriately spaced, ensuring comfortable reading for longer paragraphs. Body 01 is for primary content.</p>
                  <p><strong>Captions/Labels:</strong> These are used for smaller, less prominent text like captions, field labels, and fine print.</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Mobile Typography</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Headings:</strong> Mobile typography scales down slightly to accommodate smaller screen sizes. Use Heading 01 for main headings and Heading 02, 03, and 04 for subsections.</p>
                  <p><strong>Body Text:</strong> Body 01 and Body 02 are used for all the body text, especially content-heavy sections, ensuring text remains legible on mobile devices.</p>
                  <p><strong>Captions/Labels:</strong> Smaller text elements like captions, labels, notes are to be scaled down for mobile, ensuring they're readable without taking up too much space.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Typography;
