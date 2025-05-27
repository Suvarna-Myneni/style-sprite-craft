
import React, { useState } from "react";
import { ExpCheckbox } from "@/components/checkbox/ExpCheckbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Checkboxes = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Checkboxes</h1>
              <p className="text-lg text-gray-600 mt-2">Custom checkbox components for form inputs</p>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Component
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Basic States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Basic States</CardTitle>
            <CardDescription>Default checkbox states and interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <ExpCheckbox
                label="Unchecked"
                checked={false}
                onChange={(val) => console.log("Unchecked:", val)}
              />
              <ExpCheckbox
                label="Checked"
                checked={true}
                onChange={(val) => console.log("Checked:", val)}
              />
              <ExpCheckbox
                label="Intermediate"
                checked={false}
                intermediate={true}
                onChange={(val) => console.log("Intermediate:", val)}
              />
              <ExpCheckbox
                label="Disabled"
                checked={false}
                disabled={true}
                onChange={(val) => console.log("Disabled:", val)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Interactive Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive Examples</CardTitle>
            <CardDescription>Checkboxes with state management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <ExpCheckbox
                label="I agree to the terms and conditions"
                checked={checked1}
                onChange={setChecked1}
              />
              <ExpCheckbox
                label="Subscribe to newsletter"
                checked={checked2}
                onChange={setChecked2}
              />
            </div>
          </CardContent>
        </Card>

        {/* Dark Theme */}
        <Card className="mb-8 bg-gray-900">
          <CardHeader>
            <CardTitle className="text-white">Dark Theme</CardTitle>
            <CardDescription className="text-gray-300">Checkbox variants for dark backgrounds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <ExpCheckbox
                label="Dark unchecked"
                checked={false}
                dark={true}
                onChange={(val) => console.log("Dark unchecked:", val)}
              />
              <ExpCheckbox
                label="Dark checked"
                checked={true}
                dark={true}
                onChange={(val) => console.log("Dark checked:", val)}
              />
              <ExpCheckbox
                label="Dark intermediate"
                checked={false}
                intermediate={true}
                dark={true}
                onChange={(val) => console.log("Dark intermediate:", val)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>Real-world checkbox use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Form Validation</h4>
                <div className="flex flex-col gap-2">
                  <ExpCheckbox
                    label="I have read and agree to the Privacy Policy"
                    checked={false}
                    onChange={(val) => console.log("Privacy policy:", val)}
                  />
                  <ExpCheckbox
                    label="Send me marketing emails"
                    checked={false}
                    onChange={(val) => console.log("Marketing emails:", val)}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Settings</h4>
                <div className="flex flex-col gap-2">
                  <ExpCheckbox
                    label="Enable notifications"
                    checked={true}
                    onChange={(val) => console.log("Notifications:", val)}
                  />
                  <ExpCheckbox
                    label="Auto-save documents"
                    checked={true}
                    onChange={(val) => console.log("Auto-save:", val)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkboxes;
