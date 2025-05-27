
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

        {/* Style Types */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button Style Types</CardTitle>
            <CardDescription>Different visual treatments for various contexts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 flex-wrap">
              <Button
                label="Solid"
                variant="primary"
                size="base"
                styleType="solid"
                onClick={() => console.log("Solid clicked!")}
              />
              <Button
                label="Outline"
                variant="primary"
                size="base"
                styleType="outline"
                onClick={() => console.log("Outline clicked!")}
              />
              <Button
                label="Ghost"
                variant="primary"
                size="base"
                styleType="ghost"
                onClick={() => console.log("Ghost clicked!")}
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

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>Common button combinations in real scenarios</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Form Actions</h4>
                <div className="flex items-center gap-3">
                  <Button
                    label="Submit"
                    variant="primary"
                    size="base"
                    styleType="solid"
                    onClick={() => console.log("Submit clicked!")}
                  />
                  <Button
                    label="Cancel"
                    variant="primary"
                    size="base"
                    styleType="outline"
                    onClick={() => console.log("Cancel clicked!")}
                  />
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Call to Action</h4>
                <Button
                  label="Get Started"
                  variant="primary"
                  size="large"
                  styleType="solid"
                  onClick={() => console.log("Get Started clicked!")}
                />
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Secondary Actions</h4>
                <div className="flex items-center gap-3">
                  <Button
                    label="Learn More"
                    variant="primary"
                    size="base"
                    styleType="ghost"
                    onClick={() => console.log("Learn More clicked!")}
                  />
                  <Button
                    label="View Details"
                    variant="primary"
                    size="small"
                    styleType="outline"
                    onClick={() => console.log("View Details clicked!")}
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

export default Buttons;
