
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LovableTag } from "@/components/tags/LovableTag";

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

export const TagVariants = () => {
  return (
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
  );
};
