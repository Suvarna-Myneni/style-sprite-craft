
import React from "react";
import { Button } from "@/components/button/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Buttons = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Buttons</h1>
              <p className="text-lg text-gray-600 mt-2">Interactive elements for user actions</p>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Component
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Color Variants */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Different color variants for various contexts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Primary</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <Button variant="primary" styleType="solid" onClick={() => console.log("Primary solid clicked!")} />
                  <Button variant="primary" styleType="outline" onClick={() => console.log("Primary outline clicked!")} />
                  <Button variant="primary" styleType="ghost" onClick={() => console.log("Primary ghost clicked!")} />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Secondary</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <Button variant="secondary" styleType="solid" onClick={() => console.log("Secondary solid clicked!")} />
                  <Button variant="secondary" styleType="outline" onClick={() => console.log("Secondary outline clicked!")} />
                  <Button variant="secondary" styleType="ghost" onClick={() => console.log("Secondary ghost clicked!")} />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Success</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <Button variant="success" styleType="solid" onClick={() => console.log("Success solid clicked!")} />
                  <Button variant="success" styleType="outline" onClick={() => console.log("Success outline clicked!")} />
                  <Button variant="success" styleType="ghost" onClick={() => console.log("Success ghost clicked!")} />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Warning</h4>
                <div className="flex items-center gap-4 flex-wrap">
                  <Button variant="warning" styleType="solid" onClick={() => console.log("Warning solid clicked!")} />
                  <Button variant="warning" styleType="outline" onClick={() => console.log("Warning outline clicked!")} />
                  <Button variant="warning" styleType="ghost" onClick={() => console.log("Warning ghost clicked!")} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Sizes</CardTitle>
            <CardDescription>Available size variants for different use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 flex-wrap">
              <Button
                label="Small Button"
                variant="primary"
                size="small"
                styleType="solid"
                onClick={() => console.log("Small clicked!")}
              />
              <Button
                label="Base Button"
                variant="primary"
                size="base"
                styleType="solid"
                onClick={() => console.log("Base clicked!")}
              />
              <Button
                label="Large Button"
                variant="primary"
                size="large"
                styleType="solid"
                onClick={() => console.log("Large clicked!")}
              />
            </div>
          </CardContent>
        </Card>

        {/* With Icons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Buttons with Icons</CardTitle>
            <CardDescription>Buttons with optional left and right icons</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 flex-wrap">
              <Button
                label="Add Item"
                variant="primary"
                size="base"
                styleType="solid"
                showLeftIcon={true}
                onClick={() => console.log("Add clicked!")}
              />
              <Button
                label="Continue"
                variant="primary"
                size="base"
                styleType="solid"
                showRightIcon={true}
                onClick={() => console.log("Continue clicked!")}
              />
              <Button
                label="Add & Continue"
                variant="primary"
                size="base"
                styleType="solid"
                showLeftIcon={true}
                showRightIcon={true}
                onClick={() => console.log("Add & Continue clicked!")}
              />
            </div>
          </CardContent>
        </Card>

        {/* States */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button States</CardTitle>
            <CardDescription>Different interaction states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 flex-wrap">
              <Button
                label="Default"
                variant="primary"
                size="base"
                styleType="solid"
                state="default"
                onClick={() => console.log("Default clicked!")}
              />
              <Button
                label="Disabled"
                variant="primary"
                size="base"
                styleType="solid"
                state="disabled"
              />
            </div>
          </CardContent>
        </Card>

        {/* Complete Matrix Example */}
        <Card>
          <CardHeader>
            <CardTitle>Complete Button Matrix</CardTitle>
            <CardDescription>All variants, sizes, and styles combinations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {(['primary', 'secondary', 'success', 'warning'] as const).map((variant) => (
                <div key={variant}>
                  <h4 className="font-medium mb-4 capitalize">{variant}</h4>
                  <div className="space-y-4">
                    {(['small', 'base', 'large'] as const).map((size) => (
                      <div key={size} className="flex items-center gap-4 flex-wrap">
                        <Button
                          variant={variant}
                          size={size}
                          styleType="solid"
                          onClick={() => console.log(`${variant} ${size} solid clicked!`)}
                        />
                        <Button
                          variant={variant}
                          size={size}
                          styleType="outline"
                          onClick={() => console.log(`${variant} ${size} outline clicked!`)}
                        />
                        <Button
                          variant={variant}
                          size={size}
                          styleType="ghost"
                          onClick={() => console.log(`${variant} ${size} ghost clicked!`)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Buttons;
