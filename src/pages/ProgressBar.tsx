
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ExpStepper } from "@/components/stepper/ExpStepper";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const ProgressBar = () => {
  const [completedCount, setCompletedCount] = useState(2);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVertical, setIsVertical] = useState(true);

  const sampleTitles = [
    "Personal Information",
    "Account Setup", 
    "Verification",
    "Payment Details",
    "Confirmation"
  ];

  const sampleSubtitles = [
    "Enter your basic details",
    "Create your account credentials",
    "Verify your email address",
    "Add payment information",
    "Review and confirm"
  ];

  const handleNext = () => {
    if (completedCount < sampleTitles.length) {
      setCompletedCount(completedCount + 1);
    }
  };

  const handlePrevious = () => {
    if (completedCount > 0) {
      setCompletedCount(completedCount - 1);
    }
  };

  const handleReset = () => {
    setCompletedCount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Progress Bar / Stepper</h1>
                <p className="text-sm text-gray-600">Step-by-step progress indicators</p>
              </div>
            </div>
            <Badge variant="secondary">Component</Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ExpStepper Component</CardTitle>
            <CardDescription>
              A flexible stepper component that can display progress in both vertical and horizontal layouts.
              Perfect for multi-step forms, wizards, and process indicators.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Interactive Demo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Interactive Demo</CardTitle>
            <CardDescription>
              Try different configurations and see how the stepper component responds.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Controls */}
            <div className="flex flex-wrap gap-4 items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Switch
                  id="vertical-mode"
                  checked={isVertical}
                  onCheckedChange={setIsVertical}
                />
                <Label htmlFor="vertical-mode">Vertical Layout</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handlePrevious}
                  disabled={completedCount === 0}
                >
                  Previous
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleNext}
                  disabled={completedCount === sampleTitles.length}
                >
                  Next
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleReset}
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Label>Progress:</Label>
                <Badge variant="outline">
                  {completedCount} / {sampleTitles.length}
                </Badge>
              </div>
            </div>

            {/* Demo Container */}
            <div 
              className={`p-8 rounded-lg border-2 border-dashed ${
                isDarkMode ? 'bg-gray-900 border-gray-600' : 'bg-white border-gray-300'
              }`}
            >
              <ExpStepper
                isVertical={isVertical}
                titles={sampleTitles}
                subtitles={sampleSubtitles}
                completedCount={completedCount}
                isDarkMode={isDarkMode}
              />
            </div>
          </CardContent>
        </Card>

        {/* Variants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Vertical Stepper</CardTitle>
              <CardDescription>
                Perfect for detailed step-by-step processes with descriptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExpStepper
                isVertical={true}
                titles={["Step 1", "Step 2", "Step 3"]}
                subtitles={["Complete first task", "Complete second task", "Final step"]}
                completedCount={1}
                isDarkMode={false}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horizontal Stepper</CardTitle>
              <CardDescription>
                Compact horizontal layout ideal for navigation and progress tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ExpStepper
                isVertical={false}
                titles={["Info", "Setup", "Verify", "Done"]}
                subtitles={[null, null, null, null]}
                completedCount={2}
                isDarkMode={false}
              />
            </CardContent>
          </Card>
        </div>

        {/* Dark Mode Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dark Mode Variants</CardTitle>
            <CardDescription>
              Stepper components with dark mode styling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-white text-sm font-medium mb-4">Dark Vertical Stepper</h4>
              <ExpStepper
                isVertical={true}
                titles={["Planning", "Development", "Testing", "Deployment"]}
                subtitles={["Define requirements", "Code implementation", "Quality assurance", "Go live"]}
                completedCount={2}
                isDarkMode={true}
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-white text-sm font-medium mb-4">Dark Horizontal Stepper</h4>
              <ExpStepper
                isVertical={false}
                titles={["Start", "Process", "Review", "Complete"]}
                subtitles={[null, null, null, null]}
                completedCount={3}
                isDarkMode={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle>Usage Examples</CardTitle>
            <CardDescription>
              How to implement the ExpStepper component in your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-2">Basic Usage</h4>
                <div className="bg-gray-100 p-4 rounded text-sm font-mono">
{`<ExpStepper
  isVertical={true}
  titles={["Step 1", "Step 2", "Step 3"]}
  subtitles={["Description 1", "Description 2", null]}
  completedCount={1}
  isDarkMode={false}
/>`}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-2">Horizontal Layout</h4>
                <div className="bg-gray-100 p-4 rounded text-sm font-mono">
{`<ExpStepper
  isVertical={false}
  titles={["Info", "Setup", "Done"]}
  subtitles={[null, null, null]}
  completedCount={2}
  isDarkMode={false}
/>`}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressBar;
