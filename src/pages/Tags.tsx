
import { Link } from "react-router-dom";
import { ArrowLeft, Tag, Copy, Check, User, Bell, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { TagsComponent } from "@/components/tags/TagsComponent";
import { LovableTag } from "@/components/tags/LovableTag";
import "@/components/tags/tags-component.css";

const Tags = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(type);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const principles = [
    {
      title: "Clarity",
      description: "Tags should provide immediate understanding of the status or purpose they represent."
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

  const tagVariants = [
    {
      name: "Default Tag",
      description: "Neutral information and general categorization",
      usage: "Use for standard information, such as categorization labels or general content descriptors",
      color: "Light neutral (gray/blue)",
      status: "default" as const
    },
    {
      name: "Primary Tag", 
      description: "Brand-related or primary actions",
      usage: "Use for brand-related content or primary categorization",
      color: "Brand colors",
      status: "primary" as const
    },
    {
      name: "Warning Tag",
      description: "Important warnings, deadlines, or urgent situations",
      usage: "Use for critical notifications such as deadlines, potential issues, or important tasks",
      color: "Yellow/Orange",
      status: "warning" as const
    },
    {
      name: "Success Tag",
      description: "Completion of tasks, approvals, or successful actions",
      usage: "Use to show that a task has been completed successfully or to confirm approvals",
      color: "Green",
      status: "success" as const
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

        {/* New LovableTag Component Examples */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">LovableTag Component</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Transaction Calculator Design System Tags</CardTitle>
              <CardDescription>
                Advanced tag component following the Transaction Calculator design specifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Size Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Sizes</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <LovableTag label="Tiny" size="tiny" status="default" mode="light" />
                    <LovableTag label="Base" size="base" status="default" mode="light" />
                    <LovableTag label="Large" size="large" status="default" mode="light" />
                  </div>
                </div>

                {/* Status Examples - Light Mode */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Light Mode Variants</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <LovableTag label="Default" status="default" mode="light" />
                    <LovableTag label="Primary" status="primary" mode="light" />
                    <LovableTag label="Warning" status="warning" mode="light" />
                    <LovableTag label="Success" status="success" mode="light" />
                  </div>
                </div>

                {/* Status Examples - Dark Mode */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Dark Mode Variants</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <LovableTag label="Default" status="default" mode="dark" />
                    <LovableTag label="Primary" status="primary" mode="dark" />
                    <LovableTag label="Warning" status="warning" mode="dark" />
                    <LovableTag label="Success" status="success" mode="dark" />
                  </div>
                </div>

                {/* Interactive Examples */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Interactive Tags with Close Button</h4>
                  <div className="flex flex-wrap gap-4 items-center">
                    <LovableTag 
                      label="Removable" 
                      status="primary" 
                      mode="light" 
                      onClose={() => console.log("Tag removed")} 
                    />
                    <LovableTag 
                      label="Dismissible" 
                      status="warning" 
                      mode="light" 
                      size="large"
                      onClose={() => console.log("Warning dismissed")} 
                    />
                    <LovableTag 
                      label="Closeable" 
                      status="success" 
                      mode="dark" 
                      onClose={() => console.log("Success acknowledged")} 
                    />
                  </div>
                </div>

                {/* Code Example */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Usage Examples</h4>
                  <div className="bg-gray-100 rounded-lg p-4 space-y-2">
                    <code className="text-sm text-gray-800 block">
                      {`<LovableTag label="Label" />`}
                    </code>
                    <code className="text-sm text-gray-800 block">
                      {`<LovableTag label="Primary" status="primary" size="large" mode="dark" />`}
                    </code>
                    <code className="text-sm text-gray-800 block">
                      {`<LovableTag label="Warning" status="warning" size="tiny" onClose={() => alert("Removed!")} />`}
                    </code>
                    <code className="text-sm text-gray-800 block">
                      {`<LovableTag label="Success" status="success" mode="dark" />`}
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

        {/* Tag Variants */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tag Variants</h2>
          <div className="space-y-8">
            {tagVariants.map((variant) => (
              <Card key={variant.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-[#1B489B]">{variant.name}</CardTitle>
                      <CardDescription className="mt-2">
                        <strong>Purpose:</strong> {variant.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-4">
                      <LovableTag 
                        label="Example" 
                        status={variant.status} 
                        mode="light" 
                      />
                      <LovableTag 
                        label="Dark Mode" 
                        status={variant.status} 
                        mode="dark" 
                      />
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
                      <h4 className="font-semibold text-gray-900 mb-2">Size Variations</h4>
                      <div className="flex flex-wrap gap-2">
                        <LovableTag label="Tiny" status={variant.status} size="tiny" mode="light" />
                        <LovableTag label="Base" status={variant.status} size="base" mode="light" />
                        <LovableTag label="Large" status={variant.status} size="large" mode="light" />
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
                <LovableTag label="Category" status="default" mode="light" />
                <LovableTag label="Recently Updated" status="primary" mode="light" />
                <LovableTag label="Approved" status="success" mode="light" />
                <LovableTag label="Pending Review" status="warning" mode="light" />
                <LovableTag label="Action Required" status="warning" mode="light" size="large" />
                <LovableTag label="Documentation" status="default" mode="light" />
                <LovableTag label="Published" status="success" mode="light" />
                <LovableTag label="Draft" status="default" mode="light" size="tiny" />
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
              <span className="text-sm">Transaction Calculator Tags Component Guide</span>
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
