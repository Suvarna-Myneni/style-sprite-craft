
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesktopLeftNav } from "@/components/navigation/DesktopLeftNav";
import { MobileNav } from "@/components/navigation/MobileNav";
import { ResponsiveHeader } from "@/components/navigation/ResponsiveHeader";
import { TrainingBanner } from "@/components/banner/TrainingBanner";
import { BannersWebGraph } from "@/components/banner/BannersWebGraph";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation as NavigationIcon } from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Navigation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Mobile Header */}
      <ResponsiveHeader />

      {/* Desktop Header */}
      <div className="bg-white shadow-sm border-b hidden lg:block">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <Breadcrumb className="mb-4">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/">Design System</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Navigation</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0c0f24] flex items-center justify-center">
                    <NavigationIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900">Navigation</h1>
                    <p className="text-lg text-gray-600 mt-2">Navigation components and patterns</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Components
                </Badge>
                <div className="flex items-center space-x-2 ml-4">
                  <Link to="/checkboxes">
                    <Button variant="outline" size="sm">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Checkboxes
                    </Button>
                  </Link>
                  <Link to="/colors">
                    <Button variant="outline" size="sm">
                      Colors
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Banner Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Banner Components</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Training Banner */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Training Banner</h4>
              <TrainingBanner />
            </div>
            
            {/* Web Graph Banner */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Web Graph Banner</h4>
              <BannersWebGraph />
            </div>
          </div>

          {/* Banner Tile Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Banner Tiles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Training Banner</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A banner component with background image for training content with a call-to-action button.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Information Banner</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A dark-themed banner for highlighting important information with navigation elements.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Banner Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Best practices for using banner components to highlight important content and actions.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Navigation Components */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Navigation Components</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Desktop Left Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Desktop Left Navigation</CardTitle>
                <CardDescription>
                  A vertical navigation component designed for desktop applications with a dark theme and hover states.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg overflow-hidden">
                  <DesktopLeftNav />
                </div>
              </CardContent>
            </Card>

            {/* Mobile Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Mobile Navigation</CardTitle>
                <CardDescription>
                  A responsive mobile navigation menu with slide-out drawer and touch-friendly interface.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded bg-[#0c0f24] flex items-center justify-center">
                        <span className="text-white text-xs font-bold">eXp</span>
                      </div>
                      <span className="text-sm font-medium">Mobile Demo</span>
                    </div>
                    <MobileNav />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Click the menu icon to see the mobile navigation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Navigation Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dark Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional dark color scheme with the primary background color #0c0f24 and hover states.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interactive States</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clear active and hover states to provide visual feedback for user interactions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamlessly adapts between desktop sidebar and mobile drawer navigation patterns.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
