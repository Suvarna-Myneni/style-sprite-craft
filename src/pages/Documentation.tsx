
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  FileText, 
  Copy, 
  Download, 
  Github, 
  Package, 
  Palette,
  Type,
  Grid3X3,
  Target,
  Tag,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const installationSteps = [
    {
      title: "Copy Design System Files",
      description: "Copy the entire design-system folder to your new project",
      code: `src/design-system/
├── index.ts
├── tokens/
│   ├── colors.ts
│   ├── typography.ts
│   └── spacing.ts
├── config/
│   └── tailwind-preset.ts
└── README.md`
    },
    {
      title: "Copy Component Files",
      description: "Copy the component folders you need",
      code: `src/components/
├── button/
│   ├── Button.tsx
│   └── Button.css
└── checkbox/
    ├── ExpCheckbox.tsx
    ├── ExpCheckbox.css
    ├── ExpRadio.tsx
    ├── ExpRadio.css
    └── CheckboxTile.tsx`
    },
    {
      title: "Import Components",
      description: "Import and use components in your project",
      code: `import { Button, ExpCheckbox, ExpRadio } from '@/design-system';

function MyComponent() {
  return (
    <div>
      <Button label="Click me" />
      <ExpCheckbox label="Check me" />
    </div>
  );
}`
    }
  ];

  const designTokens = [
    {
      category: "Colors",
      description: "Primary, secondary, status, and base color palettes",
      usage: "Use ds-primary, ds-secondary, ds-status, ds-base classes",
      example: "bg-ds-primary-500 text-ds-base-white"
    },
    {
      category: "Typography",
      description: "Font families, sizes, weights, and spacing",
      usage: "Apply typography tokens through Tailwind classes",
      example: "text-ds-lg font-ds-semibold leading-ds-normal"
    },
    {
      category: "Spacing",
      description: "Consistent spacing scale and border radius",
      usage: "Use spacing tokens for margins, padding, gaps",
      example: "p-ds-lg m-ds-md gap-ds-sm rounded-ds-md"
    }
  ];

  const components = [
    { name: "Button", path: "/buttons", icon: Target, variants: "Solid, Outline, Ghost" },
    { name: "Checkbox", path: "/checkboxes", icon: Target, variants: "Standard, Radio, Tile" },
    { name: "Tags", path: "/tags", icon: Tag, variants: "Default, Status, Interactive" },
    { name: "Navigation", path: "/navigation", icon: Layers, variants: "Desktop, Mobile, Breadcrumb" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4">
                <Link to="/" className="text-[#1B489B] hover:text-[#2563eb] transition-colors">
                  ← Back to Overview
                </Link>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mt-4">Documentation</h1>
              <p className="text-lg text-gray-600 mt-2">Complete guide to using the Design System</p>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <FileText className="w-4 h-4 mr-2" />
              v2.1 Docs
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Tabs defaultValue="getting-started" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="tokens">Design Tokens</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          {/* Getting Started Tab */}
          <TabsContent value="getting-started" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Quick Start Guide
                </CardTitle>
                <CardDescription>
                  Get up and running with the Design System in minutes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {installationSteps.map((step, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">Step {index + 1}: {step.title}</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(step.code)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Requirements</CardTitle>
                <CardDescription>
                  Ensure your project has these dependencies installed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Badge variant="outline">@radix-ui/react-label</Badge>
                  <Badge variant="outline">class-variance-authority</Badge>
                  <Badge variant="outline">lucide-react</Badge>
                  <Badge variant="outline">tailwindcss</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {components.map((component) => {
                const IconComponent = component.icon;
                return (
                  <Card key={component.name} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5" />
                        {component.name}
                      </CardTitle>
                      <CardDescription>
                        Variants: {component.variants}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link to={component.path}>
                        <Button variant="outline" className="w-full">
                          View Component Examples
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Design Tokens Tab */}
          <TabsContent value="tokens" className="space-y-8">
            <div className="space-y-6">
              {designTokens.map((token, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{token.category}</CardTitle>
                    <CardDescription>{token.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <strong>Usage:</strong> {token.usage}
                      </div>
                      <div>
                        <strong>Example:</strong>
                        <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-sm">
                          {token.example}
                        </code>
                      </div>
                      <Link to={`/${token.category.toLowerCase()}`}>
                        <Button variant="outline" size="sm">
                          View {token.category} →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Common Usage Patterns</CardTitle>
                <CardDescription>
                  Real-world examples of using the design system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="form-example">
                    <AccordionTrigger>Form with Design System Components</AccordionTrigger>
                    <AccordionContent>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                        <code>{`import { Button, ExpCheckbox } from '@/design-system';

function ContactForm() {
  return (
    <form className="space-y-ds-lg p-ds-xl">
      <div>
        <label className="text-ds-base-900 font-ds-medium">Name</label>
        <input className="border rounded-ds-md p-ds-md w-full" />
      </div>
      <ExpCheckbox label="Subscribe to newsletter" />
      <Button label="Submit" variant="solid" />
    </form>
  );
}`}</code>
                      </pre>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="layout-example">
                    <AccordionTrigger>Layout with Grid System</AccordionTrigger>
                    <AccordionContent>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                        <code>{`function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-ds-lg p-ds-xl">
      {products.map(product => (
        <div key={product.id} className="bg-ds-base-white rounded-ds-lg p-ds-lg">
          <h3 className="text-ds-xl font-ds-semibold text-ds-base-900">
            {product.name}
          </h3>
          <p className="text-ds-base-600 mt-ds-sm">{product.description}</p>
        </div>
      ))}
    </div>
  );
}`}</code>
                      </pre>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quick Links */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
            <CardDescription>Jump to specific sections</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/colors">
                <Button variant="outline" className="w-full justify-start">
                  <Palette className="w-4 h-4 mr-2" />
                  Colors
                </Button>
              </Link>
              <Link to="/typography">
                <Button variant="outline" className="w-full justify-start">
                  <Type className="w-4 h-4 mr-2" />
                  Typography
                </Button>
              </Link>
              <Link to="/grids">
                <Button variant="outline" className="w-full justify-start">
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Grids
                </Button>
              </Link>
              <Link to="/buttons">
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Buttons
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;
