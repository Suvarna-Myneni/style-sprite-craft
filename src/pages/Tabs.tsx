import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TabsPage = () => {
  const [activeBasicTab, setActiveBasicTab] = useState("tab1");
  const [activeRoundedTab, setActiveRoundedTab] = useState("tab1");
  const [activeFilledTab, setActiveFilledTab] = useState("tab1");
  const [activeVerticalTab, setActiveVerticalTab] = useState("tab1");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Tabs</h1>
                <p className="text-lg text-gray-600 mt-2">Navigation components for switching between content views</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Interactive
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-[#1B489B]">Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Tabs are a navigation component that helps users switch between different views or sections of content within the same context. 
                They allow for a clean and organized presentation of content by breaking it down into manageable pieces, while maintaining quick access to related views.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clarity",
                description: "Tabs should clearly indicate which section or view the user is currently in by making the active tab visually distinct."
              },
              {
                title: "Feedback", 
                description: "Active and inactive states should provide clear visual feedback, allowing users to understand which tab is selected."
              },
              {
                title: "Consistency",
                description: "Ensure that the style and placement of tabs remain consistent throughout the interface."
              },
              {
                title: "Hierarchy",
                description: "Tabs should be used to present top-level sections, helping users focus on primary categories."
              },
              {
                title: "Responsiveness",
                description: "Tabs should scale appropriately across different screen sizes while remaining functional."
              }
            ].map((principle) => (
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

        {/* Anatomy */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Anatomy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Tab Container",
                description: "The outer box that holds all the individual tabs together, typically horizontally aligned. The container provides structure and allows for consistent spacing between tabs."
              },
              {
                title: "Active Tab", 
                description: "The tab currently selected by the user, visually distinct from other tabs. It highlights which view the user is in."
              },
              {
                title: "Inactive Tabs",
                description: "Tabs that are not selected, but are still available for interaction. These tabs should be clearly visible but less prominent compared to the active tab."
              },
              {
                title: "Underline (Optional)",
                description: "An underline below the active tab can act as an additional visual cue to indicate selection."
              },
              {
                title: "Hover/Focus States",
                description: "Interactive feedback for users when hovering over or focusing on a tab to indicate it's clickable or navigable."
              }
            ].map((anatomy) => (
              <Card key={anatomy.title}>
                <CardHeader>
                  <CardTitle className="text-lg text-[#1B489B]">{anatomy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {anatomy.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Basic Tabs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Basic Tabs</h2>
          <Card>
            <CardHeader>
              <CardTitle>Default Tab Style</CardTitle>
              <CardDescription>Standard tabs with underline indicator for active state</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="tab1" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="tab1">Tab Active</TabsTrigger>
                  <TabsTrigger value="tab2">Tab Inactive</TabsTrigger>
                  <TabsTrigger value="tab3">Tab Inactive</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Active Tab Content</h3>
                    <p className="text-gray-600">This is the content for the active tab. It demonstrates how tab content changes when switching between tabs.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab2" className="mt-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Second Tab Content</h3>
                    <p className="text-gray-600">Content for the second tab goes here.</p>
                  </div>
                </TabsContent>
                <TabsContent value="tab3" className="mt-6">
                  <div className="p-6 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Third Tab Content</h3>
                    <p className="text-gray-600">Content for the third tab goes here.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Rounded Tabs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Rounded Tabs</h2>
          <Card>
            <CardHeader>
              <CardTitle>Pill-style Tabs</CardTitle>
              <CardDescription>Tabs with rounded corners for a softer appearance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-full">
                {["Tab Active", "Tab Inactive", "Tab Inactive"].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveRoundedTab(`tab${index + 1}`)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                      activeRoundedTab === `tab${index + 1}`
                        ? "bg-white text-[#1B489B] shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filled Tabs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Filled Tabs</h2>
          <Card>
            <CardHeader>
              <CardTitle>Dark Theme Tabs</CardTitle>
              <CardDescription>Tabs with filled backgrounds for high contrast interfaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-800 p-1 rounded-lg">
                <div className="flex space-x-1">
                  {["Tab Active", "Tab Inactive", "Tab Inactive"].map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFilledTab(`tab${index + 1}`)}
                      className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                        activeFilledTab === `tab${index + 1}`
                          ? "bg-white text-gray-900"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Vertical Tabs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vertical Tabs</h2>
          <Card>
            <CardHeader>
              <CardTitle>Sidebar Navigation</CardTitle>
              <CardDescription>Vertical tab layout for sidebar or narrow layouts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-purple-500 p-6 rounded-lg">
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => setActiveVerticalTab("tab1")}
                    className={`px-4 py-3 text-left rounded-md text-sm font-medium transition-all ${
                      activeVerticalTab === "tab1"
                        ? "bg-[#1B489B] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Tab Active
                  </button>
                  <button
                    onClick={() => setActiveVerticalTab("tab2")}
                    className={`px-4 py-3 text-left rounded-md text-sm font-medium transition-all ${
                      activeVerticalTab === "tab2"
                        ? "bg-[#1B489B] text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    Tab Inactive
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tab States */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tab States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active State</CardTitle>
                <CardDescription>Visual characteristics of the selected tab</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <span className="px-4 py-2 bg-[#1B489B] text-white rounded border-b-2 border-[#1B489B] font-medium">
                      Tab Active
                    </span>
                    <span className="px-4 py-2 text-gray-500">
                      Tab Inactive
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Active tabs use bold text, filled background, and an underline indicator
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hover State</CardTitle>
                <CardDescription>Interactive feedback on tab hover</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <span className="px-4 py-2 text-gray-700 bg-gray-100 rounded transition-colors">
                      Tab Hover
                    </span>
                    <span className="px-4 py-2 text-gray-500">
                      Tab Default
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Hover state provides subtle color change to indicate interactivity
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Usage Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-sm">Use tabs to organize related content</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-sm">Keep tab labels concise and descriptive</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-sm">Make active state clearly distinguishable</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <span className="text-sm">Provide consistent spacing between tabs</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">Don't</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-sm">Use too many tabs in one container</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-sm">Make tabs too small to touch on mobile</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-sm">Use tabs for unrelated content</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-sm">Mix different tab styles in the same interface</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Responsive Behavior */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Responsive Behavior</h2>
          <Card>
            <CardHeader>
              <CardTitle>Mobile Adaptations</CardTitle>
              <CardDescription>How tabs adapt to smaller screen sizes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Desktop (≥768px)</h4>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex space-x-4">
                      <span className="px-6 py-2 bg-blue-600 text-white text-sm rounded">Personal Notifications (2)</span>
                      <span className="px-6 py-2 text-gray-600 text-sm">Group Notifications (0)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Mobile (&lt;768px)</h4>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex flex-col space-y-2">
                      <span className="px-4 py-3 bg-blue-600 text-white text-sm rounded text-center">Personal (2)</span>
                      <span className="px-4 py-3 text-gray-600 text-sm text-center">Group (0)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-[#1B489B] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-sm">Tabs Component Documentation</span>
            </div>
            <div className="text-sm text-gray-400">
              Interactive navigation for content organization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
