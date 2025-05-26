
import { Link } from "react-router-dom";
import { ArrowLeft, Tag, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { TagsComponent } from "@/components/tags/TagsComponent";
import "@/components/tags/tags-component.css";

const Tags = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const tagVariants = [
    {
      id: 1,
      name: "Default Tag",
      purpose: "To display neutral or general information",
      color: "Light neutral (e.g., light gray, blue)",
      usage: "Use for standard information, such as categorization labels or general content descriptors",
      example: "General",
      bgColor: "bg-slate-100",
      textColor: "text-slate-700",
      code: `<Badge variant="secondary" className="bg-slate-100 text-slate-700">General</Badge>`
    },
    {
      id: 2,
      name: "Update Tag",
      purpose: "To indicate an action or update that requires user attention",
      color: "Light blue or lavender",
      usage: "Use when informing users of updates, changes, or actions that need attention",
      example: "Updated",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      code: `<Badge variant="secondary" className="bg-blue-100 text-blue-700">Updated</Badge>`
    },
    {
      id: 3,
      name: "Warning Tag",
      purpose: "To highlight important warnings, deadlines, or situations requiring immediate action",
      color: "Light yellow",
      usage: "Use for critical notifications such as deadlines, potential issues, or important tasks",
      example: "Deadline",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-700",
      code: `<Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Deadline</Badge>`
    },
    {
      id: 4,
      name: "Success Tag",
      purpose: "To indicate the completion of tasks, approvals, or successful actions",
      color: "Light green",
      usage: "Use to show that a task has been completed successfully or to confirm approvals",
      example: "Completed",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      code: `<Badge variant="secondary" className="bg-green-100 text-green-700">Completed</Badge>`
    },
    {
      id: 5,
      name: "Error Tag",
      purpose: "To represent errors, failures, or dangerous irreversible actions",
      color: "Brown",
      usage: "Use when highlighting critical errors, failures, or actions with potential irreversible effects",
      example: "Error",
      bgColor: "bg-amber-100",
      textColor: "text-amber-800",
      code: `<Badge variant="secondary" className="bg-amber-100 text-amber-800">Error</Badge>`
    }
  ];

  const principles = [
    {
      title: "Clarity",
      description: "Tags should provide a clear and immediate understanding of the status or action they represent."
    },
    {
      title: "Consistency",
      description: "All tag variants must maintain consistent use of colors, typography, and design language across the platform."
    },
    {
      title: "Accessibility",
      description: "Tags should adhere to accessibility standards, ensuring legibility and interactiveness for all users."
    },
    {
      title: "Minimalism",
      description: "Tags should be visually simple, avoiding excess decoration, icons, or text that could clutter the UI."
    },
    {
      title: "Actionable Feedback",
      description: "Interactive tags should provide clear visual feedback, such as hover and focus states, to indicate that they can be acted upon."
    }
  ];

  const sizes = [
    {
      name: "Tiny",
      className: "text-xs px-2 py-0.5 rounded",
      example: "Label",
      description: "Minimum width: 200px or 32px flex padding"
    },
    {
      name: "Base",
      className: "text-sm px-2.5 py-0.5 rounded",
      example: "Label",
      description: "Standard size for most use cases"
    },
    {
      name: "Large",
      className: "text-base px-3 py-1 rounded",
      example: "Label",
      description: "For emphasis or when more prominence is needed"
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
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Tags</h1>
                <p className="text-lg text-gray-600 mt-2">Categorize and label content with contextual information</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Tag className="h-8 w-8 text-[#1B489B]" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[#1B489B]">Info</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Tags are used to categorize, label, or provide contextual information about specific content or user actions. 
                They help in organizing content, notifying users, and drawing attention to important actions or statuses.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Design System Tags Component Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design System Tags Component</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Interactive Tags with Icons</CardTitle>
              <CardDescription>
                Advanced tag component with customizable icons, sizes, modes, and statuses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Size Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Sizes</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <TagsComponent size="tiny" status="default" mode="light">Tiny</TagsComponent>
                    <TagsComponent size="base" status="default" mode="light">Base</TagsComponent>
                    <TagsComponent size="large" status="default" mode="light">Large</TagsComponent>
                  </div>
                </div>

                {/* Status Examples - Light Mode */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Light Mode Variants</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <TagsComponent status="default" mode="light">Default</TagsComponent>
                    <TagsComponent status="primary" mode="light">Primary</TagsComponent>
                    <TagsComponent status="warning" mode="light">Warning</TagsComponent>
                    <TagsComponent status="success" mode="light">Success</TagsComponent>
                  </div>
                </div>

                {/* Status Examples - Dark Mode */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Dark Mode Variants</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <TagsComponent status="default" mode="dark">Default</TagsComponent>
                    <TagsComponent status="primary" mode="dark">Primary</TagsComponent>
                    <TagsComponent status="warning" mode="dark">Warning</TagsComponent>
                    <TagsComponent status="success" mode="dark">Success</TagsComponent>
                  </div>
                </div>

                {/* Configuration Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Configuration Options</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <TagsComponent showLeftIcon={false} status="success" mode="light">No Left Icon</TagsComponent>
                    <TagsComponent showRightIcon={false} status="warning" mode="light">No Right Icon</TagsComponent>
                    <TagsComponent showLeftIcon={false} showRightIcon={false} status="primary" mode="light">Text Only</TagsComponent>
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Usage Example</h4>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <code className="text-sm text-gray-800">
                      {`<TagsComponent
  className="status-success-size-6"
  mode="dark"
  size="large"
  status="success"
>
  Custom Label
</TagsComponent>`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <Card key={principle.title}>
                <CardHeader>
                  <CardTitle className="text-lg text-[#1B489B]">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tag Sizes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tag Sizes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sizes.map((size) => (
              <Card key={size.name} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{size.name}</CardTitle>
                  <div className="flex justify-center mt-4">
                    <Badge variant="secondary" className={`${size.className} bg-slate-100 text-slate-700`}>
                      {size.example}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {size.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tag Variants */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tag Variants</h2>
          <div className="space-y-8">
            {tagVariants.map((variant) => (
              <Card key={variant.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-[#1B489B]">{variant.name}</CardTitle>
                      <CardDescription className="mt-2">
                        <strong>Purpose:</strong> {variant.purpose}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant="secondary" className={`${variant.bgColor} ${variant.textColor}`}>
                        {variant.example}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(variant.code, variant.name)}
                        className="flex items-center space-x-2"
                      >
                        {copiedCode === variant.name ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        <span>{copiedCode === variant.name ? "Copied!" : "Copy Code"}</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Color</h4>
                      <p className="text-sm text-gray-600 mb-4">{variant.color}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">When to Use</h4>
                      <p className="text-sm text-gray-600">{variant.usage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Code Example</h4>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <code className="text-sm text-gray-800 break-all">
                          {variant.code}
                        </code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Usage Examples</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Tag Collection</CardTitle>
              <CardDescription>
                Example of how different tag variants work together in a real interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-slate-100 text-slate-700">Category</Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">Recently Updated</Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700">Approved</Badge>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">Pending Review</Badge>
                <Badge variant="secondary" className="bg-amber-100 text-amber-800">Action Required</Badge>
                <Badge variant="secondary" className="bg-slate-100 text-slate-700">Documentation</Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-700">Published</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0C0F24] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Tag className="h-6 w-6 text-[#1B489B]" />
              <span className="text-sm">Tags Component Guide</span>
            </div>
            <div className="text-sm text-gray-400">
              Consistent labeling and categorization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tags;
