
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LovableTag } from "@/components/tags/LovableTag";

export const LovableTagShowcase = () => {
  return (
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
  );
};
